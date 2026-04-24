import { useState, useEffect } from 'react';
import { ACCENT } from '../constants';
import GlassCard from './GlassCard';

interface TerminalLine {
  prompt: boolean;
  text: string;
  color?: string;
  delay: number;
}

const LINES: TerminalLine[] = [
  { prompt: true,  text: 'pip install python-ia-course',  delay: 0 },
  { prompt: false, text: '✓ Ambiente configurado',         color: ACCENT,    delay: 900 },
  { prompt: false, text: '✓ Módulo 1 desbloqueado',        color: ACCENT,    delay: 1400 },
  { prompt: true,  text: 'python projeto_ia.py',           delay: 1900 },
  { prompt: false, text: '→ Modelo carregado em 0.4s',     color: '#94A3B8', delay: 2600 },
  { prompt: false, text: '→ Resultado: 98.2% acurácia',    color: '#94A3B8', delay: 3100 },
];

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
            color: '#334155',
            letterSpacing: '0.08em',
            marginLeft: 6,
          }}
        >
          terminal — projeto_ia.py
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
            key={line.text}
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
                <span style={{ color: '#F8FAFC' }}>{line.text}</span>
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
