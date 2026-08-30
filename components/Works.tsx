import SectionHead from './SectionHead';
import ProjectCard from './ProjectCard';
import { IconArrow } from '@/lib/icons';

/*
 * Réalisations — 3 projets livrés, présentés en "fenêtres navigateur"
 * (écho du panneau IA du hero). Chaque projet a sa scène SVG dessinée
 * sur mesure : skyline immobilière, radar GPS, vitrine d'annonces outdoor.
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

/* Scène 3 — NaturaSell : vitrine d'annonces outdoor sur courbes de niveau,
   pastille « enchère flash », dominante magenta/violet */
function SceneMarket() {
  return (
    <svg className="scene" viewBox="0 0 320 150" fill="none" aria-hidden="true">
      {/* Courbes de niveau — le terrain outdoor sous la place de marché */}
      <path
        className="sc-topo"
        d="M4 116c34-11 58 6 90 2s52-19 84-15 58 17 88 9"
        stroke="var(--line)"
        strokeWidth="1.4"
      />
      <path
        className="sc-topo sc-topo--2"
        d="M4 132c30-9 56 9 88 5s54-17 86-13 56 15 86 7"
        stroke="var(--muted)"
        strokeWidth="1.2"
        opacity=".3"
      />

      {/* Annonce 1 — randonnée */}
      <g className="sc-tile">
        <rect x="22" y="16" width="84" height="80" rx="5" stroke="var(--line)" strokeWidth="1.4" />
        <rect x="31" y="25" width="66" height="32" rx="3" stroke="var(--cyan)" strokeWidth="1.2" opacity=".5" />
        <path d="M38 51l14-17 10 13 8-9 14 13" stroke="var(--cyan)" strokeWidth="1.5" strokeLinejoin="round" />
        <g stroke="var(--muted)" strokeWidth="1.2" opacity=".5">
          <path d="M31 68h52M31 78h34" />
        </g>
        <path d="M31 88h22" stroke="var(--cyan)" strokeWidth="2.4" strokeLinecap="round" />
      </g>

      {/* Annonce 2 — camping, mise en avant + enchère flash */}
      <g className="sc-tile sc-tile--2">
        <rect x="118" y="16" width="84" height="80" rx="5" stroke="var(--violet)" strokeWidth="1.5" />
        <rect x="127" y="25" width="66" height="32" rx="3" stroke="var(--violet)" strokeWidth="1.2" opacity=".5" />
        <path d="M138 51l22-20 22 20" stroke="var(--violet)" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M132 51h56" stroke="var(--violet)" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M160 34l-6 17h12z" stroke="var(--violet)" strokeWidth="1.3" strokeLinejoin="round" />
        <g stroke="var(--muted)" strokeWidth="1.2" opacity=".5">
          <path d="M127 68h52M127 78h40" />
        </g>
        <path d="M127 88h26" stroke="var(--magenta)" strokeWidth="2.4" strokeLinecap="round" />
      </g>

      {/* Annonce 3 — pêche */}
      <g className="sc-tile sc-tile--3">
        <rect x="214" y="16" width="84" height="80" rx="5" stroke="var(--line)" strokeWidth="1.4" />
        <rect x="223" y="25" width="66" height="32" rx="3" stroke="var(--magenta)" strokeWidth="1.2" opacity=".5" />
        <path d="M230 41c6-8 22-8 28 0-6 8-22 8-28 0z" stroke="var(--magenta)" strokeWidth="1.5" />
        <path d="M258 41l10-7v14z" stroke="var(--magenta)" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="238" cy="38" r="1.6" fill="var(--magenta)" />
        <g stroke="var(--muted)" strokeWidth="1.2" opacity=".5">
          <path d="M223 68h52M223 78h30" />
        </g>
        <path d="M223 88h20" stroke="var(--magenta)" strokeWidth="2.4" strokeLinecap="round" />
      </g>

      {/* Pastille « enchère flash » sur l'annonce mise en avant */}
      <g className="sc-flash">
        <circle cx="200" cy="18" r="9" fill="var(--bg)" stroke="var(--magenta)" strokeWidth="1.4" />
        <path d="M201.5 13l-5 6.2h3.2l-1 4.8 5-6.4h-3.2z" fill="var(--magenta)" />
      </g>
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
    url: 'https://naturasell.fr/',
    domain: 'naturasell.fr',
    tag: 'Marketplace · Outdoor',
    title: 'NaturaSell',
    desc: "Marketplace outdoor multi-vendeurs — chasse, pêche, randonnée, camping, vanlife : boutiques pro, enchères flash et location de matériel entre passionnés.",
    variant: 'proj--market',
    delay: 'd3',
    scene: <SceneMarket />,
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
