import SectionHead from './SectionHead';
import { IconArrow } from '@/lib/icons';

/* Placeholders Projet 01/02/03 — props prêtes pour les vrais projets. */
export type Work = {
  tag: string;
  title: string;
  desc: string;
  href?: string;
  image?: string;
  variant: 'work--1' | 'work--2' | 'work--3';
  delay: string;
};

const WORKS: Work[] = [
  {
    tag: 'Plateforme · IA',
    title: 'Projet 01',
    desc: 'Plateforme web intelligente : tableaux de bord multi-rôles, moteur de décision IA et architecture API complète.',
    variant: 'work--1',
    delay: 'd1',
  },
  {
    tag: 'SaaS · Produit',
    title: 'Projet 02',
    desc: "Produit SaaS assisté par IA, de la conception de l'expérience à la mise en production multi-tenant.",
    variant: 'work--2',
    delay: 'd2',
  },
  {
    tag: 'Marque · E-commerce',
    title: 'Projet 03',
    desc: "Identité de marque et plateforme e-commerce haut de gamme, du design system au paiement.",
    variant: 'work--3',
    delay: 'd3',
  },
];

export default function Works() {
  return (
    <section id="realisations" className="relative px-[6vw] py-[110px]">
      <SectionHead eyebrow="Réalisations" index="03">
        Des produits <span className="grad">qui existent vraiment</span>.
      </SectionHead>
      <div className="grid gap-5 grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
        {WORKS.map((w) => (
          <article className={`work ${w.variant} reveal ${w.delay}`} key={w.title}>
            <span className="arrow">
              <IconArrow />
            </span>
            <span className="k">{w.tag}</span>
            <h3 className="mb-2.5 font-display text-[26px] font-bold">{w.title}</h3>
            <p className="max-w-[42ch] text-muted text-[14.8px]">{w.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
