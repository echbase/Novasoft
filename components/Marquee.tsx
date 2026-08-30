const ITEMS = [
  'Agents IA',
  'LLM & skills métier',
  'Développement web',
  'SaaS',
  'Automatisation',
  'Intégration & APIs',
  'Cybersécurité',
  'UX / UI',
  'Cloud',
];

export default function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="track">
        {[...ITEMS, ...ITEMS].map((item, i) => (
          <span key={i}>{item}</span>
        ))}
      </div>
    </div>
  );
}
