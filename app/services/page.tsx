'use client';
import HeroScene from '@/app/components/HeroScene';
import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Briefcase, Globe, Users, Settings, Zap, Shield, GraduationCap, ArrowRight } from 'lucide-react';

import suitImg from '@/public/images/suit.png';

const services = [
  {
    icon: Briefcase,
    title: 'Corporate Strategy & Performance',
    desc: 'We bring structure, systems, and execution. Diagnose gaps, build strategy, implement solutions so companies scale and compete globally.',
    outcomes: ['Efficiency', 'Profitability', 'Scale'],
    color: '#CC0000',
  },
  {
    icon: Shield,
    title: 'Government Advisory & Policy',
    desc: 'We work with governments to reduce unemployment and increase GDP. Data-driven advice, project design, and execution support for national impact.',
    outcomes: ['Jobs', 'GDP Growth', 'Policy Impact'],
    color: '#D4A017',
  },
  {
    icon: Globe,
    title: 'Trade & Market Access',
    desc: "We negotiate business export and import deals. Opening doors for Africa's companies into Europe and global markets. From compliance to first shipment.",
    outcomes: ['New Markets', 'Export Revenue', 'Trade Deals'],
    color: '#CC0000',
  },
  {
    icon: Users,
    title: 'Leadership & Talent Development',
    desc: 'We train leaders and teams. MBA graduates to managers. BigBoss culture: excellence, discipline, ownership. Custom programs + in-house training.',
    outcomes: ['Skilled Teams', 'Future Leaders', 'Ownership Culture'],
    color: '#D4A017',
  },
  {
    icon: Settings,
    title: 'Project Management & Execution',
    desc: 'Big ideas fail without delivery. We manage complex projects end-to-end. On time, on budget, measurable results.',
    outcomes: ['On-time Delivery', 'Risk Reduction', 'Results'],
    color: '#CC0000',
  },
  {
    icon: Zap,
    title: 'Digital Transformation & IT',
    desc: 'Programmers, SEO, IT specialists who modernize your business. Websites, systems, data, automation built for African realities.',
    outcomes: ['Digital Systems', 'Automation', 'Growth Online'],
    color: '#D4A017',
  },
];

const servicesStyles = `
  .svc-hero-inner {
    display: grid;
    grid-template-columns: 1.15fr 0.85fr;
    gap: 3rem;
    align-items: center;
    max-width: 1400px;
    margin: 0 auto;
    padding: 4rem 2rem;
    position: relative;
    z-index: 1;
    width: 100%;
  }
  .svc-hero-img-wrap {
    position: relative;
    height: 460px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
  }
  .svc-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
    gap: 1rem;
  }
  .svc-watermark {
    position: absolute;
    top: 20%;
    right: 5%;
    font-family: 'Barlow Condensed', sans-serif;
    font-weight: 800;
    font-size: clamp(8rem, 16vw, 16rem);
    color: rgba(204,0,0,0.05);
    line-height: 1;
    user-select: none;
    pointer-events: none;
    white-space: nowrap;
  }
  .svc-cta-btn {
    width: auto;
  }

  /* ACADEMY FEATURE BANNER */
  .svc-academy-banner {
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: 2rem;
    align-items: center;
    padding: 2.5rem 2.75rem;
    background: linear-gradient(120deg, #15110A 0%, #1A1208 60%, #15110A 100%);
    border: 1px solid rgba(212,160,23,0.3);
    position: relative;
    overflow: hidden;
  }
  .svc-academy-watermark {
    position: absolute;
    right: -1rem;
    bottom: -1.5rem;
    font-family: 'Barlow Condensed', sans-serif;
    font-weight: 800;
    font-size: 7rem;
    color: rgba(212,160,23,0.06);
    line-height: 1;
    user-select: none;
    pointer-events: none;
    white-space: nowrap;
  }
  .svc-academy-icon-wrap {
    width: 64px;
    height: 64px;
    flex-shrink: 0;
    background: rgba(212,160,23,0.12);
    border: 1px solid rgba(212,160,23,0.35);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* TABLET */
  @media (max-width: 900px) {
    .svc-hero-inner {
      grid-template-columns: 1fr;
      padding: 3rem 1.5rem;
      gap: 2rem;
      text-align: center;
    }
    .svc-hero-text p {
      margin-left: auto;
      margin-right: auto;
    }
    .svc-hero-img-wrap {
      height: 340px;
      order: -1;
    }
    .svc-watermark {
      top: 8%;
      right: -8%;
      opacity: 0.7;
    }
    .svc-academy-banner {
      grid-template-columns: 1fr;
      text-align: center;
      gap: 1.25rem;
      padding: 2.25rem 1.75rem;
    }
    .svc-academy-icon-wrap {
      margin: 0 auto;
    }
  }

  /* MOBILE */
  @media (max-width: 600px) {
    .svc-hero-inner {
      padding: 2.5rem 1.25rem;
      gap: 1.5rem;
    }
    .svc-hero-img-wrap {
      height: 240px;
      margin-top: 10rem;
    }
    .svc-watermark {
      font-size: clamp(5rem, 26vw, 8rem);
      top: 4%;
      right: -6%;
    }
    .svc-grid {
      grid-template-columns: 1fr;
      gap: 0.85rem;
    }
    .svc-cta-btn {
      display: block;
      width: 100%;
      text-align: center;
      box-sizing: border-box;
    }
    .svc-section-pad {
      padding: 3rem 1.25rem !important;
    }
    .card {
      padding: 1.5rem !important;
    }
    .svc-academy-banner {
      padding: 2rem 1.25rem;
    }
    .svc-academy-banner .btn-gold {
      width: 100%;
      text-align: center;
      box-sizing: border-box;
    }
  }

  @media (max-width: 380px) {
    .svc-hero-img-wrap {
      height: 200px;
    }
  }
`;

