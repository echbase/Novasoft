import { OFFER, euros } from '@/lib/site-offers';
import { VISUALS, emailLink, CONTACT_MAIL } from '@/lib/visual-assets';
import ShopPreview from '@/components/commerce/ShopPreview';
import Icon from '@/components/commerce/Icon';
import styles from './LandingPage.module.css';

const benefits=[
  {icon:'cart',title:'Plus simple à acheter',sub:'Des parcours clairs sur mobile'},
  {icon:'google',title:'Mieux préparé pour Google',sub:'Structure et contenus travaillés'},
  {icon:'spark',title:'Plus de temps utile',sub:'L’IA pour les tâches répétitives'},
  {icon:'link',title:'Outils connectés',sub:'Moins de ressaisie'},
];

const works=[
 {name:'NovaImmo',category:'Immobilier',url:'https://novaimmo.mu/',short:'Une expérience digitale dédiée aux projets immobiliers.'},
 {name:'RoG Hunting',category:'E-commerce',url:'https://roghunting.com/',short:'Boutique spécialisée et catalogue technique.'},
 {name:'NaturaSell',category:'Marketplace',url:'https://naturasell.fr/',short:'Une plateforme pour l’univers outdoor.'},
];

function Points({items}:{items:string[]}){
  return <ul className={styles.points}>{items.map(x=><li key={x}><Icon name="check" size={18}/><span>{x}</span></li>)}</ul>;
}

