import { useEffect, useState } from 'react';
import { siteConfig, navigationConfig } from '../config';
import { Cpu, FolderGit2, MonitorPlay, Terminal, Mail, Menu, X } from 'lucide-react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/') || href.endsWith('.html')) {
      setMenuOpen(false);
      return; // Follow link naturally to separate page
    }
    e.preventDefault();
    setMenuOpen(false);
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const getIcon = (label: string) => {
    const cls = 'w-4 h-4 inline-block align-text-bottom text-amber-400/80';
    switch (label.toLowerCase()) {
      case 'expertise':   return <Cpu className={cls} />;
      case 'projects':    return <FolderGit2 className={cls} />;
      case 'showcase':    return <MonitorPlay className={cls} />;
      case 'ai assistant':return <Terminal className={cls} />;
      case 'contact':     return <Mail className={cls} />;
      default:            return null;
    }
  };

  if (!siteConfig.brandName && navigationConfig.links.length === 0) return null;

  return (
    <>
      {/* ── Main nav bar ── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between transition-colors duration-500"
        style={{
          height: 72,
          padding: '0 clamp(16px, 5vw, 60px)',
          backgroundColor: scrolled ? 'rgba(10,10,10,0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
        }}
      >
        {/* Brand */}
        <a
          href="#hero"
          onClick={(e) => handleClick(e, '#hero')}
          style={{
            fontFamily: "'GeistMono', monospace",
            fontSize: 'clamp(14px, 2.5vw, 18px)',
            fontWeight: 400,
            letterSpacing: '-0.5px',
            color: '#fff',
            textDecoration: 'none',
            minHeight: 'unset',
            minWidth: 'unset',
          }}
        >
          {siteConfig.brandName}
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center" style={{ gap: 'clamp(20px, 3vw, 40px)' }}>
          {navigationConfig.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className="nav-link flex items-center"
              style={{ gap: 6, minHeight: 'unset', minWidth: 'unset' }}
            >
              {getIcon(link.label)}
              <span>{link.label}</span>
            </a>
          ))}
          {navigationConfig.ctaText && (
            <a
              href="#footer"
              onClick={(e) => handleClick(e, '#footer')}
              className="nav-link"
              style={{ minHeight: 'unset', minWidth: 'unset' }}
            >
              {navigationConfig.ctaText}
            </a>
          )}
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex md:hidden items-center justify-center"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          style={{
            background: 'transparent', border: 'none', cursor: 'pointer',
            color: 'rgba(255,255,255,0.7)', padding: 8,
          }}
        >
          <Menu style={{ width: 22, height: 22 }} />
        </button>
      </nav>

      {/* ── Mobile full-screen menu ── */}
      {menuOpen && (
        <div
          style={{
            position: 'fixed', inset: 0, zIndex: 200,
            background: 'rgba(8,8,8,0.98)',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            gap: 40,
            animation: 'fadeIn 0.25s ease',
          }}
        >
          {/* Close button */}
          <button
            onClick={() => setMenuOpen(false)}
            style={{
              position: 'absolute', top: 24, right: 24,
              background: 'transparent', border: 'none', cursor: 'pointer',
              color: 'rgba(255,255,255,0.5)',
            }}
            aria-label="Close menu"
          >
            <X style={{ width: 28, height: 28 }} />
          </button>

          {/* Brand in menu */}
          <div style={{
            fontFamily: "'GeistMono', monospace",
            fontSize: 14, letterSpacing: '3px', textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.2)', marginBottom: 8,
          }}>
            {siteConfig.brandName}
          </div>

          {/* Nav links */}
          {navigationConfig.links.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              style={{
                fontFamily: "'EB Garamond', serif",
                fontSize: 'clamp(28px, 7vw, 42px)',
                fontWeight: 400, letterSpacing: '-0.5px',
                color: '#fff', textDecoration: 'none',
                opacity: 0,
                animation: `fadeUp 0.4s ${i * 0.06 + 0.1}s ease forwards`,
                minHeight: 'unset', minWidth: 'unset',
              }}
            >
              {link.label}
            </a>
          ))}

          {navigationConfig.ctaText && (
            <a
              href="#footer"
              onClick={(e) => handleClick(e, '#footer')}
              style={{
                fontFamily: "'GeistMono', monospace",
                fontSize: 11, letterSpacing: '3px', textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.35)', textDecoration: 'none',
                marginTop: 8, minHeight: 'unset', minWidth: 'unset',
                opacity: 0,
                animation: `fadeUp 0.4s 0.5s ease forwards`,
              }}
            >
              {navigationConfig.ctaText}
            </a>
          )}
        </div>
      )}

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
      `}</style>
    </>
  );
}
