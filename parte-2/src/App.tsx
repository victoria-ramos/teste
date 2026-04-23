import { useState, useEffect } from 'react';
import Background from './components/Background';
import Hero from './components/Hero';

export default function App() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * window.innerWidth,
        y: (e.clientY / window.innerHeight - 0.5) * window.innerHeight,
      });
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflowX: 'hidden' }}>
      <Background mouse={mouse} />
      <Hero />
    </div>
  );
}