export default function LandingPage(){
  return <>
    <header className={styles.hero} id="top">
      <div className={styles.heroCopy}>
        <span className={styles.kicker}>NOVASOFT · DIGITAL XPERIENCE</span>
        <h1>Sites, IA &amp; <span className={styles.gradient}>automatisation</span> pour développer votre activité.</h1>
        <p>Des sites plus modernes. Des assistants qui vous font gagner du temps. Des outils qui travaillent enfin ensemble.</p>
        <div className={styles.actions}>
          <a href="#solutions" className={styles.primary}>Découvrir nos solutions <Icon name="arrow" size={20}/></a>
          <a href={emailLink('Parlons de mon projet NovaSoft')} className={styles.outline}>Parler de mon projet</a>
        </div>
        <div className={styles.heroPoints}><span>BUILD</span><i>→</i><span>INTEGRATE</span><i>→</i><span>AUTOMATE</span></div>
      </div>
      <div className={styles.heroVisual}>
        <div className={styles.heroFrame}>
          <img src={VISUALS.agents} alt="Illustration conceptuelle du Dashboard NovaSoft avec son équipe d’agents IA et les outils connectés" width={1122} height={1402} fetchPriority="high"/>
          <span className={styles.heroNote}>EXEMPLE VISUEL · ÉCOSYSTÈME NOVASOFT</span>
        </div>
        <span className={`${styles.float} ${styles.floatOne}`}><Icon name="spark" size={16}/> Assistants IA spécialisés</span>
        <span className={`${styles.float} ${styles.floatTwo}`}><Icon name="link" size={16}/> Automatisations &amp; API</span>
      </div>
    </header>

    <section className={styles.ribbon} aria-label="Nos bénéfices">
      {benefits.map(x=><div key={x.title}><span className={styles.ribbonIcon}><Icon name={x.icon} size={23}/></span><div><strong>{x.title}</strong><small>{x.sub}</small></div></div>)}
    </section>

    <div id="solutions" className={styles.solutions}>
      <section className={`${styles.feature} ${styles.web}`} id="expertises" aria-labelledby="web-title">
        <div className={styles.featureCopy}>
          <span className={styles.eyebrow}>CRÉATION · REFONTE · MAINTENANCE</span>
          <h2 id="web-title">Sites &amp; <span>E-commerce</span></h2>
          <p>Une boutique moderne, agréable sur mobile et pensée pour faciliter l’achat.</p>
          <Points items={['Design moderne & crédible','Expérience mobile optimisée','Bases préparées pour Google','Parcours d’achat plus simple']}/>
          <div className={styles.featureActions}><a className={styles.primary} href={OFFER.path}>Voir l’offre <Icon name="arrow" size={18}/></a><span className={styles.price}>Création e-commerce : <b>{euros(OFFER.creation)} HT</b></span></div>
        </div>
        <div className={styles.webVisual}><ShopPreview compact/></div>
      </section>

      <section className={`${styles.feature} ${styles.jarvis}`} id="jarvis" aria-labelledby="jarvis-title">
        <div className={styles.featureCopy}>
          <span className={styles.eyebrow}>VOTRE ÉQUIPE IA · SUR CHATGPT</span>
          <h2 id="jarvis-title">Pack ChatGPT <span>/ Jarvis IA</span></h2>
          <p>Des assistants spécialisés pour vos tâches. Sans développer un logiciel de plus.</p>
          <Points items={['Prospection, clients, marketing, finance','Recherche et préparation de documents','Moins de travail répétitif','Installation et accompagnement']}/>
          <div className={styles.featureActions}><a className={styles.primary} href="/ia-automatisation/">Découvrir le pack <Icon name="arrow" size={18}/></a><a className={styles.inlineLink} href={emailLink('Présentation du Pack ChatGPT / Jarvis IA')}>Demander une présentation ↗</a></div>
        </div>
        <div className={styles.jarvisVisual}>
          <div className={styles.posterLight}><img src={VISUALS.jarvis} alt="Présentation du pack Jarvis IA : assistants ChatGPT pour prospection, service client, finance, marketing et recherche" loading="lazy" width={1254} height={1254}/></div>
          <span className={styles.mediaCaption}>Visuel de présentation du pack · fonctions selon configuration</span>
        </div>
      </section>

      <section className={`${styles.feature} ${styles.api}`} id="api" aria-labelledby="api-title">
        <div className={styles.featureCopy}>
          <span className={styles.eyebrow}>VOS DONNÉES · VOS OUTILS · UN SEUL FLUX</span>
          <h2 id="api-title">API &amp; <span>Intégrations</span></h2>
          <p>Automatisez la circulation de vos données et réduisez la saisie manuelle.</p>
          <Points items={['Catalogues et disponibilités synchronisés','Boutiques & outils métier connectés','Moins d’erreurs de ressaisie','Exemple d’intégration revendeur RoG Hunting']}/>
          <div className={styles.featureActions}><a className={styles.primary} href="/integrations-api/">Voir les intégrations <Icon name="arrow" size={18}/></a><a className={styles.inlineLink} href={emailLink('Étude de connexion API / catalogue')}>Étudier mon projet ↗</a></div>
        </div>
        <div className={styles.apiVisual}>
          <img src={VISUALS.reseller} alt="Exemple illustratif d’API revendeur RoG Hunting : catalogue de produits et disponibilités sur ordinateur" loading="lazy" width={1179} height={1529}/>
          <span className={styles.mediaCaption}>Exemple RoG Hunting · sous réserve d'accès et de faisabilité</span>
        </div>
      </section>
    </div>

    <section className={styles.work} id="realisations" aria-labelledby="work-title">
      <span className={styles.eyebrow}>DES PROJETS CONCRETS</span>
      <div className={styles.workHead}><h2 id="work-title">Ils prennent vie <span className={styles.gradient}>en ligne.</span></h2><p>Quelques projets illustrant nos domaines d’intervention.</p></div>
      <div className={styles.workGrid}>{works.map((x,i)=><a href={x.url} key={x.name} target="_blank" rel="noopener noreferrer" className={styles.workCard}>
        <span className={styles.workIcon}>{String(i+1).padStart(2,'0')}</span><span className={styles.workType}>{x.category}</span><strong>{x.name}</strong><small>{x.short}</small><span className={styles.workArrow}>Visiter le site ↗</span>
      </a>)}</div>
    </section>

    <section className={styles.contact} id="contact" aria-labelledby="contact-title">
      <span className={styles.eyebrow}>FAISONS AVANCER VOTRE PROJET</span>
      <h2 id="contact-title">Prêt à passer au <span className={styles.gradient}>niveau supérieur&nbsp;?</span></h2>
      <p>Site, IA, API ou automatisation : expliquez-nous votre besoin. Nous vous répondrons avec une approche adaptée.</p>
      <div className={styles.contactActions}>
        <a className={styles.primary} href={emailLink('Je souhaite échanger sur un projet NovaSoft')}>Nous contacter par e-mail <Icon name="arrow" size={20}/></a>
        <a className={styles.outline} href="#solutions">Revoir les solutions</a>
      </div>
      <a href={emailLink()} className={styles.mailAddress}>{CONTACT_MAIL}</a>
      <small className={styles.mailHint}>Votre messagerie s’ouvre : vous gardez la main sur l’envoi.</small>
    </section>
  </>;
}
