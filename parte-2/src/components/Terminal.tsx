import { useState, useEffect } from 'react';
import { ACCENT } from '../constants';
import { CONTENT } from '../content';
import GlassCard from './GlassCard';

const LINE_META: Record<string, { color?: string; delay: number }> = {
  install:  {                   delay: 0    },
  env:      { color: ACCENT,    delay: 900  },
  module:   { color: ACCENT,    delay: 1400 },
  run:      {                   delay: 1900 },
  loaded:   { color: '#94A3B8', delay: 2600 },
  accuracy: { color: '#94A3B8', delay: 3100 },
};

const LINES = CONTENT.terminal.lines.map((line) => ({
  ...line,
  ...LINE_META[line.id],
}));

export default function Terminal() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timers = LINES.map((line, i) =>
      setTimeout(() => setStep((s) => Math.max(s, i + 1)), line.delay + 600)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <GlassCard style={{
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.08), 0 0 60px rgba(133,232,234,0.05)',
      overflow: 'hidden',
      width: '100%',
    }}>
      {/* Titlebar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          padding: '10px 16px',
          boxShadow: 'inset 0 -1px 0 rgba(255,255,255,0.05)',
          background: 'rgba(255,255,255,0.02)',
        }}
      >
        {['#EF4444', '#F59E0B', ACCENT].map((c) => (
          <div
            key={c}
            style={{
              width: 9,
              height: 9,
              borderRadius: '50%',
              background: c,
              opacity: 0.7,
            }}
          />
        ))}
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 10,
            color: 'var(--color-text-disabled)',
            letterSpacing: '0.08em',
            marginLeft: 6,
          }}
        >
          {CONTENT.terminal.title}
        </span>
      </div>

      {/* Content */}
      <div
        style={{
          padding: '20px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: 9,
          minHeight: 180,
        }}
      >
        {LINES.slice(0, step).map((line) => (
          <div
            key={line.id}
            className="terminal-line"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 13,
              lineHeight: 1.5,
              display: 'flex',
              gap: 8,
            }}
          >
            {line.prompt ? (
              <>
                <span style={{ color: 'var(--color-accent)' }}>$</span>
                <span style={{ color: 'var(--color-text-primary)' }}>{line.text}</span>
              </>
            ) : (
              <span style={{ color: line.color }}>{line.text}</span>
            )}
          </div>
        ))}

        {step < LINES.length && (
          <span
            className="cursor-blink"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 14,
              color: 'var(--color-accent)',
            }}
          >
            ▋
          </span>
        )}
      </div>
    </GlassCard>
  );
}
