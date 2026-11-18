'use client';
import HeroScene from '@/app/components/HeroScene';
import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Import images
import focusImg from '@/public/images/focus.jpeg';
import goalsImg from '@/public/images/goals.jpeg';
import managementImg from '@/public/images/manegement.jpeg';

const values = [
  { title: 'Ownership', desc: 'We act like owners, not contractors. Every result is personal. Every client win is our win.', icon: '◆' },
  { title: 'Excellence', desc: 'Good is not enough. We deliver work that meets global standards, right here in Africa.', icon: '◈' },
  { title: 'Impact', desc: 'Profit matters, but impact matters more. Jobs created, businesses grown, lives changed.', icon: '◉' },
  { title: 'Integrity', desc: "We do the right thing, even when no one's watching. Trust is our currency.", icon: '◎' },
  { title: 'Growth', desc: 'We grow ourselves, our clients, and our people. Stagnation is not in our culture.', icon: '◇' },
];

const purpose = [
  'Showing credentials and capacity to acquire new Client Partners from the Private Sector and Governments.',
  "Helping new and existing companies and organizations to succeed and scale.",
  "Reducing unemployment and increasing African countries' GDP. Bettering the lives of as many African men and women as we can.",
  'Growing individual talent in many fields. Building future entrepreneurs and leaders.',
  'Opening BigBoss CC in all SADC countries and working in each one. Negotiating export and import deals between Africa, Europe, and the world.',
  'Expanding our expertise to Europe and the global market.',
];

const responsive = `
  .about-hero-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
  }
  .about-vm-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1px;
    background: #2A2A2A;
  }
  .about-genesis-grid {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 5rem;
    align-items: start;
  }
  .about-purpose-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1px;
    background: #2A2A2A;
  }
  .about-values-grid {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 5rem;
    align-items: start;
    margin-bottom: 3rem;
  }
  .about-values-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1rem;
    align-content: start;
  }
  .about-hero-img {
    position: relative;
    height: 420px;
    border-radius: 2px;
    overflow: hidden;
  }
  .about-mgmt-img {
    position: relative;
    height: 260px;
    margin-top: 2rem;
    border-radius: 2px;
    overflow: hidden;
  }
  .about-goals-img {
    position: relative;
    height: 220px;
    border-radius: 2px;
    overflow: hidden;
  }
  .about-focus-img {
    position: relative;
    height: 280px;
    border-radius: 2px;
    overflow: hidden;
  }
  .about-section-pad {
    padding: 6rem 2rem;
  }
  .about-vm-pad {
    padding: 5rem 2rem;
  }
  .about-vm-item {
    background: #111111;
    padding: 3rem;
  }
  .about-genesis-label-col {
    display: block;
  }

  @media (max-width: 900px) {
    .about-hero-grid {
      grid-template-columns: 1fr;
      gap: 2.5rem;
    }
    .about-vm-grid {
      grid-template-columns: 1fr;
    }
    .about-genesis-grid {
      grid-template-columns: 1fr;
      gap: 2.5rem;
    }
    .about-values-grid {
      grid-template-columns: 1fr;
      gap: 2.5rem;
    }
    .about-hero-img {
      height: 280px;
    }
    .about-mgmt-img {
      height: 200px;
    }
    .about-goals-img {
      height: 180px;
    }
    .about-focus-img {
      height: 220px;
    }
  }

  @media (max-width: 600px) {
    .about-section-pad {
      padding: 3.5rem 1.25rem;
    }
    .about-vm-pad {
      padding: 3rem 1.25rem;
    }
    .about-vm-item {
      padding: 2rem 1.25rem;
    }
    .about-purpose-grid {
      grid-template-columns: 1fr;
    }
    .about-values-cards {
      grid-template-columns: 1fr;
    }
    .about-hero-img {
      height: 220px;
    }
    .about-mgmt-img {
      height: 180px;
    }
    .about-goals-img {
      height: 160px;
    }
    .about-focus-img {
      height: 190px;
    }
  }
`;

