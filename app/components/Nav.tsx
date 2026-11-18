'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronRight } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/digital-solutions', label: 'Digital Solutions' },
  { href: '/products', label: 'Products' },
  { href: '/impact', label: 'Impact' },
  { href: '/partnerships', label: 'Partnerships' },
  { href: '/careers', label: 'Careers' },
  { href: '/contact', label: 'Contact' },
];

const LOGO_SRC = '/bigboss.png';

function useIsMobile(breakpoint = 1200) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint}px)`);
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, [breakpoint]);
  return isMobile;
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const pathname = usePathname();
  const sidebarRef = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close sidebar when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when sidebar open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  // Close on outside click
  useEffect(() => {
    if (!menuOpen) return;
    const handler = (e: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [menuOpen]);

  // Close on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, []);

  return (
    <>
      <style>{`
        .nav-desktop-links {
          display: flex;
          gap: 2rem;
          align-items: center;
        }
        .nav-hamburger {
          display: none;
        }
        .nav-backdrop {
          display: none;
        }
        .nav-sidebar {
          display: none;
        }
        @media (max-width: 1200px) {
          .nav-desktop-links {
            display: none !important;
          }
          .nav-hamburger {
            display: flex !important;
          }
          .nav-backdrop {
            display: block !important;
          }
          .nav-sidebar {
            display: flex !important;
          }
        }
        .nav-link-underline {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 1px;
          background: #CC0000;
          transition: width 0.25s ease;
          display: block;
        }
        .sidebar-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 1.75rem;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 1.1rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          text-decoration: none;
          border-bottom: 1px solid #161616;
          border-left: 2px solid transparent;
          transition: all 0.2s ease;
          color: #AAAAAA;
          font-weight: 400;
          background: transparent;
        }
        .sidebar-link:hover {
          color: #F5F5F0;
          background: rgba(255,255,255,0.03);
          border-left-color: rgba(204,0,0,0.4);
        }
        .sidebar-link.active {
          color: #CC0000;
          font-weight: 700;
          background: rgba(204,0,0,0.06);
          border-left-color: #CC0000;
        }
        @keyframes sidebarLinkIn {
          from { opacity: 0; transform: translateX(16px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        .sidebar-link-animated {
          opacity: 0;
          animation: sidebarLinkIn 0.3s ease forwards;
        }
      `}</style>

      {/* ── Navbar ── */}
      <nav
        className="bb-site-navigation"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 200,
          transition: 'all 0.4s cubic-bezier(0.4,0,0.2,1)',
          background: scrolled ? 'rgba(8,8,8,0.97)' : 'transparent',
          borderBottom: scrolled ? '1px solid rgba(204,0,0,0.15)' : '1px solid transparent',
          backdropFilter: scrolled ? 'blur(24px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(24px)' : 'none',
          boxShadow: scrolled ? '0 4px 32px rgba(0,0,0,0.5)' : 'none',
        }}
        role="navigation"
        aria-label="Main navigation"
      >
        <div
          style={{
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '0 1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '72px',
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              flexShrink: 0,
            }}
            aria-label="BigBoss Corporate Consulting — Home"
          >
            <img
              src={LOGO_SRC}
              alt="BigBoss Corporate Consulting"
              style={{
                height: '120px',
                width: 'auto',
                objectFit: 'contain',
                filter: 'drop-shadow(0 0 8px rgba(204,0,0,0.3))',
                transition: 'filter 0.3s ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.filter = 'drop-shadow(0 0 14px rgba(204,0,0,0.6))')}
              onMouseLeave={e => (e.currentTarget.style.filter = 'drop-shadow(0 0 8px rgba(204,0,0,0.3))')}
            />
          </Link>

          {/* Desktop nav links */}
          <div className="nav-desktop-links bb-desktop-links">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              const isHovered = hoveredLink === link.href;
              return (
                <Link
                  key={link.href}
                  className={`bb-nav-link ${isActive ? "is-active" : ""}`}
                  href={link.href}
                  style={{
                    fontFamily: 'Barlow Condensed, sans-serif',
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    color: isActive ? '#CC0000' : isHovered ? '#F5F5F0' : '#888888',
                    transition: 'color 0.2s ease',
                    position: 'relative',
                    paddingBottom: '4px',
                    whiteSpace: 'nowrap',
                  }}
                  onMouseEnter={() => setHoveredLink(link.href)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  {link.label}
                  <span
                    className="nav-link-underline"
                    style={{ width: isActive || isHovered ? '100%' : '0%' }}
                  />
                </Link>
              );
            })}

            {/* CTA button */}
            <Link
              href="/contact"
              style={{
                fontFamily: 'Barlow Condensed, sans-serif',
                fontSize: '0.7rem',
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                padding: '0.55rem 1.4rem',
                background: '#CC0000',
                color: '#F5F5F0',
                border: '1px solid #CC0000',
                transition: 'all 0.25s ease',
                whiteSpace: 'nowrap',
                flexShrink: 0,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#CC0000';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = '#CC0000';
                e.currentTarget.style.color = '#F5F5F0';
              }}
            >
              Get Started
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className="nav-hamburger bb-mobile-nav"
            style={{
              background: 'none',
              border: '1px solid rgba(204,0,0,0.4)',
              cursor: 'pointer',
              color: '#F5F5F0',
              alignItems: 'center',
              justifyContent: 'center',
              width: '42px',
              height: '42px',
              flexShrink: 0,
              transition: 'all 0.2s ease',
            }}
            onClick={() => setMenuOpen(v => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(204,0,0,0.1)';
              e.currentTarget.style.borderColor = '#CC0000';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'none';
              e.currentTarget.style.borderColor = 'rgba(204,0,0,0.4)';
            }}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Backdrop */}
      <div
        className="nav-backdrop bb-mobile-nav"
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 250,
          background: 'rgba(0,0,0,0.7)',
          backdropFilter: 'blur(4px)',
          WebkitBackdropFilter: 'blur(4px)',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
          transition: 'opacity 0.35s ease',
        }}
      />

      {/* Sidebar */}
      <aside
        id="mobile-navigation"
        ref={sidebarRef}
        className="nav-sidebar bb-mobile-nav"
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          zIndex: 300,
          width: 'min(320px, 85vw)',
          background: '#080808',
          borderLeft: '1px solid rgba(204,0,0,0.2)',
          flexDirection: 'column',
          transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.4s cubic-bezier(0.4,0,0.2,1)',
          boxShadow: '-12px 0 64px rgba(0,0,0,0.8)',
          overflowY: 'auto',
        }}
        aria-label="Mobile navigation"
        role="dialog"
        aria-modal="true"
        aria-hidden={!menuOpen}
        inert={!menuOpen}
      >
        {/* Sidebar header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 1.5rem',
            height: '72px',
            borderBottom: '1px solid #1A1A1A',
            flexShrink: 0,
            position: 'sticky',
            top: 0,
            background: '#080808',
            zIndex: 1,
          }}
        >
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}
          >
            <img
              src={LOGO_SRC}
              alt="BigBoss"
              style={{ height: '100px', width: 'auto', objectFit: 'contain' }}
            />
          </Link>
          <button
            onClick={() => setMenuOpen(false)}
            style={{
              background: 'none',
              border: '1px solid #222222',
              cursor: 'pointer',
              color: '#777777',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '36px',
              height: '36px',
              flexShrink: 0,
              transition: 'all 0.2s ease',
            }}
            aria-label="Close menu"
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = '#CC0000';
              e.currentTarget.style.color = '#CC0000';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = '#222222';
              e.currentTarget.style.color = '#777777';
            }}
          >
            <X size={16} />
          </button>
        </div>

        {/* Section label */}
        <div style={{ padding: '1.5rem 1.75rem 0.5rem', flexShrink: 0 }}>
          <p style={{
            fontFamily: 'Barlow Condensed, sans-serif',
            fontSize: '0.65rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#444444',
            margin: 0,
          }}>
            Navigation
          </p>
        </div>

        {/* Nav links */}
        <nav style={{ flex: 1 }} aria-label="Mobile links">
          {navLinks.map((link, i) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`sidebar-link${isActive ? ' active' : ''}${menuOpen ? ' sidebar-link-animated' : ''}`}
                style={menuOpen ? { animationDelay: `${i * 45}ms` } : {}}
              >
                <span>{link.label}</span>
                <ChevronRight
                  size={14}
                  style={{ color: isActive ? '#CC0000' : '#333333', flexShrink: 0 }}
                />
              </Link>
            );
          })}
        </nav>

        {/* Sidebar footer */}
        <div
          style={{
            padding: '1.5rem',
            borderTop: '1px solid #1A1A1A',
            flexShrink: 0,
            background: '#080808',
          }}
        >
          {/* Red accent bar */}
          <div style={{ height: '2px', background: 'linear-gradient(90deg, #CC0000, transparent)', marginBottom: '1.25rem' }} />

          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              padding: '0.9rem 1.5rem',
              background: '#CC0000',
              color: '#F5F5F0',
              fontFamily: 'Barlow Condensed, sans-serif',
              fontSize: '0.8rem',
              fontWeight: 700,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              transition: 'background 0.25s ease',
              width: '100%',
              boxSizing: 'border-box',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#AA0000'; }}
            onMouseLeave={e => { e.currentTarget.style.background = '#CC0000'; }}
          >
            Get Started
          </Link>

          <p style={{
            fontFamily: 'Barlow, sans-serif',
            fontSize: '0.6rem',
            color: '#333333',
            letterSpacing: '0.1em',
            textAlign: 'center',
            marginTop: '1rem',
            textTransform: 'uppercase',
            marginBottom: 0,
          }}>
            © {new Date().getFullYear()} BigBoss Corporate Consulting
          </p>
        </div>
      </aside>
    </>
  );
}