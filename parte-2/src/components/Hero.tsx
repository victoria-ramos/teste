import { useState, useEffect } from 'react';
import HeroLeft from './HeroLeft';
import HeroRight from './HeroRight';

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <main>
      <section
        aria-labelledby="hero-title"
        style={{
          position: 'relative',
          zIndex: 10,
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '0 clamp(24px, 5vw, 64px)',
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            width: '100%',
            paddingTop: 96,
            paddingBottom: 80,
          }}
        >
          <div
            className="hero-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 80,
              alignItems: 'center',
            }}
          >
            <HeroLeft visible={visible} />
            <div className="hero-right">
              <HeroRight visible={visible} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
