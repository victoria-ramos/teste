import { useState, useEffect, useRef } from 'react';
import { accentRgba } from '../constants';
import { CONTENT } from '../content';

const CHAR_SPEED = 22;
const BULLET_DELAYS = [260, 580, 900, 1220];

interface BulletState {
  text: string;
  done: boolean;
  arrowVisible: boolean;
}

export default function TypewriterBullets({ visible }: { visible: boolean }) {
  const [bullets, setBullets] = useState<BulletState[]>(
    CONTENT.bullets.map(() => ({ text: '', done: false, arrowVisible: false }))
  );
  const started = useRef(false);

  useEffect(() => {
    if (!visible || started.current) return;
    started.current = true;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setBullets(CONTENT.bullets.map((text) => ({ text, done: true, arrowVisible: true })));
      return;
    }

    const timeouts: ReturnType<typeof setTimeout>[] = [];
    const intervals: ReturnType<typeof setInterval>[] = [];

    CONTENT.bullets.forEach((full, bi) => {
      const tid = setTimeout(() => {
        setBullets((prev) => {
          const next = [...prev];
          next[bi] = { ...next[bi], arrowVisible: true };
          return next;
        });

        let charIndex = 0;
        const iid = setInterval(() => {
          charIndex++;
          setBullets((prev) => {
            const next = [...prev];
            next[bi] = { ...next[bi], text: full.slice(0, charIndex) };
            return next;
          });

          if (charIndex >= full.length) {
            clearInterval(iid);
            setBullets((prev) => {
              const next = [...prev];
              next[bi] = { ...next[bi], done: true };
              return next;
            });
          }
        }, CHAR_SPEED);

        intervals.push(iid);
      }, BULLET_DELAYS[bi]);

      timeouts.push(tid);
    });

    return () => {
      timeouts.forEach(clearTimeout);
      intervals.forEach(clearInterval);
    };
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
          key={CONTENT.bullets[i]}
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: 12,
            minHeight: '1.6em',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              color: 'var(--color-accent)',
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

          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 13,
              color: 'var(--color-text-secondary)',
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
                  background: 'var(--color-accent)',
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
                  background: accentRgba(0.5),
                  boxShadow: '0 0 6px var(--color-accent)',
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
