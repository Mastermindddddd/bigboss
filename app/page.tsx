'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, TrendingUp, Globe, Users, Briefcase, Zap, Shield } from 'lucide-react';

function CountUp({ end, suffix = '', duration = 2000 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
  const checkScreen = () => {
    setIsMobile(window.innerWidth < 768);
  };

  checkScreen();
  window.addEventListener('resize', checkScreen);

  return () => window.removeEventListener('resize', checkScreen);
}, []);

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

const services = [
  { icon: Briefcase, title: 'Corporate Strategy & Performance', desc: 'Diagnose gaps, build strategy, implement solutions so companies scale and compete globally.', outcomes: ['Efficiency', 'Profitability', 'Scale'] },
  { icon: Globe, title: 'Trade & Market Access', desc: 'Opening doors for Africa\'s companies into Europe and global markets. From compliance to first shipment.', outcomes: ['New Markets', 'Export Revenue', 'Trade Deals'] },
  { icon: Users, title: 'Leadership & Talent Development', desc: 'We train leaders and teams. BigBoss culture: excellence, discipline, ownership.', outcomes: ['Skilled Teams', 'Future Leaders', 'Ownership Culture'] },
  { icon: Zap, title: 'Digital Transformation & IT', desc: 'Programmers, SEO, IT specialists who modernize your business for African realities.', outcomes: ['Digital Systems', 'Automation', 'Growth Online'] },
];

const theme = {
    colorBackground: 'linear-gradient(135deg, #060606 0%, #0c0a0a 50%, #1a0202 100%)',
    colorGrid: 'rgba(204, 0, 0, 0.04)',
    colorGlow: 'radial-gradient(circle, rgba(204, 0, 0, 0.15) 0%, transparent 70%)',
    colorAccent: '#CC0000',
    colorTextLight: '#F5F5F0',
    colorTextMuted: '#A0A0A0',
    colorBorder: 'rgba(255, 255, 255, 0.08)',
  };

export default function Home() {
  const sectionsRef = useRef<NodeListOf<Element> | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  useEffect(() => {
    sectionsRef.current = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, { threshold: 0.1 });
    sectionsRef.current.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* HERO */}
      <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      background: theme.colorBackground,
      paddingTop: '80px',
    }}>
      {/* Background Grid Accent */}
      <div style={{
        position: 'absolute', 
        inset: 0,
        backgroundImage: `linear-gradient(${theme.colorGrid} 1px, transparent 1px), linear-gradient(90deg, ${theme.colorGrid} 1px, transparent 1px)`,
        backgroundSize: 'clamp(40px, 5vw, 70px) clamp(40px, 5vw, 70px)',
        pointerEvents: 'none',
        zIndex: 0,
      }} />

      {/* Atmospheric Red Glow */}
      <div style={{
        position: 'absolute', 
        top: '15%', 
        right: '-5%',
        width: 'clamp(300px, 50vw, 700px)', 
        height: 'clamp(300px, 50vw, 700px)',
        background: theme.colorGlow,
        pointerEvents: 'none',
        zIndex: 0,
        filter: 'blur(40px)',
      }} />

      {/* Large Decorative Background SADC Text */}
      <div style={{
        position: 'absolute', 
        right: '-1rem', 
        bottom: '10%',
        fontFamily: 'Barlow Condensed, sans-serif', 
        fontWeight: 900,
        fontSize: 'clamp(120px, 25vw, 320px)',
        color: 'rgba(204, 0, 0, 0.025)', 
        letterSpacing: '-0.06em',
        lineHeight: 1, 
        userSelect: 'none', 
        whiteSpace: 'nowrap',
        zIndex: 0,
      }}>
        SADC
      </div>

      {/* Main Content Container */}
      <div style={{ 
        maxWidth: '1440px', 
        margin: '0 auto', 
        padding: '3rem max(1.5rem, 5vw)', 
        position: 'relative', 
        zIndex: 1, 
        width: '100%' 
      }}>
        <div style={{ maxWidth: '850px' }}>
          
          {/* Subtitle Label */}
          <div className="section-label" style={{ 
            marginBottom: '2rem',
            fontFamily: 'Barlow Condensed, sans-serif',
            fontSize: '0.85rem',
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
            color: theme.colorAccent,
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontWeight: 500
          }}>
            <span style={{ fontSize: '0.6rem' }}>◆</span> BigBoss Corporate Consulting · Business Transformation Solutions
          </div>

          {/* Heading */}
          <h1 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(3.2rem, 8.5vw, 7.5rem)',
            fontWeight: 300,
            lineHeight: 1.0,
            marginBottom: '2rem',
            color: theme.colorTextLight,
            letterSpacing: '-0.02em',
          }}>
            Building<br />
            <em style={{ fontStyle: 'italic', color: theme.colorAccent, fontWeight: 400 }}>Africa&apos;s</em><br />
            <span style={{ fontWeight: 700, letterSpacing: '-0.01em' }}>Future</span>
          </h1>

          {/* Paragraph Description */}
          <p style={{ 
            fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)', 
            color: theme.colorTextMuted, 
            maxWidth: '560px', 
            lineHeight: 1.7, 
            marginBottom: '3rem', 
            fontWeight: 300 
          }}>
            We partner with companies and governments across SADC to turn potential into performance — creating jobs, building entrepreneurs, and driving global competitiveness.
          </p>

          {/* CTA Buttons */}
          <div style={{ 
            display: 'flex', 
            gap: '1.25rem', 
            flexWrap: 'wrap',
            marginBottom: '5rem' 
          }}>
            <Link href="/partnerships" className="btn-primary" style={{
              padding: '1rem 2.25rem',
              fontWeight: 500,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              fontSize: '0.85rem'
            }}>
              Partner With Us
            </Link>
            <Link href="/careers" className="btn-secondary" style={{
              padding: '1rem 2.25rem',
              fontWeight: 500,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              fontSize: '0.85rem'
            }}>
              Join Our Team
            </Link>
          </div>

          {/* Quick Stats Grid */}
          {/* Quick Stats Grid */}
