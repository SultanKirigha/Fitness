// src/pages/Contact.jsx
import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  MessageCircle,
  Clock,
} from "lucide-react";

function Contact() {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    topic: "training",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now we just show a success message.
    // Later you can plug this into the same Google Apps Script or another backend.
    setSubmitted(true);
  };

  return (
    <main className="py-10 md:py-16 space-y-10">
      {/* Hero / intro */}
      <section className="space-y-4 md:space-y-5 max-w-3xl">
        <p className="text-[11px] uppercase tracking-[0.26em] text-brand">
          Contact
        </p>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight">
          Talk to the Combatfit team.
        </h1>
        <p className="text-xs md:text-sm text-slate-300">
          Have a question about outdoor sessions, events, or joining the next
          block? Reach out and we&apos;ll get back to you within 24 hours on
          weekdays. For urgent changes on the day of a session, use WhatsApp.
        </p>
      </section>

      {/* Main content: info + form */}
      <section className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] items-start">
        {/* LEFT: contact info */}
        <div className="space-y-6">
          {/* Card: direct contacts */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-5 space-y-5">
            <h2 className="text-sm md:text-base font-semibold text-slate-50">
              Direct contact
            </h2>

            <div className="space-y-3 text-xs md:text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand/15 text-brand">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-medium text-slate-50">Email</p>
                  <a
                    href="mailto:info@combatfit.outdoor"
                    className="text-brand hover:underline"
                  >
                    info@combatfit.outdoor
                  </a>
                  <p className="text-[11px] text-slate-400">
                    Best for questions about blocks, pricing, and events.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand/15 text-brand">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-medium text-slate-50">Phone / WhatsApp</p>
                  <p className="text-slate-200">+254 102 958 797</p>
                  <p className="text-[11px] text-slate-400">
                    Drop a message for day-of session questions or directions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card: locations */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-5 space-y-4">
            <h2 className="text-sm md:text-base font-semibold text-slate-50">
              Where we train
            </h2>
            <div className="space-y-3 text-xs md:text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-brand mt-0.5" />
                <div>
                  <p className="font-medium text-slate-50">Ngong Hills</p>
                  <p className="text-slate-300">
                    Sunrise hill sessions, longer weekend hikes, and engine
                    blocks.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-brand mt-0.5" />
                <div>
                  <p className="font-medium text-slate-50">Karura Forest</p>
                  <p className="text-slate-300">
                    Community hikes, trail loops, and mixed conditioning days.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-brand mt-0.5" />
                <div>
                  <p className="font-medium text-slate-50">
                    City parks &amp; open spaces
                  </p>
                  <p className="text-slate-300">
                    Evening bootcamps and strength circuits closer to town.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-2 text-[11px] md:text-xs text-slate-400">
              <Clock className="h-3 w-3" />
              <span>
                Typical training windows: early mornings 5:30&ndash;8:30 and
                selected weekend blocks.
              </span>
            </div>
          </div>

          {/* Socials */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-5 space-y-4">
            <h2 className="text-sm md:text-base font-semibold text-slate-50">
              Social &amp; updates
            </h2>
            <p className="text-xs md:text-sm text-slate-300">
              We share upcoming events, session photos, and block announcements
              on social.
            </p>
            <div className="flex flex-wrap gap-3 text-xs md:text-sm">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1.5 hover:border-brand/70 hover:text-brand transition"
              >
                <Instagram className="h-4 w-4" />
                Instagram
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1.5 hover:border-brand/70 hover:text-brand transition"
              >
                <Facebook className="h-4 w-4" />
                Facebook
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1.5 hover:border-brand/70 hover:text-brand transition"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp community
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT: contact form */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-5 md:p-7">
          <div className="mb-4 space-y-1">
            <p className="text-[11px] uppercase tracking-[0.22em] text-brand">
              Send a message
            </p>
            <p className="text-xs md:text-sm text-slate-300">
              Share a bit about what you need and we&apos;ll reply with next
              steps &mdash; usually an invite to a specific block or outdoor
              session.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-4 text-xs md:text-sm"
          >
            <div className="grid gap-4 md:grid-cols-2">
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
                  value={formValues.name}
                  onChange={handleChange}
                  className="w-full rounded-xl bg-[#020617]/70 border border-white/10 px-3 py-2 text-sm text-slate-50 outline-none focus:border-brand"
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
                  value={formValues.email}
                  onChange={handleChange}
                  className="w-full rounded-xl bg-[#020617]/70 border border-white/10 px-3 py-2 text-sm text-slate-50 outline-none focus:border-brand"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-1.5">
                <label
                  htmlFor="phone"
                  className="block text-[11px] md:text-xs text-slate-200"
                >
                  Phone / WhatsApp
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="text"
                  value={formValues.phone}
                  onChange={handleChange}
                  className="w-full rounded-xl bg-[#020617]/70 border border-white/10 px-3 py-2 text-sm text-slate-50 outline-none focus:border-brand"
                  placeholder="+254 102 958 797"
                />
              </div>
              <div className="space-y-1.5">
                <label
                  htmlFor="topic"
                  className="block text-[11px] md:text-xs text-slate-200"
                >
                  What are you asking about?
                </label>
                <select
                  id="topic"
                  name="topic"
                  value={formValues.topic}
                  onChange={handleChange}
                  className="w-full rounded-xl bg-[#020617]/70 border border-white/10 px-3 py-2 text-sm text-slate-50 outline-none focus:border-brand"
                >
                  <option value="training">Joining training block</option>
                  <option value="events">Outdoor events / hikes</option>
                  <option value="pricing">Pricing / payments</option>
                  <option value="corporate">
                    Corporate / team sessions
                  </option>
                  <option value="other">Something else</option>
                </select>
              </div>
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
                rows={4}
                required
                value={formValues.message}
                onChange={handleChange}
                className="w-full rounded-xl bg-[#020617]/70 border border-white/10 px-3 py-2 text-sm text-slate-50 outline-none focus:border-brand resize-none"
                placeholder="Share your goals, schedule, or any questions you have…"
              />
            </div>

            <div className="pt-3 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-brand text-dark px-6 py-2.5 text-sm font-semibold hover:bg-brand-dark transition w-full md:w-auto"
              >
                Send message
              </button>
              <p className="text-[11px] md:text-xs text-slate-400">
                We reply by email, and if needed, we&apos;ll move the
                conversation to WhatsApp.
              </p>
            </div>

            {submitted && (
              <p className="text-[11px] md:text-xs text-brand mt-1">
                Message received. The Combatfit team will get back to you soon.
              </p>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}

export default Contact;
