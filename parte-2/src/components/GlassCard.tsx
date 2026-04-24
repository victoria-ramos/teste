import type { CSSProperties, ReactNode } from 'react';
import { accentRgba } from '../constants';

type Variant = 'default' | 'accent' | 'dark';

const VARIANTS: Record<Variant, CSSProperties> = {
  default: {
    background: 'rgba(255,255,255,0.03)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.07)',
  },
  accent: {
    background: accentRgba(0.08),
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    boxShadow: `inset 0 0 0 1px ${accentRgba(0.20)}`,
  },
  dark: {
    background: 'rgba(8,8,8,0.88)',
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
    boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.10)',
  },
};

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  variant?: Variant;
}

export default function GlassCard({ children, className, style, variant = 'default' }: GlassCardProps) {
  return (
    <div
      className={className}
      style={{ borderRadius: 12, ...VARIANTS[variant], ...style }}
    >
      {children}
    </div>
  );
}