export default function About() {
  useEffect(() => {
    const els = document.querySelectorAll('.animate-on-scroll');
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{responsive}</style>

      {/* HERO */}
      <section className="bb-corporate-hero bb-hero-about bb-hero-composed" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', background: 'linear-gradient(135deg, #080808 0%, #100000 100%)', paddingTop: '72px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(rgba(204,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(204,0,0,0.04) 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '4rem 2rem', position: 'relative', zIndex: 1, width: '100%' }}>
          <div className="about-hero-grid">
            <div>
              <div className="section-label" style={{ marginBottom: '1rem' }}>About Us</div>
              <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.8rem, 8vw, 7rem)', fontWeight: 300, color: '#F5F5F0', lineHeight: 0.95, marginBottom: '1.5rem' }}>
                Idealized in<br /><em style={{ fontStyle: 'italic', color: '#CC0000', fontWeight: 700 }}>Africa.</em><br />Built for the World.
              </h1>
              <p style={{ fontSize: '1.05rem', color: '#888888', maxWidth: '500px', lineHeight: 1.8 }}>
                About BigBoss Corporate Consulting — our vision, mission, genesis, and the values that drive everything we do.
              </p>
            </div>
            <HeroScene variant="about" contained />
          </div>
        </div>
      </section>

      {/* VISION + MISSION */}
      <section className="about-vm-pad" style={{ background: '#111111' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div className="about-vm-grid animate-on-scroll">
            {[
              { label: 'Vision', color: '#CC0000', icon: '◈', text: 'An economically empowered Africa where every SADC country thrives through strong businesses, skilled people, and global trade.' },
              { label: 'Mission', color: '#D4A017', icon: '◆', text: 'To partner with companies and governments across SADC, creating jobs, building entrepreneurs, and delivering expertise that drives growth and global competitiveness.' },
            ].map(item => (
              <div key={item.label} className="about-vm-item" style={{ borderTop: `3px solid ${item.color}` }}>
                <div className="section-label" style={{ color: item.color, marginBottom: '1.2rem' }}>{item.icon} {item.label}</div>
                <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', color: '#DDDDDD', lineHeight: 1.65, fontStyle: 'italic', fontWeight: 400 }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GENESIS */}
      <section className="about-section-pad" style={{ background: '#0A0A0A', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', right: '-80px', top: 0, fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800, fontSize: 'clamp(6rem, 14vw, 16rem)', color: 'rgba(204,0,0,0.04)', lineHeight: 1, userSelect: 'none', pointerEvents: 'none' }}>GENESIS</div>
        <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div className="about-genesis-grid animate-on-scroll">
            <div>
              <div className="section-label" style={{ marginBottom: '1rem' }}>Our Genesis</div>
              <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.2rem, 5vw, 4rem)', color: '#F5F5F0', lineHeight: 1.05 }}>
                Born to Serve<br /><em style={{ color: '#CC0000' }}>Africa</em>
              </h2>
              <div className="about-mgmt-img">
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,10,10,0.6) 0%, transparent 60%)', zIndex: 1 }} />
                <Image
                  src={managementImg}
                  alt="Strategic management and growth"
                  fill
                  sizes="(max-width: 900px) 100vw, 33vw"
                  style={{ objectFit: 'cover', filter: 'brightness(0.8) saturate(0.9)' }}
                />
              </div>
            </div>
            <div>
              <div className="accent-line" />
              <p style={{ fontSize: '1.1rem', color: '#AAAAAA', lineHeight: 1.9, marginBottom: '1.5rem' }}>
                BigBoss Corporate Consulting was brought to life from a virtuous idea: <strong style={{ color: '#F5F5F0' }}>helping others win</strong>.
              </p>
              <p style={{ fontSize: '1rem', color: '#888888', lineHeight: 1.9, marginBottom: '1.5rem' }}>
                Our idea is divided in two objectives: To help companies, businesses and governments succeed, using our expertise. And to create means of survival for as many people in Africa as we can — some through employment, others through entrepreneurship.
              </p>
              <p style={{ fontSize: '1rem', color: '#888888', lineHeight: 1.9, marginBottom: '2.5rem' }}>
                We looked at Southern Africa and saw incredible talent, ambition, and resources. We also saw organizations fighting uphill without the right systems, strategy, and support. So we built BigBoss to change that.
              </p>
              <div className="about-goals-img">
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(204,0,0,0.08) 0%, transparent 50%)', zIndex: 1 }} />
                <Image
                  src={goalsImg}
                  alt="Focused goals and strategic targets"
                  fill
                  sizes="(max-width: 900px) 100vw, 66vw"
                  style={{ objectFit: 'cover', filter: 'brightness(0.85)' }}
                />
                <div style={{ position: 'absolute', bottom: '1.25rem', right: '1.25rem', zIndex: 2, background: 'rgba(8,8,8,0.75)', backdropFilter: 'blur(8px)', padding: '0.6rem 1rem', borderRight: '3px solid #CC0000' }}>
                  <p style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '0.7rem', letterSpacing: '0.15em', color: '#CC0000', textTransform: 'uppercase', margin: 0 }}>Goal-Driven Strategy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PURPOSE */}
      <section className="about-section-pad" style={{ background: '#111111' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ marginBottom: '3rem' }} className="animate-on-scroll">
            <div className="section-label" style={{ marginBottom: '1rem' }}>Our Purpose</div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.8rem, 4vw, 3.5rem)', color: '#F5F5F0' }}>Why We Exist</h2>
          </div>
          <div className="about-purpose-grid">
            {purpose.map((p, i) => (
              <div key={i} className="animate-on-scroll" style={{ background: '#111111', padding: '2rem 1.75rem', transitionDelay: `${i * 0.08}s`, display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                <span style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800, fontSize: '2.2rem', color: 'rgba(204,0,0,0.3)', lineHeight: 1, flexShrink: 0 }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p style={{ fontSize: '0.95rem', color: '#AAAAAA', lineHeight: 1.8, margin: 0 }}>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="about-section-pad" style={{ background: '#0A0A0A' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div className="about-values-grid animate-on-scroll">
            <div>
              <div className="section-label" style={{ marginBottom: '1rem' }}>Core Values</div>
              <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.8rem, 4vw, 3.5rem)', color: '#F5F5F0', marginBottom: '2rem' }}>How We Work</h2>
              <div className="about-focus-img">
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 40%, rgba(10,10,10,0.7) 100%)', zIndex: 1 }} />
                <Image
                  src={focusImg}
                  alt="Focus and clarity in execution"
                  fill
                  sizes="(max-width: 900px) 100vw, 33vw"
                  style={{ objectFit: 'cover', filter: 'brightness(0.7) contrast(1.1)' }}
                />
                <div style={{ position: 'absolute', bottom: '1.25rem', left: '1.25rem', zIndex: 2 }}>
                  <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.05rem', fontStyle: 'italic', color: '#F5F5F0', margin: 0 }}>"Clarity of purpose.<br />Precision in execution."</p>
                </div>
              </div>
            </div>
            <div className="about-values-cards">
              {values.map((v, i) => (
                <div key={v.title} className="card animate-on-scroll" style={{ transitionDelay: `${i * 0.1}s`, borderLeft: '3px solid #CC0000', background: '#1A1A1A' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                    <span style={{ color: '#CC0000', fontSize: '1.2rem' }}>{v.icon}</span>
                    <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.5rem', color: '#F5F5F0' }}>{v.title}</h3>
                  </div>
                  <p style={{ fontSize: '0.9rem', color: '#888888', lineHeight: 1.8 }}>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EXPANSION */}
      <section className="about-section-pad" style={{ background: '#0D0000', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, rgba(204,0,0,0.1) 0%, transparent 70%)' }} />
        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 1, padding: '0 1rem' }} className="animate-on-scroll">
          <div className="section-label" style={{ marginBottom: '1rem' }}>Expansion</div>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.8rem, 5vw, 4rem)', color: '#F5F5F0', marginBottom: '1.5rem' }}>
            Our Future is <em style={{ color: '#CC0000' }}>SADC</em>,<br />Then the World
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#AAAAAA', lineHeight: 1.9, marginBottom: '2.5rem' }}>
            We are establishing BigBoss CC in every SADC country. We will work with and in each one, emphasizing trade deals between Africa, Europe, and global markets. <strong style={{ color: '#F5F5F0' }}>Africa&apos;s success should not have borders.</strong>
          </p>
          <Link href="/partnerships" className="btn-primary">Partner With Us</Link>
        </div>
      </section>
    </>
  );
}