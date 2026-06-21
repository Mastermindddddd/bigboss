'use client';
import { useEffect, useState } from 'react';
import { Mail, MessageSquare, Briefcase, Loader2, CheckCircle2 } from 'lucide-react';

const sadc = ['Angola','Botswana','Comoros','DRC','Eswatini','Lesotho','Madagascar','Malawi','Mauritius','Mozambique','Namibia','Seychelles','South Africa','Tanzania','Zambia','Zimbabwe'];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', whatsapp: '', country: '', type: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const els = document.querySelectorAll('.animate-on-scroll');
    const obs = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }), { threshold: 0.1 });
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong. Please try again.');
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const cards = [
    {
      icon: Briefcase,
      title: 'Partnerships & Investment',
      color: '#D4A017',
      emails: ['rolof@roloenterprisesig.com', 'rolo1.rologroup@gmail.com'],
      cta: 'Email Investors Team',
      href: 'mailto:rolof@roloenterprisesig.com',
    },
    {
      icon: Mail,
      title: 'Clients & Government',
      color: '#CC0000',
      emails: ['rolof.bigbosscorporate@outlook.com'],
      cta: 'Request Proposal',
      href: 'mailto:rolof.bigbosscorporate@outlook.com',
    },
    {
      icon: MessageSquare,
      title: 'Careers',
      color: '#888888',
      emails: ['rolof.bigbosscorporate@gmail.com'],
      cta: 'Apply Now',
      href: '/careers',
    },
  ];

  return (
    <>
      {/* HERO */}
      <section style={{ minHeight: '50vh', display: 'flex', alignItems: 'center', background: 'linear-gradient(135deg, #080808, #0D0000)', paddingTop: '72px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(rgba(204,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(204,0,0,0.04) 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '4rem 2rem', position: 'relative', zIndex: 1 }}>
          <div className="section-label" style={{ marginBottom: '1rem' }}>Contact</div>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(3rem, 8vw, 7rem)', fontWeight: 300, color: '#F5F5F0', lineHeight: 0.95, marginBottom: '1.5rem' }}>
            Let&apos;s Build<br /><em style={{ color: '#CC0000', fontWeight: 700 }}>Africa&apos;s Future</em>
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#888888', maxWidth: '500px', lineHeight: 1.8 }}>
            Investor, client, government, or talent — we want to hear from you.
          </p>
        </div>
      </section>

      {/* CONTACT CARDS */}
      <section style={{ padding: '6rem 2rem', background: '#111111' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem', marginBottom: '5rem' }}>
            {cards.map((card, i) => (
              <div key={card.title} className="card animate-on-scroll" style={{
                background: '#1A1A1A',
                borderTop: `3px solid ${card.color}`,
                transitionDelay: `${i * 0.1}s`,
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                  <div style={{ background: `rgba(${card.color === '#D4A017' ? '212,160,23' : card.color === '#CC0000' ? '204,0,0' : '136,136,136'},0.1)`, padding: '0.7rem' }}>
                    <card.icon size={22} style={{ color: card.color }} />
                  </div>
                  <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.4rem', color: '#F5F5F0' }}>{card.title}</h3>
                </div>
                <div style={{ marginBottom: '1.5rem' }}>
                  {card.emails.map(email => (
                    <a key={email} href={`mailto:${email}`} style={{
                      display: 'block', fontSize: '0.85rem', color: '#888888',
                      textDecoration: 'none', marginBottom: '0.4rem', transition: 'color 0.2s',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = card.color)}
                    onMouseLeave={e => (e.currentTarget.style.color = '#888888')}>
                      {email}
                    </a>
                  ))}
                </div>
                <a
                  href={card.href}
                  className={card.color === '#D4A017' ? 'btn-gold' : card.color === '#CC0000' ? 'btn-primary' : 'btn-secondary'}
                  style={{ fontSize: '0.7rem', padding: '0.6rem 1.4rem' }}
                >
                  {card.cta}
                </a>
              </div>
            ))}
          </div>

          {/* FORM + WHATSAPP */}
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem', alignItems: 'start' }}>
            <div className="animate-on-scroll">
              <div className="section-label" style={{ marginBottom: '1.5rem' }}>Quick Contact</div>
              {submitted ? (
                <div style={{ background: 'rgba(204,0,0,0.1)', border: '1px solid rgba(204,0,0,0.3)', padding: '3rem', textAlign: 'center' }}>
                  <div style={{
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    width: 56, height: 56, borderRadius: '50%',
                    background: 'rgba(204,0,0,0.12)', border: '1px solid rgba(204,0,0,0.4)',
                    marginBottom: '1.25rem',
                  }}>
                    <CheckCircle2 size={28} style={{ color: '#CC0000' }} />
                  </div>
                  <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2rem', color: '#F5F5F0', marginBottom: '0.5rem' }}>Message Sent</h3>
                  <p style={{ color: '#888888' }}>Thank you, {form.name || 'there'}. We&apos;ll be in touch within 24–48 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {error && (
                    <div style={{
                      background: 'rgba(204,0,0,0.1)', border: '1px solid rgba(204,0,0,0.35)',
                      color: '#FF6B6B', padding: '0.9rem 1.2rem',
                      fontFamily: 'Barlow, sans-serif', fontSize: '0.85rem',
                    }}>
                      {error}
                    </div>
                  )}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    {[
                      { key: 'name', label: 'Full Name', placeholder: 'Your name', type: 'text' },
                      { key: 'email', label: 'Email', placeholder: 'your@email.com', type: 'email' },
                      { key: 'whatsapp', label: 'WhatsApp', placeholder: '+27 XX XXX XXXX', type: 'tel' },
                      { key: 'country', label: 'Country', placeholder: 'Your country', type: 'text' },
                    ].map(f => (
                      <div key={f.key}>
                        <label style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#666666', display: 'block', marginBottom: '0.3rem' }}>{f.label}</label>
                        <input
                          type={f.type}
                          placeholder={f.placeholder}
                          value={form[f.key as keyof typeof form]}
                          onChange={e => setForm(p => ({ ...p, [f.key]: e.target.value }))}
                          required
                          disabled={loading}
                          style={{ width: '100%', background: '#1A1A1A', border: '1px solid #2A2A2A', color: '#F5F5F0', padding: '0.75rem 1rem', fontFamily: 'Barlow, sans-serif', fontSize: '0.9rem', outline: 'none', boxSizing: 'border-box' }}
                          onFocus={e => (e.target.style.borderColor = '#CC0000')}
                          onBlur={e => (e.target.style.borderColor = '#2A2A2A')}
                        />
                      </div>
                    ))}
                  </div>
                  <div>
                    <label style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#666666', display: 'block', marginBottom: '0.3rem' }}>I Am</label>
                    <select
                      value={form.type}
                      onChange={e => setForm(p => ({ ...p, type: e.target.value }))}
                      required
                      disabled={loading}
                      style={{ width: '100%', background: '#1A1A1A', border: '1px solid #2A2A2A', color: form.type ? '#F5F5F0' : '#666666', padding: '0.75rem 1rem', fontFamily: 'Barlow, sans-serif', fontSize: '0.9rem', outline: 'none', boxSizing: 'border-box' }}
                      onFocus={e => (e.target.style.borderColor = '#CC0000')}
                      onBlur={e => (e.target.style.borderColor = '#2A2A2A')}
                    >
                      <option value="" style={{ color: '#666666', background: '#1A1A1A' }}>Select your type</option>
                      {['Investor', 'Client', 'Government', 'Talent'].map(t => (
                        <option key={t} value={t} style={{ background: '#1A1A1A' }}>{t}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#666666', display: 'block', marginBottom: '0.3rem' }}>Message</label>
                    <textarea
                      placeholder="Tell us how we can help..."
                      value={form.message}
                      onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                      rows={4}
                      required
                      disabled={loading}
                      style={{ width: '100%', background: '#1A1A1A', border: '1px solid #2A2A2A', color: '#F5F5F0', padding: '0.75rem 1rem', fontFamily: 'Barlow, sans-serif', fontSize: '0.9rem', outline: 'none', resize: 'vertical', boxSizing: 'border-box' }}
                      onFocus={e => (e.target.style.borderColor = '#CC0000')}
                      onBlur={e => (e.target.style.borderColor = '#2A2A2A')}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-primary"
                    disabled={loading}
                    style={{
                      alignSelf: 'flex-start', display: 'flex', alignItems: 'center', gap: '0.5rem',
                      opacity: loading ? 0.7 : 1, cursor: loading ? 'not-allowed' : 'pointer',
                    }}
                  >
                    {loading ? <Loader2 size={16} className="animate-spin" /> : null}
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>

            {/* WhatsApp + HQ */}
            <div className="animate-on-scroll" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <a
                href="https://wa.me/27000000000"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'flex', alignItems: 'center', gap: '1rem',
                  background: 'rgba(37,211,102,0.1)', border: '1px solid rgba(37,211,102,0.3)',
                  padding: '1.5rem', textDecoration: 'none', transition: 'all 0.3s',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(37,211,102,0.2)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'rgba(37,211,102,0.1)')}
              >
                <div style={{ background: '#25D366', borderRadius: '50%', width: 44, height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div>
                  <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 600, fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#25D366', marginBottom: '0.2rem' }}>Chat on WhatsApp</div>
                  <div style={{ fontSize: '0.8rem', color: '#888888' }}>Fastest response. #1 lead source in SADC.</div>
                </div>
              </a>

              <div style={{ background: '#1A1A1A', border: '1px solid #2A2A2A', padding: '1.5rem' }}>
                <div className="section-label" style={{ marginBottom: '1rem' }}>HQ + Expansion</div>
                <p style={{ fontSize: '0.85rem', color: '#888888', lineHeight: 1.8, marginBottom: '1rem' }}>
                  Headquartered in South Africa. Expanding into all 16 SADC countries.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem' }}>
                  {sadc.map(c => (
                    <span key={c} style={{
                      fontFamily: 'Barlow Condensed, sans-serif', fontSize: '0.6rem',
                      letterSpacing: '0.05em', textTransform: 'uppercase',
                      color: c === 'South Africa' ? '#CC0000' : '#555555',
                      background: c === 'South Africa' ? 'rgba(204,0,0,0.1)' : '#111111',
                      border: `1px solid ${c === 'South Africa' ? 'rgba(204,0,0,0.3)' : '#222222'}`,
                      padding: '0.15rem 0.4rem',
                    }}>{c}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}