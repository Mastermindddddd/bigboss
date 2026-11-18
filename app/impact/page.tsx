'use client';
import HeroScene from '@/app/components/HeroScene';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { TrendingUp, Users, Globe, BarChart2 } from 'lucide-react';

function CountUp({ end, suffix = '', duration = 2000 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const start = Date.now();
        const tick = () => {
          const elapsed = Date.now() - start;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Math.floor(eased * end));
          if (progress < 1) requestAnimationFrame(tick);
          else setCount(end);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);
  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

const sadcCountries = [
  { name: 'South Africa', status: 'HQ', lat: 29, lng: 25 },
  { name: 'Botswana', status: 'Expanding', lat: 22, lng: 24 },
  { name: 'Zimbabwe', status: 'Expanding', lat: 20, lng: 30 },
  { name: 'Zambia', status: 'Expanding', lat: 15, lng: 28 },
  { name: 'Mozambique', status: 'Expanding', lat: 18, lng: 35 },
  { name: 'Tanzania', status: 'Expanding', lat: 6, lng: 35 },
  { name: 'Namibia', status: 'Expanding', lat: 22, lng: 17 },
  { name: 'Angola', status: 'Expanding', lat: 12, lng: 18 },
  { name: 'DRC', status: 'Expanding', lat: 4, lng: 24 },
  { name: 'Malawi', status: 'Expanding', lat: 13, lng: 34 },
  { name: 'Madagascar', status: 'Expanding', lat: 20, lng: 47 },
  { name: 'Mauritius', status: 'Expanding', lat: 20, lng: 57 },
  { name: 'Lesotho', status: 'Expanding', lat: 29, lng: 28 },
  { name: 'Eswatini', status: 'Expanding', lat: 26, lng: 31 },
  { name: 'Comoros', status: 'Expanding', lat: 12, lng: 44 },
  { name: 'Seychelles', status: 'Expanding', lat: 5, lng: 55 },
];

const impact = [
  { icon: Users, title: 'Reduce Unemployment', desc: 'We create survival through jobs and entrepreneurship, bettering the lives of African men and women.' },
  { icon: TrendingUp, title: 'Grow GDP', desc: 'Stronger companies mean stronger national economies. Every business we support grows the country.' },
  { icon: BarChart2, title: 'Develop Talent', desc: 'We train MBA, finance, IT, and management talent into leaders and future business owners.' },
  { icon: Globe, title: 'Open Trade', desc: 'We negotiate export/import deals between Africa, Europe, and the world — breaking down barriers.' },
];

export default function Impact() {
  useEffect(() => {
    const els = document.querySelectorAll('.animate-on-scroll');
    const obs = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }), { threshold: 0.1 });
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="bb-corporate-hero bb-hero-impact" style={{ minHeight: '55vh', display: 'flex', alignItems: 'center', background: 'linear-gradient(135deg, #080808, #0D0000)', paddingTop: '72px', position: 'relative', overflow: 'hidden' }}>
        <HeroScene variant="impact"/>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(rgba(204,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(204,0,0,0.04) 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />
        <div style={{ position: 'absolute', right: '-50px', bottom: 0, fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800, fontSize: '16rem', color: 'rgba(204,0,0,0.05)', lineHeight: 1, userSelect: 'none' }}>IMPACT</div>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '4rem 2rem', position: 'relative', zIndex: 1 }}>
          <div className="section-label" style={{ marginBottom: '1rem' }}>Impact</div>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(3rem, 8vw, 7rem)', fontWeight: 300, color: '#F5F5F0', lineHeight: 0.95, marginBottom: '1.5rem' }}>
            Our Impact<br /><em style={{ color: '#CC0000', fontWeight: 700 }}>on Africa</em>
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#888888', maxWidth: '500px', lineHeight: 1.8 }}>
            Profit matters. Impact matters more. Jobs created, businesses grown, lives changed.
          </p>
        </div>
      </section>

      {/* STATS BAR */}
      <section style={{ padding: '5rem 2rem', background: '#CC0000', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', right: '-50px', top: '50%', transform: 'translateY(-50%)', fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800, fontSize: '16rem', color: 'rgba(0,0,0,0.1)', lineHeight: 1, userSelect: 'none' }}>16</div>
        <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div className="section-label" style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '2rem' }}>Impact by the Numbers</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem' }}>
            {[
              { value: 16, suffix: '', label: 'SADC Countries Targeted' },
              { value: 10000, suffix: '+', label: 'Jobs Goal' },
              { value: 500, suffix: '+', label: 'Businesses to Support' },
              { value: 2030, suffix: '', label: 'Vision Year' },
            ].map(stat => (
              <div key={stat.label} className="animate-on-scroll">
                <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: 700, color: '#F5F5F0', lineHeight: 1 }}>
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </div>
                <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginTop: '0.5rem' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE CREATE IMPACT */}
      <section style={{ padding: '6rem 2rem', background: '#111111' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ marginBottom: '3rem' }} className="animate-on-scroll">
            <div className="section-label" style={{ marginBottom: '1rem' }}>How We Do It</div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: '#F5F5F0' }}>How We Create Impact</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
            {impact.map((item, i) => (
              <div key={item.title} className="card animate-on-scroll" style={{ background: '#1A1A1A', borderTop: `3px solid ${i % 2 === 0 ? '#CC0000' : '#D4A017'}`, transitionDelay: `${i * 0.1}s` }}>
                <item.icon size={28} style={{ color: i % 2 === 0 ? '#CC0000' : '#D4A017', marginBottom: '1.2rem' }} />
                <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.5rem', color: '#F5F5F0', marginBottom: '0.8rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.9rem', color: '#888888', lineHeight: 1.8 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SADC MAP SECTION */}
      <section style={{ padding: '6rem 2rem', background: '#0A0A0A' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ marginBottom: '3rem' }} className="animate-on-scroll">
            <div className="section-label" style={{ marginBottom: '1rem' }}>Presence</div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: '#F5F5F0', marginBottom: '1rem' }}>
              Present in Every<br /><em style={{ color: '#CC0000' }}>SADC Country</em>
            </h2>
            <p style={{ fontSize: '1rem', color: '#888888', maxWidth: '500px', lineHeight: 1.8 }}>
              BigBoss CC is expanding into all 16 SADC countries. Because Africa&apos;s success should not have borders.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '1rem' }}>
            {sadcCountries.map((c, i) => (
              <div key={c.name} className="animate-on-scroll" style={{
                background: c.status === 'HQ' ? 'rgba(204,0,0,0.1)' : '#1A1A1A',
                border: `1px solid ${c.status === 'HQ' ? '#CC0000' : '#2A2A2A'}`,
                padding: '1.2rem',
                transitionDelay: `${i * 0.03}s`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '0.5rem',
              }}>
                <span style={{ fontFamily: 'Barlow, sans-serif', fontSize: '0.9rem', color: c.status === 'HQ' ? '#F5F5F0' : '#AAAAAA', fontWeight: c.status === 'HQ' ? 600 : 300 }}>{c.name}</span>
                <span style={{
                  fontFamily: 'Barlow Condensed, sans-serif', fontSize: '0.55rem',
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  color: c.status === 'HQ' ? '#CC0000' : '#555555',
                  background: c.status === 'HQ' ? 'rgba(204,0,0,0.15)' : '#111111',
                  padding: '0.15rem 0.4rem',
                  flexShrink: 0,
                }}>{c.status}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '5rem 2rem', background: '#111111', textAlign: 'center', borderTop: '1px solid #2A2A2A' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }} className="animate-on-scroll">
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: '#F5F5F0', marginBottom: '1rem' }}>
            Be part of the<br /><em style={{ color: '#CC0000' }}>impact story.</em>
          </h2>
          <p style={{ color: '#888888', marginBottom: '2rem' }}>Invest in a future where Africa leads.</p>
          <Link href="/partnerships" className="btn-primary">Partner With Us</Link>
        </div>
      </section>
    </>
  );
}
