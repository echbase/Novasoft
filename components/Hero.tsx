import HomeCommandCenter from './home/HomeCommandCenter';
import { OFFER } from '@/lib/site-offers';

const PROOFS = ['Sites & e-commerce', 'Agents IA utiles', 'Automatisations métier', 'Maintenance & évolution'];

export default function Hero() {
  return (
    <header className="hero relative grid min-h-[100svh] items-center gap-[6vw] px-[6vw] pt-[140px] pb-[90px] grid-cols-1 max-[1020px]:gap-[60px] max-[1020px]:pt-[120px] min-[1021px]:grid-cols-[1.08fr_.92fr]">
      <div>
        <span className="eyebrow reveal mb-[26px]">Sites internet · IA · Automatisation</span>
        <h1 className="reveal d1 font-display font-bold leading-[1.02] tracking-[-.025em] text-[clamp(38px,5.7vw,76px)]">
          Des outils digitaux qui <span className="grad">vendent, automatisent et font gagner du temps.</span>
        </h1>
        <p className="reveal d2 mt-[26px] max-w-[56ch] text-muted text-[clamp(16px,1.5vw,18px)]">
          NovaSoft modernise votre site, connecte vos outils et automatise les tâches répétitives.
          Vous partez de votre besoin ; nous cherchons la solution la plus simple pour obtenir le résultat.
        </p>
        <div className="reveal d3 mt-10 flex flex-wrap gap-4">
          <a className="btn btn--primary" href="#contact" data-magnetic>Parler de mon projet</a>
          <a className="btn btn--ghost" href={OFFER.path}>Voir l&apos;offre e-commerce</a>
        </div>
        <ul className="reveal d4 mt-8 grid gap-2 sm:grid-cols-2" aria-label="Domaines d'intervention">
          {PROOFS.map((item) => (
            <li key={item} className="flex items-center gap-2 text-[13.5px] text-muted">
              <span aria-hidden="true" className="inline-block h-1.5 w-1.5 rounded-full bg-cyan" />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="reveal d2"><HomeCommandCenter /></div>
    </header>
  );
}
