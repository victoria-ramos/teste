import { accentRgba } from '../constants';
import { CONTENT } from '../content';

interface Props {
  visible: boolean;
}

export default function EyebrowBadge({ visible }: Props) {
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        background: accentRgba(0.08),
        boxShadow: `inset 0 0 0 1px ${accentRgba(0.22)}`,
        borderRadius: 9999,
        padding: '5px 14px 5px 10px',
        marginBottom: 40,
        width: 'fit-content',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(12px)',
        transition: 'opacity 0.75s ease 0ms, transform 0.75s ease 0ms',
      }}
    >
      <span
        className="dot-pulse"
        style={{
          width: 6,
          height: 6,
          borderRadius: '50%',
          background: 'var(--color-accent)',
          boxShadow: '0 0 8px var(--color-accent)',
          display: 'inline-block',
          flexShrink: 0,
        }}
      />
      <span
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 11,
          color: 'var(--color-accent)',
          letterSpacing: '0.08em',
        }}
      >
        {CONTENT.eyebrow}
      </span>
      <span
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 10,
          color: accentRgba(0.55),
        }}
      >
        ↗
      </span>
    </div>
  );
}
