// server/server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: process.env.APP_BASE_URL || "http://localhost:5173",
    credentials: true,
  })
);

const PORT = Number(process.env.PORT || 5050);

function buildReference() {
  return `CF${Date.now()}${Math.floor(Math.random() * 10000)}`;
}

app.get("/api/health", (req, res) => {
  res.json({ ok: true });
});

app.post("/api/paystack/initialize", async (req, res) => {
  try {
    const secret = process.env.PAYSTACK_SECRET_KEY;
    if (!secret) {
      return res.status(500).json({
        ok: false,
        message: "Missing PAYSTACK_SECRET_KEY in server/.env",
      });
    }

    const { email, amountKsh, items } = req.body || {};

    if (!email || !amountKsh) {
      return res.status(400).json({
        ok: false,
        message: "email and amountKsh are required",
      });
    }

    const amount = Math.round(Number(amountKsh) * 100);
    if (!Number.isFinite(amount) || amount <= 0) {
      return res.status(400).json({
        ok: false,
        message: "amountKsh must be a number greater than 0",
      });
    }

    const reference = buildReference();

    // Keep metadata small + clean so it shows up well in dashboard
    const safeItems = Array.isArray(items)
      ? items.map((it) => ({
          id: String(it.id || ""),
          name: String(it.name || ""),
          qty: Number(it.qty || 1),
          priceKsh: Number(it.priceKsh || 0),
        }))
      : [];

    const itemCount = safeItems.reduce((sum, it) => sum + Number(it.qty || 0), 0);

    const metadata = {
      custom_fields: [
        { display_name: "Order Type", variable_name: "order_type", value: "Shop" },
        { display_name: "Items Count", variable_name: "items_count", value: String(itemCount) },
      ],
      items: safeItems,
    };

    const payload = {
      email,
      amount: String(amount),
      currency: "KES",
      reference,
      metadata,
    };

    const resp = await fetch("https://api.paystack.co/transaction/initialize", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${secret}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await resp.json();

    if (!resp.ok || data?.status !== true) {
      return res.status(400).json({
        ok: false,
        message: data?.message || "Paystack initialize failed",
        raw: data,
      });
    }

    return res.json({
      ok: true,
      authorization_url: data.data.authorization_url,
      access_code: data.data.access_code,
      reference: data.data.reference,
    });
  } catch (err) {
    return res.status(500).json({
      ok: false,
      message: err?.message || "Server error",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Paystack server running on http://localhost:${PORT}`);
});
