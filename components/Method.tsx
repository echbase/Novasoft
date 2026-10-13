import SectionHead from './SectionHead';

const STEPS = [
  { n: '01 · Comprendre', title: 'On part du problème', desc: "Vous nous expliquez ce qui prend du temps, ce qui freine les ventes ou ce qui fonctionne mal aujourd'hui." },
  { n: '02 · Montrer', title: 'Vous voyez la solution', desc: "Parcours, maquette ou architecture : vous comprenez ce qui sera fait avant de lancer le développement." },
  { n: '03 · Réaliser', title: 'On construit le nécessaire', desc: "Nous intégrons, développons et testons par étapes visibles, sans ajouter des fonctions simplement parce qu'elles sont possibles." },
  { n: '04 · Faire évoluer', title: 'On met en ligne et on suit', desc: "Mise en production, maintenance si vous la choisissez, puis améliorations selon les besoins réels." },
];

export default function Method() {
  return (
    <section id="methode" className="relative px-[6vw] py-[110px]">
      <SectionHead eyebrow="Comment nous travaillons" index="02" sub="Un projet doit rester compréhensible, même si la technologie derrière est avancée.">
        Quatre étapes simples, <span className="grad">aucune boîte noire</span>.
      </SectionHead>
      <div className="steps reveal d2">
        {STEPS.map((s) => <div className="step" key={s.title}><span className="n">{s.n}</span><h3 className="mb-2.5 font-display text-[19px] font-semibold">{s.title}</h3><p className="text-muted text-[14.5px]">{s.desc}</p></div>)}
      </div>
    </section>
  );
}
