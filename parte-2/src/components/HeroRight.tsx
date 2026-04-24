import Terminal from './Terminal';
import ProgressCard from './ProgressCard';
import { accentRgba } from '../constants';

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
      <div
        style={{
          position: 'absolute',
          top: -28,
          right: 0,
          zIndex: 2,
          background: accentRgba(0.08),
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          boxShadow: `inset 0 0 0 1px ${accentRgba(0.20)}`,
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
          módulo 1
        </span>
        <span
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 12,
            color: '#94A3B8',
          }}
        >
          Python básico ao avançado
        </span>
      </div>

      <Terminal />

      {/* Progress card + cert badge wrapper */}
      <div style={{ position: 'relative' }}>
        <ProgressCard />

        {/* Cert badge — bottom left */}
        <div
          style={{
            position: 'absolute',
            bottom: -20,
            left: -20,
            zIndex: 2,
            background: 'rgba(8,8,8,0.88)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.10)',
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
                color: '#F8FAFC',
              }}
            >
              Certificado emitido
            </span>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 10,
                color: '#475569',
              }}
            >
              reconhecido pelo mercado
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
