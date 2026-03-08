'use client';
import { useState } from 'react';
import { siteCopy } from '../../../data/copy';

export default function ContactCTA() {
  const [status, setStatus] = useState('idle');

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus('loading');
    const payload = Object.fromEntries(new FormData(event.currentTarget).entries());
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      setStatus(response.ok ? 'success' : 'error');
      if (response.ok) event.currentTarget.reset();
    } catch (error) {
      setStatus('error');
    }
  }

  return (
    <section className="section sectionBorder">
      <div className="container grid2">
        <div>
          <div className="eyebrow">Contact</div>
          <h2 className="h2" style={{ marginTop: 10 }}>{siteCopy.contact.title}</h2>
          <p className="lead" style={{ marginTop: 12 }}>{siteCopy.contact.body}</p>
          <div className="inlineMeta" style={{ marginTop: 18 }}>
            <span>hello@setugroups.com</span>
            <span>Strategy-first conversations</span>
          </div>
        </div>
        <form className="card" onSubmit={handleSubmit}>
          <div style={{ display: 'grid', gap: 14 }}>
            <input className="formField" name="name" placeholder="Full name" required />
            <input className="formField" name="email" type="email" placeholder="Work email" required />
            <input className="formField" name="company" placeholder="Company" />
            <textarea className="formField" name="message" placeholder="What are you building or trying to improve?" required />
            <button className="btn btnPrimary" type="submit" disabled={status === 'loading'}>
              {status === 'loading' ? 'Sending…' : siteCopy.contact.primary}
            </button>
            {status === 'success' && <div className="copy">Thanks — your message was submitted.</div>}
            {status === 'error' && <div className="copy">There was an issue. Please email hello@setugroups.com.</div>}
          </div>
        </form>
      </div>
    </section>
  );
}
