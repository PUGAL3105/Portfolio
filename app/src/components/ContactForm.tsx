import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setStatus('submitting');

    // Simulate sending email/feedback
    setTimeout(() => {
      setStatus('success');
      setName('');
      setEmail('');
      setMessage('');
    }, 1200);
  };

  return (
    <section
      id="contact"
      style={{
        padding: '120px 5vw',
        background: '#0a0a0a',
        position: 'relative',
        zIndex: 2,
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
      }}
    >
      <div style={{ maxWidth: 680, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 12,
              fontWeight: 300,
              letterSpacing: '3px',
              textTransform: 'uppercase',
              color: '#dadada',
              opacity: 0.6,
              marginBottom: 16,
            }}
          >
            Communication
          </div>
          <h2
            style={{
              fontFamily: "'EB Garamond', serif",
              fontWeight: 400,
              fontSize: 'clamp(28px, 4.5vw, 52px)',
              color: '#ffffff',
              letterSpacing: '-1.5px',
              margin: '0 0 16px 0',
            }}
          >
            Leave a Message
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 200,
              fontSize: 14.5,
              color: 'rgba(255,255,255,0.45)',
              lineHeight: 1.6,
              maxWidth: 480,
              margin: '0 auto',
            }}
          >
            Have a project in mind, an opportunity, or just want to connect? Send a note, and I will get back to you.
          </p>
        </div>

        {/* Status Screen */}
        {status === 'success' ? (
          <div
            style={{
              textAlign: 'center',
              padding: '48px 32px',
              borderRadius: 3,
              border: '1px solid rgba(34, 197, 94, 0.2)',
              background: 'rgba(34, 197, 94, 0.02)',
              animation: 'fadeIn 0.5s ease',
            }}
          >
            <CheckCircle className="w-12 h-12 text-[#22c55e] mx-auto mb-4" />
            <h3
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                fontSize: 18,
                color: '#ffffff',
                marginBottom: 8,
              }}
            >
              Message Received
            </h3>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 200,
                fontSize: 13.5,
                color: 'rgba(255,255,255,0.5)',
                margin: '0 0 24px 0',
              }}
            >
              Thank you for reaching out. I will respond to your query as soon as possible.
            </p>
            <button
              onClick={() => setStatus('idle')}
              style={{
                background: 'transparent',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: '#dadada',
                padding: '10px 24px',
                borderRadius: 2,
                cursor: 'pointer',
                fontFamily: "'GeistMono', monospace",
                fontSize: 11,
                letterSpacing: '2px',
                textTransform: 'uppercase',
              }}
            >
              Send Another
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 20,
              padding: '36px 32px',
              borderRadius: 3,
              background: 'rgba(12,12,12,0.4)',
              border: '1px solid rgba(255, 255, 255, 0.06)',
            }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
              {/* Name */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <label
                  htmlFor="contact-name"
                  style={{
                    fontFamily: "'GeistMono', monospace",
                    fontSize: 10,
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.45)',
                  }}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="contact-name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Name"
                  style={{
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: 2,
                    padding: '12px 16px',
                    color: '#ffffff',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 14,
                    outline: 'none',
                    transition: 'border-color 0.3s',
                  }}
                  onFocus={(e) => { e.target.style.borderColor = 'rgba(200, 170, 130, 0.6)'; }}
                  onBlur={(e) => { e.target.style.borderColor = 'rgba(255, 255, 255, 0.08)'; }}
                />
              </div>

              {/* Email */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <label
                  htmlFor="contact-email"
                  style={{
                    fontFamily: "'GeistMono', monospace",
                    fontSize: 10,
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.45)',
                  }}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="contact-email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  style={{
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: 2,
                    padding: '12px 16px',
                    color: '#ffffff',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 14,
                    outline: 'none',
                    transition: 'border-color 0.3s',
                  }}
                  onFocus={(e) => { e.target.style.borderColor = 'rgba(200, 170, 130, 0.6)'; }}
                  onBlur={(e) => { e.target.style.borderColor = 'rgba(255, 255, 255, 0.08)'; }}
                />
              </div>
            </div>

            {/* Message */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <label
                htmlFor="contact-message"
                style={{
                  fontFamily: "'GeistMono', monospace",
                  fontSize: 10,
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.45)',
                }}
              >
                Message
              </label>
              <textarea
                id="contact-message"
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your message..."
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 2,
                  padding: '12px 16px',
                  color: '#ffffff',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 14,
                  outline: 'none',
                  resize: 'vertical',
                  transition: 'border-color 0.3s',
                }}
                onFocus={(e) => { e.target.style.borderColor = 'rgba(200, 170, 130, 0.6)'; }}
                onBlur={(e) => { e.target.style.borderColor = 'rgba(255, 255, 255, 0.08)'; }}
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={status === 'submitting'}
              style={{
                marginTop: 8,
                background: 'transparent',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: '#ffffff',
                padding: '14px 28px',
                borderRadius: 2,
                cursor: 'pointer',
                fontFamily: "'GeistMono', monospace",
                fontSize: 11,
                letterSpacing: '2.5px',
                textTransform: 'uppercase',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 10,
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(200, 170, 130, 0.8)';
                e.currentTarget.style.boxShadow = '0 0 16px rgba(200, 170, 130, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <Send className="w-3.5 h-3.5" />
              <span>{status === 'submitting' ? 'Sending...' : 'Send Message'}</span>
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
