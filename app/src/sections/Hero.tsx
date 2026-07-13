import { useState, useEffect } from 'react';
import AmberCascades from './AmberCascades';
import { Github, Linkedin, Terminal, ArrowRight } from 'lucide-react';
import { heroConfig } from '../config';

const SKILLS_TAGS = ['AI & ML', 'Full Stack', 'Mobile Apps', 'Web Development'] as const;

export default function Hero() {
  const [imgHovered, setImgHovered] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!heroConfig.title) return null;

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden flex items-center"
      style={{
        minHeight: '100vh',
        background: '#0a0a0a',
      }}
    >
      {/* Premium animated grid background */}
      <AmberCascades />

      {/* Main Container */}
      <div
        style={{
          width: '100%',
          maxWidth: 1200,
          margin: '0 auto',
          padding: '120px 24px 80px',
          zIndex: 10,
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr',
          gap: 48,
          alignItems: 'center',
          opacity: isMounted ? 1 : 0,
          transform: isMounted ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        className="hero-grid"
      >
        {/* ── LEFT: Typography & Hierarchy ── */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          
          {/* Greeting (Mono label) */}
          <div
            style={{
              fontFamily: "'GeistMono', monospace",
              fontSize: 12,
              fontWeight: 400,
              letterSpacing: '3px',
              textTransform: 'uppercase',
              color: '#c8aa82', // Gold accent
              marginBottom: 16,
            }}
          >
            Hi, I'm
          </div>

          {/* Name heading */}
          <h1
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(40px, 6vw, 76px)',
              lineHeight: 1.05,
              letterSpacing: '-2px',
              color: '#ffffff',
              margin: '0 0 12px 0',
            }}
          >
            {heroConfig.title}
          </h1>

          {/* Professional Title */}
          <h2
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              fontSize: 'clamp(20px, 3.2vw, 32px)',
              lineHeight: 1.15,
              letterSpacing: '-0.75px',
              color: '#94a3b8', // Muted slate color
              marginBottom: 24,
            }}
          >
            Computer Science Engineer
          </h2>

          {/* Tagline / Subtitles */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 32 }}>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 300,
                fontSize: 'clamp(14px, 1.4vw, 17px)',
                lineHeight: 1.6,
                color: 'rgba(255, 255, 255, 0.8)',
                margin: 0,
                maxWidth: 600,
              }}
            >
              {heroConfig.subtitleLine1}
            </p>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 300,
                fontSize: 'clamp(13px, 1.3vw, 15px)',
                lineHeight: 1.6,
                color: 'rgba(255, 255, 255, 0.55)',
                margin: 0,
                maxWidth: 600,
              }}
            >
              {heroConfig.subtitleLine2}
            </p>
          </div>

          {/* Skills Tags */}
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 40 }}>
            {SKILLS_TAGS.map((tag) => (
              <span
                key={tag}
                style={{
                  padding: '6px 12px',
                  borderRadius: 4,
                  fontSize: 11,
                  fontWeight: 400,
                  letterSpacing: '0.5px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  color: 'rgba(255, 255, 255, 0.5)',
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA & Social Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
            {/* Primary Action Button */}
            <button
              onClick={() => document.querySelector('#curriculum')?.scrollIntoView({ behavior: 'smooth' })}
              style={{
                background: '#ffffff',
                border: '1px solid #ffffff',
                color: '#0B1120',
                padding: '14px 28px',
                borderRadius: 8,
                fontWeight: 500,
                fontFamily: "'Inter', sans-serif",
                fontSize: 14,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                boxShadow: '0 4px 12px rgba(255,255,255,0.05)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#ffffff';
                e.currentTarget.style.boxShadow = '0 0 24px rgba(255,255,255,0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#ffffff';
                e.currentTarget.style.color = '#0B1120';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(255,255,255,0.05)';
              }}
            >
              <span>{heroConfig.ctaText}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Social Links */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <a
                href="https://github.com/PUGAL3105"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub Profile"
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: 8,
                  border: '1px solid rgba(255,255,255,0.08)',
                  background: 'rgba(255,255,255,0.03)',
                  color: 'rgba(255,255,255,0.6)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                  e.currentTarget.style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                  e.currentTarget.style.color = 'rgba(255,255,255,0.6)';
                }}
              >
                <Github className="w-5 h-5" />
              </a>

              <a
                href="https://www.linkedin.com/in/pugalarasan-a"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn Profile"
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: 8,
                  border: '1px solid rgba(255,255,255,0.08)',
                  background: 'rgba(255,255,255,0.03)',
                  color: 'rgba(255,255,255,0.6)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                  e.currentTarget.style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                  e.currentTarget.style.color = 'rgba(255,255,255,0.6)';
                }}
              >
                <Linkedin className="w-5 h-5" />
              </a>

              <a
                href="https://leetcode.com/u/Pugalarasan-0310/"
                target="_blank"
                rel="noopener noreferrer"
                title="LeetCode Profile"
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: 8,
                  border: '1px solid rgba(255,255,255,0.08)',
                  background: 'rgba(255,255,255,0.03)',
                  color: 'rgba(255,255,255,0.6)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                  e.currentTarget.style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                  e.currentTarget.style.color = 'rgba(255,255,255,0.6)';
                }}
              >
                <Terminal className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* ── RIGHT: Profile Image & Glassmorphism Card ── */}
        <div
          style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          className="hero-profile"
        >
          {/* Radial glow blob behind profile */}
          <div
            style={{
              position: 'absolute',
              width: 320,
              height: 320,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, rgba(59,130,246,0.05) 50%, transparent 70%)',
              filter: 'blur(30px)',
              pointerEvents: 'none',
              zIndex: 1,
            }}
          />

          {/* Glassmorphism Card Frame */}
          <div
            onMouseEnter={() => setImgHovered(true)}
            onMouseLeave={() => setImgHovered(false)}
            style={{
              position: 'relative',
              zIndex: 2,
              padding: 16,
              borderRadius: 24,
              border: '1px solid rgba(255,255,255,0.08)',
              background: 'rgba(255, 255, 255, 0.01)',
              backdropFilter: 'blur(16px)',
              boxShadow: imgHovered
                ? '0 30px 60px rgba(0,0,0,0.6), inset 0 1px 0 0 rgba(255,255,255,0.05)'
                : '0 20px 40px rgba(0,0,0,0.4), inset 0 1px 0 0 rgba(255,255,255,0.02)',
              transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
              transform: imgHovered ? 'scale(1.02) translateY(-4px)' : 'scale(1) translateY(0)',
            }}
          >
            {/* Glowing inner border */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                borderRadius: 24,
                border: imgHovered ? '1px solid rgba(200,170,130,0.3)' : '1px solid transparent',
                transition: 'border-color 0.4s ease',
                pointerEvents: 'none',
              }}
            />

            {/* Circular image container */}
            <div
              style={{
                width: 240,
                height: 240,
                borderRadius: '50%',
                overflow: 'hidden',
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.06)',
                position: 'relative',
              }}
            >
              <img
                src="/images/profile.png"
                alt="Pugalarasan A — Professional Profile"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  objectPosition: 'center 10%',
                  transform: imgHovered ? 'scale(1.28)' : 'scale(1.25)',
                  filter: imgHovered ? 'brightness(1.05)' : 'brightness(1)',
                  transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), filter 0.5s ease',
                }}
              />
            </div>

            {/* Micro details on card */}
            <div style={{ marginTop: 16, textAlign: 'center' }}>
              <div
                style={{
                  fontFamily: "'GeistMono', monospace",
                  fontSize: 10,
                  fontWeight: 400,
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  color: 'rgba(255, 255, 255, 0.4)',
                }}
              >
                Pugalarasan A
              </div>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 11,
                  fontWeight: 300,
                  color: '#c8aa82',
                  marginTop: 2,
                }}
              >
                Open to Opportunities
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom styles for Hero Grid responsiveness */}
      <style>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
            padding-top: 100px !important;
            text-align: center !important;
          }
          .hero-grid > div {
            align-items: center !important;
          }
          .hero-profile {
            order: -1 !important; /* Move profile card to top on mobile */
          }
        }
      `}</style>
    </section>
  );
}
