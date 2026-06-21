'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import {
  GraduationCap, Users, TrendingUp, Shield, Globe, Brain,
  Monitor, Video, BookOpen, Headphones, Building2, Calendar,
  CheckCircle2, ArrowRight, Phone, Mail, Clock,
} from 'lucide-react';

const trainingServices = [
  { icon: Users, title: 'Leadership & Performance', desc: 'Develop high-performance individuals and teams.' },
  { icon: TrendingUp, title: 'Strategic Growth', desc: 'Sales strategies, brand development, and market expansion.' },
  { icon: Shield, title: 'HR & Governance', desc: 'HR, IR training, and corporate governance best practices.' },
  { icon: Globe, title: 'Global Business', desc: 'International sales and procurement teams training.' },
  { icon: Building2, title: 'Custom Solutions', desc: 'Tailored training for businesses, parastatals, corporations, and sports teams.' },
  { icon: Brain, title: 'Strategic Decision-Making', desc: 'Frameworks for meeting today\'s challenges and anticipating tomorrow\'s trends.' },
];

const deliveryMethods = [
  { icon: Building2, title: 'Classroom Training', items: ['At our facilities', 'At external venues', 'At client sites'] },
  { icon: Monitor, title: 'Online Training', items: ['E-learning', 'Video-based training', 'Virtual instructor-led'] },
  { icon: BookOpen, title: 'Self-Studying Programs', items: ['Hard cover books', 'Ebook format', 'Audio & video training'] },
];

const industries = [
  'Automotive Retail', 'Earthmoving', 'Renewable Energy', 'Agriculture', 'Banking', 'Insurance',
  'Construction', 'Aluminium', 'Food & Beverages', 'Restaurants', 'Hospitality', 'Public Sector',
  'Retail', 'Service', 'Manufacturing', 'Technology', 'Production', 'Logistics', 'Distribution', 'Sports',
];

const programs = [
  'Management & Leadership', 'Customer Relationships Management', 'Sales Executives Development',
  'Building High Performance Sales Teams', 'Building International Sales Teams', 'Customer Service Excellence',
  'Building High Performance Service Teams', 'Procurement & Supplier Relationships', 'Product Knowledge',
  'High Negotiation Skills Capacitation', 'Problem Solving & Conflict Management', 'High Caliber Communication Skills',
  'Lean Production Management', 'Inventory Control', 'Logistics and Distribution',
];

const events = ['Seminars', 'Conferences', 'Symposiums', 'Workshops', 'Webinars', 'Consortiums'];

const proposalSteps = [
  { num: '01', title: 'Needs Assessment', desc: 'We work with you to identify your organization\'s training needs and develop a customized program that guarantees results.' },
  { num: '02', title: 'Training Delivery', desc: 'We deliver programs using a range of methods, including classroom training and online training.' },
  { num: '03', title: 'Evaluation & Follow-up', desc: 'We evaluate the effectiveness of our training and provide ongoing support to ensure your organization achieves its goals.' },
];

const benefits = [
  { title: 'Improved Productivity', desc: 'Training designed to develop skills and knowledge at each professional\'s specific role, leading to better efficiency.' },
  { title: 'Increased Competitiveness', desc: 'Stay competitive in a rapidly changing business environment.' },
  { title: 'Customized Solutions', desc: 'We work with you to develop training solutions that meet your organization\'s specific needs.' },
];

const academyStyles = `
  .aci-hero-pad { padding: 4rem 2rem; }
  .aci-watermark {
    position: absolute;
    top: 10%;
    right: -3%;
    font-family: 'Barlow Condensed', sans-serif;
    font-weight: 800;
    font-size: clamp(6rem, 14vw, 14rem);
    color: rgba(212,160,23,0.05);
    line-height: 1;
    user-select: none;
    pointer-events: none;
    white-space: nowrap;
  }
  .aci-services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1rem;
  }
  .aci-delivery-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1px;
    background: #2A2A2A;
  }
  .aci-tags-wrap {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  .aci-programs-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1px;
    background: #2A2A2A;
  }
  .aci-proposal-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0;
    background: #2A2A2A;
  }
  .aci-benefits-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 1rem;
  }
  .aci-contact-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
  .aci-notice-banner {
    background: rgba(212,160,23,0.08);
    border: 1px solid rgba(212,160,23,0.3);
    padding: 1.5rem 2rem;
    display: flex;
    align-items: flex-start;
    gap: 1rem;
  }

  /* TABLET */
  @media (max-width: 900px) {
    .aci-hero-pad { padding: 3rem 1.5rem; }
    .aci-delivery-grid { grid-template-columns: 1fr; }
    .aci-proposal-grid { grid-template-columns: 1fr; }
    .aci-contact-grid { grid-template-columns: 1fr; gap: 1.5rem; }
    .aci-watermark { font-size: clamp(4rem, 18vw, 10rem); opacity: 0.6; }
  }

  /* MOBILE */
  @media (max-width: 600px) {
    .aci-hero-pad { padding: 2.5rem 1.25rem; }
    .aci-section-pad { padding: 3rem 1.25rem !important; }
    .aci-programs-grid { grid-template-columns: 1fr; }
    .aci-notice-banner { flex-direction: column; padding: 1.5rem; }
  }
`;

