import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Resend } from "resend";

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
const resend = new Resend(process.env.RESEND_API_KEY);

function buildReference(prefix = "CF") {
  return `${prefix}-${Date.now()}${Math.floor(Math.random() * 10000)}`;
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function formatKenyaTimestamp() {
  return new Date().toLocaleString("en-KE", {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}

app.get("/api/health", (req, res) => {
  res.json({ ok: true });
});

/**
 * CONTACT FORM -> RESEND
 */
app.post("/api/contact", async (req, res) => {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_RECEIVER_EMAIL;
    const from =
      process.env.CONTACT_FROM_EMAIL || "Combatfit <onboarding@resend.dev>";

    if (!apiKey) {
      return res.status(500).json({
        ok: false,
        message: "Missing RESEND_API_KEY in server/.env",
      });
    }

    if (!to) {
      return res.status(500).json({
        ok: false,
        message: "Missing CONTACT_RECEIVER_EMAIL in server/.env",
      });
    }

    const { name, email, subject, message } = req.body || {};

    if (!name || !email || !message) {
      return res.status(400).json({
        ok: false,
        message: "name, email, and message are required",
      });
    }

    const cleanName = String(name).trim();
    const cleanEmail = String(email).trim();
    const cleanSubject = String(subject || "").trim();
    const cleanMessage = String(message).trim();

    const timestamp = formatKenyaTimestamp();
    const uniqueRef = buildReference("CF");

    const finalSubject = `New Combatfit contact [${uniqueRef}] - ${
      cleanSubject || "No subject provided"
    } - ${timestamp}`;

    const textBody =
      "New contact message from Combatfit site\n\n" +
      `Reference: ${uniqueRef}\n` +
      `Time: ${timestamp}\n` +
      `Name: ${cleanName}\n` +
      `Email: ${cleanEmail}\n` +
      (cleanSubject ? `Subject: ${cleanSubject}\n` : "") +
      `\nMessage:\n${cleanMessage}\n`;

    const htmlBody =
      `<div style="background:#0b1120;padding:24px;font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;color:#e5e7eb;">` +
      `  <div style="max-width:640px;margin:0 auto;background:#020617;border-radius:16px;border:1px solid rgba(148,163,184,0.25);overflow:hidden;">` +
      `    <div style="padding:20px 24px 16px;border-bottom:1px solid rgba(148,163,184,0.2);">` +
      `      <div style="font-size:11px;letter-spacing:0.22em;text-transform:uppercase;color:#22c55e;">Combatfit contact</div>` +
      `      <h1 style="margin:8px 0 0;font-size:20px;line-height:1.3;color:#f9fafb;">New message from your website</h1>` +
      `    </div>` +
      `    <div style="padding:20px 24px 16px;">` +
      `      <div style="margin-top:16px;padding:12px 14px;background:rgba(15,23,42,0.9);border-radius:12px;border:1px solid rgba(148,163,184,0.3);">` +
      `        <p style="margin:0 0 4px;font-size:12px;color:#9ca3af;">Reference</p>` +
      `        <p style="margin:0;font-size:14px;color:#f9fafb;">${escapeHtml(uniqueRef)}</p>` +
      `        <p style="margin:12px 0 4px;font-size:12px;color:#9ca3af;">Time</p>` +
      `        <p style="margin:0;font-size:14px;color:#f9fafb;">${escapeHtml(timestamp)}</p>` +
      `        <p style="margin:12px 0 4px;font-size:12px;color:#9ca3af;">Name</p>` +
      `        <p style="margin:0;font-size:14px;color:#f9fafb;">${escapeHtml(cleanName)}</p>` +
      `        <p style="margin:12px 0 4px;font-size:12px;color:#9ca3af;">Email</p>` +
      `        <p style="margin:0;font-size:14px;color:#f9fafb;">${escapeHtml(cleanEmail)}</p>` +
      (cleanSubject
        ? `        <p style="margin:12px 0 4px;font-size:12px;color:#9ca3af;">Subject</p>` +
          `        <p style="margin:0;font-size:14px;color:#f9fafb;">${escapeHtml(cleanSubject)}</p>`
        : "") +
      `        <p style="margin:12px 0 4px;font-size:12px;color:#9ca3af;">Message</p>` +
      `        <div style="margin:0;font-size:14px;color:#e5e7eb;white-space:pre-wrap;line-height:1.5;">${escapeHtml(cleanMessage)}</div>` +
      `      </div>` +
      `    </div>` +
      `  </div>` +
      `</div>`;

    const { data, error } = await resend.emails.send({
      from,
      to: [to],
      subject: finalSubject,
      html: htmlBody,
      text: textBody,
      replyTo: cleanEmail,
    });

    if (error) {
      return res.status(400).json({
        ok: false,
        message: error.message || "Failed to send contact email",
        error,
      });
    }

    return res.json({
      ok: true,
      id: data?.id || null,
      reference: uniqueRef,
      message: "Contact email sent successfully",
    });
  } catch (err) {
    return res.status(500).json({
      ok: false,
      message: err?.message || "Server error",
    });
  }
});

/**
 * EVENT BOOKING -> RESEND
 */
app.post("/api/booking", async (req, res) => {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_RECEIVER_EMAIL;
    const from =
      process.env.CONTACT_FROM_EMAIL || "Combatfit <onboarding@resend.dev>";

    if (!apiKey) {
      return res.status(500).json({
        ok: false,
        message: "Missing RESEND_API_KEY in server/.env",
      });
    }

    if (!to) {
      return res.status(500).json({
        ok: false,
        message: "Missing CONTACT_RECEIVER_EMAIL in server/.env",
      });
    }

    const {
      eventId,
      eventTitle,
      eventDate,
      eventTime,
      eventLocation,
      name,
      email,
      phone,
      note,
    } = req.body || {};

    if (!eventId || !eventTitle || !eventDate || !name || !email) {
      return res.status(400).json({
        ok: false,
        message:
          "eventId, eventTitle, eventDate, name, and email are required",
      });
    }

    const cleanEventId = String(eventId).trim();
    const cleanEventTitle = String(eventTitle).trim();
    const cleanEventDate = String(eventDate).trim();
    const cleanEventTime = String(eventTime || "").trim();
    const cleanEventLocation = String(eventLocation || "").trim();
    const cleanName = String(name).trim();
    const cleanEmail = String(email).trim();
    const cleanPhone = String(phone || "").trim();
    const cleanNote = String(note || "").trim();

    const timestamp = formatKenyaTimestamp();
    const uniqueRef = buildReference("BK");

    const finalSubject = `New event booking [${uniqueRef}] - ${cleanEventTitle} - ${cleanEventDate}`;

    const textBody =
      "New Combatfit event booking\n\n" +
      `Reference: ${uniqueRef}\n` +
      `Submitted: ${timestamp}\n\n` +
      `Event ID: ${cleanEventId}\n` +
      `Event: ${cleanEventTitle}\n` +
      `Date: ${cleanEventDate}\n` +
      `Time: ${cleanEventTime}\n` +
      `Location: ${cleanEventLocation}\n\n` +
      `Name: ${cleanName}\n` +
      `Email: ${cleanEmail}\n` +
      `Phone: ${cleanPhone}\n` +
      `Note: ${cleanNote}\n`;

    const htmlBody =
      `<div style="background:#0b1120;padding:24px;font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;color:#e5e7eb;">` +
      `  <div style="max-width:640px;margin:0 auto;background:#020617;border-radius:16px;border:1px solid rgba(148,163,184,0.25);overflow:hidden;">` +
      `    <div style="padding:20px 24px 16px;border-bottom:1px solid rgba(148,163,184,0.2);">` +
      `      <div style="font-size:11px;letter-spacing:0.22em;text-transform:uppercase;color:#22c55e;">Combatfit booking</div>` +
      `      <h1 style="margin:8px 0 0;font-size:20px;line-height:1.3;color:#f9fafb;">New event booking request</h1>` +
      `    </div>` +
      `    <div style="padding:20px 24px 16px;">` +
      `      <div style="margin-top:16px;padding:12px 14px;background:rgba(15,23,42,0.9);border-radius:12px;border:1px solid rgba(148,163,184,0.3);">` +
      `        <p style="margin:0 0 4px;font-size:12px;color:#9ca3af;">Reference</p>` +
      `        <p style="margin:0;font-size:14px;color:#f9fafb;">${escapeHtml(uniqueRef)}</p>` +
      `        <p style="margin:12px 0 4px;font-size:12px;color:#9ca3af;">Submitted</p>` +
      `        <p style="margin:0;font-size:14px;color:#f9fafb;">${escapeHtml(timestamp)}</p>` +
      `        <p style="margin:12px 0 4px;font-size:12px;color:#9ca3af;">Event</p>` +
      `        <p style="margin:0;font-size:14px;color:#f9fafb;">${escapeHtml(cleanEventTitle)}</p>` +
      `        <p style="margin:12px 0 4px;font-size:12px;color:#9ca3af;">Date</p>` +
      `        <p style="margin:0;font-size:14px;color:#f9fafb;">${escapeHtml(cleanEventDate)}${cleanEventTime ? ` · ${escapeHtml(cleanEventTime)}` : ""}</p>` +
      `        <p style="margin:12px 0 4px;font-size:12px;color:#9ca3af;">Location</p>` +
      `        <p style="margin:0;font-size:14px;color:#f9fafb;">${escapeHtml(cleanEventLocation)}</p>` +
      `        <p style="margin:12px 0 4px;font-size:12px;color:#9ca3af;">Name</p>` +
      `        <p style="margin:0;font-size:14px;color:#f9fafb;">${escapeHtml(cleanName)}</p>` +
      `        <p style="margin:12px 0 4px;font-size:12px;color:#9ca3af;">Email</p>` +
      `        <p style="margin:0;font-size:14px;color:#f9fafb;">${escapeHtml(cleanEmail)}</p>` +
      `        <p style="margin:12px 0 4px;font-size:12px;color:#9ca3af;">Phone</p>` +
      `        <p style="margin:0;font-size:14px;color:#f9fafb;">${escapeHtml(cleanPhone || "-")}</p>` +
      `        <p style="margin:12px 0 4px;font-size:12px;color:#9ca3af;">Note</p>` +
      `        <div style="margin:0;font-size:14px;color:#e5e7eb;white-space:pre-wrap;line-height:1.5;">${escapeHtml(cleanNote || "-")}</div>` +
      `      </div>` +
      `    </div>` +
      `  </div>` +
      `</div>`;

    const { data, error } = await resend.emails.send({
      from,
      to: [to],
      subject: finalSubject,
      html: htmlBody,
      text: textBody,
      replyTo: cleanEmail,
    });

    if (error) {
      return res.status(400).json({
        ok: false,
        message: error.message || "Failed to send booking email",
        error,
      });
    }

    return res.json({
      ok: true,
      id: data?.id || null,
      reference: uniqueRef,
      message: "Booking email sent successfully",
    });
  } catch (err) {
    return res.status(500).json({
      ok: false,
      message: err?.message || "Server error",
    });
  }
});

/**
 * PAYSTACK INITIALIZE
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

    const reference = buildReference("CF");

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

    const itemCount = safeItems.reduce(
      (sum, it) => sum + Number(it.qty || 0),
      0
    );

    const metadata = {
      custom_fields: [
        {
          display_name: "Order Type",
          variable_name: "order_type",
          value: "Shop",
        },
        {
          display_name: "Items Count",
          variable_name: "items_count",
          value: String(itemCount),
        },
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

    const resp = await fetch(
      "https://api.paystack.co/transaction/initialize",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${secret}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

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
  console.log(`Server running on http://localhost:${PORT}`);
});