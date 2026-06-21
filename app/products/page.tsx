'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Package, Clock, ArrowRight, Loader2 } from 'lucide-react';

export default function Products() {
  const [email, setEmail] = useState('');
  const [joined, setJoined] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const els = document.querySelectorAll('.animate-on-scroll');
    const obs = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }), { threshold: 0.1 });
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const handleJoinWaitlist = async () => {
    if (!email) return;
    setError(null);
    setLoading(true);

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong. Please try again.');
      }

      setJoined(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleJoinWaitlist();
    }
  };

  return (
    <>
      {/* HERO */}
      <section style={{ minHeight: '55vh', display: 'flex', alignItems: 'center', background: 'linear-gradient(135deg, #080808, #00080D)', paddingTop: '72px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(rgba(212,160,23,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(212,160,23,0.04) 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />
        <div style={{ position: 'absolute', right: '-80px', bottom: 0, fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800, fontSize: '14rem', color: 'rgba(212,160,23,0.05)', lineHeight: 1, userSelect: 'none' }}>PRODUCTS</div>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '4rem 2rem', position: 'relative', zIndex: 1 }}>
          <div className="section-label" style={{ color: '#D4A017', marginBottom: '1rem' }}>Products</div>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(3rem, 8vw, 7rem)', fontWeight: 300, color: '#F5F5F0', lineHeight: 0.95, marginBottom: '1.5rem' }}>
            Products Built<br /><em style={{ color: '#D4A017', fontWeight: 700 }}>for Africa</em>
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#888888', maxWidth: '500px', lineHeight: 1.8, marginBottom: '2rem' }}>
            Tools and platforms designed to solve real SADC business problems.
          </p>
          <a href="#waitlist" className="btn-gold">Get Early Access</a>
        </div>
      </section>

      {/* PRODUCTS IN DEVELOPMENT */}
      <section style={{ padding: '6rem 2rem', background: '#111111' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }} className="animate-on-scroll">
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <Clock size={16} style={{ color: '#D4A017' }} />
                <div className="section-label" style={{ color: '#D4A017' }}>In Development</div>
              </div>
              <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: '#F5F5F0', lineHeight: 1.05, marginBottom: '1.5rem' }}>
                Products in<br /><em style={{ color: '#D4A017' }}>Development</em>
              </h2>
              <div className="accent-line" style={{ background: '#D4A017' }} />
              <p style={{ fontSize: '1.05rem', color: '#AAAAAA', lineHeight: 1.9, marginBottom: '1.5rem' }}>
                We&apos;re building digital tools for SADC businesses: <strong style={{ color: '#F5F5F0' }}>trade management, talent tracking, and project execution platforms</strong>. Built by Africans, for African challenges.
              </p>
              <p style={{ fontSize: '1rem', color: '#888888', lineHeight: 1.9 }}>
                Be the first to test them. Join our waitlist and get early access + feedback rights.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { name: 'TradeFlow', status: 'In Development', desc: 'Trade management platform connecting SADC businesses with global markets. Track deals, compliance, and shipments.' },
                { name: 'TalentTrack', status: 'In Development', desc: 'End-to-end talent management for African companies. Hire, train, track performance, and develop future leaders.' },
                { name: 'ExecuBoard', status: 'Planning', desc: 'Project execution platform designed for African realities. Manage complex projects with local context.' },
              ].map(product => (
                <div key={product.name} className="card" style={{ background: '#1A1500', border: '1px solid rgba(212,160,23,0.2)', borderLeft: '3px solid #D4A017' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                    <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.4rem', color: '#F5F5F0' }}>{product.name}</h3>
                    <span style={{
                      fontFamily: 'Barlow Condensed, sans-serif', fontSize: '0.6rem',
                      letterSpacing: '0.1em', textTransform: 'uppercase',
                      color: '#D4A017', background: 'rgba(212,160,23,0.1)',
                      border: '1px solid rgba(212,160,23,0.2)', padding: '0.2rem 0.5rem',
                    }}>{product.status}</span>
                  </div>
                  <p style={{ fontSize: '0.85rem', color: '#888888', lineHeight: 1.7 }}>{product.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WAITLIST */}
      <section id="waitlist" style={{ padding: '6rem 2rem', background: '#0D0A00', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }} className="animate-on-scroll">
          <div className="section-label" style={{ color: '#D4A017', marginBottom: '1rem' }}>Waitlist</div>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: '#F5F5F0', marginBottom: '1rem' }}>
            Be First.<br /><em style={{ color: '#D4A017' }}>Get Early Access.</em>
          </h2>
          <p style={{ color: '#888888', lineHeight: 1.8, marginBottom: '2.5rem' }}>
            Join our waitlist to get early access to BigBoss products + feedback rights. Help shape tools built for Africa.
          </p>
          {joined ? (
            <div style={{ background: 'rgba(212,160,23,0.1)', border: '1px solid rgba(212,160,23,0.3)', padding: '2rem' }}>
              <div style={{ color: '#D4A017', fontSize: '1.5rem', marginBottom: '0.5rem' }}>◆</div>
              <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.3rem', color: '#F5F5F0' }}>You&apos;re on the list.</p>
              <p style={{ color: '#888888', fontSize: '0.9rem', marginTop: '0.5rem' }}>We&apos;ll be in touch when early access opens.</p>
            </div>
          ) : (
            <>
              {error && (
                <div style={{
                  background: 'rgba(204,0,0,0.1)', border: '1px solid rgba(204,0,0,0.35)',
                  color: '#FF6B6B', padding: '0.8rem 1.2rem',
                  fontFamily: 'Barlow, sans-serif', fontSize: '0.85rem',
                  marginBottom: '1rem', maxWidth: '500px', marginLeft: 'auto', marginRight: 'auto',
                }}>
                  {error}
                </div>
              )}
              <div style={{ display: 'flex', gap: '0', maxWidth: '500px', margin: '0 auto' }}>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="your@email.com"
                  disabled={loading}
                  style={{
                    flex: 1, background: '#1A1A1A', border: '1px solid #2A2A2A',
                    borderRight: 'none', color: '#F5F5F0', padding: '0.9rem 1.2rem',
                    fontFamily: 'Barlow, sans-serif', fontSize: '0.95rem', outline: 'none',
                  }}
                />
                <button
                  onClick={handleJoinWaitlist}
                  disabled={loading || !email}
                  className="btn-gold"
                  style={{
                    display: 'flex', alignItems: 'center', gap: '0.5rem',
                    opacity: loading || !email ? 0.7 : 1,
                    cursor: loading || !email ? 'not-allowed' : 'pointer',
                  }}
                >
                  {loading ? <Loader2 size={16} className="animate-spin" /> : null}
                  {loading ? 'Joining...' : 'Join Waitlist'}
                </button>
              </div>
            </>
          )}
        </div>
      </section>

      {/* CLOSING */}
      <section style={{ padding: '4rem 2rem', background: '#111111', textAlign: 'center', borderTop: '1px solid #2A2A2A' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }} className="animate-on-scroll">
          <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.5rem', color: '#888888', fontStyle: 'italic' }}>
            Products that work where you work.<br />
            <span style={{ color: '#F5F5F0' }}>No fluff. Just results.</span>
          </p>
        </div>
      </section>
    </>
  );
}