"use client";

import { FormEvent, useState } from "react";

export function WaitlistForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "").trim();
    const company = String(formData.get("company") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const note = String(formData.get("note") || "").trim();

    const subject = encodeURIComponent("Setu CRM Waitlist Request");
    const body = encodeURIComponent(
      `Name: ${name}\nCompany: ${company}\nEmail: ${email}\n\nNotes:\n${note}`
    );

    window.location.href = `mailto:hello@setugroups.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div className="rounded-[30px] border border-navy/6 bg-white p-8 shadow-card">
      <div className="mb-6 inline-flex rounded-full border border-electric/20 bg-electric/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-electric">
        Join the waitlist
      </div>
      <h2 className="text-3xl font-semibold tracking-tight text-navy">Get early access to Setu CRM</h2>
      <p className="mt-4 text-base leading-8 text-navy/70">
        Leave your details and we will contact you as the product becomes available for previews, rollout discussions, and early access conversations.
      </p>
      <form onSubmit={handleSubmit} className="mt-8 space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-navy">Name</span>
            <input name="name" required className="w-full rounded-2xl border border-navy/10 bg-soft px-4 py-3 text-sm text-navy outline-none ring-0 transition focus:border-electric/30" />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-navy">Company</span>
            <input name="company" className="w-full rounded-2xl border border-navy/10 bg-soft px-4 py-3 text-sm text-navy outline-none ring-0 transition focus:border-electric/30" />
          </label>
        </div>
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-navy">Work email</span>
          <input type="email" name="email" required className="w-full rounded-2xl border border-navy/10 bg-soft px-4 py-3 text-sm text-navy outline-none ring-0 transition focus:border-electric/30" />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-navy">What would you like Setu CRM to help with?</span>
          <textarea name="note" rows={5} className="w-full rounded-2xl border border-navy/10 bg-soft px-4 py-3 text-sm text-navy outline-none ring-0 transition focus:border-electric/30" />
        </label>
        <button type="submit" className="inline-flex items-center justify-center rounded-full bg-brand-gradient px-5 py-3 text-sm font-semibold text-white shadow-soft transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-card">
          Join the waitlist
        </button>
        <p className="text-xs leading-6 text-navy/50">
          This starter form routes through your default mail client. Swap it later for your preferred form backend or CRM capture endpoint.
        </p>
        {submitted ? <p className="text-sm font-medium text-emerald-600">Your email draft has been prepared.</p> : null}
      </form>
    </div>
  );
}
