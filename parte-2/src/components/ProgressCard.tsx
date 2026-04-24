import { useState, useEffect } from 'react';
import { accentRgba } from '../constants';

const MODULES = [
  { name: 'Fundamentos Python',    pct: 100 },
  { name: 'Estruturas de dados',   pct: 100 },
  { name: 'APIs e automações',     pct: 60 },
  { name: 'ML com scikit-learn',   pct: 0 },
];

export default function ProgressCard() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      style={{
        background: 'rgba(255,255,255,0.03)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.07)',
        borderRadius: 12,
        padding: '20px 24px',
        display: 'flex',
        flexDirection: 'column',
        gap: 14,
      }}
    >
      {/* Header */}
      <div className="flex justify-between items-center">
        <span
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 13,
            fontWeight: 600,
            color: '#F8FAFC',
          }}
        >
          Progresso do curso
        </span>
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            color: 'var(--color-accent)',
          }}
        >
          módulo 3/8
        </span>
      </div>

      {/* Modules */}
      {MODULES.map((mod, i) => (
        <div key={mod.name} className="flex flex-col gap-1">
          <div className="flex justify-between">
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 11,
                color: mod.pct > 0 ? '#94A3B8' : '#334155',
              }}
            >
              {mod.name}
            </span>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 10,
                color: mod.pct === 100 ? 'var(--color-accent)' : '#334155',
              }}
            >
              {mod.pct === 100
                ? '✓ concluído'
                : mod.pct > 0
                ? `${mod.pct}%`
                : 'bloqueado'}
            </span>
          </div>
          <div
            style={{
              height: 3,
              borderRadius: 9999,
              background: 'rgba(255,255,255,0.06)',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                height: '100%',
                width: mounted ? `${mod.pct}%` : '0%',
                background:
                  mod.pct === 100 ? 'var(--color-accent)' : accentRgba(0.40),
                borderRadius: 9999,
                transition: `width 1s ease ${i * 120}ms`,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
