import Icon from '@/components/commerce/Icon';
import { emailLink } from '@/lib/visual-assets';
import { ApiSyncVisual } from '@/components/home/ExperienceVisuals';
import styles from './Solutions.module.css';

const cards=[
 ['Catalogues produits','Importez les informations pertinentes depuis une source autorisée.'],
 ['Disponibilités','Actualisez les données de stock selon les connexions disponibles.'],
 ['Outils métier','Reliez boutique, fichiers, CRM et services sans ressaisies inutiles.'],
 ['Processus répétitifs','Déclenchez les étapes utiles avec des validations quand il le faut.']
];
export default function IntegrationsPage(){
 return <div className={styles.page}>
  <header className={styles.hero}>
   <div className={styles.copy}>
    <span className={styles.eyebrow}>INTÉGRATIONS · API · AUTOMATISATION</span>
    <h1>Vos outils connectés.<br/><span className={styles.accent}>Votre activité simplifiée.</span></h1>
    <p>Catalogues, stocks, commandes, e-mails ou documents : faisons circuler les bonnes informations, sans recopier les mêmes données partout.</p>
    <div className={styles.actions}><a className={styles.primary} href={emailLink('Étude de connexion API / intégration NovaSoft')}>Étudier mon projet <Icon name="arrow" size={18}/></a><a className={styles.secondary} href="#exemple">Voir l’exemple revendeur</a></div>
   </div>
   <div className={styles.nativeVisual}><ApiSyncVisual/></div>
  </header>
  <section className={styles.section} id="exemple">
   <div className={styles.sectionHead}><span className={styles.eyebrow}>EXEMPLE · ROG HUNTING</span><h2>Un catalogue revendeur.<br/><span className={styles.accent}>Moins de mise à jour manuelle.</span></h2><p>Pour un revendeur autorisé, NovaSoft peut étudier l’import du catalogue et la synchronisation des disponibilités selon les accès et les capacités de l’API.</p></div>
   <div className={styles.grid}>{cards.map(([name,desc],i)=><article className={styles.card} key={name}><span>{String(i+1).padStart(2,'0')}</span><h3>{name}</h3><p>{desc}</p></article>)}</div>
   <div className={styles.notice}><b>Une promesse réaliste :</b> la compatibilité, les accès et la faisabilité sont validés avant toute mise en place. Ni expédition automatique, ni synchronisation universelle ne sont incluses par défaut.</div>
  </section>
  <section className={styles.cta}><h2>Vos données doivent circuler.<br/><span className={styles.accent}>Pas votre temps s’envoler.</span></h2><p>Présentez-nous les outils que vous utilisez. Nous rechercherons la connexion la plus simple et la plus fiable.</p><div className={styles.actions}><a className={styles.primary} href={emailLink('Demande de connexion API NovaSoft')}>Demander une étude <Icon name="arrow" size={18}/></a><a className={styles.secondary} href="/sites-internet-maintenance/">Voir les sites e-commerce</a></div></section>
 </div>;
}
