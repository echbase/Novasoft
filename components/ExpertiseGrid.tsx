import SectionHead from './SectionHead';
import SpotlightCard from './SpotlightCard';
import { IconStrategy, IconAI, IconCode, IconShield } from '@/lib/icons';

const EXPERTISES = [
  {
    icon: <IconStrategy />,
    ico: 'ico--1',
    delay: 'd1',
    title: 'Stratégie digitale',
    desc: "Positionnement, architecture d'information et expérience de marque. Nous transformons une vision en produit digital cohérent et mesurable.",
    tag: 'Vision → Produit',
  },
  {
    icon: <IconAI />,
    ico: 'ico--2',
    delay: 'd2',
    title: 'Intelligence artificielle',
    desc: "Agents IA, orchestration multi-modèles, automatisation intelligente. L'IA intégrée à vos processus, pas plaquée dessus.",
    tag: 'Agents · LLM · Automatisation',
  },
  {
    icon: <IconCode />,
    ico: 'ico--3',
    delay: 'd3',
    title: 'Développement & code',
    desc: "Applications web, plateformes SaaS, APIs. Un code propre, documenté, pensé pour évoluer — livré avec la discipline d'un studio senior.",
    tag: 'Web · SaaS · API',
  },
  {
    icon: <IconShield />,
    ico: 'ico--4',
    delay: 'd4',
    title: 'Sécurité',
    desc: "Sécurité intégrée dès la conception : audits, durcissement d'infrastructure, protection des données et bonnes pratiques DevSecOps.",
    tag: 'Audit · Infra · Données',
  },
];

export default function ExpertiseGrid() {
  return (
    <section id="expertises" className="relative px-[6vw] py-[110px]">
      <SectionHead
        eyebrow="Ce que nous faisons"
        index="01"
        sub="Chaque projet est mené par des experts qui maîtrisent leur discipline de bout en bout — pas de sous-traitance, pas d'approximation."
      >
        Quatre expertises, <span className="grad">une seule exigence</span> : le niveau senior.
      </SectionHead>
      <div className="grid gap-5 grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
        {EXPERTISES.map((e) => (
          <SpotlightCard key={e.title} className={`card reveal ${e.delay}`}>
            <div className={`ico ${e.ico}`}>{e.icon}</div>
            <h3 className="mb-3 font-display text-[20px] font-semibold">{e.title}</h3>
            <p className="text-muted text-[14.8px]">{e.desc}</p>
            <span className="tag">{e.tag}</span>
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
}
