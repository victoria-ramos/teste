import { CONTENT } from '../content';
import { accentRgba } from '../constants';
import Terminal from './Terminal';
import ProgressCard from './ProgressCard';
import GlassCard from './GlassCard';

interface Props {
  visible: boolean;
}

export default function HeroRight({ visible }: Props) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        position: 'relative',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(12px)',
        transition: 'opacity 0.75s ease 300ms, transform 0.75s ease 300ms',
      }}
    >
      {/* Floating badge — top right */}
      <GlassCard
        variant="accent"
        className="hero-badges"
        style={{
          position: 'absolute',
          top: -28,
          right: 0,
          zIndex: 2,
          borderRadius: 8,
          padding: '10px 16px',
          display: 'flex',
          alignItems: 'center',
          gap: 10,
        }}
      >
        <span
          className="dot-pulse"
          style={{
            width: 5,
            height: 5,
            borderRadius: '50%',
            background: 'var(--color-accent)',
            boxShadow: '0 0 6px var(--color-accent)',
            display: 'inline-block',
            flexShrink: 0,
          }}
        />
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            color: 'var(--color-accent)',
            letterSpacing: '0.06em',
          }}
        >
          {CONTENT.floatingBadge.module}
        </span>
        <span
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 12,
            color: 'var(--color-text-secondary)',
          }}
        >
          {CONTENT.floatingBadge.description}
        </span>
      </GlassCard>

      <Terminal />

      {/* Progress card + cert badge wrapper */}
      <div style={{ position: 'relative' }}>
        <ProgressCard />

        {/* Cert badge — bottom left */}
        <GlassCard
          variant="dark"
          className="hero-badges"
          style={{
            position: 'absolute',
            bottom: -20,
            left: -20,
            zIndex: 2,
            borderRadius: 10,
            padding: '12px 18px',
            display: 'flex',
            alignItems: 'center',
            gap: 12,
          }}
        >
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: 8,
              background: accentRgba(0.10),
              boxShadow: `inset 0 0 0 1px ${accentRgba(0.22)}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <span style={{ fontSize: 16 }}>🏅</span>
          </div>
          <div className="flex flex-col gap-0.5">
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 12,
                fontWeight: 600,
                color: 'var(--color-text-primary)',
              }}
            >
              {CONTENT.certBadge.title}
            </span>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 10,
                color: 'var(--color-text-disabled)',
              }}
            >
              {CONTENT.certBadge.subtitle}
            </span>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
