import { useState } from "react";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "https://combatfit-backend.onrender.com";

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSending(true);
    setSubmitted(false);
    setErrorMsg("");

    const form = e.currentTarget;

    const payload = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      subject: form.subject.value.trim(),
      message: form.message.value.trim(),
    };

    try {
      const resp = await fetch(`${API_BASE_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await resp.json();

      if (!resp.ok || !data?.ok) {
        throw new Error(data?.message || "Failed to send message.");
      }

      setSubmitted(true);
      form.reset();
      setTimeout(() => setSubmitted(false), 6000);
    } catch (err) {
      setErrorMsg(err?.message || "Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="py-10 md:py-16">
      <header className="space-y-3 max-w-3xl mb-8">
        <p className="text-xs uppercase tracking-[0.22em] text-brand">
          Contact
        </p>
        <h1 className="text-2xl md:text-3xl font-semibold">
          Talk to the Combatfit crew.
        </h1>
        <p className="text-xs md:text-sm text-slate-300">
          Ask about outdoor sessions, private coaching, or bringing Combatfit
          to your community. Fill in the form and we’ll get back to you by
          email or WhatsApp.
        </p>
      </header>

      <div className="grid gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.3fr)] items-start">
        <aside className="space-y-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_18px_40px_rgba(0,0,0,0.6)]">
            <h2 className="text-sm font-semibold text-slate-100 mb-3">
              How to reach us
            </h2>
            <ul className="space-y-3 text-xs md:text-sm text-slate-300">
              <li>
                <span className="block text-[11px] uppercase tracking-[0.18em] text-slate-400">
                  Email
                </span>
                <span>dale.clive20@gmail.com</span>
              </li>
              <li>
                <span className="block text-[11px] uppercase tracking-[0.18em] text-slate-400">
                  WhatsApp
                </span>
                <span>+254 729 240 290</span>
              </li>
              <li>
                <span className="block text-[11px] uppercase tracking-[0.18em] text-slate-400">
                  Training zones
                </span>
                <span>Karura Forest, Ngong Hills, Central Park &amp; more.</span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-brand/30 bg-brand/5 p-4 text-xs md:text-sm text-slate-200">
            <p className="text-[11px] uppercase tracking-[0.22em] text-brand mb-1">
              Response time
            </p>
            <p>
              We usually reply within one working day. For last-minute changes
              to an outdoor session, WhatsApp is fastest.
            </p>
          </div>
        </aside>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 md:p-6 shadow-[0_18px_40px_rgba(0,0,0,0.6)]">
          <h2 className="text-sm md:text-base font-semibold text-slate-50 mb-4">
            Send a message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4 text-xs md:text-sm">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label
                  htmlFor="name"
                  className="block text-[11px] md:text-xs text-slate-200"
                >
                  Full name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-xl bg-dark-soft border border-white/10 px-3 py-2 text-sm text-white outline-none focus:border-brand"
                  placeholder="Your name"
                />
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="email"
                  className="block text-[11px] md:text-xs text-slate-200"
                >
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-xl bg-dark-soft border border-white/10 px-3 py-2 text-sm text-white outline-none focus:border-brand"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="subject"
                className="block text-[11px] md:text-xs text-slate-200"
              >
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                className="w-full rounded-xl bg-dark-soft border border-white/10 px-3 py-2 text-sm text-white outline-none focus:border-brand"
                placeholder="Outdoor training, private coaching, events..."
              />
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="message"
                className="block text-[11px] md:text-xs text-slate-200"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full rounded-xl bg-dark-soft border border-white/10 px-3 py-2 text-sm text-white outline-none focus:border-brand resize-none"
                placeholder="Tell us what you’re looking for, your schedule, and any details we should know."
              />
            </div>

            <div className="pt-2 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <button
                type="submit"
                disabled={sending}
                className={[
                  "inline-flex items-center justify-center rounded-full px-7 py-2.5 text-sm md:text-base font-semibold transition w-full md:w-auto shadow-[0_0_30px_rgba(34,197,94,0.6)]",
                  sending
                    ? "bg-white/10 text-slate-400 cursor-not-allowed"
                    : "bg-brand text-dark hover:bg-brand-dark",
                ].join(" ")}
              >
                {sending ? "Sending..." : "Send message"}
              </button>

              <p className="text-[11px] md:text-xs text-slate-400">
                We’ll reply by email, and can move to WhatsApp if needed.
              </p>
            </div>

            {submitted && (
              <p className="text-[11px] md:text-xs text-brand mt-1">
                Message sent. We’ve received your details and will get back to
                you soon.
              </p>
            )}

            {errorMsg && (
              <p className="text-[11px] md:text-xs text-red-400 mt-1">
                {errorMsg}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;