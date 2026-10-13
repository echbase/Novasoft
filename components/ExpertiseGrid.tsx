import SectionHead from './SectionHead';
import SpotlightCard from './SpotlightCard';
import Approach from './Approach';
import { IconStrategy, IconAI, IconCode, IconShield } from '@/lib/icons';

const EXPERTISES = [
  { icon: <IconStrategy />, ico: 'ico--1', delay: 'd1', title: 'Sites & e-commerce', desc: "Créer ou moderniser un site clair, rapide et simple à utiliser. Pour une boutique : catalogue, fiches produits, panier, paiement et parcours mobile.", tag: 'Site · Boutique · Maintenance' },
  { icon: <IconAI />, ico: 'ico--2', delay: 'd2', title: 'IA & automatisation', desc: "Utiliser l'IA pour rechercher, préparer, classer, répondre ou exécuter des tâches répétitives. L'objectif : moins de manipulation, plus de temps utile.", tag: 'Agents IA · Workflows · Skills' },
  { icon: <IconCode />, ico: 'ico--3', delay: 'd3', title: 'Outils connectés', desc: "Faire travailler ensemble votre site, vos e-mails, vos fichiers, vos logiciels et vos données au lieu de recopier les mêmes informations d'un outil à l'autre.", tag: 'Intégrations · API · Données' },
  { icon: <IconShield />, ico: 'ico--4', delay: 'd4', title: 'Applications sur mesure', desc: "Quand un outil existant ne suffit pas, nous concevons l'application, la plateforme ou le système métier nécessaire, avec sécurité et maintenance dès la conception.", tag: 'Web app · SaaS · Sécurité' },
];

export default function ExpertiseGrid() {
  return (
    <section id="expertises" className="relative px-[6vw] py-[110px]">
      <SectionHead eyebrow="Ce que vous pouvez nous confier" index="01" sub="Pas besoin de connaître la technologie. Dites-nous ce que vous voulez vendre, simplifier, connecter ou automatiser.">
        Choisissez ce que vous voulez <span className="grad">améliorer</span>.
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
      <Approach />
    </section>
  );
}
