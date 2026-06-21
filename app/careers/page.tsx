'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Upload, Loader2, CheckCircle2 } from 'lucide-react';

import skillImg from '@/public/images/skill.jpeg';
import pointImg from '@/public/images/point.jpeg';

const roles = ['MBA Graduates', 'Accountants & Chartered Accountants', 'Management & Leadership Trainers', 'Programmers', 'SEO Specialists', 'IT Specialists', 'Project Managers', 'Journalists', 'And more...'];
const values = ['Excellence', 'Discipline', 'Ownership', 'Integrity', 'Growth'];
const steps = [
  { num: '01', title: 'Start', desc: 'Join our team and get trained in BigBoss systems and culture. Learn the way we work.' },
  { num: '02', title: 'Excel', desc: 'Deliver results, lead projects, achieve recognition. Stand out through performance.' },
  { num: '03', title: 'Own', desc: 'High performers earn the opportunity to become partners in BigBoss CC.' },
];

const careersStyles = `
  .car-hero-pad {
    padding: 4rem 2rem;
  }
  .car-watermark {
    position: absolute;
    right: -50px;
    bottom: 0;
    font-family: 'Barlow Condensed', sans-serif;
    font-weight: 800;
    font-size: clamp(6rem, 14vw, 14rem);
    color: rgba(204,0,0,0.05);
    line-height: 1;
    user-select: none;
    pointer-events: none;
    white-space: nowrap;
  }

  /* CULTURE */
  .car-culture-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: start;
  }
  .car-culture-img-wrap {
    position: relative;
    height: 240px;
    margin-bottom: 1.5rem;
    border-radius: 2px;
    overflow: hidden;
  }
  .car-values-wrap {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    align-content: flex-start;
  }
  .car-value-card {
    flex: 1 1 180px;
  }

  /* ROLES */
  .car-roles-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 1px;
    background: #2A2A2A;
  }

  /* GROWTH PATH */
  .car-path-wrap {
    display: grid;
    grid-template-columns: 1fr 1.6fr;
    gap: 3rem;
    align-items: center;
  }
  .car-path-img-wrap {
    position: relative;
    height: 380px;
    border-radius: 2px;
    overflow: hidden;
  }
  .car-steps-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0;
    background: #2A2A2A;
  }
  .car-step-card {
    padding: 2.5rem 2rem;
  }

  /* FORM */
  .car-form-fields {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }
  .car-error-banner {
    background: rgba(204,0,0,0.1);
    border: 1px solid rgba(204,0,0,0.35);
    color: #FF6B6B;
    padding: 0.9rem 1.2rem;
    font-family: 'Barlow', sans-serif;
    font-size: 0.85rem;
  }

  /* SUCCESS */
  .car-success-wrap {
    text-align: center;
    padding: 4rem 1.5rem;
  }
  .car-success-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background: rgba(204,0,0,0.12);
    border: 1px solid rgba(204,0,0,0.4);
    margin-bottom: 1.5rem;
  }

  /* TABLET */
  @media (max-width: 900px) {
    .car-hero-pad {
      padding: 3rem 1.5rem;
    }
    .car-culture-grid {
      grid-template-columns: 1fr;
      gap: 2.5rem;
    }
    .car-path-wrap {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
    .car-path-img-wrap {
      height: 280px;
    }
    .car-steps-grid {
      grid-template-columns: 1fr;
    }
    .car-step-card {
      padding: 2rem 1.75rem;
    }
    .car-watermark {
      font-size: clamp(4rem, 18vw, 10rem);
      opacity: 0.6;
    }
  }

  /* MOBILE */
  @media (max-width: 600px) {
    .car-hero-pad {
      padding: 2.5rem 1.25rem;
    }
    .car-section-pad {
      padding: 3rem 1.25rem !important;
    }
    .car-culture-img-wrap {
      height: 180px;
    }
    .car-roles-grid {
      grid-template-columns: 1fr 1fr;
    }
    .car-path-img-wrap {
      height: 200px;
    }
    .car-step-card {
      padding: 1.75rem 1.25rem;
    }
    .car-value-card {
      flex: 1 1 140px;
      padding: 1.1rem 1.3rem !important;
    }
    .car-form-input {
      padding: 0.8rem 1rem !important;
      font-size: 0.9rem !important;
    }
    .car-submit-btn {
      width: 100%;
      justify-content: center;
    }
    .car-success-wrap {
      padding: 3rem 1rem;
    }
  }

  @media (max-width: 400px) {
    .car-roles-grid {
      grid-template-columns: 1fr;
    }
  }
`;

