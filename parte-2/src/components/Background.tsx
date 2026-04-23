interface Props {
  mouse: { x: number; y: number };
}

export default function Background({ mouse }: Props) {
  const orbStyle = (speed: number, extra: React.CSSProperties): React.CSSProperties => ({
    position: 'absolute',
    borderRadius: '50%',
    pointerEvents: 'none',
    transform: `translate(${mouse.x * speed}px, ${mouse.y * speed}px)`,
    transition: 'transform 0.8s cubic-bezier(0.25,0.46,0.45,0.94)',
    willChange: 'transform',
    ...extra,
  });

  return (
    <div
      className="fixed inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: 0, background: '#000' }}
    >
      {/* Primary large orb */}
      <div style={orbStyle(0.06, {
        width: 900, height: 700,
        background: 'radial-gradient(ellipse at center, rgba(133,232,234,0.45) 0%, rgba(133,232,234,0.12) 45%, transparent 70%)',
        filter: 'blur(40px)',
        top: -320, left: -160,
      })} />

      {/* Secondary orb */}
      <div style={orbStyle(0.04, {
        width: 600, height: 500,
        background: 'radial-gradient(ellipse at center, rgba(80,210,220,0.35) 0%, rgba(60,180,200,0.08) 55%, transparent 75%)',
        filter: 'blur(36px)',
        top: 80, right: -100,
      })} />

      {/* Small hotspot */}
      <div style={orbStyle(0.09, {
        width: 320, height: 280,
        background: 'radial-gradient(ellipse at center, rgba(168,240,241,0.50) 0%, transparent 68%)',
        filter: 'blur(22px)',
        top: 60, left: '42%',
      })} />

      {/* Deep background fill */}
      <div style={orbStyle(0.025, {
        width: 700, height: 400,
        background: 'radial-gradient(ellipse at center, rgba(133,232,234,0.08) 0%, transparent 70%)',
        filter: 'blur(60px)',
        bottom: -200, left: '20%',
      })} />

      {/* Noise grain overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'url(/noise.svg)',
        backgroundSize: '200px 200px',
        opacity: 0.045,
        mixBlendMode: 'overlay',
      }} />

      {/* Subtle grid */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
        `,
        backgroundSize: '64px 64px',
        maskImage: 'radial-gradient(ellipse 80% 55% at 50% 0%, black 0%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 80% 55% at 50% 0%, black 0%, transparent 100%)',
      }} />

      {/* Edge vignette */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 100% 100% at 50% 50%, transparent 40%, rgba(0,0,0,0.65) 100%)',
      }} />
    </div>
  );
}