export default function Academy() {
  useEffect(() => {
    const els = document.querySelectorAll('.animate-on-scroll');
    const obs = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }), { threshold: 0.1 });
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{academyStyles}</style>

      {/* HERO */}
      <section style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', background: 'linear-gradient(135deg, #080808, #0D0A00)', paddingTop: '72px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(rgba(212,160,23,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(212,160,23,0.04) 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />
        <div className="aci-watermark">NEXTGEN</div>
        <div className="aci-hero-pad" style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
            <GraduationCap size={18} style={{ color: '#D4A017' }} />
            <div className="section-label" style={{ color: '#D4A017' }}>A Division of BigBoss Corporate Consulting</div>
          </div>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.4rem, 7vw, 5.5rem)', fontWeight: 300, color: '#F5F5F0', lineHeight: 1.0, marginBottom: '1.5rem' }}>
            BigBoss NextGen<br /><em style={{ color: '#D4A017', fontWeight: 700 }}>Academic Institute</em>
          </h1>
          <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)', fontStyle: 'italic', color: '#CCCCCC', marginBottom: '1.5rem' }}>
            &ldquo;Empowering Professionals, Enhancing Organizations&rdquo;
          </p>
          <p style={{ fontSize: '1.05rem', color: '#888888', maxWidth: '600px', lineHeight: 1.85, marginBottom: '2.5rem' }}>
            A cutting-edge training hub delivering world-class management and leadership training tailored for individuals, teams, and organizations in Southern Africa and beyond. We adapt training programs to your organization&apos;s needs.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-gold">Get in Touch</Link>
            <Link href="/services" className="btn-secondary">Back to Services</Link>
          </div>
        </div>
      </section>

      {/* DEVELOPMENT NOTICE */}
      <section className="aci-section-pad" style={{ padding: '3rem 2rem', background: '#111111' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }} className="animate-on-scroll">
          <div className="aci-notice-banner">
            <Clock size={22} style={{ color: '#D4A017', flexShrink: 0, marginTop: '0.1rem' }} />
            <div>
              <p style={{ fontSize: '0.95rem', color: '#F5F5F0', fontWeight: 500, marginBottom: '0.4rem' }}>
                The BigBoss NextGen Academic Institute is still under development. It will be fully functional in <strong style={{ color: '#D4A017' }}>February 2027</strong>.
              </p>
              <p style={{ fontSize: '0.9rem', color: '#999999', lineHeight: 1.7 }}>
                There are, however, some training programs already available. Let us know what your needs are, and we will try to accommodate you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FIRST QUESTION QUOTE */}
      <section className="aci-section-pad" style={{ padding: 'clamp(4rem, 6vw, 5rem) 2rem', background: '#0A0A0A', textAlign: 'center' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }} className="animate-on-scroll">
          <div style={{ color: '#D4A017', fontSize: '2.5rem', lineHeight: 1, marginBottom: '1rem', fontFamily: 'Cormorant Garamond, serif' }}>&ldquo;</div>
          <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.4rem, 3.5vw, 2.2rem)', fontStyle: 'italic', color: '#F5F5F0', lineHeight: 1.4, marginBottom: '1.5rem' }}>
            First question we ask our clients: &ldquo;In which department, division or sector, you have the most skill problems?&rdquo;
          </p>
          <p style={{ fontSize: '1rem', color: '#D4A017', fontFamily: 'Barlow Condensed, sans-serif', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>
            — Our involvement starts there.
          </p>
        </div>
      </section>

      {/* TRAINING SERVICES */}
      <section className="aci-section-pad" style={{ padding: 'clamp(4rem, 6vw, 6rem) 2rem', background: '#111111' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ marginBottom: '3rem' }} className="animate-on-scroll">
            <div className="section-label" style={{ color: '#D4A017', marginBottom: '1rem' }}>What We Offer</div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: '#F5F5F0' }}>Our Training Services</h2>
          </div>
          <div className="aci-services-grid">
            {trainingServices.map((svc, i) => (
              <div key={svc.title} className="card animate-on-scroll" style={{ background: '#1A1500', border: '1px solid rgba(212,160,23,0.2)', borderTop: '3px solid #D4A017', transitionDelay: `${i * 0.07}s` }}>
                <svc.icon size={24} style={{ color: '#D4A017', marginBottom: '1rem' }} />
                <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.3rem', color: '#F5F5F0', marginBottom: '0.6rem' }}>{svc.title}</h3>
                <p style={{ fontSize: '0.88rem', color: '#999999', lineHeight: 1.7 }}>{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="aci-section-pad" style={{ padding: 'clamp(4rem, 6vw, 6rem) 2rem', background: '#0A0A0A' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ marginBottom: '3rem' }} className="animate-on-scroll">
            <div className="section-label" style={{ color: '#D4A017', marginBottom: '1rem' }}>Why BigBoss NextGen</div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: '#F5F5F0' }}>Why Choose Us?</h2>
          </div>
          <div className="aci-benefits-grid">
            {[
              { title: 'Transformational Learning', desc: 'Practical skills for real-world impact.' },
              { title: 'Flexible Delivery', desc: 'In-person, virtual, or blended learning, at convenient times. Shortened programs for the busy leader.' },
              { title: 'Partners in Growth', desc: 'Customized programs that align training with your organization\'s goals.' },
            ].map((item, i) => (
              <div key={item.title} className="animate-on-scroll" style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', transitionDelay: `${i * 0.1}s` }}>
                <CheckCircle2 size={20} style={{ color: '#D4A017', flexShrink: 0, marginTop: '0.2rem' }} />
                <div>
                  <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.25rem', color: '#F5F5F0', marginBottom: '0.4rem' }}>{item.title}</h3>
                  <p style={{ fontSize: '0.88rem', color: '#999999', lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRAINING SOLUTIONS PROCESS */}
      <section className="aci-section-pad" style={{ padding: 'clamp(4rem, 6vw, 6rem) 2rem', background: '#111111' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ marginBottom: '3rem' }} className="animate-on-scroll">
            <div className="section-label" style={{ color: '#D4A017', marginBottom: '1rem' }}>Process</div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: '#F5F5F0', marginBottom: '1rem' }}>Our Training Solutions</h2>
            <p style={{ fontSize: '1rem', color: '#999999', maxWidth: '700px', lineHeight: 1.85 }}>
              All programs are customized to the customer&apos;s situation and relevant industry. We ask the client to answer a questionnaire first, then schedule an interview with the responsible representatives once the order has been placed. This interview clarifies whether a skills assessment is required — and in most instances, it is — before the program is adapted and produced.
            </p>
          </div>
          <div className="aci-proposal-grid animate-on-scroll">
            {proposalSteps.map((step, i) => (
              <div key={step.num} style={{ background: '#111111', padding: '2.5rem 2rem', borderTop: `3px solid ${i === 1 ? '#D4A017' : '#888888'}`, position: 'relative' }}>
                <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800, fontSize: '3.5rem', color: 'rgba(255,255,255,0.04)', lineHeight: 1, position: 'absolute', top: '1rem', right: '1.25rem' }}>{step.num}</div>
                <div className="section-label" style={{ color: i === 1 ? '#D4A017' : '#888888', marginBottom: '0.8rem' }}>Step {step.num}</div>
                <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.5rem', color: '#F5F5F0', marginBottom: '1rem' }}>{step.title}</h3>
                <p style={{ fontSize: '0.88rem', color: '#888888', lineHeight: 1.8 }}>{step.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '1.5rem', display: 'flex', gap: '2rem', flexWrap: 'wrap' }} className="animate-on-scroll">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <Calendar size={16} style={{ color: '#D4A017' }} />
              <span style={{ fontSize: '0.85rem', color: '#999999' }}>Delivery: <strong style={{ color: '#F5F5F0' }}>3 weeks to 1 month</strong></span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <CheckCircle2 size={16} style={{ color: '#D4A017' }} />
              <span style={{ fontSize: '0.85rem', color: '#999999' }}>Programs are unique to each customer in most instances</span>
            </div>
          </div>
        </div>
      </section>

      {/* DELIVERY METHODS */}
      <section className="aci-section-pad" style={{ padding: 'clamp(4rem, 6vw, 6rem) 2rem', background: '#0A0A0A' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ marginBottom: '3rem' }} className="animate-on-scroll">
            <div className="section-label" style={{ color: '#D4A017', marginBottom: '1rem' }}>Flexibility</div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: '#F5F5F0' }}>Training Delivery Methods</h2>
          </div>
          <div className="aci-delivery-grid animate-on-scroll">
            {deliveryMethods.map((method, i) => (
              <div key={method.title} style={{ background: '#0A0A0A', padding: '2.5rem', borderTop: '3px solid #D4A017' }}>
                <method.icon size={26} style={{ color: '#D4A017', marginBottom: '1.2rem' }} />
                <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.4rem', color: '#F5F5F0', marginBottom: '1rem' }}>{method.title}</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {method.items.map(item => (
                    <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ color: '#D4A017', fontSize: '0.6rem' }}>◆</span>
                      <span style={{ fontSize: '0.88rem', color: '#999999' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p style={{ marginTop: '1.5rem', fontSize: '0.85rem', color: '#777777', lineHeight: 1.8 }} className="animate-on-scroll">
            All programs are available within one month when delivered electronically, and within four to six weeks when required on hard cover material.
          </p>
        </div>
      </section>

      {/* INDUSTRIES WE SERVE */}
      <section className="aci-section-pad" style={{ padding: 'clamp(4rem, 6vw, 6rem) 2rem', background: '#111111' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ marginBottom: '2.5rem' }} className="animate-on-scroll">
            <div className="section-label" style={{ color: '#D4A017', marginBottom: '1rem' }}>Reach</div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: '#F5F5F0' }}>Industries We Serve</h2>
          </div>
          <div className="aci-tags-wrap animate-on-scroll">
            {industries.map(ind => (
              <span key={ind} style={{
                fontFamily: 'Barlow Condensed, sans-serif', fontSize: '0.75rem',
                letterSpacing: '0.08em', textTransform: 'uppercase',
                color: '#CCCCCC', background: '#1A1A1A',
                border: '1px solid #2A2A2A', padding: '0.5rem 1rem',
              }}>{ind}</span>
            ))}
            <span style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontSize: '0.75rem',
              letterSpacing: '0.08em', textTransform: 'uppercase',
              color: '#D4A017', background: 'rgba(212,160,23,0.1)',
              border: '1px solid rgba(212,160,23,0.3)', padding: '0.5rem 1rem',
            }}>+ More</span>
          </div>
        </div>
      </section>

      {/* TRAINING PROGRAMS */}
      <section className="aci-section-pad" style={{ padding: 'clamp(4rem, 6vw, 6rem) 2rem', background: '#0A0A0A' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ marginBottom: '3rem' }} className="animate-on-scroll">
            <div className="section-label" style={{ color: '#D4A017', marginBottom: '1rem' }}>Curriculum</div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: '#F5F5F0' }}>Our Training Programs</h2>
          </div>
          <div className="aci-programs-grid">
            {programs.map((program, i) => (
              <div key={program} className="animate-on-scroll" style={{
                background: '#0A0A0A', padding: '1.25rem 1.75rem',
                display: 'flex', alignItems: 'center', gap: '0.75rem',
                transition: 'background 0.2s', transitionDelay: `${i * 0.02}s`,
              }}
              onMouseEnter={e => (e.currentTarget.style.background = '#1A1500')}
              onMouseLeave={e => (e.currentTarget.style.background = '#0A0A0A')}>
                <span style={{ color: '#D4A017', fontSize: '0.6rem', flexShrink: 0 }}>◆</span>
                <span style={{ fontFamily: 'Barlow, sans-serif', fontSize: '0.9rem', color: '#CCCCCC' }}>{program}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EVENTS & WORKSHOPS */}
      <section className="aci-section-pad" style={{ padding: 'clamp(3rem, 5vw, 4rem) 2rem', background: '#111111' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }} className="animate-on-scroll">
          <div className="section-label" style={{ color: '#D4A017', marginBottom: '1rem' }}>Beyond Training</div>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)', color: '#F5F5F0', marginBottom: '1.5rem' }}>Events &amp; Workshops</h2>
          <div className="aci-tags-wrap">
            {events.map(e => (
              <span key={e} style={{
                fontFamily: 'Barlow Condensed, sans-serif', fontSize: '0.8rem',
                letterSpacing: '0.08em', textTransform: 'uppercase',
                color: '#D4A017', background: 'rgba(212,160,23,0.08)',
                border: '1px solid rgba(212,160,23,0.25)', padding: '0.6rem 1.2rem',
              }}>{e}</span>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS OF PARTNERING */}
      <section className="aci-section-pad" style={{ padding: 'clamp(4rem, 6vw, 6rem) 2rem', background: '#0D0A00' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ marginBottom: '3rem' }} className="animate-on-scroll">
            <div className="section-label" style={{ color: '#D4A017', marginBottom: '1rem' }}>Outcomes</div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: '#F5F5F0' }}>Benefits of Partnering With Us</h2>
          </div>
          <div className="aci-benefits-grid">
            {benefits.map((b, i) => (
              <div key={b.title} className="card animate-on-scroll" style={{ background: '#1A1500', border: '1px solid rgba(212,160,23,0.2)', borderLeft: '3px solid #D4A017', transitionDelay: `${i * 0.1}s` }}>
                <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.3rem', color: '#F5F5F0', marginBottom: '0.6rem' }}>{b.title}</h3>
                <p style={{ fontSize: '0.88rem', color: '#999999', lineHeight: 1.7 }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNICAL HUB TEASER */}
      <section className="aci-section-pad" style={{ padding: 'clamp(3rem, 5vw, 4rem) 2rem', background: '#111111', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }} className="animate-on-scroll">
          <div className="section-label" style={{ color: '#D4A017', marginBottom: '0.75rem' }}>Coming Soon</div>
          <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.3rem, 3vw, 1.8rem)', color: '#F5F5F0', fontStyle: 'italic' }}>
            The Institute will open a <strong style={{ color: '#D4A017', fontStyle: 'normal' }}>Technical Hub in 2027</strong>. Find out about it.
          </p>
        </div>
      </section>

      {/* GET IN TOUCH */}
      <section id="contact" className="aci-section-pad" style={{ padding: 'clamp(4rem, 6vw, 6rem) 2rem', background: '#0A0A0A' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ marginBottom: '3rem', textAlign: 'center' }} className="animate-on-scroll">
            <div className="section-label" style={{ color: '#D4A017', marginBottom: '1rem', justifyContent: 'center' }}>Let&apos;s Get Started</div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: '#F5F5F0', marginBottom: '1rem' }}>Get in Touch</h2>
            <p style={{ fontSize: '1rem', color: '#888888', lineHeight: 1.8, maxWidth: '500px', margin: '0 auto' }}>
              If you&apos;re interested in learning more about our training solutions, please don&apos;t hesitate to contact us.
            </p>
          </div>

          <div className="aci-contact-grid animate-on-scroll">
            <div style={{ background: '#1A1500', border: '1px solid rgba(212,160,23,0.2)', borderTop: '3px solid #D4A017', padding: '2.5rem' }}>
              <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.6rem', color: '#F5F5F0', marginBottom: '1.5rem' }}>F. Rolo</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <a href="tel:+27614090509" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#CCCCCC', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#D4A017')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#CCCCCC')}>
                  <Phone size={16} style={{ color: '#D4A017', flexShrink: 0 }} />
                  +27 61 409 0509 <span style={{ color: '#666666', fontSize: '0.8rem' }}>(South Africa)</span>
                </a>
                <a href="tel:+26876687638" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#CCCCCC', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#D4A017')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#CCCCCC')}>
                  <Phone size={16} style={{ color: '#D4A017', flexShrink: 0 }} />
                  +268 7668 7638 <span style={{ color: '#666666', fontSize: '0.8rem' }}>(Eswatini)</span>
                </a>
              </div>
            </div>

            <div style={{ background: '#1A1500', border: '1px solid rgba(212,160,23,0.2)', borderTop: '3px solid #D4A017', padding: '2.5rem' }}>
              <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.6rem', color: '#F5F5F0', marginBottom: '1.5rem' }}>Email Us</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <a href="mailto:rolof.bigbosscorporate@outlook.com" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#CCCCCC', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#D4A017')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#CCCCCC')}>
                  <Mail size={16} style={{ color: '#D4A017', flexShrink: 0 }} />
                  rolof.bigbosscorporate@outlook.com
                </a>
                <a href="mailto:rolof.bigbosscorporate@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#CCCCCC', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#D4A017')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#CCCCCC')}>
                  <Mail size={16} style={{ color: '#D4A017', flexShrink: 0 }} />
                  rolof.bigbosscorporate@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }} className="animate-on-scroll">
            <Link href="/contact" className="btn-gold" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              Send Us a Message <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}