export default function Careers() {
  const [form, setForm] = useState({ name: '', email: '', whatsapp: '', country: '', role: '', message: '' });
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
      const res = await fetch('/api/careers', {
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

  return (
    <>
      <style>{careersStyles}</style>

      {/* HERO */}
      <section style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', background: 'linear-gradient(135deg, #080808, #000D00)', paddingTop: '72px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(rgba(204,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(204,0,0,0.04) 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />
        <div className="car-watermark">CAREERS</div>
        <div className="car-hero-pad" style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div className="section-label" style={{ marginBottom: '1rem' }}>Careers</div>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.6rem, 8vw, 7rem)', fontWeight: 300, color: '#F5F5F0', lineHeight: 0.95, marginBottom: '1.5rem' }}>
            Grow With<br /><em style={{ color: '#CC0000', fontWeight: 700 }}>BigBoss CC</em>
          </h1>
          <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.1rem)', color: '#888888', maxWidth: '500px', lineHeight: 1.8, marginBottom: '2.5rem' }}>
            We train SADC talent to lead, build, and own. Start your career. Become a future partner.
          </p>
          <a href="#apply" className="btn-primary">Apply Now</a>
        </div>
      </section>

      {/* CULTURE */}
      <section className="car-section-pad" style={{ padding: 'clamp(4rem, 6vw, 6rem) 2rem', background: '#111111' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }} className="animate-on-scroll">
          <div className="car-culture-grid">
            <div>
              <div className="section-label" style={{ marginBottom: '1rem' }}>Culture</div>
              <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.8rem, 4vw, 3.5rem)', color: '#F5F5F0', lineHeight: 1.05, marginBottom: '1.5rem' }}>
                Train With Us.<br />Win With Us.<br /><em style={{ color: '#CC0000' }}>Own With Us.</em>
              </h2>
              <div className="car-culture-img-wrap">
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(17,17,17,0.35) 0%, transparent 55%)', zIndex: 1 }} />
                <Image
                  src={skillImg}
                  alt="Skill development mindmap: mindset, learning, knowledge, growth and advanced training"
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                  style={{ objectFit: 'cover', filter: 'brightness(0.96)' }}
                />
              </div>
              <div className="accent-line" />
              <p style={{ fontSize: '1.05rem', color: '#AAAAAA', lineHeight: 1.9, marginBottom: '1.5rem' }}>
                At BigBoss, a job is just the start. We hire locals and develop them into their best selves. You&apos;ll be trained in the BigBoss culture of excellence, discipline, and ownership.
              </p>
              <p style={{ fontSize: '1rem', color: '#888888', lineHeight: 1.9 }}>
                Do your job well. Achieve accolades. And your path won&apos;t stop at employee. It leads to partnership.
              </p>
            </div>
            <div className="car-values-wrap">
              {values.map(v => (
                <div key={v} className="car-value-card" style={{
                  background: '#1A1A1A', border: '1px solid #2A2A2A', borderLeft: '3px solid #CC0000',
                  padding: '1.5rem 2rem',
                }}>
                  <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.4rem', color: '#F5F5F0', fontStyle: 'italic' }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE HIRE */}
      <section className="car-section-pad" style={{ padding: 'clamp(4rem, 6vw, 6rem) 2rem', background: '#0A0A0A' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ marginBottom: '3rem' }} className="animate-on-scroll">
            <div className="section-label" style={{ marginBottom: '1rem' }}>Roles</div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.8rem, 4vw, 3.5rem)', color: '#F5F5F0', marginBottom: '1rem' }}>
              Join Africa&apos;s Growth Team
            </h2>
            <p style={{ fontSize: '1rem', color: '#888888', maxWidth: '500px', lineHeight: 1.8 }}>
              We&apos;re looking for talent across SADC. If you&apos;re driven, skilled, and ready to build Africa&apos;s future, we want to hear from you.
            </p>
          </div>
          <div className="car-roles-grid">
            {roles.map((role, i) => (
              <div key={role} className="animate-on-scroll" style={{
                background: '#0A0A0A', padding: '1.5rem 2rem',
                display: 'flex', alignItems: 'center', gap: '0.75rem',
                transition: 'background 0.2s',
                transitionDelay: `${i * 0.03}s`,
              }}
              onMouseEnter={e => (e.currentTarget.style.background = '#1A1A1A')}
              onMouseLeave={e => (e.currentTarget.style.background = '#0A0A0A')}>
                <span style={{ color: '#CC0000', fontSize: '0.6rem', flexShrink: 0 }}>◆</span>
                <span style={{ fontFamily: 'Barlow, sans-serif', fontSize: '0.95rem', color: '#CCCCCC', fontWeight: 400 }}>{role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GROWTH PATH */}
      <section className="car-section-pad" style={{ padding: 'clamp(4rem, 6vw, 6rem) 2rem', background: '#111111' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ marginBottom: '3rem' }} className="animate-on-scroll">
            <div className="section-label" style={{ marginBottom: '1rem' }}>Your Path</div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.8rem, 4vw, 3.5rem)', color: '#F5F5F0' }}>Your Path at BigBoss</h2>
          </div>

          <div className="car-path-wrap animate-on-scroll">
            <div className="car-path-img-wrap">
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(204,0,0,0.1) 0%, transparent 50%)', zIndex: 1 }} />
              <Image
                src={pointImg}
                alt="Illustration of a hand pointing the way toward a target, representing direction and growth"
                fill
                sizes="(max-width: 900px) 100vw, 38vw"
                style={{ objectFit: 'cover' }}
              />
              <div style={{
                position: 'absolute', bottom: '1.25rem', left: '1.25rem', zIndex: 2,
                background: 'rgba(8,8,8,0.75)', backdropFilter: 'blur(8px)',
                padding: '0.6rem 1rem', borderLeft: '3px solid #CC0000',
              }}>
                <p style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '0.65rem', letterSpacing: '0.15em', color: '#CC0000', textTransform: 'uppercase', margin: 0 }}>Direction &amp; Drive</p>
              </div>
            </div>

            <div className="car-steps-grid">
              {steps.map((step, i) => (
                <div key={step.num} className="car-step-card" style={{
                  background: '#111111',
                  borderTop: `3px solid ${i === 0 ? '#888888' : i === 1 ? '#CC0000' : '#D4A017'}`,
                  position: 'relative',
                }}>
                  <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800, fontSize: '3.5rem', color: 'rgba(255,255,255,0.04)', lineHeight: 1, position: 'absolute', top: '1rem', right: '1.25rem' }}>{step.num}</div>
                  <div className="section-label" style={{ color: i === 0 ? '#888888' : i === 1 ? '#CC0000' : '#D4A017', marginBottom: '0.8rem' }}>Step {step.num}</div>
                  <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.7rem, 4vw, 2.5rem)', color: '#F5F5F0', marginBottom: '1rem' }}>{step.title}</h3>
                  <p style={{ fontSize: '0.9rem', color: '#888888', lineHeight: 1.8 }}>{step.desc}</p>
                  {i < 2 && <ArrowRight size={20} style={{ color: '#2A2A2A', marginTop: '1.5rem' }} />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* APPLICATION FORM — entire section swaps to success state */}
      <section id="apply" className="car-section-pad" style={{ padding: 'clamp(4rem, 6vw, 6rem) 2rem', background: '#0A0A0A' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {submitted ? (
            <div className="car-success-wrap animate-on-scroll visible">
              <div className="car-success-icon">
                <CheckCircle2 size={32} style={{ color: '#CC0000' }} />
              </div>
              <div className="section-label" style={{ marginBottom: '1rem', justifyContent: 'center' }}>Application Received</div>
              <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.8rem, 4vw, 3.5rem)', color: '#F5F5F0', marginBottom: '1.25rem' }}>
                Thank You,<br /><em style={{ color: '#CC0000' }}>{form.name || 'Future Partner'}</em>
              </h2>
              <p style={{ fontSize: '1rem', color: '#888888', lineHeight: 1.8, maxWidth: '480px', margin: '0 auto 2rem' }}>
                We&apos;ve received your application and will be in touch soon. Thank you for your interest in building Africa&apos;s future with BigBoss CC.
              </p>
              <Link href="/" className="btn-primary" style={{ display: 'inline-block' }}>
                Back to Home
              </Link>
            </div>
          ) : (
            <>
              <div style={{ marginBottom: '3rem' }} className="animate-on-scroll">
                <div className="section-label" style={{ marginBottom: '1rem' }}>Apply</div>
                <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.8rem, 4vw, 3.5rem)', color: '#F5F5F0', marginBottom: '1rem' }}>
                  Ready to Build<br /><em style={{ color: '#CC0000' }}>With Us?</em>
                </h2>
                <p style={{ fontSize: '1rem', color: '#888888', lineHeight: 1.8 }}>
                  No open role fits you yet? Apply anyway. We&apos;re expanding into every SADC country and new roles open fast.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="car-form-fields animate-on-scroll">
                {error && <div className="car-error-banner">{error}</div>}

                {[
                  { key: 'name', label: 'Full Name', type: 'text', placeholder: 'Your full name' },
                  { key: 'email', label: 'Email Address', type: 'email', placeholder: 'your@email.com' },
                  { key: 'whatsapp', label: 'WhatsApp Number', type: 'tel', placeholder: '+27 XX XXX XXXX' },
                  { key: 'country', label: 'Country', type: 'text', placeholder: 'Your country' },
                  { key: 'role', label: 'Role of Interest', type: 'text', placeholder: 'e.g. MBA Graduate, Programmer, Project Manager...' },
                ].map(field => (
                  <div key={field.key}>
                    <label style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#888888', display: 'block', marginBottom: '0.4rem' }}>{field.label}</label>
                    <input
                      className="car-form-input"
                      type={field.type}
                      placeholder={field.placeholder}
                      value={form[field.key as keyof typeof form]}
                      onChange={e => setForm(prev => ({ ...prev, [field.key]: e.target.value }))}
                      required
                      disabled={loading}
                      style={{
                        width: '100%', background: '#1A1A1A', border: '1px solid #2A2A2A',
                        color: '#F5F5F0', padding: '0.9rem 1.2rem',
                        fontFamily: 'Barlow, sans-serif', fontSize: '0.95rem',
                        outline: 'none', transition: 'border-color 0.2s',
                        boxSizing: 'border-box',
                      }}
                      onFocus={e => (e.target.style.borderColor = '#CC0000')}
                      onBlur={e => (e.target.style.borderColor = '#2A2A2A')}
                    />
                  </div>
                ))}
                <div>
                  <label style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#888888', display: 'block', marginBottom: '0.4rem' }}>Why BigBoss?</label>
                  <textarea
                    className="car-form-input"
                    placeholder="Tell us why you want to join BigBoss and what you bring to the table..."
                    value={form.message}
                    onChange={e => setForm(prev => ({ ...prev, message: e.target.value }))}
                    rows={5}
                    disabled={loading}
                    style={{
                      width: '100%', background: '#1A1A1A', border: '1px solid #2A2A2A',
                      color: '#F5F5F0', padding: '0.9rem 1.2rem',
                      fontFamily: 'Barlow, sans-serif', fontSize: '0.95rem',
                      outline: 'none', resize: 'vertical', transition: 'border-color 0.2s',
                      boxSizing: 'border-box',
                    }}
                    onFocus={e => (e.target.style.borderColor = '#CC0000')}
                    onBlur={e => (e.target.style.borderColor = '#2A2A2A')}
                  />
                </div>
                <button
                  type="submit"
                  className="btn-primary car-submit-btn"
                  disabled={loading}
                  style={{ alignSelf: 'flex-start', display: 'flex', alignItems: 'center', gap: '0.5rem', opacity: loading ? 0.7 : 1, cursor: loading ? 'not-allowed' : 'pointer' }}
                >
                  {loading ? <Loader2 size={16} className="animate-spin" /> : <Upload size={16} />}
                  {loading ? 'Submitting...' : 'Submit Application'}
                </button>
              </form>
            </>
          )}
        </div>
      </section>
    </>
  );
}