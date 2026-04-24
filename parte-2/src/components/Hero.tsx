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
      <section aria-labelledby="hero-title" className="hero-section">
        <div className="hero-inner">
          <div className="hero-grid">
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
