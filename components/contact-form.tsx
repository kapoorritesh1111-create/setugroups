'use client';

import { useState } from 'react';

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('loading');
    setMessage('');

    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(formData.entries())),
      });
      const data = (await response.json()) as { message?: string };
      if (!response.ok) throw new Error(data.message || 'Unable to submit inquiry.');
      setStatus('success');
      setMessage(data.message || 'Thanks. Your inquiry has been received.');
      event.currentTarget.reset();
    } catch (error) {
      setStatus('error');
      setMessage(error instanceof Error ? error.message : 'Something went wrong.');
    }
  }

  return (
    <form className="grid gap-5" onSubmit={onSubmit}>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          First name
          <input required name="firstName" className="rounded-2xl border border-slate-300 px-4 py-3 outline-none ring-0 transition focus:border-brand" />
        </label>
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Last name
          <input required name="lastName" className="rounded-2xl border border-slate-300 px-4 py-3 outline-none ring-0 transition focus:border-brand" />
        </label>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Work email
          <input type="email" required name="email" className="rounded-2xl border border-slate-300 px-4 py-3 outline-none ring-0 transition focus:border-brand" />
        </label>
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Company
          <input required name="company" className="rounded-2xl border border-slate-300 px-4 py-3 outline-none ring-0 transition focus:border-brand" />
        </label>
      </div>
      <label className="grid gap-2 text-sm font-medium text-slate-700">
        Product interest
        <select name="product" className="rounded-2xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-brand">
          <option>SETU Track</option>
          <option>SETU CRM</option>
          <option>Parent ecosystem / multiple products</option>
        </select>
      </label>
      <label className="grid gap-2 text-sm font-medium text-slate-700">
        What do you want to solve?
        <textarea
          required
          name="message"
          rows={6}
          className="rounded-[1.5rem] border border-slate-300 px-4 py-3 outline-none transition focus:border-brand"
          placeholder="Tell us about your workflow, team, and what you want to improve."
        />
      </label>
      <button
        type="submit"
        disabled={status === 'loading'}
        className="inline-flex items-center justify-center rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-brand-deep disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === 'loading' ? 'Sending…' : 'Book a Demo'}
      </button>
      {message ? (
        <p className={status === 'success' ? 'text-sm text-emerald-600' : 'text-sm text-rose-600'} role="status">
          {message}
        </p>
      ) : null}
      <p className="text-xs leading-6 text-slate-500">
        This starter implementation validates and accepts inquiries through a Vercel-ready API route. Connect your preferred CRM or email provider before launch for live routing.
      </p>
    </form>
  );
}
