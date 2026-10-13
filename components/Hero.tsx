import AIGenPanel from './AIGenPanel';
import { OFFER } from '@/lib/site-offers';
export default function Hero() {
  return <header className="hero relative grid min-h-[100svh] items-center gap-[6vw] px-[6vw] pt-[140px] pb-[90px] grid-cols-1 max-[1020px]:gap-[60px] max-[1020px]:pt-[120px] min-[1021px]:grid-cols-[1.1fr_.9fr]">
    <div><span className="eyebrow reveal mb-[26px]">Studio digital · Île Maurice</span><h1 className="reveal d1 font-display font-bold leading-[1.05] tracking-[-.02em] text-[clamp(36px,5.4vw,72px)]">L&apos;expertise digitale, <span className="grad">augmentée par l&apos;IA</span>.</h1>
      <p className="reveal d2 mt-[26px] max-w-[50ch] text-muted text-[clamp(15.5px,1.5vw,18px)]">Des sites internet et des boutiques en ligne. Des outils qui travaillent ensemble. NovaSoft met l&apos;intelligence artificielle au service de vos tâches quotidiennes, du premier besoin à la mise en ligne.</p>
      <div className="reveal d3 mt-10 flex flex-wrap gap-4"><a className="btn btn--primary" href="#contact" data-magnetic>Parler de mon projet</a><a className="btn btn--ghost" href={OFFER.path}>Sites internet &amp; maintenance</a></div>
    </div><div className="reveal d2"><AIGenPanel /></div>
  </header>;
}
