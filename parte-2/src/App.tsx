import { useMouseParallax } from './hooks/useMouseParallax';
import Background from './components/Background';
import Hero from './components/Hero';

export default function App() {
  const mouse = useMouseParallax();

  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflowX: 'hidden' }}>
      <Background mouse={mouse} />
      <Hero />
    </div>
  );
}
