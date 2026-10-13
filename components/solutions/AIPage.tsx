import Icon from '@/components/commerce/Icon';
import { VISUALS, emailLink } from '@/lib/visual-assets';
import styles from './Solutions.module.css';

const AGENTS = [
  ['CEO', 'Décisions · synthèses · priorités'],
  ['Prospects', 'Recherche · messages · suivi'],
  ['Clients / SAV', 'Réponses · procédures · fidélisation'],
  ['Finance', 'Analyse · suivi · alertes'],
];

const USES = [
  ['Prospection', 'Rechercher, qualifier et préparer les prochaines actions sans repartir de zéro à chaque fois.'],
  ['Clients & SAV', 'Retrouver les bonnes informations et préparer des réponses cohérentes avec vos procédures.'],
  ['Marketing', 'Transformer une idée, un produit ou une actualité en contenus adaptés aux bons canaux.'],
  ['Recherche', 'Comparer des sources, résumer une veille et faire ressortir les éléments qui méritent votre attention.'],
  ['Documents', 'Préparer rapports, synthèses, devis et présentations à partir d’informations déjà disponibles.'],
  ['Organisation', 'Conserver le contexte d’un projet et réduire les répétitions entre vos différents outils de travail.'],
];

export default function AIPage() {
  return <div className={styles.page}>
    <header className={styles.hero}>
      <div className={styles.copy}>
        <span className={styles.eyebrow}>IA & AUTOMATISATION</span>
        <h1>Transformez l&apos;IA en <span className={styles.accent}>assistant de travail.</span></h1>
        <p>Des agents spécialisés peuvent vous aider à rechercher, organiser, préparer et automatiser des tâches concrètes. Nous adaptons le système à votre activité au lieu de vous imposer un nouvel outil inutile.</p>
        <div className={styles.actions}><a className={styles.primary} href={emailLink("Présentation du Pack ChatGPT / Jarvis IA")}>Parler de mon projet <Icon name="arrow" size={18}/></a><a className={styles.secondary} href="#usages">Voir des exemples</a></div>
        <p className={styles.micro}>Les capacités dépendent des accès, outils et autorisations réellement disponibles. Aucune automatisation n’est présentée comme autonome si elle nécessite une validation.</p>
      </div>
      <figure className={styles.mediaPoster}>
        <img className={styles.mediaImage} src={VISUALS.jarvis} alt="Présentation du pack Jarvis IA : assistants spécialisés ChatGPT pour le travail" width={1254} height={1254}/>
        <figcaption>Exemple illustratif du pack ChatGPT / Jarvis IA</figcaption>
      </figure>
    </header>

    <section className={styles.section} id="usages">
      <div className={styles.sectionHead}><span className={styles.eyebrow}>CE QUE CELA PEUT CHANGER</span><h2>Des usages compréhensibles, <span className={styles.accent}>pas du jargon.</span></h2><p>On part des tâches qui prennent du temps et on vérifie lesquelles méritent réellement une automatisation.</p></div>
      <div className={styles.grid}>{USES.map(([title,text],i)=><article className={styles.card} key={title}><span>0{i+1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
    </section>

    <section className={`${styles.section} ${styles.sectionAlt}`}>
      <div className={styles.sectionHead}><span className={styles.eyebrow}>DU BESOIN AU RÉSULTAT</span><h2>Un agent utile suit un <span className={styles.accent}>processus clair.</span></h2></div>
      <div className={styles.flow}>
        {[['01 · Comprendre','Votre demande','L’agent reçoit une consigne et le contexte autorisé.'],['02 · Préparer','Chercher & analyser','Il récupère les informations nécessaires et prépare son travail.'],['03 · Contrôler','Valider si nécessaire','Une action externe importante attend votre accord lorsque le processus le prévoit.'],['04 · Restituer','Résultat & compte rendu','Vous récupérez le résultat, les livrables et le statut réel de la mission.']].map(([n,t,d])=><article key={t}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}
      </div>
    </section>

    <section className={styles.section}>
      <div className={styles.split}>
        <div><span className={styles.eyebrow}>JARVIS / CHATGPT</span><h2>Un même point d&apos;entrée. <span className={styles.accent}>Plusieurs spécialistes.</span></h2><p style={{marginTop:18,color:'var(--muted)'}}>Le principe n’est pas de multiplier les applications. Un assistant principal peut orienter une demande vers le bon spécialiste, conserver le contexte du projet et vous rendre le résultat au même endroit.</p></div>
        <div className={styles.proof}><h3>Ce que nous cherchons à simplifier</h3><ul className={styles.checklist}><li>Moins de copier-coller entre outils</li><li>Moins de temps perdu à retrouver le contexte</li><li>Des réponses et documents plus cohérents</li><li>Des actions contrôlées plutôt que des automatisations opaques</li><li>Une architecture qui peut évoluer avec de nouveaux agents</li></ul><div className={styles.notice}><b>Important :</b> l’IA n’est pas vendue comme une promesse magique. Nous définissons les accès, les limites, les validations et les responsabilités selon le cas d’usage.</div></div>
      </div>
    </section>

    <section className={styles.cta}><h2>Quelle tâche aimeriez-vous <span className={styles.accent}>ne plus refaire à la main</span> ?</h2><p>Montrez-nous votre processus actuel. Nous vous dirons ce qui peut être simplifié, connecté ou automatisé sans créer une usine à gaz.</p><div className={styles.actions}><a className={styles.primary} href="/#contact">Parler de mon besoin <Icon name="arrow" size={18}/></a><a className={styles.secondary} href="/integrations-api/">Voir les intégrations & API</a></div></section>
  </div>;
}
