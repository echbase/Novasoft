import type { CSSProperties, ReactNode } from 'react';
export default function Icon({ name, size = 24, style }: { name: string; size?: number; style?: CSSProperties }) {
  const paths: Record<string, ReactNode> = {
    arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
    shop: <><path d="M3 9l2-5h14l2 5M4 12v8h16v-8M9 20v-6h6v6" /><path d="M3 9c0 4 5 4 5 0 0 4 8 4 8 0 0 4 5 4 5 0" /></>,
    palette: <><path d="M12 3a9 9 0 100 18c2 0 3-1 2-3s0-3 2-3h2c4 0 4-6 1-9a10 10 0 00-7-3z" /><path d="M7 9h.01M11 6h.01M16 8h.01M7 14h.01" strokeWidth="3" /></>,
    cart: <><path d="M3 4h2l3 12h10l3-9H6M9 20h.01M18 20h.01" /><circle cx="9" cy="20" r="1" /><circle cx="18" cy="20" r="1" /></>,
    launch: <><path d="M14 4l6-1-1 6-8 8-4-4zM8 12H4l-2 5h6M12 16v4l-5 2v-6" /><circle cx="15.5" cy="7.5" r="1.5" /></>,
    check: <path d="M5 12l4 4L19 6" />,
    shield: <><path d="M12 3l8 3v6c0 5-8 9-8 9s-8-4-8-9V6z" /><path d="M8 12l3 3 5-6" /></>,
    google: <><path d="M20 12h-8v4h4a7 7 0 11-1-11" /><path d="M19 5l-4 1" /></>,
    spark: <path d="M12 3l2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5z" />,
    link: <path d="M10 14l4-4M8 16l-1 1a4 4 0 01-6-6l4-4a4 4 0 016 0M16 8l1-1a4 4 0 016 6l-4 4a4 4 0 01-6 0" />,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={style}>{paths[name] || paths.spark}</svg>;
}
