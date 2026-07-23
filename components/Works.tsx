import SectionHead from './SectionHead';
import ProjectCard from './ProjectCard';
import { IconArrow } from '@/lib/icons';

/*
 * Réalisations — 3 projets livrés, présentés en "fenêtres navigateur"
 * (écho du panneau IA du hero). Chaque projet a sa scène SVG dessinée
 * sur mesure : skyline immobilière, radar GPS, courbe de trading.
 * Aucune valeur brute : tout passe par les tokens var(--…).
 */

type Project = {
  url: string;
  domain: string;
  tag: string;
  title: string;
  desc: string;
  variant: string;
  delay: string;
  scene: React.ReactNode;
};

/* Scène 1 — NovaImmo : skyline qui s'élève, dominante cyan */
function SceneImmo() {
  return (
    <svg className="scene" viewBox="0 0 320 150" fill="none" aria-hidden="true" preserveAspectRatio="xMidYMax meet">
      <line x1="0" y1="136" x2="320" y2="136" stroke="var(--line)" strokeWidth="1.5" />
      <g className="sc-rise">
        <rect x="36" y="66" width="34" height="70" rx="3" stroke="var(--cyan)" strokeWidth="1.5" opacity=".9" />
        <rect x="82" y="42" width="42" height="94" rx="3" stroke="var(--violet)" strokeWidth="1.5" />
        <rect x="136" y="84" width="30" height="52" rx="3" stroke="var(--cyan)" strokeWidth="1.5" opacity=".7" />
        <rect x="178" y="28" width="48" height="108" rx="3" stroke="var(--text)" strokeWidth="1.5" opacity=".8" />
        <rect x="238" y="58" width="36" height="78" rx="3" stroke="var(--cyan)" strokeWidth="1.5" opacity=".85" />
      </g>
      <g stroke="var(--muted)" strokeWidth="1.2" opacity=".55">
        <path d="M90 56h26M90 68h26M90 80h26M186 40h32M186 52h32M186 64h32M186 76h32" />
      </g>
      <g className="sc-pin">
        <path d="M152 18c0-7 5.5-12 12-12s12 5 12 12c0 9-12 20-12 20s-12-11-12-20z" stroke="var(--amber)" strokeWidth="1.6" fill="none" />
        <circle cx="164" cy="18" r="4" fill="var(--amber)" />
      </g>
    </svg>
  );
}

/* Scène 2 — RoG Hunting : radar de repérage GPS, dominante ambre */
function SceneHunt() {
  return (
    <svg className="scene" viewBox="0 0 320 150" fill="none" aria-hidden="true">
      <g className="sc-radar" stroke="var(--amber)">
        <circle cx="160" cy="78" r="22" strokeWidth="1.4" opacity=".9" />
        <circle cx="160" cy="78" r="44" strokeWidth="1.2" opacity=".55" />
        <circle cx="160" cy="78" r="66" strokeWidth="1" opacity=".3" />
      </g>
      <line x1="160" y1="12" x2="160" y2="144" stroke="var(--line)" strokeWidth="1.2" />
      <line x1="70" y1="78" x2="250" y2="78" stroke="var(--line)" strokeWidth="1.2" />
      <g className="sc-sweep">
        <path d="M160 78L160 12A66 66 0 0 1 217 45z" fill="var(--amber)" opacity=".14" />
        <line x1="160" y1="78" x2="160" y2="12" stroke="var(--amber)" strokeWidth="1.6" />
      </g>
      <circle className="sc-blip sc-blip--1" cx="196" cy="52" r="4.5" fill="var(--magenta)" />
      <circle className="sc-blip sc-blip--2" cx="128" cy="102" r="4.5" fill="var(--cyan)" />
      <circle cx="160" cy="78" r="5" fill="var(--amber)" />
    </svg>
  );
}

