import { useState, useEffect } from 'react';
import { accentRgba } from '../constants';
import { CONTENT } from '../content';
import GlassCard from './GlassCard';

const { heading, badge, modules, labelComplete, labelLocked } = CONTENT.progress;

export default function ProgressCard() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <GlassCard style={{ padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: 14 }}>
      {/* Header */}
      <div className="flex justify-between items-center">
        <span
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 13,
            fontWeight: 600,
            color: 'var(--color-text-primary)',
          }}
        >
          {heading}
        </span>
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            color: 'var(--color-accent)',
          }}
        >
          {badge}
        </span>
      </div>

      {/* Modules */}
      {modules.map((mod, i) => (
        <div key={mod.name} className="flex flex-col gap-1">
          <div className="flex justify-between">
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 11,
                color: mod.pct > 0 ? 'var(--color-text-secondary)' : 'var(--color-text-disabled)',
              }}
            >
              {mod.name}
            </span>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 10,
                color: mod.pct === 100 ? 'var(--color-accent)' : 'var(--color-text-disabled)',
              }}
            >
              {mod.pct === 100
                ? labelComplete
                : mod.pct > 0
                ? `${mod.pct}%`
                : labelLocked}
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
    </GlassCard>
  );
}
