import type { CSSProperties } from 'react';
import { CONTENT } from '../content';
import EyebrowBadge from './EyebrowBadge';
import TypewriterBullets from './TypewriterBullets';
import StatItem from './StatItem';

interface Props {
  visible: boolean;
}

export default function HeroLeft({ visible }: Props) {
  const fade = (delay: number): CSSProperties => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(12px)',
    transition: `opacity 0.75s ease ${delay}ms, transform 0.75s ease ${delay}ms`,
  });

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col">
      <EyebrowBadge visible={visible} />

      <h1
        id="hero-title"
        style={{
          ...fade(80),
          fontFamily: 'var(--font-sans)',
          fontWeight: 500,
          fontSize: 'clamp(42px, 5vw, 72px)',
          color: 'var(--color-text-primary)',
          lineHeight: 1.06,
          letterSpacing: '-0.04em',
          margin: '0 0 20px 0',
          ...({ textWrap: 'pretty' } as CSSProperties),
        }}
      >
        {CONTENT.hero.titleStart}{' '}
        <span
          style={{
            color: 'var(--color-accent)',
            textShadow: '0 0 40px rgba(133,232,234,0.35)',
          }}
        >
          {CONTENT.hero.titleHighlight}
        </span>
      </h1>

      <p
        style={{
          ...fade(180),
          fontFamily: 'var(--font-sans)',
          fontSize: 18,
          fontWeight: 400,
          color: 'var(--color-text-secondary)',
          lineHeight: 1.65,
          margin: '0 0 36px 0',
          maxWidth: 480,
          ...({ textWrap: 'pretty' } as CSSProperties),
        }}
      >
        {CONTENT.hero.description}
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
          type="button"
          className="btn-primary"
          onClick={() => scrollTo(CONTENT.hero.ctaPrimaryAnchor)}
        >
          {CONTENT.hero.ctaPrimary}
        </button>

        <button
          type="button"
          className="btn-ghost"
          onClick={() => scrollTo(CONTENT.hero.ctaSecondaryAnchor)}
        >
          {CONTENT.hero.ctaSecondary}
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
        {CONTENT.stats.map((stat, i) => (
          <StatItem
            key={stat.label}
            value={stat.value}
            label={stat.label}
            delay={520 + i * 120}
          />
        ))}
      </div>
    </div>
  );
}
