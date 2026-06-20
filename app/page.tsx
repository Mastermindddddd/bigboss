'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, TrendingUp, Globe, Users, Briefcase, Zap, Shield } from 'lucide-react';

// Images
import planImg from '@/public/images/plan.jpeg';
import thunesImg from '@/public/images/thunes.jpeg';
import supplyImg from '@/public/images/supply.jpeg';
import teamImg from '@/public/images/team.jpeg';
import growthImg from '@/public/images/growth.jpeg';

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

const services = [
  { icon: Briefcase, title: 'Corporate Strategy & Performance', desc: 'Diagnose gaps, build strategy, implement solutions so companies scale and compete globally.', outcomes: ['Efficiency', 'Profitability', 'Scale'] },
  { icon: Globe, title: 'Trade & Market Access', desc: "Opening doors for Africa's companies into Europe and global markets. From compliance to first shipment.", outcomes: ['New Markets', 'Export Revenue', 'Trade Deals'] },
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

const homeStyles = `
  /* HERO entrance animation */
  @keyframes heroRise {
    from { opacity: 0; transform: translateY(22px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes heroFadeScale {
    from { opacity: 0; transform: scale(1.04); }
    to   { opacity: 1; transform: scale(1); }
  }
  @keyframes badgePop {
    0%   { opacity: 0; transform: translateY(10px) scale(0.92); }
    100% { opacity: 1; transform: translateY(0) scale(1); }
  }
  @keyframes scrollCue {
    0%, 100% { transform: translateY(0); opacity: 0.4; }
    50%      { transform: translateY(8px); opacity: 1; }
  }
  .hero-reveal {
    opacity: 0;
    animation: heroRise 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }
  .hero-img-reveal {
    opacity: 0;
    animation: heroFadeScale 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }
  .hero-badge-reveal {
    opacity: 0;
    animation: badgePop 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
  }
  @media (prefers-reduced-motion: reduce) {
    .hero-reveal, .hero-img-reveal, .hero-badge-reveal {
      opacity: 1 !important;
      animation: none !important;
      transform: none !important;
    }
    .scroll-cue-dot { animation: none !important; }
  }

  /* HERO */
  .hero-inner {
    display: grid;
    grid-template-columns: 1.05fr 0.95fr;
    gap: 4rem;
    align-items: center;
    max-width: 1440px;
    margin: 0 auto;
    padding: 3rem max(1.5rem, 4vw);
    position: relative;
    zIndex: 1;
    width: 100%;
  }
  .hero-img-frame {
    position: relative;
    height: 520px;
  }
  .hero-img-wrap {
    position: relative;
    height: 100%;
    border-radius: 2px;
    overflow: hidden;
    box-shadow: 0 30px 80px -20px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.06);
  }
  .hero-stats {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 2rem 1.5rem;
    padding-top: 2.5rem;
    border-top: 1px solid rgba(255,255,255,0.08);
    margin-top: 3rem;
  }

  /* VISION/MISSION */
  .vm-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0;
    overflow: hidden;
  }
  .vm-item {
    padding: 3rem;
  }

  /* ABOUT */
  .about-grid {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 5rem;
    align-items: center;
    position: relative;
    z-index: 1;
  }
  .about-img-wrap {
    position: relative;
    height: 320px;
    margin-top: 2rem;
    border-radius: 2px;
    overflow: hidden;
  }

  /* SERVICES */
  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 1px;
    background: #2A2A2A;
  }

  /* IMPACT */
  .impact-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 3rem;
  }

  /* SPLIT */
  .split-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .split-item {
    padding: clamp(2.5rem, 6vw, 5rem);
  }
  .split-img-wrap {
    position: relative;
    height: 220px;
    margin-top: 2rem;
    border-radius: 2px;
    overflow: hidden;
  }

  /* TABLET */
  @media (max-width: 900px) {
    .hero-inner {
      grid-template-columns: 1fr;
      gap: 3rem;
    }
    .hero-img-frame {
      height: 320px;
    }
    .about-grid {
      grid-template-columns: 1fr;
      gap: 2.5rem;
    }
    .vm-grid {
      grid-template-columns: 1fr;
    }
    .vm-item {
      padding: 2rem 1.5rem;
    }
    .split-grid {
      grid-template-columns: 1fr;
    }
  }

  /* MOBILE */
  @media (max-width: 600px) {
    .hero-img-frame {
      height: 240px;
    }
    .about-img-wrap {
      height: 220px;
    }
    .hero-stats {
      grid-template-columns: repeat(3, 1fr);
      gap: 1.25rem;
    }
    .impact-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem;
    }
    .split-item {
      padding: 2.5rem 1.25rem;
    }
    .split-img-wrap {
      height: 180px;
    }
  }
`;

export default function Home() {
  const sectionsRef = useRef<NodeListOf<Element> | null>(null);

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
      <style>{homeStyles}</style>

      {/* ── HERO ── */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: theme.colorBackground,
        paddingTop: '80px',
      }}>
        {/* Grid */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `linear-gradient(${theme.colorGrid} 1px, transparent 1px), linear-gradient(90deg, ${theme.colorGrid} 1px, transparent 1px)`,
          backgroundSize: 'clamp(40px, 5vw, 70px) clamp(40px, 5vw, 70px)',
          pointerEvents: 'none', zIndex: 0,
        }} />
        {/* Glow */}
        <div style={{
          position: 'absolute', top: '15%', right: '-5%',
          width: 'clamp(300px, 50vw, 700px)', height: 'clamp(300px, 50vw, 700px)',
          background: theme.colorGlow, pointerEvents: 'none', zIndex: 0, filter: 'blur(40px)',
        }} />
        {/* SADC watermark */}
        <div style={{
          position: 'absolute', right: '-1rem', bottom: '10%',
          fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 900,
          fontSize: 'clamp(80px, 20vw, 320px)',
          color: 'rgba(204,0,0,0.025)', letterSpacing: '-0.06em',
          lineHeight: 1, userSelect: 'none', whiteSpace: 'nowrap', zIndex: 0,
        }}>SADC</div>

        <div className="hero-inner">
          {/* Text side */}
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div className="section-label hero-reveal" style={{
              marginBottom: '2rem',
              animationDelay: '0.05s',
              fontFamily: 'Barlow Condensed, sans-serif', fontSize: '0.85rem',
              textTransform: 'uppercase', letterSpacing: '0.2em',
              color: theme.colorAccent, display: 'flex', alignItems: 'center',
              gap: '0.5rem', fontWeight: 500,
            }}>
              <span style={{ fontSize: '0.6rem' }}>◆</span> BigBoss Corporate Consulting · Business Transformation Solutions
            </div>
            <h1 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(3rem, 8.5vw, 7.5rem)',
              fontWeight: 300, lineHeight: 1.0, marginBottom: '2rem',
              color: theme.colorTextLight, letterSpacing: '-0.02em',
            }}>
              <span className="hero-reveal" style={{ display: 'block', animationDelay: '0.18s' }}>Building</span>
              <em className="hero-reveal" style={{ display: 'block', fontStyle: 'italic', color: theme.colorAccent, fontWeight: 400, animationDelay: '0.3s' }}>Africa&apos;s</em>
              <span className="hero-reveal" style={{ display: 'block', fontWeight: 700, letterSpacing: '-0.01em', animationDelay: '0.42s' }}>Future</span>
            </h1>
            <p className="hero-reveal" style={{
              fontSize: 'clamp(1rem, 1.8vw, 1.25rem)', color: theme.colorTextMuted,
              maxWidth: '520px', lineHeight: 1.7, marginBottom: '3rem', fontWeight: 300,
              animationDelay: '0.54s',
            }}>
              We partner with companies and governments across SADC to turn potential into performance — creating jobs, building entrepreneurs, and driving global competitiveness.
            </p>
            <div className="hero-reveal" style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap', marginBottom: '0', animationDelay: '0.66s' }}>
              <Link href="/partnerships" className="btn-primary" style={{
                padding: '1rem 2.25rem', fontWeight: 500,
                letterSpacing: '0.05em', textTransform: 'uppercase', fontSize: '0.85rem',
              }}>Partner With Us</Link>
              <Link href="/careers" className="btn-secondary" style={{
                padding: '1rem 2.25rem', fontWeight: 500,
                letterSpacing: '0.05em', textTransform: 'uppercase', fontSize: '0.85rem',
              }}>Join Our Team</Link>
            </div>
            {/* Stats */}
            <div className="hero-stats hero-reveal" style={{ animationDelay: '0.78s' }}>
              {[
                { value: 16, suffix: '', label: 'SADC Countries' },
                { value: 10000, suffix: '+', label: 'Jobs Goal' },
                { value: 500, suffix: '+', label: 'Businesses Helped' },
              ].map((stat, idx) => (
                <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                  <div style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: 'clamp(2.2rem, 4vw, 3.25rem)',
                    fontWeight: 600, color: theme.colorTextLight, lineHeight: 1, letterSpacing: '-0.02em',
                  }}>
                    <CountUp end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div style={{
                    fontFamily: 'Barlow Condensed, sans-serif', fontSize: '0.7rem',
                    letterSpacing: '0.15em', textTransform: 'uppercase', color: '#777777', fontWeight: 500,
                  }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* thunes.jpeg — hero visual with gold corner frame and floating badge */}
          <div className="hero-img-frame hero-img-reveal" style={{ animationDelay: '0.3s' }}>
            {/* Gold corner accent — offset behind the frame */}
            <div style={{
              position: 'absolute', top: '-14px', left: '-14px',
              width: '70px', height: '70px',
              borderTop: '2px solid #D4A017', borderLeft: '2px solid #D4A017',
              zIndex: 2, pointerEvents: 'none',
            }} />
            <div style={{
              position: 'absolute', bottom: '-14px', right: '-14px',
              width: '70px', height: '70px',
              borderBottom: '2px solid #CC0000', borderRight: '2px solid #CC0000',
              zIndex: 2, pointerEvents: 'none',
            }} />

            <div className="hero-img-wrap">
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(135deg, rgba(204,0,0,0.18) 0%, transparent 55%)',
                zIndex: 1,
              }} />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(8,8,8,0.55) 0%, transparent 35%)',
                zIndex: 1,
              }} />
              <Image
                src={thunesImg}
                alt="Strategic business planning and connections"
                fill
                loading="eager"
                sizes="(max-width: 900px) 100vw, 50vw"
                style={{ objectFit: 'cover', filter: 'brightness(0.88) contrast(1.05)' }}
              />
              <div style={{
                position: 'absolute', bottom: '1.5rem', left: '1.5rem', zIndex: 2,
                background: 'rgba(8,8,8,0.75)', backdropFilter: 'blur(8px)',
                padding: '0.7rem 1.2rem', borderLeft: '3px solid #CC0000',
              }}>
                <p style={{
                  fontFamily: 'Barlow Condensed, sans-serif', fontSize: '0.7rem',
                  letterSpacing: '0.15em', color: '#CC0000', textTransform: 'uppercase', margin: 0,
                }}>Strategy &amp; Planning</p>
              </div>
            </div>

            {/* Floating badge breaking the frame edge */}
            <div className="hero-badge-reveal" style={{
              position: 'absolute', top: '24px', right: '14px', zIndex: 3,
              animationDelay: '0.9s',
              background: '#0A0A0A',
              border: '1px solid rgba(212,160,23,0.35)',
              padding: '0.85rem 1.1rem',
              boxShadow: '0 16px 40px -10px rgba(0,0,0,0.6)',
              display: 'flex', alignItems: 'center', gap: '0.6rem',
            }}>
              <span style={{ color: '#D4A017', fontSize: '1.1rem', lineHeight: 1 }}>◆</span>
              <div>
                <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem', color: '#F5F5F0', margin: 0, lineHeight: 1.1, fontStyle: 'italic' }}>16 Nations</p>
                <p style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '0.6rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#777777', margin: 0 }}>One Vision</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="hero-reveal" style={{
          position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)',
          zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.6rem',
          animationDelay: '1.1s',
        }}>
          <span style={{
            fontFamily: 'Barlow Condensed, sans-serif', fontSize: '0.65rem',
            letterSpacing: '0.25em', textTransform: 'uppercase', color: '#555555',
          }}>Scroll</span>
          <div className="scroll-cue-dot" style={{
            width: '1px', height: '32px',
            background: 'linear-gradient(to bottom, #CC0000, transparent)',
            animation: 'scrollCue 2s ease-in-out infinite',
          }} />
        </div>
      </section>

      {/* ── VISION + MISSION ── */}
      <section style={{ background: '#111111', padding: 'clamp(3rem, 5vw, 5rem) 2rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }} className="animate-on-scroll">
          <div className="vm-grid" style={{ background: '#1A1A1A' }}>
            {[
              { label: 'Vision', icon: '◈', text: 'An economically empowered Africa where every SADC country thrives through strong businesses, skilled people, and global trade.', color: '#CC0000', bg: '#1A1A1A' },
              { label: 'Mission', icon: '◆', text: 'To partner with companies and governments across SADC, creating jobs, building entrepreneurs, and delivering expertise that drives growth and global competitiveness.', color: '#D4A017', bg: '#0F0F0F' },
            ].map((item, i) => (
              <div key={item.label} className="vm-item" style={{ background: item.bg, borderTop: `3px solid ${item.color}` }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.2rem' }}>
                  <span style={{ color: item.color, fontSize: '1.2rem' }}>{item.icon}</span>
                  <span className="section-label" style={{ color: item.color }}>{item.label}</span>
                </div>
                <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.1rem, 2vw, 1.35rem)', fontWeight: 400, color: '#DDDDDD', lineHeight: 1.6, fontStyle: 'italic' }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT SNIPPET ── */}
      <section style={{ padding: 'clamp(4rem, 6vw, 6rem) 2rem', background: '#0A0A0A', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', left: '-100px', top: '50%', transform: 'translateY(-50%)',
          fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800, fontSize: 'clamp(6rem, 18vw, 18rem)',
          color: 'rgba(255,255,255,0.015)', lineHeight: 1, userSelect: 'none', pointerEvents: 'none',
        }}>AFRICA</div>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }} className="animate-on-scroll">
          <div className="about-grid">
            <div>
              <div className="section-label" style={{ marginBottom: '1rem' }}>Our Genesis</div>
              <h2 style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(2.2rem, 5vw, 4.5rem)', fontWeight: 600,
                color: '#F5F5F0', lineHeight: 1.05,
              }}>
                Born to Serve<br /><em style={{ color: '#CC0000' }}>Africa</em>
              </h2>
              {/* team.jpeg — the BigBoss team, placed under genesis heading */}
              <div className="about-img-wrap">
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,10,10,0.5) 0%, transparent 60%)', zIndex: 1 }} />
                <Image
                  src={teamImg}
                  alt="The BigBoss team"
                  fill
                  sizes="(max-width: 900px) 100vw, 33vw"
                  style={{ objectFit: 'contain', objectPosition: 'center bottom', filter: 'brightness(0.92)' }}
                />
              </div>
            </div>
            <div>
              <div className="accent-line" />
              <p style={{ fontSize: '1.1rem', color: '#AAAAAA', lineHeight: 1.9, marginBottom: '1.5rem', fontWeight: 300 }}>
                BigBoss Corporate Consulting was brought to life from a virtuous idea: <strong style={{ color: '#F5F5F0' }}>helping others win</strong>. We looked at Southern Africa and saw incredible talent, ambition, and resources — alongside organisations fighting uphill without the right systems, strategy, and support.
              </p>
              <p style={{ fontSize: '1.1rem', color: '#AAAAAA', lineHeight: 1.9, marginBottom: '2rem', fontWeight: 300 }}>
                So we built BigBoss to change that. To help companies and governments succeed, and to create means of survival for as many people in Africa as we can.
              </p>
              <Link href="/about" style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
                color: '#CC0000', textDecoration: 'none',
                fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 600,
                letterSpacing: '0.1em', fontSize: '0.8rem', textTransform: 'uppercase',
              }}>
                Read Full Story <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section style={{ padding: 'clamp(4rem, 6vw, 6rem) 2rem', background: '#111111' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }} className="animate-on-scroll">
            <div>
              <div className="section-label" style={{ marginBottom: '0.8rem' }}>What We Do</div>
              <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: '#F5F5F0' }}>Our Expertise</h2>
            </div>
            <Link href="/services" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
              color: '#888888', textDecoration: 'none',
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 600,
              letterSpacing: '0.1em', fontSize: '0.8rem', textTransform: 'uppercase', transition: 'color 0.2s',
            }}
              onMouseEnter={e => (e.currentTarget.style.color = '#F5F5F0')}
              onMouseLeave={e => (e.currentTarget.style.color = '#888888')}>
              See All Services <ArrowRight size={16} />
            </Link>
          </div>

          {/* supply.jpeg — full-width banner above service cards */}
          <div style={{ position: 'relative', height: 'clamp(160px, 25vw, 280px)', marginBottom: '1px', overflow: 'hidden' }} className="animate-on-scroll">
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(8,8,8,0.85) 0%, rgba(8,8,8,0.3) 50%, rgba(8,8,8,0.85) 100%)', zIndex: 1 }} />
            <Image
              src={supplyImg}
              alt="Trade and supply chain management"
              fill
              sizes="100vw"
              style={{ objectFit: 'cover', filter: 'brightness(0.7) saturate(0.8)' }}
            />
            <div style={{ position: 'absolute', inset: 0, zIndex: 2, display: 'flex', alignItems: 'center', padding: '0 2.5rem' }}>
              <div>
                <p style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '0.7rem', letterSpacing: '0.2em', color: '#CC0000', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Trade &amp; Supply Chain</p>
                <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.3rem, 3vw, 2rem)', color: '#F5F5F0', fontStyle: 'italic', margin: 0 }}>
                  "Connecting Africa to the world, one deal at a time."
                </p>
              </div>
            </div>
          </div>

          <div className="services-grid">
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

      {/* ── IMPACT NUMBERS ── */}
      <section style={{ padding: 'clamp(3.5rem, 5vw, 5rem) 2rem', background: '#CC0000', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', right: '-50px', top: '50%', transform: 'translateY(-50%)',
          fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
          fontSize: 'clamp(6rem, 20vw, 20rem)', color: 'rgba(0,0,0,0.1)',
          lineHeight: 1, userSelect: 'none', pointerEvents: 'none',
        }}>IMPACT</div>
        <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div className="section-label" style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '2rem' }}>Our Impact Goals</div>
          <div className="impact-grid">
            {[
              { value: 16, suffix: '', label: 'SADC Countries Targeted' },
              { value: 10000, suffix: '+', label: 'Jobs Goal' },
              { value: 500, suffix: '+', label: 'Businesses to Support' },
              { value: 100, suffix: '%', label: 'African Talent' },
            ].map(stat => (
              <div key={stat.label} className="animate-on-scroll">
                <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 700, color: '#F5F5F0', lineHeight: 1 }}>
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </div>
                <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginTop: '0.5rem' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARTNERSHIPS + CAREERS SPLIT ── */}
      <section style={{ background: '#0A0A0A' }}>
        <div className="split-grid">
          {[
            {
              bg: '#111111', accent: '#D4A017', label: 'For Investors',
              title: 'Invest in SADC.\nBuild Nations.',
              desc: 'Partner with BigBoss CC to fund SADC businesses, create jobs, and earn returns that build nations. Together we scale companies that solve real African problems.',
              cta: 'Become a Partner', href: '/partnerships',
              img: planImg, imgAlt: 'Strategic plan A or plan B — always a plan',
              imgLabel: 'Strategic Partnerships',
            },
            {
              bg: '#0F0F0F', accent: '#CC0000', label: 'For Talent',
              title: 'Train. Win.\nOwn.',
              desc: "At BigBoss, a job is just the start. We hire locals and develop them into their best selves. Your path doesn't stop at employee — it leads to partnership.",
              cta: 'View Careers', href: '/careers',
              img: growthImg, imgAlt: 'Business consulting and growth strategy',
              imgLabel: 'Career Growth',
            },
          ].map(col => (
            <div key={col.label} className="split-item animate-on-scroll" style={{ background: col.bg, borderTop: `3px solid ${col.accent}` }}>
              <div className="section-label" style={{ color: col.accent, marginBottom: '1.2rem' }}>{col.label}</div>
              <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: '#F5F5F0', whiteSpace: 'pre-line', marginBottom: '1.5rem', lineHeight: 1.05 }}>{col.title}</h2>
              <p style={{ color: '#888888', fontSize: '1rem', lineHeight: 1.8, marginBottom: '2rem', maxWidth: '380px' }}>{col.desc}</p>
              <Link href={col.href} className={col.accent === '#D4A017' ? 'btn-gold' : 'btn-primary'}>{col.cta}</Link>
              {/* Image below CTA */}
              <div className="split-img-wrap">
                <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to top, ${col.bg} 0%, transparent 50%)`, zIndex: 1 }} />
                <Image
                  src={col.img}
                  alt={col.imgAlt}
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                  style={{ objectFit: 'cover', filter: 'brightness(0.82)' }}
                />
                <div style={{ position: 'absolute', bottom: '1rem', left: '1rem', zIndex: 2, background: 'rgba(8,8,8,0.7)', backdropFilter: 'blur(6px)', padding: '0.5rem 0.9rem', borderLeft: `2px solid ${col.accent}` }}>
                  <p style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '0.65rem', letterSpacing: '0.15em', color: col.accent, textTransform: 'uppercase', margin: 0 }}>{col.imgLabel}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA BAR ── */}
      <section style={{ padding: 'clamp(3.5rem, 5vw, 5rem) 2rem', background: '#080808', textAlign: 'center', borderTop: '1px solid #2A2A2A' }}>
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