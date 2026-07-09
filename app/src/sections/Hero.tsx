import { useRef, useEffect, useState } from 'react';
import AmberCascades from './AmberCascades';
import LiquidGlassButton from '../components/LiquidGlassButton';
import { heroConfig } from '../config';

const TAGS = ['AI / ML', 'Full Stack', 'Computer Vision', 'Cybersecurity', 'Web Dev'] as const;

export default function Hero() {
  const titleRef  = useRef<HTMLHeadingElement>(null);
  const [titleWidth, setTitleWidth] = useState<number>(0);
  const [imgHovered, setImgHovered]  = useState(false);

  // Measure title width for subtitle max-width alignment
  useEffect(() => {
    const measure = () => {
      if (titleRef.current) setTitleWidth(titleRef.current.offsetWidth);
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  if (!heroConfig.title) return null;

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden"
      style={{ minHeight: '100vh' }}
    >
      <AmberCascades />

      {/* ── Main Hero Layout ── */}
      <div
        className="relative z-10 flex flex-col md:flex-row items-center justify-between"
        style={{
          minHeight: '100vh',
          padding: 'clamp(80px,12vh,140px) clamp(20px,5vw,80px) clamp(40px,8vh,80px)',
          gap: 'clamp(32px,4vw,80px)',
        }}
      >
        {/* ── LEFT: Text Content ── */}
        <div style={{ flex: 1, maxWidth: 680 }}>

          {/* Mono label */}
          <div style={{
            fontFamily: "'GeistMono', monospace",
            fontSize: 'clamp(9px,1vw,11px)',
            letterSpacing: '4px',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.35)',
            marginBottom: 20,
          }}>
            Portfolio · 2026
          </div>

          {/* Name heading */}
          <h1
            ref={titleRef}
            className="text-white"
            style={{
              fontFamily: "'EB Garamond', serif",
              fontWeight: 400,
              fontSize: 'clamp(36px,5.5vw,82px)',
              lineHeight: 1.05,
              letterSpacing: 'clamp(-1px,-0.2vw,-2.5px)',
              textShadow: '0 4px 24px rgba(0,0,0,0.8)',
              marginBottom: 'clamp(16px,2.5vw,28px)',
            }}
          >
            {heroConfig.title}
          </h1>

          {/* Divider */}
          <div style={{
            width: 'clamp(40px,5vw,80px)', height: 1,
            background: 'rgba(255,255,255,0.2)',
            marginBottom: 'clamp(16px,2.5vw,24px)',
          }} />

          {/* Subtitle lines */}
          {heroConfig.subtitleLine1 && (
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 300,
              fontSize: 'clamp(12px,1.3vw,16px)',
              lineHeight: 1.75,
              color: 'rgba(255,255,255,0.6)',
              margin: '0 0 8px 0',
              maxWidth: titleWidth || '100%',
            }}>
              {heroConfig.subtitleLine1}
            </p>
          )}
          {heroConfig.subtitleLine2 && (
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 300,
              fontSize: 'clamp(12px,1.3vw,16px)',
              lineHeight: 1.75,
              color: 'rgba(255,255,255,0.6)',
              margin: `0 0 clamp(24px,4vw,40px) 0`,
              maxWidth: titleWidth || '100%',
            }}>
              {heroConfig.subtitleLine2}
            </p>
          )}

          {/* Skill tags */}
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 'clamp(24px,4vw,40px)' }}>
            {TAGS.map(tag => (
              <span key={tag} style={{
                padding: 'clamp(3px,0.5vh,5px) clamp(10px,1.2vw,14px)',
                borderRadius: 2,
                fontSize: 'clamp(8px,0.85vw,10px)',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: 'rgba(255,255,255,0.45)',
                fontFamily: "'GeistMono', monospace",
              }}>{tag}</span>
            ))}
          </div>

          {/* CTA Button */}
          {heroConfig.ctaText && (
            <div className="pointer-events-auto">
              <LiquidGlassButton
                onClick={() => document.querySelector('#curriculum')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {heroConfig.ctaText}
              </LiquidGlassButton>
            </div>
          )}
        </div>

        {/* ── RIGHT: Profile Image ── */}
        <div style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>

          {/* Hover wrapper + glow ring */}
          <div
            onMouseEnter={() => setImgHovered(true)}
            onMouseLeave={() => setImgHovered(false)}
            style={{
              position: 'relative',
              width:  'clamp(200px,24vw,300px)',
              height: 'clamp(200px,24vw,300px)',
              transition: 'transform 0.5s ease',
              transform: imgHovered ? 'translateY(-6px)' : 'translateY(0)',
            }}
          >
            {/* Ambient glow blob */}
            <div style={{
              position: 'absolute', inset: -16,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(59,130,246,0.25) 0%, transparent 70%)',
              filter: 'blur(20px)',
              opacity: imgHovered ? 1 : 0.5,
              transition: 'opacity 0.4s',
              pointerEvents: 'none',
            }} />

            {/* Decorative border ring */}
            <div style={{
              position: 'absolute', inset: -5,
              borderRadius: '50%',
              border: imgHovered
                ? '2px solid rgba(59,130,246,0.7)'
                : '1px solid rgba(255,255,255,0.12)',
              boxShadow: imgHovered ? '0 0 24px rgba(59,130,246,0.35)' : 'none',
              transition: 'all 0.4s ease',
              pointerEvents: 'none',
              zIndex: 2,
            }} />

            {/* ── Circular image container ── */}
            <div style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              overflow: 'hidden',
              // Transparent bg so removed-bg PNG blends perfectly
              background: 'transparent',
              boxShadow: imgHovered
                ? '0 24px 60px rgba(0,0,0,0.85), 0 0 0 1px rgba(59,130,246,0.2)'
                : '0 12px 36px rgba(0,0,0,0.6)',
              transition: 'box-shadow 0.4s ease',
            }}>
              <img
                src="/images/profile.png"
                alt="Pugalarasan A — Professional Profile"
                style={{
                  width: '100%',
                  height: '100%',
                  // contain = shows FULL image, no cropping
                  objectFit: 'contain',
                  objectPosition: 'center 10%',
                  display: 'block',
                  // Scale up so subject fills the circle
                  transform: imgHovered ? 'scale(1.30)' : 'scale(1.25)',
                  filter: imgHovered
                    ? 'brightness(1.08) contrast(1.05) drop-shadow(0 4px 16px rgba(59,130,246,0.3))'
                    : 'brightness(1) contrast(1)',
                  transition: 'filter 0.4s ease, transform 0.5s ease',
                }}
              />
            </div>

            {/* Name badge */}
            <div style={{
              position: 'absolute', bottom: -44, left: '50%',
              transform: 'translateX(-50%)',
              whiteSpace: 'nowrap', textAlign: 'center',
            }}>
              <div style={{
                fontFamily: "'GeistMono', monospace",
                fontSize: 'clamp(8px,0.85vw,10px)',
                letterSpacing: '2.5px',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.3)',
              }}>
                Pugalarasan A · CSE Student
              </div>
            </div>
          </div>

          {/* Status badge */}
          <div style={{
            marginTop: 52,
            display: 'flex', alignItems: 'center', gap: 8,
            padding: '6px 14px', borderRadius: 2,
            border: '1px solid rgba(34,197,94,0.3)',
            background: 'rgba(34,197,94,0.05)',
          }}>
            <span style={{
              width: 6, height: 6, borderRadius: '50%',
              background: '#22c55e', boxShadow: '0 0 8px #22c55e',
              display: 'inline-block', animation: 'heroPulse 2s infinite',
            }} />
            <span style={{
              fontFamily: "'GeistMono', monospace",
              fontSize: 'clamp(8px,0.85vw,10px)',
              letterSpacing: '1.5px', textTransform: 'uppercase',
              color: '#86efac',
            }}>
              Open to Opportunities
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes heroPulse {
          0%, 100% { opacity: 1; box-shadow: 0 0 8px #22c55e; }
          50%       { opacity: 0.6; box-shadow: 0 0 16px #22c55e; }
        }
      `}</style>
    </section>
  );
}
