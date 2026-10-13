const REASONS = [
  { title: 'Simple d’abord', text: "Nous vérifions d'abord si un outil ou une intégration peut résoudre le besoin avant de développer du sur-mesure." },
  { title: 'Une vision complète', text: "Site, automatisation, IA, données et maintenance sont pensés ensemble quand le projet le nécessite." },
  { title: 'Pensé pour durer', text: "Sécurité, lisibilité, maintenance et possibilité d'évolution sont prises en compte dès le départ." },
];

export default function Stats() {
  return (
    <section aria-labelledby="why-novasoft" className="px-[6vw] py-[72px]">
      <div className="mb-10 max-w-[720px]"><span className="eyebrow reveal">Pourquoi NovaSoft</span><h2 id="why-novasoft" className="reveal d1 mt-3.5 font-display font-bold leading-[1.1] tracking-[-.015em] text-[clamp(27px,3.7vw,44px)]">Moins de complexité. <span className="grad">Plus d&apos;utilité.</span></h2></div>
      <div className="grid gap-5 md:grid-cols-3">
        {REASONS.map((reason, index) => <article className={`card reveal d${index + 1}`} key={reason.title}><span className="tag">0{index + 1}</span><h3 className="mt-5 mb-3 font-display text-[20px] font-semibold">{reason.title}</h3><p className="text-muted text-[14.8px]">{reason.text}</p></article>)}
      </div>
    </section>
  );
}