export default function Services() {
  useEffect(() => {
    const els = document.querySelectorAll('.animate-on-scroll');
    const obs = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }), { threshold: 0.1 });
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{servicesStyles}</style>

      {/* HERO */}
      <section className="bb-corporate-hero bb-hero-services" style={{ minHeight: '65vh', display: 'flex', alignItems: 'center', background: 'linear-gradient(135deg, #080808, #0D0000)', paddingTop: '72px', position: 'relative', overflow: 'hidden' }}>
        <HeroScene variant="services" />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(rgba(204,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(204,0,0,0.04) 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />
        <div className="svc-watermark">EXPERT</div>

        <div style={{
          position: 'absolute', top: '50%', right: '8%', transform: 'translateY(-50%)',
          width: 'clamp(280px, 38vw, 520px)', height: 'clamp(280px, 38vw, 520px)',
          background: 'radial-gradient(circle, rgba(204,0,0,0.16) 0%, transparent 70%)',
          filter: 'blur(50px)', pointerEvents: 'none', zIndex: 0,
        }} />

        <div className="svc-hero-inner">
          <div className="svc-hero-text">
            <div className="section-label" style={{ marginBottom: '1rem' }}>Services</div>
            <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.4rem, 8vw, 7rem)', fontWeight: 300, color: '#F5F5F0', lineHeight: 0.95, marginBottom: '1.5rem' }}>
              How We<br /><em style={{ color: '#CC0000', fontWeight: 700 }}>Create Success</em>
            </h1>
            <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.1rem)', color: '#888888', maxWidth: '480px', lineHeight: 1.8, marginBottom: '2rem' }}>
              We partner with companies and governments across SADC to turn potential into performance.
            </p>
            <Link href="/contact" className="btn-primary svc-cta-btn">Request a Proposal</Link>
          </div>

          <div className="svc-hero-img-wrap">
            <div style={{ position: 'relative', width: '100%', maxWidth: '380px', aspectRatio: '736 / 920' }}>
              <div style={{
                position: 'absolute', inset: '-10%',
                background: 'radial-gradient(circle at 50% 40%, rgba(204,0,0,0.22) 0%, transparent 65%)',
                filter: 'blur(30px)', zIndex: 0,
              }} />
              <Image
                src={suitImg}
                alt="Silhouette of a businessman in a suit and red tie, representing BigBoss expertise"
                fill
                priority
                sizes="(max-width: 900px) 60vw, 380px"
                style={{ objectFit: 'contain', zIndex: 1 }}
              />
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0, height: '25%',
                background: 'linear-gradient(to top, #0D0000 0%, transparent 100%)',
                zIndex: 2, pointerEvents: 'none',
              }} />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="svc-section-pad" style={{ padding: 'clamp(4rem, 6vw, 6rem) 2rem', background: '#0A0A0A' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ marginBottom: '3rem' }} className="animate-on-scroll">
            <div className="section-label" style={{ marginBottom: '1rem' }}>Our Expertise</div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#F5F5F0' }}>6 Areas of Excellence</h2>
          </div>
          <div className="svc-grid">
            {services.map((svc, i) => (
              <div key={svc.title} className="card animate-on-scroll" style={{
                background: '#1A1A1A',
                borderTop: `3px solid ${svc.color}`,
                transitionDelay: `${i * 0.08}s`,
                display: 'flex',
                flexDirection: 'column',
              }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.2rem' }}>
                  <div style={{ background: `rgba(${svc.color === '#CC0000' ? '204,0,0' : '212,160,23'},0.1)`, padding: '0.75rem', flexShrink: 0 }}>
                    <svc.icon size={24} style={{ color: svc.color }} />
                  </div>
                  <div>
                    <div className="section-label" style={{ color: svc.color, marginBottom: '0.3rem' }}>0{i + 1}</div>
                    <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.5rem', color: '#F5F5F0', lineHeight: 1.2 }}>{svc.title}</h3>
                  </div>
                </div>
                <p style={{ fontSize: '0.9rem', color: '#888888', lineHeight: 1.8, marginBottom: '1.5rem', flex: 1 }}>{svc.desc}</p>
                <div>
                  <div style={{ fontSize: '0.65rem', fontFamily: 'Barlow Condensed, sans-serif', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#555555', marginBottom: '0.6rem' }}>Key Outcomes</div>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {svc.outcomes.map(o => (
                      <span key={o} style={{
                        fontFamily: 'Barlow Condensed, sans-serif', fontSize: '0.65rem',
                        letterSpacing: '0.08em', textTransform: 'uppercase',
                        color: svc.color, background: `rgba(${svc.color === '#CC0000' ? '204,0,0' : '212,160,23'},0.08)`,
                        border: `1px solid rgba(${svc.color === '#CC0000' ? '204,0,0' : '212,160,23'},0.2)`,
                        padding: '0.2rem 0.6rem',
                      }}>{o}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEXTGEN ACADEMIC INSTITUTE — FEATURED BANNER */}
      <section className="svc-section-pad" style={{ padding: 'clamp(0rem, 0vw, 0rem) 2rem 5rem', background: '#0A0A0A' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }} className="animate-on-scroll">
          <Link href="/academy" style={{ textDecoration: 'none', display: 'block' }}>
            <div className="svc-academy-banner">
              <div className="svc-academy-watermark">NEXTGEN</div>
              <div className="svc-academy-icon-wrap">
                <GraduationCap size={30} style={{ color: '#D4A017' }} />
              </div>
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div className="section-label" style={{ color: '#D4A017', marginBottom: '0.5rem' }}>A Division of BigBoss Corporate Consulting</div>
                <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', color: '#F5F5F0', marginBottom: '0.6rem', lineHeight: 1.1 }}>
                  BigBoss NextGen Academic Institute<br className="hidden-mobile" /> <em style={{ color: '#D4A017' }}>Training &amp; Leadership Development</em>
                </h3>
                <p style={{ fontSize: '0.92rem', color: '#999999', lineHeight: 1.7, maxWidth: '640px' }}>
                  World-class management and leadership training, customized to your organization. Building and transforming leaders, empowering organizations across SADC.
                </p>
              </div>
              <div className="btn-gold" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', whiteSpace: 'nowrap', position: 'relative', zIndex: 1 }}>
                Explore the Institute <ArrowRight size={16} />
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="svc-section-pad" style={{ padding: 'clamp(3.5rem, 5vw, 5rem) 2rem', background: '#111111', textAlign: 'center', borderTop: '1px solid #2A2A2A' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }} className="animate-on-scroll">
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.8rem, 4vw, 3.5rem)', color: '#F5F5F0', marginBottom: '1rem' }}>
            Every challenge is different.<br /><em style={{ color: '#CC0000' }}>Let&apos;s talk about yours.</em>
          </h2>
          <p style={{ color: '#888888', marginBottom: '2rem', fontSize: 'clamp(0.95rem, 2.5vw, 1rem)' }}>Our team of experts is ready to design a solution for your specific needs.</p>
          <Link href="/contact" className="btn-primary svc-cta-btn">Talk to an Expert</Link>
        </div>
      </section>
    </>
  );
}