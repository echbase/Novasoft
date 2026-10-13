import Icon from '@/components/commerce/Icon';
import styles from './Solutions.module.css';

const CASES = [
  ['Catalogue & stock', 'Synchroniser des produits et des disponibilités lorsque la source et les accès le permettent.'],
  ['E-mails & documents', 'Relier messagerie, fichiers et automatisations pour éviter les reprises manuelles inutiles.'],
  ['Sites & outils métier', 'Faire communiquer une boutique, un CRM, une base ou un service existant via API ou connecteur.'],
  ['Données & reporting', 'Rassembler des informations depuis plusieurs sources et préparer des tableaux ou comptes rendus.'],
  ['Réseaux & contenu', 'Acheminer les contenus vers les bons outils de préparation et de programmation quand les connexions le permettent.'],
  ['Processus internes', 'Déclencher les bonnes étapes lorsqu’un événement métier se produit, avec validations si nécessaire.'],
];

export default function IntegrationsPage() {
  return <div className={styles.page}>
    <header className={styles.hero}>
      <div className={styles.copy}>
        <span className={styles.eyebrow}>INTÉGRATIONS & API</span>
        <h1>Vos outils peuvent <span className={styles.accent}>travailler ensemble.</span></h1>
        <p>Prix, stock, produits, e-mails, documents ou données : quand une source fiable existe, nous cherchons à éviter la ressaisie et les doubles mises à jour.</p>
        <div className={styles.actions}><a className={styles.primary} href="/#contact">Étudier mon besoin <Icon name="arrow" size={18}/></a><a className={styles.secondary} href="#exemple">Voir l’exemple revendeur</a></div>
      </div>
      <div className={styles.visual}>
        <div className={styles.halo}/>
        <div className={styles.apiVisual} aria-label="Schéma d'une API connectant plusieurs outils">
          <div className={styles.core}><b>API</b><small>CONNEXION</small></div>
          <div className={`${styles.node} ${styles.nodeA}`}><b>Catalogue</b><span>Produits · références · visuels</span></div>
          <div className={`${styles.node} ${styles.nodeB}`}><b>Boutique</b><span>Pages · panier · commandes</span></div>
          <div className={`${styles.node} ${styles.nodeC}`}><b>Disponibilités</b><span>Stock · statut · mise à jour</span></div>
          <div className={`${styles.node} ${styles.nodeD}`}><b>Outils métier</b><span>E-mails · fichiers · données</span></div>
          <div className={styles.apiTags}><span>IMPORT</span><span>SYNC</span><span>WEBHOOK</span><span>AUTOMATISATION</span></div>
        </div>
      </div>
    </header>

    <section className={styles.section}>
      <div className={styles.sectionHead}><span className={styles.eyebrow}>POURQUOI CONNECTER</span><h2>Moins de ressaisie. <span className={styles.accent}>Des données plus cohérentes.</span></h2><p>Une intégration utile réduit les manipulations répétitives et aide chaque outil à utiliser la bonne information au bon moment.</p></div>
      <div className={styles.grid}>{CASES.map(([title,text],i)=><article className={styles.card} key={title}><span>0{i+1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
    </section>

    <section id="exemple" className={`${styles.section} ${styles.sectionAlt}`}>
      <div className={styles.split}>
        <div><span className={styles.eyebrow}>EXEMPLE · ROG HUNTING</span><h2>Un catalogue revendeur <span className={styles.accent}>plus simple à maintenir.</span></h2><p style={{marginTop:18,color:'var(--muted)'}}>Pour les revendeurs autorisés, une connexion peut importer les produits du catalogue RoG Hunting et synchroniser leurs disponibilités lorsque les accès API et la faisabilité sont confirmés.</p><div className={styles.notice}><b>Ce que cela ne promet pas :</b> ni expédition automatique, ni dropshipping, ni synchronisation universelle de tous les fournisseurs. Le périmètre dépend toujours des systèmes réellement connectables.</div></div>
        <div className={styles.proof}><h3>Objectifs recherchés</h3><ul className={styles.checklist}><li>Éviter de recréer chaque fiche produit à la main</li><li>Réduire les écarts entre catalogue source et boutique revendeur</li><li>Conserver une information produit plus facile à actualiser</li><li>Libérer du temps pour le commerce et le service client</li><li>Préparer une architecture qui peut évoluer</li></ul></div>
      </div>
    </section>

    <section className={styles.section}>
      <div className={styles.sectionHead}><span className={styles.eyebrow}>NOTRE FAÇON DE FAIRE</span><h2>On ne connecte pas tout <span className={styles.accent}>pour le plaisir.</span></h2></div>
      <div className={styles.flow}>{[['01 · Source','Identifier la donnée','Quelle information est fiable, où vit-elle et qui en est responsable ?'],['02 · Accès','Vérifier les droits','API, connecteur, export ou webhook : on confirme ce qui est réellement disponible.'],['03 · Règle','Définir le flux','Qu’est-ce qui part, vers où, quand et avec quelle validation ?'],['04 · Contrôle','Tester & surveiller','On teste les erreurs, les doublons et les états limites avant de considérer le flux comme fiable.']].map(([n,t,d])=><article key={t}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div>
    </section>

    <section className={styles.cta}><h2>Vous recopiez la même information <span className={styles.accent}>dans plusieurs outils</span> ?</h2><p>C’est souvent le bon point de départ pour vérifier si une intégration ou une automatisation peut réellement faire gagner du temps.</p><div className={styles.actions}><a className={styles.primary} href="/#contact">Étudier le flux <Icon name="arrow" size={18}/></a><a className={styles.secondary} href="/ia-automatisation/">Voir les agents IA</a></div></section>
  </div>;
}
