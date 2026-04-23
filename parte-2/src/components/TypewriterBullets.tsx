import { useState, useEffect, useRef } from 'react';

const ACCENT = '#85E8EA';

const BULLETS = [
  '+40 horas de conteúdo direto ao ponto',
  'Projetos com Python + IA desde o módulo 1',
  'Suporte da comunidade com +20.000 alunos',
  'Certificado reconhecido pelo mercado',
];

const CHAR_SPEED = 22;
const BULLET_DELAYS = [260, 580, 900, 1220];

interface BulletState {
  text: string;
  done: boolean;
  arrowVisible: boolean;
}

export default function TypewriterBullets({ visible }: { visible: boolean }) {
  const [bullets, setBullets] = useState<BulletState[]>(
    BULLETS.map(() => ({ text: '', done: false, arrowVisible: false }))
  );
  const started = useRef(false);

  useEffect(() => {
    if (!visible || started.current) return;
    started.current = true;

    BULLETS.forEach((full, bi) => {
      const startDelay = BULLET_DELAYS[bi];

      setTimeout(() => {
        setBullets((prev) => {
          const next = [...prev];
          next[bi] = { ...next[bi], arrowVisible: true };
          return next;
        });

        let charIndex = 0;
        const interval = setInterval(() => {
          charIndex++;
          setBullets((prev) => {
            const next = [...prev];
            next[bi] = { ...next[bi], text: full.slice(0, charIndex) };
            return next;
          });

          if (charIndex >= full.length) {
            clearInterval(interval);
            setBullets((prev) => {
              const next = [...prev];
              next[bi] = { ...next[bi], done: true };
              return next;
            });
          }
        }, CHAR_SPEED);
      }, startDelay);
    });
  }, [visible]);

  return (
    <ul
      style={{
        listStyle: 'none',
        margin: '0 0 40px 0',
        padding: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.75s ease 260ms',
      }}
    >
      {bullets.map((bullet, i) => (
        <li
          key={i}
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: 12,
            minHeight: '1.6em',
          }}
        >
          {/* Arrow */}
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              color: ACCENT,
              fontSize: 12,
              marginTop: 3,
              flexShrink: 0,
              opacity: bullet.arrowVisible ? 1 : 0,
              transform: bullet.arrowVisible ? 'translateX(0)' : 'translateX(-6px)',
              transition: 'opacity 0.2s ease, transform 0.2s ease',
            }}
          >
            →
          </span>

          {/* Text + cursor */}
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 13,
              color: '#94A3B8',
              lineHeight: 1.6,
            }}
          >
            {bullet.text}
            {bullet.arrowVisible && !bullet.done && (
              <span
                className="cursor-blink"
                style={{
                  display: 'inline-block',
                  width: 1,
                  height: '1em',
                  background: ACCENT,
                  verticalAlign: 'text-bottom',
                  marginLeft: 1,
                }}
              />
            )}
            {bullet.done && (
              <span
                style={{
                  display: 'inline-block',
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  background: 'rgba(133,232,234,0.5)',
                  boxShadow: '0 0 6px #85E8EA',
                  verticalAlign: 'middle',
                  marginLeft: 6,
                }}
              />
            )}
          </span>
        </li>
      ))}
    </ul>
  );
}
