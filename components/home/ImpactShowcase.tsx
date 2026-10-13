import styles from './ImpactShowcase.module.css';

const BENEFITS = [
  ['01', 'Mieux vendre', 'Un parcours plus clair, une image plus crédible et des actions simples pour vos visiteurs.'],
  ['02', 'Mieux apparaître', 'Des bases techniques et éditoriales propres pour aider Google à comprendre votre site.'],
  ['03', 'Moins ressaisir', 'Vos outils peuvent échanger des données au lieu de vous faire copier les mêmes informations.'],
  ['04', 'Gagner du temps', 'Des agents et automatisations peuvent préparer ou exécuter les tâches répétitives utiles.'],
];

export default function ImpactShowcase() {
  return (
    <section className={styles.section} aria-labelledby="impact-title">
      <div className={styles.head}>
        <span className="eyebrow reveal">Ce que NovaSoft améliore</span>
        <h2 id="impact-title" className="reveal d1">Votre digital doit produire un <span className="grad">résultat visible</span>.</h2>
        <p className="reveal d2">Un beau site ne suffit pas. Nous cherchons ce qui peut rendre votre activité plus claire, plus facile à gérer et mieux préparée pour vendre.</p>
      </div>

      <div className={styles.stage}>
        <div className={styles.device} aria-hidden="true">
          <div className={styles.deviceBar}><span /><span /><span /><b>novasoft · business system</b></div>
          <div className={styles.screen}>
            <div className={styles.screenTop}><small>VOTRE ÉCOSYSTÈME</small><strong>Un seul pilotage.<br />Plusieurs leviers.</strong></div>
            <div className={styles.modules}>
              <div><i className={styles.cyan}/><b>Site</b><span>Image · mobile · conversion</span></div>
              <div><i className={styles.violet}/><b>Google</b><span>Structure · contenu · suivi</span></div>
              <div><i className={styles.magenta}/><b>IA</b><span>Recherche · contenu · assistance</span></div>
              <div><i className={styles.amber}/><b>Automatisation</b><span>API · e-mails · données</span></div>
            </div>
          </div>
        </div>
        <div className={`${styles.floatCard} ${styles.floatA}`}><b>BUILD</b><span>Construire ce qui manque vraiment</span></div>
        <div className={`${styles.floatCard} ${styles.floatB}`}><b>INTEGRATE</b><span>Connecter vos outils existants</span></div>
        <div className={`${styles.floatCard} ${styles.floatC}`}><b>AUTOMATE</b><span>Automatiser ce qui se répète</span></div>
      </div>

      <div className={styles.benefits}>
        {BENEFITS.map(([n, title, text]) => (
          <article key={title} className="reveal">
            <span>{n}</span><h3>{title}</h3><p>{text}</p>
          </article>
        ))}
      </div>

      <div className={styles.routes}>
        <a href="/sites-internet-maintenance/"><span>Sites & e-commerce</span><b>Moderniser votre vitrine ou votre boutique →</b></a>
        <a href="/ia-automatisation/"><span>IA & automatisation</span><b>Créer des assistants et réduire les tâches manuelles →</b></a>
        <a href="/integrations-api/"><span>Intégrations & API</span><b>Faire circuler vos données entre vos outils →</b></a>
      </div>
    </section>
  );
}
