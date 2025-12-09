import { useState } from "react";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiMessageCircle,
  FiClock,
} from "react-icons/fi";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    topic: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (submitted) setSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // You can later connect this to a real backend or email service.
    console.log("Safarishape contact form submission:", form);

    setSubmitted(true);
    setForm({
      name: "",
      email: "",
      topic: "",
      message: "",
    });
  };

  return (
    <section className="py-10 md:py-16 space-y-10">
      {/* Header */}
      <header className="space-y-3 max-w-3xl">
        <p className="text-xs uppercase tracking-[0.22em] text-brand">
          Contact
        </p>
        <h1 className="text-2xl md:text-3xl font-semibold">
          Reach out to the Safarishape team.
        </h1>
        <p className="text-xs md:text-sm text-slate-300">
          Whether you are ready to start, want to ask about programs, or need
          help choosing a plan, we are here to help. Send a message and a coach
          will get back to you as soon as possible.
        </p>
      </header>

      {/* Main grid */}
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)] items-start">
        {/* Left: contact details */}
        <div className="space-y-6 text-xs md:text-sm">
          {/* Contact methods */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-5 md:p-6 space-y-4 shadow-[0_0_40px_rgba(0,0,0,0.6)]">
            <h2 className="text-sm md:text-base font-semibold">
              Ways to reach us
            </h2>
            <div className="space-y-4">
              {/* Call */}
              <div className="flex gap-3">
                <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-xl bg-brand/15 border border-brand/40 text-brand">
                  <FiPhone className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-semibold text-slate-50">Call us</p>
                  <p className="text-slate-300">+254 700 000 000</p>
                  <p className="text-[11px] text-slate-400">
                    Best for quick questions about memberships and schedules.
                  </p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex gap-3">
                <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-xl bg-brand/15 border border-brand/40 text-brand">
                  <FiMessageCircle className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-semibold text-slate-50">WhatsApp</p>
                  <a
                    href="https://wa.me/254700000000"
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-300 hover:text-brand transition"
                  >
                    +254 700 000 000
                  </a>
                  <p className="text-[11px] text-slate-400">
                    Send a voice note, ask about programs, or book a tour.
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-3">
                <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-xl bg-brand/15 border border-brand/40 text-brand">
                  <FiMail className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-semibold text-slate-50">Email</p>
                  <a
                    href="mailto:hello@safarishape.fit"
                    className="text-slate-300 hover:text-brand transition"
                  >
                    hello@safarishape.fit
                  </a>
                  <p className="text-[11px] text-slate-400">
                    Ideal for detailed questions, collaborations, or team plans.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Location + hours */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-5 md:p-6 space-y-4 shadow-[0_0_40px_rgba(0,0,0,0.6)]">
            <h2 className="text-sm md:text-base font-semibold">
              Visit the space
            </h2>

            <div className="flex gap-3">
              <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-xl bg-dark-soft border border-white/10 text-brand">
                <FiMapPin className="h-4 w-4" />
              </div>
              <div>
                <p className="font-semibold text-slate-50">Location</p>
                <p className="text-slate-300">
                  City Park Drive, Valley View Office Park,
                  <br />
                  Tower A, 1st Floor, Nairobi, Kenya.
                </p>
                <p className="text-[11px] text-slate-400 mt-1">
                  Free parking available on site. Ask reception for Safarishape.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-xl bg-dark-soft border border-white/10 text-brand">
                <FiClock className="h-4 w-4" />
              </div>
              <div>
                <p className="font-semibold text-slate-50">Opening hours</p>
                <ul className="text-slate-300 space-y-1">
                  <li>Monday to Friday · 5:30am to 10:00pm</li>
                  <li>Saturday · 7:00am to 5:00pm</li>
                  <li>Sunday and public holidays · 8:00am to 2:00pm</li>
                </ul>
                <p className="text-[11px] text-slate-400 mt-1">
                  Coaching sessions are booked in advance; walk-ins are welcome
                  for tours and membership enquiries.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: contact form */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-5 md:p-6 lg:p-7 shadow-[0_0_60px_rgba(0,0,0,0.7)]">
          <h2 className="text-sm md:text-base font-semibold mb-1">
            Send us a message
          </h2>
          <p className="text-xs md:text-sm text-slate-300 mb-5">
            Share a bit about what you are looking for and we&apos;ll match you
            with the right program or coach.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4 text-xs md:text-sm">
            {/* Name / Email row */}
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
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl bg-dark-soft border border-white/10 px-3 py-2 text-sm text-white outline-none focus:border-brand"
                  placeholder="Enter your name"
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
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl bg-dark-soft border border-white/10 px-3 py-2 text-sm text-white outline-none focus:border-brand"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            {/* Topic */}
            <div className="space-y-1.5">
              <label
                htmlFor="topic"
                className="block text-[11px] md:text-xs text-slate-200"
              >
                What can we help you with?
              </label>
              <select
                id="topic"
                name="topic"
                value={form.topic}
                onChange={handleChange}
                className="w-full rounded-xl bg-dark-soft border border-white/10 px-3 py-2 text-sm text-white outline-none focus:border-brand"
              >
                <option value="">Select a reason</option>
                <option value="getting-started">Getting started with training</option>
                <option value="programs">Questions about programs</option>
                <option value="pricing">Questions about pricing and plans</option>
                <option value="corporate">
                  Team or corporate / group training
                </option>
                <option value="other">Something else</option>
              </select>
            </div>

            {/* Message */}
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
                rows={5}
                value={form.message}
                onChange={handleChange}
                required
                className="w-full rounded-xl bg-dark-soft border border-white/10 px-3 py-2 text-sm text-white outline-none focus:border-brand resize-none"
                placeholder="Tell us about your goals, schedule, and any injuries or preferences."
              />
            </div>

            {/* Submit + helper text */}
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full px-6 py-2.5 bg-brand text-dark text-sm font-semibold hover:bg-brand-dark transition shadow-[0_0_35px_rgba(34,197,94,0.7)]"
              >
                Send message
              </button>
              <p className="text-[11px] md:text-xs text-slate-400">
                We usually reply within one working day.
              </p>
            </div>

            {submitted && (
              <p className="text-[11px] md:text-xs text-brand mt-1">
                Message sent. The team will get back to you shortly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
