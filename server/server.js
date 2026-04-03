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

/**
 * Initialize Paystack transaction
 * We attach cart items inside metadata so you can see them in Paystack Dashboard -> Transactions -> (open transaction) -> Metadata / Custom fields
 */
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

    const safeItems = Array.isArray(items)
      ? items
          .filter(Boolean)
          .map((it) => ({
            id: String(it.id || ""),
            name: String(it.name || ""),
            qty: Math.max(1, Number(it.qty || 1)),
            priceKsh: Number(it.priceKsh || 0),
          }))
          .filter((it) => it.id && it.name)
      : [];

    const itemCount = safeItems.reduce((sum, it) => sum + Number(it.qty || 0), 0);

    // Paystack shows custom_fields nicely in the dashboard
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

/**
 * Verify transaction (optional but useful)
 * Returns metadata.items so your app can know exactly what was purchased.
 */
app.get("/api/paystack/verify/:reference", async (req, res) => {
  try {
    const secret = process.env.PAYSTACK_SECRET_KEY;
    if (!secret) {
      return res.status(500).json({
        ok: false,
        message: "Missing PAYSTACK_SECRET_KEY in server/.env",
      });
    }

    const { reference } = req.params;
    if (!reference) {
      return res.status(400).json({ ok: false, message: "Missing reference" });
    }

    const resp = await fetch(
      `https://api.paystack.co/transaction/verify/${encodeURIComponent(reference)}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${secret}`,
          Accept: "application/json",
        },
      }
    );

    const data = await resp.json();

    if (!resp.ok || data?.status !== true) {
      return res.status(400).json({
        ok: false,
        message: data?.message || "Paystack verify failed",
        raw: data,
      });
    }

    const tx = data.data;

    return res.json({
      ok: true,
      reference: tx.reference,
      status: tx.status,
      amountKsh: Number(tx.amount || 0) / 100,
      paidAt: tx.paid_at,
      customerEmail: tx.customer?.email || null,
      metadata: tx.metadata || {},
      purchasedItems: tx.metadata?.items || [],
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
