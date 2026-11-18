'use client';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

const sadc = ['Angola','Botswana','Comoros','DRC','Eswatini','Lesotho','Madagascar','Malawi','Mauritius','Mozambique','Namibia','Seychelles','South Africa','Tanzania','Zambia','Zimbabwe'];

export default function Footer() {
  return (
    <footer style={{ background: '#080808', borderTop: '1px solid #2A2A2A', padding: '4rem 2rem 2rem' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
          
          {/* Brand */}
          <div>
            <div style={{ marginBottom: '1rem' }}>
              <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800, fontSize: '1.8rem', letterSpacing: '0.05em', color: '#F5F5F0' }}>
                BIG<span style={{ color: '#CC0000' }}>BOSS</span>
              </div>
              <div style={{ fontFamily: 'Barlow, sans-serif', fontWeight: 300, fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#888888' }}>
                Corporate Consulting
              </div>
            </div>
            <p style={{ fontSize: '0.85rem', color: '#888888', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              <strong style={{ color: '#F5F5F0', fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic' }}>Vision:</strong> An economically empowered Africa where every SADC country thrives.
            </p>
            <p style={{ fontSize: '0.85rem', color: '#888888', lineHeight: 1.7 }}>
              <strong style={{ color: '#F5F5F0', fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic' }}>Mission:</strong> To partner with companies and governments, creating jobs and driving global competitiveness.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <div className="section-label" style={{ marginBottom: '1.2rem' }}>Navigation</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {['About','Services','Digital Solutions','Products','Impact','Partnerships','Careers','Contact'].map(page => (
                <Link key={page} href={`/${page.toLowerCase().replaceAll(" ", "-")}`} style={{
                  color: '#888888', textDecoration: 'none', fontSize: '0.85rem',
                  fontFamily: 'Barlow, sans-serif', transition: 'color 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#F5F5F0')}
                onMouseLeave={e => (e.currentTarget.style.color = '#888888')}>
                  {page}
                </Link>
              ))}
            </div>
          </div>

          {/* SADC Countries */}
          <div>
            <div className="section-label" style={{ marginBottom: '1.2rem' }}>SADC Presence</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {sadc.map(c => (
                <span key={c} style={{
                  fontFamily: 'Barlow Condensed, sans-serif',
                  fontSize: '0.65rem',
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                  color: '#666666',
                  background: '#1A1A1A',
                  border: '1px solid #2A2A2A',
                  padding: '0.2rem 0.5rem',
                  textTransform: 'uppercase',
                }}>{c}</span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div className="section-label" style={{ marginBottom: '1.2rem' }}>Contact</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.8rem', color: '#888888' }}>
              <a href="mailto:rolof.bigbosscorporate@outlook.com" style={{ color: '#888888', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#CC0000')}
                onMouseLeave={e => (e.currentTarget.style.color = '#888888')}>
                rolof.bigbosscorporate@outlook.com
              </a>
              <a href="mailto:rolof@roloenterprisesig.com" style={{ color: '#888888', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#CC0000')}
                onMouseLeave={e => (e.currentTarget.style.color = '#888888')}>
                rolof@roloenterprisesig.com
              </a>
            </div>
            <div style={{ marginTop: '1.5rem' }}>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                color: '#888888', textDecoration: 'none', fontSize: '0.8rem',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#0A66C2')}
              onMouseLeave={e => (e.currentTarget.style.color = '#888888')}>
                <ExternalLink size={16} />
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid #2A2A2A', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ fontSize: '0.75rem', color: '#444444', fontFamily: 'Barlow Condensed, sans-serif', letterSpacing: '0.05em' }}>
            © 2026 BigBoss Corporate Consulting. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Link href="/privacy" style={{ fontSize: '0.75rem', color: '#444444', textDecoration: 'none', fontFamily: 'Barlow Condensed, sans-serif', letterSpacing: '0.05em' }}>Privacy</Link>
            <span style={{ fontSize: '0.75rem', color: '#444444', fontFamily: 'Barlow Condensed, sans-serif', letterSpacing: '0.05em' }}>Organisation Transformation Solutions</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
