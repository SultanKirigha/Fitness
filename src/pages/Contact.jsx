// src/pages/Contact.jsx
import { useState } from "react";

const CONTACT_FORM_URL = import.meta.env.VITE_CONTACT_FORM_URL;


function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 6000);
  };

  return (
    <section className="py-10 md:py-16">
      {/* Page header */}
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
        {/* Left side: contact info */}
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
                <span>hello@combatfit.co.ke</span>
              </li>
              <li>
                <span className="block text-[11px] uppercase tracking-[0.18em] text-slate-400">
                  WhatsApp
                </span>
                <span>+254 7xx xxx xxx</span>
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
              We usually reply within one working day. For last–minute changes
              to an outdoor session, WhatsApp is fastest.
            </p>
          </div>
        </aside>

        {/* Right side: contact form */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 md:p-6 shadow-[0_18px_40px_rgba(0,0,0,0.6)]">
          <h2 className="text-sm md:text-base font-semibold text-slate-50 mb-4">
            Send a message
          </h2>

          <form
            action={CONTACT_FORM_URL}
            method="POST"
            target="contactFormFrame"
            onSubmit={handleSubmit}
            className="space-y-4 text-xs md:text-sm"
          >
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
                className="inline-flex items-center justify-center rounded-full px-7 py-2.5 bg-brand text-dark text-sm md:text-base font-semibold hover:bg-brand-dark transition w-full md:w-auto shadow-[0_0_30px_rgba(34,197,94,0.6)]"
              >
                Send message
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
          </form>

          {/* Hidden iframe to absorb the form submission so the page doesn't reload */}
          <iframe
            name="contactFormFrame"
            title="Combatfit contact form"
            className="hidden"
          />
        </div>
      </div>
    </section>
  );
}

export default Contact;
