const MODES = [
  { k: 'Build', desc: "Construire seulement ce qui doit réellement être développé sur mesure." },
  { k: 'Integrate', desc: "Connecter en priorité les bons outils déjà disponibles pour éviter les coûts inutiles." },
  { k: 'Automate', desc: "Automatiser ensuite les tâches répétitives qui consomment du temps sans créer de valeur." },
];

const USES = [
  { k: 'Prospection', desc: 'Rechercher et préparer les prospects à traiter.' },
  { k: 'Marketing', desc: 'Préparer et adapter les contenus plus rapidement.' },
  { k: 'E-mails', desc: 'Trier, résumer et préparer les réponses utiles.' },
  { k: 'Documents', desc: 'Créer des rapports, devis et supports à partir des bonnes données.' },
  { k: 'Opérations', desc: 'Faire circuler les informations entre vos outils automatiquement.' },
];

export default function Approach() {
  return (
    <>
      <div className="approach reveal d2">
        <div>
          <span className="eyebrow">Notre principe</span>
          <h3 className="approach-title">Une solution utile avant une solution <span className="grad">compliquée</span>.</h3>
          <p className="approach-lead">Nous ne vendons pas de l&apos;IA ou du développement pour le principe. Nous regardons d&apos;abord ce qui existe, ce qui peut être connecté et ce qui mérite vraiment d&apos;être construit.</p>
        </div>
        <ul className="modes">
          {MODES.map((m) => <li className="mode" key={m.k}><span className="mode-k">{m.k}</span><p>{m.desc}</p></li>)}
        </ul>
      </div>
      <div className="uses reveal d3">
        <span className="uses-label">Exemples concrets de tâches que nous pouvons simplifier</span>
        <ul className="uses-grid">{USES.map((u) => <li className="use" key={u.k}><b>{u.k}</b><span>{u.desc}</span></li>)}</ul>
      </div>
    </>
  );
}