<div style={{ 
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
  gap: '2.5rem 1.5rem', 
  paddingTop: '2.5rem', 
  borderTop: `1px solid ${theme.colorBorder}`,
}}>
  {[
    { value: 16, suffix: '', label: 'SADC Countries' },
    { value: 10000, suffix: '+', label: 'Jobs Goal' },
    { value: 500, suffix: '+', label: 'Businesses Helped' },
  ].map((stat, idx) => (
    <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
      <div style={{ 
        fontFamily: 'Cormorant Garamond, serif', 
        fontSize: 'clamp(2.5rem, 4vw, 3.25rem)', 
        fontWeight: 600, 
        color: theme.colorTextLight, 
        lineHeight: 1,
        letterSpacing: '-0.02em'
      }}>
        {/* Removed enableScrollSpy to resolve TS(2322) */}
        <CountUp end={stat.value} suffix={stat.suffix} />
      </div>
      <div style={{ 
        fontFamily: 'Barlow Condensed, sans-serif', 
        fontSize: '0.75rem', 
        letterSpacing: '0.15em', 
        textTransform: 'uppercase', 
        color: '#777777',
        fontWeight: 500
      }}>
        {stat.label}
      </div>
    </div>
  ))}
</div>

        </div>
      </div>
    </section>

      {/* VISION + MISSION */}
      <section style={{ background: '#111111', padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '0', overflow: 'hidden' }}
          className="animate-on-scroll">
          {[
            { label: 'Vision', icon: '◈', text: 'An economically empowered Africa where every SADC country thrives through strong businesses, skilled people, and global trade.' },
            { label: 'Mission', icon: '◆', text: 'To partner with companies and governments across SADC, creating jobs, building entrepreneurs, and delivering expertise that drives growth and global competitiveness.' },
          ].map((item, i) => (
            <div key={item.label} style={{
              padding: isMobile ? '2rem' : '3rem',
              background: i === 0 ? '#1A1A1A' : '#0F0F0F',
              borderTop: '3px solid',
              borderColor: i === 0 ? '#CC0000' : '#D4A017',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.2rem' }}>
                <span style={{ color: i === 0 ? '#CC0000' : '#D4A017', fontSize: '1.2rem' }}>{item.icon}</span>
                <span className="section-label" style={{ color: i === 0 ? '#CC0000' : '#D4A017' }}>{item.label}</span>
              </div>
              <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.35rem', fontWeight: 400, color: '#DDDDDD', lineHeight: 1.6, fontStyle: 'italic' }}>
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT SNIPPET */}
      <section style={{ padding: '6rem 2rem', background: '#0A0A0A', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', left: '-100px', top: '50%', transform: 'translateY(-50%)', fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800, fontSize: '18rem', color: 'rgba(255,255,255,0.015)', lineHeight: 1, userSelect: 'none' }}>AFRICA</div>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 2fr', gap: isMobile ? '2rem' : '5rem', alignItems: 'center', position: 'relative', zIndex: 1 }}
          className="animate-on-scroll">
          <div>
            <div className="section-label" style={{ marginBottom: '1rem' }}>Our Genesis</div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 600, color: '#F5F5F0', lineHeight: 1.05 }}>
              Born to Serve<br /><em style={{ color: '#CC0000' }}>Africa</em>
            </h2>
          </div>
          <div>
            <div className="accent-line" />
            <p style={{ fontSize: '1.1rem', color: '#AAAAAA', lineHeight: 1.9, marginBottom: '1.5rem', fontWeight: 300 }}>
              BigBoss Corporate Consulting was brought to life from a virtuous idea: <strong style={{ color: '#F5F5F0' }}>helping others win</strong>. We looked at Southern Africa and saw incredible talent, ambition, and resources — alongside organisations fighting uphill without the right systems, strategy, and support.
            </p>
            <p style={{ fontSize: '1.1rem', color: '#AAAAAA', lineHeight: 1.9, marginBottom: '2rem', fontWeight: 300 }}>
              So we built BigBoss to change that. To help companies and governments succeed, and to create means of survival for as many people in Africa as we can.
            </p>
            <Link href="/about" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', color: '#CC0000', textDecoration: 'none', fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 600, letterSpacing: '0.1em', fontSize: '0.8rem', textTransform: 'uppercase' }}>
              Read Full Story <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ padding: '6rem 2rem', background: '#111111' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }} className="animate-on-scroll">
            <div>
              <div className="section-label" style={{ marginBottom: '0.8rem' }}>What We Do</div>
              <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: '#F5F5F0' }}>Our Expertise</h2>
            </div>
            <Link href="/services" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', color: '#888888', textDecoration: 'none', fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 600, letterSpacing: '0.1em', fontSize: '0.8rem', textTransform: 'uppercase', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#F5F5F0')}
              onMouseLeave={e => (e.currentTarget.style.color = '#888888')}>
              See All Services <ArrowRight size={16} />
            </Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1px', background: '#2A2A2A' }}>
            {services.map((svc, i) => (
              <div key={svc.title} className="card animate-on-scroll" style={{
                background: '#111111', border: 'none', borderBottom: '3px solid',
                borderColor: i % 2 === 0 ? '#CC0000' : '#1A1A1A',
                transitionDelay: `${i * 0.1}s`,
              }}>
                <svc.icon size={28} style={{ color: '#CC0000', marginBottom: '1.2rem' }} />
                <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.4rem', color: '#F5F5F0', marginBottom: '0.8rem', lineHeight: 1.2 }}>{svc.title}</h3>
                <p style={{ fontSize: '0.9rem', color: '#888888', lineHeight: 1.7, marginBottom: '1.5rem' }}>{svc.desc}</p>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {svc.outcomes.map(o => (
                    <span key={o} style={{
                      fontFamily: 'Barlow Condensed, sans-serif', fontSize: '0.65rem',
                      letterSpacing: '0.08em', textTransform: 'uppercase',
                      color: '#CC0000', background: 'rgba(204,0,0,0.08)',
                      border: '1px solid rgba(204,0,0,0.2)', padding: '0.2rem 0.6rem',
                    }}>{o}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT NUMBERS */}
      <section style={{ padding: '5rem 2rem', background: '#CC0000', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', right: '-50px', top: '50%', transform: 'translateY(-50%)', fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800, fontSize: '20rem', color: 'rgba(0,0,0,0.1)', lineHeight: 1, userSelect: 'none' }}>IMPACT</div>
        <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div className="section-label" style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '2rem' }}>Our Impact Goals</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem' }}>
            {[
              { value: 16, suffix: '', label: 'SADC Countries Targeted' },
              { value: 10000, suffix: '+', label: 'Jobs Goal' },
              { value: 500, suffix: '+', label: 'Businesses to Support' },
              { value: 100, suffix: '%', label: 'African Talent' },
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

      {/* PARTNERSHIPS + CAREERS SPLIT */}
      <section style={{ background: '#0A0A0A' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
          {[
            {
              bg: '#111111',
              accent: '#D4A017',
              label: 'For Investors',
              title: 'Invest in SADC.\nBuild Nations.',
              desc: 'Partner with BigBoss CC to fund SADC businesses, create jobs, and earn returns that build nations. Together we scale companies that solve real African problems.',
              cta: 'Become a Partner',
              href: '/partnerships',
            },
            {
              bg: '#0F0F0F',
              accent: '#CC0000',
              label: 'For Talent',
              title: 'Train. Win.\nOwn.',
              desc: 'At BigBoss, a job is just the start. We hire locals and develop them into their best selves. Your path doesn\'t stop at employee — it leads to partnership.',
              cta: 'View Careers',
              href: '/careers',
            },
          ].map(col => (
            <div key={col.label} className="animate-on-scroll" style={{
              background: col.bg,
              padding: 'clamp(3rem, 6vw, 5rem)',
              borderTop: `3px solid ${col.accent}`,
            }}>
              <div className="section-label" style={{ color: col.accent, marginBottom: '1.2rem' }}>{col.label}</div>
              <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: '#F5F5F0', whiteSpace: 'pre-line', marginBottom: '1.5rem', lineHeight: 1.05 }}>{col.title}</h2>
              <p style={{ color: '#888888', fontSize: '1rem', lineHeight: 1.8, marginBottom: '2rem', maxWidth: '380px' }}>{col.desc}</p>
              <Link href={col.href} className={col.accent === '#D4A017' ? 'btn-gold' : 'btn-primary'}>
                {col.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTA BAR */}
      <section style={{ padding: '5rem 2rem', background: '#080808', textAlign: 'center', borderTop: '1px solid #2A2A2A' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }} className="animate-on-scroll">
          <div className="section-label" style={{ marginBottom: '1rem' }}>Ready?</div>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 5vw, 4rem)', color: '#F5F5F0', marginBottom: '1rem', lineHeight: 1.1 }}>
            Ready to Build<br /><em style={{ color: '#CC0000' }}>With Us?</em>
          </h2>
          <p style={{ color: '#888888', marginBottom: '2.5rem', fontSize: '1.05rem' }}>Every challenge is different. Let&apos;s talk about yours.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary">Contact BigBoss</Link>
            <Link href="/services" className="btn-secondary">Explore Services</Link>
          </div>
        </div>
      </section>
    </>
  );
}
