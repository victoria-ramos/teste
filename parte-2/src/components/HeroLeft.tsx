import { useState, useEffect } from 'react';
import EyebrowBadge from './EyebrowBadge';
import TypewriterBullets from './TypewriterBullets';
import StatItem from './StatItem';

export default function HeroLeft() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  const fade = (delay: number): React.CSSProperties => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(12px)',
    transition: `opacity 0.75s ease ${delay}ms, transform 0.75s ease ${delay}ms`,
  });

  const handlePrimaryEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.background = 'rgba(133,232,234,0.28)';
    e.currentTarget.style.boxShadow =
      'inset 0 1px 0 rgba(255,255,255,0.45), inset 0 0 0 1px rgba(133,232,234,0.50), 0 0 36px rgba(133,232,234,0.30), 0 4px 20px rgba(133,232,234,0.20)';
    e.currentTarget.style.transform = 'translateY(-2px)';
  };

  const handlePrimaryLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.background = 'rgba(133,232,234,0.18)';
    e.currentTarget.style.boxShadow =
      'inset 0 1px 0 rgba(255,255,255,0.35), inset 0 0 0 1px rgba(133,232,234,0.35), 0 2px 16px rgba(133,232,234,0.18)';
    e.currentTarget.style.transform = 'translateY(0)';
  };

  const handleGhostEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
    e.currentTarget.style.boxShadow =
      'inset 0 1px 0 rgba(255,255,255,0.22), inset 0 0 0 1px rgba(255,255,255,0.22)';
    e.currentTarget.style.transform = 'translateY(-1px)';
  };

  const handleGhostLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
    e.currentTarget.style.boxShadow =
      'inset 0 1px 0 rgba(255,255,255,0.14), inset 0 0 0 1px rgba(255,255,255,0.12)';
    e.currentTarget.style.transform = 'translateY(0)';
  };

  return (
    <div className="flex flex-col">
      <EyebrowBadge visible={visible} />

      <h1
        style={{
          ...fade(80),
          fontFamily: 'var(--font-sans)',
          fontWeight: 500,
          fontSize: 'clamp(42px, 5vw, 72px)',
          color: '#F8FAFC',
          lineHeight: 1.06,
          letterSpacing: '-0.04em',
          margin: '0 0 20px 0',
          textWrap: 'pretty' as never,
        }}
      >
        Aprenda Python do zero e construa projetos reais com{' '}
        <span
          style={{
            color: '#85E8EA',
            textShadow: '0 0 40px rgba(133,232,234,0.35)',
          }}
        >
          IA
        </span>
      </h1>

      <p
        style={{
          ...fade(180),
          fontFamily: 'var(--font-sans)',
          fontSize: 18,
          fontWeight: 400,
          color: '#94A3B8',
          lineHeight: 1.65,
          margin: '0 0 36px 0',
          maxWidth: 480,
          textWrap: 'pretty' as never,
        }}
      >
        O curso mais prático do Brasil para quem quer entrar em tecnologia sem
        enrolação.
      </p>

      <TypewriterBullets visible={visible} />

      {/* CTAs */}
      <div
        style={{
          ...fade(360),
          display: 'flex',
          alignItems: 'center',
          gap: 14,
          marginBottom: 52,
          flexWrap: 'wrap',
        }}
      >
        <button
          style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 600,
            fontSize: 15,
            padding: '13px 28px',
            borderRadius: 9999,
            border: 'none',
            cursor: 'pointer',
            letterSpacing: '-0.01em',
            whiteSpace: 'nowrap',
            background: 'rgba(133,232,234,0.18)',
            backdropFilter: 'blur(14px) saturate(180%)',
            WebkitBackdropFilter: 'blur(14px) saturate(180%)',
            boxShadow:
              'inset 0 1px 0 rgba(255,255,255,0.35), inset 0 0 0 1px rgba(133,232,234,0.35), 0 2px 16px rgba(133,232,234,0.18)',
            color: '#fff',
            textShadow: '0 1px 2px rgba(0,0,0,0.20)',
            transition: 'all 0.18s ease',
          }}
          onMouseEnter={handlePrimaryEnter}
          onMouseLeave={handlePrimaryLeave}
          onMouseDown={(e) => (e.currentTarget.style.transform = 'scale(0.96)')}
          onMouseUp={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
        >
          Quero começar agora
        </button>

        <button
          style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 500,
            fontSize: 14,
            padding: '11px 24px',
            borderRadius: 6,
            border: 'none',
            cursor: 'pointer',
            letterSpacing: '-0.01em',
            whiteSpace: 'nowrap',
            background: 'rgba(255,255,255,0.04)',
            color: '#F8FAFC',
            backdropFilter: 'blur(12px) saturate(140%)',
            WebkitBackdropFilter: 'blur(12px) saturate(140%)',
            boxShadow:
              'inset 0 1px 0 rgba(255,255,255,0.14), inset 0 0 0 1px rgba(255,255,255,0.12)',
            transition: 'all 0.18s ease',
          }}
          onMouseEnter={handleGhostEnter}
          onMouseLeave={handleGhostLeave}
          onMouseDown={(e) => (e.currentTarget.style.transform = 'scale(0.96)')}
          onMouseUp={(e) => (e.currentTarget.style.transform = 'translateY(-1px)')}
        >
          Ver o que vou aprender
        </button>
      </div>

      {/* Stats */}
      <div
        style={{
          ...fade(440),
          display: 'flex',
          gap: 40,
          paddingTop: 32,
          borderTop: '1px solid rgba(255,255,255,0.06)',
          flexWrap: 'wrap',
        }}
      >
        <StatItem value="+20k" label="alunos ativos"  delay={520} />
        <StatItem value="+40h" label="de conteúdo"    delay={640} />
        <StatItem value="98%"  label="recomendam"     delay={760} />
      </div>
    </div>
  );
}
