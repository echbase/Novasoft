import styles from './HomeCommandCenter.module.css';

const AGENTS = [
  ['Contenu', 'Réseaux & campagnes'],
  ['Recherche', 'Veille & synthèse'],
  ['E-mails', 'Tri & réponses'],
  ['Documents', 'Rapports & supports'],
];

const TOOLS = ['Site', 'Gmail', 'Drive', 'API', 'Réseaux'];

export default function HomeCommandCenter() {
  return (
    <div className={styles.wrap} aria-label="Exemple d'interface NovaSoft pour piloter des assistants et des outils connectés">
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.shell}>
        <div className={styles.topbar}>
          <div className={styles.brand}>
            <span className={styles.mark} aria-hidden="true"><i /><i /><i /></span>
            <div><b>NovaSoft</b><small>Command Center · exemple</small></div>
          </div>
          <span className={styles.status}><i /> Système prêt</span>
        </div>

        <div className={styles.body}>
          <aside className={styles.sidebar} aria-hidden="true">
            <span className={styles.active}>Accueil</span>
            <span>Agents</span>
            <span>Automatisations</span>
            <span>Documents</span>
            <span>Intégrations</span>
          </aside>

          <div className={styles.main}>
            <div className={styles.head}>
              <small>UN SEUL POINT D’ENTRÉE</small>
              <strong>Que voulez-vous<br />faire aujourd’hui ?</strong>
            </div>

            <div className={styles.command}>
              <span>Décrivez une tâche, une recherche ou un besoin…</span>
              <b>→</b>
            </div>

            <div className={styles.agentGrid}>
              {AGENTS.map(([name, desc], index) => (
                <div className={styles.agent} key={name}>
                  <span className={styles.avatar} data-index={index + 1}>A{index + 1}</span>
                  <div><b>{name}</b><small>{desc}</small></div>
                  <i aria-hidden="true" />
                </div>
              ))}
            </div>

            <div className={styles.tools}>
              <span>Outils connectables</span>
              <div>{TOOLS.map((tool) => <b key={tool}>{tool}</b>)}</div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.callout} ${styles.calloutA}`}>
        <b>Assistants spécialisés</b><span>Une mission claire par agent</span>
      </div>
      <div className={`${styles.callout} ${styles.calloutB}`}>
        <b>Outils connectés</b><span>Moins de copier-coller</span>
      </div>
    </div>
  );
}
