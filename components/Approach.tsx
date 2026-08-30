/*
 * Approche — « L'IA sans complexité inutile ».
 * Rendu à la suite des 4 cartes d'expertise : pas de nouvelle section,
 * donc pas d'entrée de navigation supplémentaire. Deux bandes légères :
 * la philosophie + les 3 modes d'intervention, puis les cas d'usage.
 * Tokens uniquement.
 */

const MODES = [
  {
    k: 'Build',
    desc: "Construire une plateforme, une application ou une API quand le besoin métier le justifie.",
  },
  {
    k: 'Integrate',
    desc: "Connecter l'IA aux outils et aux données déjà en place — site, e-commerce, CRM, e-mails, APIs.",
  },
  {
    k: 'Automate',
    desc: "Des agents, des skills et des workflows qui exécutent réellement les tâches.",
  },
];

const USES = [
  { k: 'Prospection', desc: 'Rechercher, qualifier et préparer les actions commerciales.' },
  { k: 'Marketing', desc: 'Créer, adapter et automatiser campagnes et contenus.' },
  { k: 'E-mail', desc: 'Analyser, classer, préparer les réponses et enchaîner les workflows.' },
  { k: 'Support', desc: "Agents nourris des connaissances et des procédures de l'entreprise." },
  { k: 'Opérations', desc: 'Automatiser les tâches répétitives entre outils, APIs et données.' },
];

export default function Approach() {
  return (
    <>
      <div className="approach reveal d2">
        <div>
          <span className="eyebrow">Notre approche</span>
          <h3 className="approach-title">
            L&apos;IA <span className="grad">sans complexité inutile</span>.
          </h3>
          <p className="approach-lead">
            Votre entreprise utilise déjà des outils performants. Notre travail n&apos;est pas de
            les remplacer, mais de les rendre intelligents — nous connectons IA, données, outils et
            processus pour automatiser ce qui peut réellement l&apos;être.
          </p>
        </div>
        <ul className="modes">
          {MODES.map((m) => (
            <li className="mode" key={m.k}>
              <span className="mode-k">{m.k}</span>
              <p>{m.desc}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="uses reveal d3">
        <span className="uses-label">
          Exemples de systèmes — conçus sur mesure, jamais livrés sur étagère
        </span>
        <ul className="uses-grid">
          {USES.map((u) => (
            <li className="use" key={u.k}>
              <b>{u.k}</b>
              <span>{u.desc}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
