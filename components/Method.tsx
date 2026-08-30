import SectionHead from './SectionHead';

const STEPS = [
  {
    n: '01 — Comprendre',
    title: 'Immersion',
    desc: "Objectifs, processus, outils existants, données. Nous déterminons ce qui doit être automatisé, ce qui peut être intégré, et ce qui nécessite réellement du développement.",
  },
  {
    n: '02 — Concevoir',
    title: 'Design & architecture',
    desc: "Maquettes, parcours, architecture technique. Chaque décision est validée avant d'être construite.",
  },
  {
    n: '03 — Construire',
    title: 'Développement',
    desc: "Sprints courts, livraisons visibles, code sécurisé. Vous suivez l'avancement en continu.",
  },
  {
    n: '04 — Faire vivre',
    title: 'Lancement & évolution',
    desc: "Mise en production, mesure, itération. Un produit digital n'est jamais figé.",
  },
];

export default function Method() {
  return (
    <section id="methode" className="relative px-[6vw] py-[110px]">
      <SectionHead eyebrow="Notre méthode" index="02">
        Un processus précis, <span className="grad">du brief au lancement</span>.
      </SectionHead>
      <div className="steps reveal d2">
        {STEPS.map((s) => (
          <div className="step" key={s.title}>
            <span className="n">{s.n}</span>
            <h3 className="mb-2.5 font-display text-[19px] font-semibold">{s.title}</h3>
            <p className="text-muted text-[14.5px]">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