/* Scène 3 — TradyGo : chandeliers + courbe qui se trace, dominante magenta/violet */
function SceneTrade() {
  return (
    <svg className="scene" viewBox="0 0 320 150" fill="none" aria-hidden="true">
      <g stroke="var(--line)" strokeWidth="1.2">
        <path d="M24 118h272M24 84h272M24 50h272" />
      </g>
      <g className="sc-candles">
        <g stroke="var(--cyan)" strokeWidth="1.4">
          <line x1="56" y1="70" x2="56" y2="122" />
          <rect x="49" y="82" width="14" height="28" rx="2" fill="var(--cyan)" opacity=".35" />
        </g>
        <g stroke="var(--magenta)" strokeWidth="1.4">
          <line x1="96" y1="58" x2="96" y2="112" />
          <rect x="89" y="66" width="14" height="30" rx="2" fill="var(--magenta)" opacity=".35" />
        </g>
        <g stroke="var(--cyan)" strokeWidth="1.4">
          <line x1="136" y1="44" x2="136" y2="98" />
          <rect x="129" y="54" width="14" height="30" rx="2" fill="var(--cyan)" opacity=".35" />
        </g>
        <g stroke="var(--violet)" strokeWidth="1.4">
          <line x1="176" y1="52" x2="176" y2="104" />
          <rect x="169" y="60" width="14" height="32" rx="2" fill="var(--violet)" opacity=".4" />
        </g>
        <g stroke="var(--cyan)" strokeWidth="1.4">
          <line x1="216" y1="30" x2="216" y2="86" />
          <rect x="209" y="40" width="14" height="32" rx="2" fill="var(--cyan)" opacity=".35" />
        </g>
      </g>
      <path
        className="sc-curve"
        d="M28 120C64 112 84 96 112 88s52-6 78-26 42-30 74-40"
        stroke="var(--magenta)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle className="sc-tip" cx="264" cy="42" r="4.5" fill="var(--magenta)" />
    </svg>
  );
}

const PROJECTS: Project[] = [
  {
    url: 'https://novaimmo.mu/',
    domain: 'novaimmo.mu',
    tag: 'Immobilier · Plateforme',
    title: 'NovaImmo',
    desc: "Plateforme de développement immobilier à l'Île Maurice : elle transforme les terrains en projets d'exception, de l'étude de valeur à la commercialisation.",
    variant: 'proj--immo',
    delay: 'd1',
    scene: <SceneImmo />,
  },
  {
    url: 'https://www.roghunting.com/',
    domain: 'roghunting.com',
    tag: 'E-commerce · Marque',
    title: 'RoG Hunting',
    desc: "Boutique e-commerce spécialiste du GPS de repérage pour chiens de chasse : catalogue technique, paiement sécurisé et livraison France & UE.",
    variant: 'proj--hunt',
    delay: 'd2',
    scene: <SceneHunt />,
  },
  {
    url: 'https://tradygo.io/',
    domain: 'tradygo.io',
    tag: 'Fintech · Trading',
    title: 'TradyGo',
    desc: "Signaux de trading filtrés et robot MT5 autonome : agrégation multi-analystes, scoring continu des stratégies et exécution automatisée 24/7.",
    variant: 'proj--trade',
    delay: 'd3',
    scene: <SceneTrade />,
  },
];

export default function Works() {
  return (
    <section id="realisations" className="relative px-[6vw] py-[110px]">
      <SectionHead
        eyebrow="Réalisations"
        index="03"
        sub="Trois produits en ligne, conçus et développés de bout en bout par le studio."
      >
        Des produits <span className="grad">qui existent vraiment</span>.
      </SectionHead>
      <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(300px,1fr))]" style={{ perspective: '1200px' }}>
        {PROJECTS.map((p) => (
          <ProjectCard
            key={p.title}
            href={p.url}
            label={`${p.title} — visiter ${p.domain} (nouvel onglet)`}
            className={`${p.variant} reveal ${p.delay}`}
          >
            <span className="proj-chrome" aria-hidden="true">
              <span className="dot dot--r" />
              <span className="dot dot--y" />
              <span className="dot dot--g" />
              <span className="proj-url">{p.domain}</span>
              <span className="proj-live">
                <i /> en ligne
              </span>
            </span>
            <span className="proj-view" aria-hidden="true">
              {p.scene}
            </span>
            <span className="proj-meta">
              <span className="k">{p.tag}</span>
              <span className="proj-title">{p.title}</span>
              <span className="proj-desc">{p.desc}</span>
              <span className="proj-cta">
                Visiter le site <IconArrow />
              </span>
            </span>
          </ProjectCard>
        ))}
      </div>
    </section>
  );
}
