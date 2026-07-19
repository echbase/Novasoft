const ITEMS = [
  'Intelligence artificielle',
  'Développement web',
  'SaaS',
  'Cybersécurité',
  'UX / UI',
  'Automatisation',
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
