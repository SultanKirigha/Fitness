// combatfit-payments/server.js
import express from "express";
import cors from "cors";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

const INTERSEND_SECRET_KEY = process.env.INTERSEND_SECRET_KEY;
const INTERSEND_BASE_URL = process.env.INTERSEND_BASE_URL || "https://api.intersend.io";

// Basic safety check
if (!INTERSEND_SECRET_KEY) {
  console.error("❌ Missing INTERSEND_SECRET_KEY in .env");
}

// Middleware
app.use(cors({ origin: "*" })); // tighten later to only your domain
app.use(express.json());

// Health check
app.get("/", (req, res) => {
  res.json({ status: "ok", service: "combatfit-payments" });
});

/**
 * POST /api/payments/mpesa
 * Body example:
 * {
 *   "amount": 1500,
 *   "phone": "2547xxxxxxxx",
 *   "description": "Combatfit Outdoor Start Pass"
 * }
 */
app.post("/api/payments/mpesa", async (req, res) => {
  try {
    const { amount, phone, description } = req.body;

    if (!amount || !phone) {
      return res
        .status(400)
        .json({ status: "error", message: "amount and phone are required" });
    }

    // TODO: adjust this payload to exactly match Intersend Mpesa API docs
    const payload = {
      amount,
      currency: "KES",
      phone,
      description: description || "Combatfit payment",
      // Add extra fields required by Intersend (callback_url, account_reference, etc.)
    };

    const intersendResponse = await axios.post(
      `${INTERSEND_BASE_URL}/v1/payments/mpesa`, // example path – adjust to real one
      payload,
      {
        headers: {
          Authorization: `Bearer ${INTERSEND_SECRET_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    // Send back a safe response to frontend
    res.json({
      status: "ok",
      data: intersendResponse.data,
    });
  } catch (error) {
    console.error("Mpesa payment error:", error.response?.data || error.message);

    res.status(500).json({
      status: "error",
      message: "Could not initiate Mpesa payment",
      details: error.response?.data || null,
    });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Combatfit payments server running on port ${PORT}`);
});
