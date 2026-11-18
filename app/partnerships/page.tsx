'use client';
import HeroScene from '@/app/components/HeroScene';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { DollarSign, Building, CheckCircle } from 'lucide-react';

export default function Partnerships() {
  const [activeTab, setActiveTab] = useState<'investors' | 'clients'>('investors');

  useEffect(() => {
    const els = document.querySelectorAll('.animate-on-scroll');
    const obs = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }), { threshold: 0.1 });
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="bb-corporate-hero bb-hero-partnerships" style={{ minHeight: '55vh', display: 'flex', alignItems: 'center', background: 'linear-gradient(135deg, #080808, #000D0D)', paddingTop: '72px', position: 'relative', overflow: 'hidden' }}>
        <HeroScene variant="partnerships"/>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(rgba(212,160,23,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(212,160,23,0.04) 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />
        <div style={{ position: 'absolute', top: '10%', right: '-100px', fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800, fontSize: '16rem', color: 'rgba(212,160,23,0.04)', lineHeight: 1, userSelect: 'none' }}>PARTNER</div>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '4rem 2rem', position: 'relative', zIndex: 1 }}>
          <div className="section-label" style={{ marginBottom: '1rem', color: '#D4A017' }}>Partnerships</div>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(3rem, 8vw, 7rem)', fontWeight: 300, color: '#F5F5F0', lineHeight: 0.95, marginBottom: '1.5rem' }}>
            Partner With<br /><em style={{ color: '#D4A017', fontWeight: 700 }}>BigBoss CC</em>
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#888888', maxWidth: '500px', lineHeight: 1.8, marginBottom: '2.5rem' }}>
            Invest in Africa&apos;s growth. Build with us. Win with us.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button onClick={() => setActiveTab('investors')} className={activeTab === 'investors' ? 'btn-gold' : 'btn-secondary'}>
              For Investors
            </button>
            <button onClick={() => setActiveTab('clients')} className={activeTab === 'clients' ? 'btn-primary' : 'btn-secondary'}>
              For Clients & Government
            </button>
          </div>
        </div>
      </section>

      {/* TAB CONTENT */}
      {activeTab === 'investors' ? (
        <section style={{ padding: '6rem 2rem', background: '#0D0A00' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }} className="animate-on-scroll">
              <div>
                <div className="section-label" style={{ color: '#D4A017', marginBottom: '1rem' }}>◆ For Investors</div>
                <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', color: '#F5F5F0', lineHeight: 1.05, marginBottom: '1.5rem' }}>
                  Invest in SADC.<br /><em style={{ color: '#D4A017' }}>Build Nations.</em>
                </h2>
                <div className="accent-line" style={{ background: '#D4A017' }} />
                <p style={{ fontSize: '1.05rem', color: '#AAAAAA', lineHeight: 1.9, marginBottom: '1.5rem' }}>
                  Partner with BigBoss CC to fund SADC businesses, create jobs, and earn returns that build nations.
                </p>
                <p style={{ fontSize: '1rem', color: '#888888', lineHeight: 1.9, marginBottom: '2.5rem' }}>
                  We bring credentials, capacity, and a proven model. You bring capital, local insight, and network. Together we scale companies that solve real African problems.
                </p>
                <Link href="/contact#investors" className="btn-gold">Start the Conversation</Link>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ background: '#1A1500', border: '1px solid rgba(212,160,23,0.2)', padding: '2rem', borderLeft: '3px solid #D4A017' }}>
                  <div className="section-label" style={{ color: '#D4A017', marginBottom: '1.2rem' }}>Why SADC, Why Now</div>
                  {['Young, ambitious workforce', 'Untapped markets + resources', 'Government support for growth', 'Global trade doors opening'].map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '0.75rem' }}>
                      <CheckCircle size={16} style={{ color: '#D4A017', marginTop: '0.1rem', flexShrink: 0 }} />
                      <span style={{ fontSize: '0.95rem', color: '#CCCCCC' }}>{item}</span>
                    </div>
                  ))}
                </div>
                <div style={{ background: '#1A1500', border: '1px solid rgba(212,160,23,0.2)', padding: '2rem', borderLeft: '3px solid #D4A017' }}>
                  <div className="section-label" style={{ color: '#D4A017', marginBottom: '1.2rem' }}>What We Offer</div>
                  {['Transparent reporting', 'Deal flow across 16 SADC countries', 'Local execution team', 'Impact + ROI'].map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '0.75rem' }}>
                      <CheckCircle size={16} style={{ color: '#D4A017', marginTop: '0.1rem', flexShrink: 0 }} />
                      <span style={{ fontSize: '0.95rem', color: '#CCCCCC' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section style={{ padding: '6rem 2rem', background: '#0A0D0A' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }} className="animate-on-scroll">
              <div>
                <div className="section-label" style={{ marginBottom: '1rem' }}>◆ For Clients & Government</div>
                <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', color: '#F5F5F0', lineHeight: 1.05, marginBottom: '1.5rem' }}>
                  We Help You<br /><em style={{ color: '#CC0000' }}>Succeed</em>
                </h2>
                <div className="accent-line" />
                <p style={{ fontSize: '1.05rem', color: '#AAAAAA', lineHeight: 1.9, marginBottom: '1.5rem' }}>
                  Whether you&apos;re a company, organization, or government — BigBoss exists to help you win.
                </p>
                <Link href="/contact#clients" className="btn-primary">Request a Proposal</Link>
              </div>
              <div style={{ background: '#1A1A1A', border: '1px solid rgba(204,0,0,0.2)', padding: '2.5rem', borderLeft: '3px solid #CC0000' }}>
                <div className="section-label" style={{ marginBottom: '1.5rem' }}>We Help You</div>
                {[
                  'Succeed and scale using our expertise',
                  'Reduce costs and increase efficiency',
                  'Access new markets and trade deals',
                  'Train your people into leaders',
                  'Execute projects that deliver results',
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '1rem', paddingBottom: '1rem', borderBottom: i < 4 ? '1px solid #2A2A2A' : 'none' }}>
                    <span style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800, fontSize: '1.2rem', color: 'rgba(204,0,0,0.4)', lineHeight: 1, flexShrink: 0 }}>{String(i + 1).padStart(2, '0')}</span>
                    <span style={{ fontSize: '0.95rem', color: '#CCCCCC', lineHeight: 1.6 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section style={{ padding: '5rem 2rem', background: '#111111', textAlign: 'center', borderTop: '1px solid #2A2A2A' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }} className="animate-on-scroll">
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: '#F5F5F0', marginBottom: '1rem' }}>
            Let&apos;s build<br /><em style={{ color: '#CC0000' }}>together.</em>
          </h2>
          <p style={{ color: '#888888', marginBottom: '2rem' }}>Tell us who you are and what you need. We&apos;ll take it from there.</p>
          <Link href="/contact" className="btn-primary">Get in Touch</Link>
        </div>
      </section>
    </>
  );
}
