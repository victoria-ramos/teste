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
        background: 'rgba(133,232,234,0.08)',
        boxShadow: 'inset 0 0 0 1px rgba(133,232,234,0.22)',
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
          background: '#85E8EA',
          boxShadow: '0 0 8px #85E8EA',
          display: 'inline-block',
          flexShrink: 0,
        }}
      />
      <span
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 11,
          color: '#85E8EA',
          letterSpacing: '0.08em',
        }}
      >
        turma aberta · vagas limitadas
      </span>
      <span
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 10,
          color: 'rgba(133,232,234,0.55)',
        }}
      >
        ↗
      </span>
    </div>
  );
}
