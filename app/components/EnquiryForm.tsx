'use client';

import { FormEvent, useMemo, useState } from 'react';
import { Mail, MessageCircle, Send } from 'lucide-react';

const DEFAULT_EMAIL = 'rolof.bigbosscorporate@outlook.com';
const DEFAULT_WHATSAPP = '27614090509';

export default function EnquiryForm({
  service = 'General enquiry',
  heading = 'Tell us what you want to achieve',
}: {
  service?: string;
  heading?: string;
}) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'fallback'>('idle');
  const [message, setMessage] = useState('');

  const mailHref = useMemo(() => {
    const subject = encodeURIComponent(`BigBoss enquiry — ${service}`);
    const body = encodeURIComponent(`Hello BigBoss,\n\nI would like to enquire about ${service}.\n\nOrganisation:\nCountry:\nWhat we need:\nPreferred start date:\nBudget range:\n\nRegards,`);
    return `mailto:${DEFAULT_EMAIL}?subject=${subject}&body=${body}`;
  }, [service]);

  const whatsappHref = useMemo(() => {
    const text = encodeURIComponent(`Hello BigBoss, I would like to enquire about ${service}.`);
    return `https://wa.me/${DEFAULT_WHATSAPP}?text=${text}`;
  }, [service]);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('sending');
    setMessage('');

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...payload, service }),
      });

      const result = await response.json();
      if (!response.ok) throw new Error(result?.message || 'Online enquiry delivery is not configured yet.');

      setStatus('sent');
      setMessage('Thank you. Your enquiry has been submitted to BigBoss.');
      form.reset();
    } catch (error) {
      setStatus('fallback');
      setMessage(error instanceof Error ? error.message : 'Online delivery is not configured yet. Please use email or WhatsApp below.');
    }
  }

  return (
    <div className="enquiry-shell">
      <div className="enquiry-copy">
        <div className="eyebrow">Client enquiry</div>
        <h2>{heading}</h2>
        <p>
          Give us enough context to understand the problem, desired outcome and timing. We will respond with the right BigBoss capability rather than force a pre-packaged solution.
        </p>
        <div className="enquiry-direct">
          <a href={mailHref}><Mail size={18} /> Email BigBoss</a>
          <a href={whatsappHref} target="_blank" rel="noreferrer"><MessageCircle size={18} /> WhatsApp</a>
        </div>
      </div>

      <form className="enquiry-form" onSubmit={onSubmit}>
        <div className="form-grid">
          <label>
            Name
            <input name="name" required placeholder="Your full name" />
          </label>
          <label>
            Organisation
            <input name="organisation" placeholder="Company / organisation" />
          </label>
          <label>
            Email
            <input name="email" required type="email" placeholder="you@company.com" />
          </label>
          <label>
            Country
            <input name="country" placeholder="Country" />
          </label>
          <label>
            Budget range
            <select name="budget" defaultValue="">
              <option value="" disabled>Select range</option>
              <option>Under $250</option>
              <option>$250 – $750</option>
              <option>$750 – $2,500</option>
              <option>$2,500 – $7,500</option>
              <option>$7,500+</option>
              <option>Need guidance</option>
            </select>
          </label>
          <label>
            Preferred start
            <input name="start" placeholder="Your preferred month or date" />
          </label>
        </div>
        <label>
          What do you need help with?
          <textarea name="details" required rows={5} placeholder="Describe the challenge, desired outcome, current systems/data and any important constraints." />
        </label>
        <button className="btn-primary" type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending…' : 'Send enquiry'} <Send size={16} />
        </button>
        {message ? <p className={`form-status ${status}`} role="status" aria-live="polite">{message}</p> : null}
      </form>
    </div>
  );
}
