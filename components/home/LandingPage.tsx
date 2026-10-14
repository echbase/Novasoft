import { OFFER, euros } from '@/lib/site-offers';
import { CONTACT_MAIL, emailLink } from '@/lib/visual-assets';
import Icon from '@/components/commerce/Icon';
import ShopPreview from '@/components/commerce/ShopPreview';
import { MissionCommandCenter, JarvisProductVisual, ApiSyncVisual } from './ExperienceVisuals';
import styles from './LandingPage.module.css';

const benefits=[
  {icon:'cart',name:'Acheter plus facilement',desc:'Un parcours pensé pour vos clients'},
  {icon:'google',name:'Gagner en visibilité',desc:'Un site mieux structuré pour Google'},
  {icon:'spark',name:'Libérer du temps',desc:'Des assistants pour les tâches répétitives'},
  {icon:'link',name:'Relier vos outils',desc:'Moins de saisies, plus de fluidité'},
];

function CheckList({values}:{values:string[]}){
 return <ul className={styles.list}>{values.map(x=><li key={x}><span className={styles.check}><Icon name="check" size={16}/></span>{x}</li>)}</ul>;
}
function Action({href,label}:{href:string;label:string}){
 return <a className={styles.button} href={href}>{label}<Icon name="arrow" size={17}/></a>;
}

export default function LandingPage(){
 return <>
  <header className={styles.hero} id="top">
   <div className={styles.heroLayout}>
    <div className={styles.heroCopy}>
     <span className={styles.kicker}><span className={styles.pulse}/> DIGITAL XPERIENCE · ÎLE MAURICE</span>
     <h1>Des sites qui vendent.<br/><span>Une IA qui travaille.</span><br/>Un business qui avance.</h1>
     <p>Création de sites, assistants ChatGPT, automatisation et API. Nous connectons le bon outil au bon besoin.</p>
     <div className={styles.heroActions}>
      <Action href="#solutions" label="Découvrir nos solutions"/>
      <a href={emailLink('Parlons de mon projet NovaSoft')} className={styles.ghost}>Parler de mon projet</a>
     </div>
     <div className={styles.mantra}><span>BUILD</span><i>→</i><span>INTEGRATE</span><i>→</i><span>AUTOMATE</span></div>
    </div>
    <div className={styles.heroVisual}><MissionCommandCenter/></div>
   </div>
   <div className={styles.benefits} aria-label="Ce que NovaSoft cherche à améliorer">
    {benefits.map(b=><div className={styles.benefit} key={b.name}><span className={styles.benefitIcon}><Icon name={b.icon} size={22}/></span><div><strong>{b.name}</strong><small>{b.desc}</small></div></div>)}
   </div>
  </header>

  <div id="solutions" className={styles.solutions}>
   <section id="expertises" className={styles.solution+' '+styles.website} aria-labelledby="web-title">
    <div className={styles.solutionText}>
     <span className={styles.eyebrow}>01 · SITES INTERNET & E-COMMERCE</span>
     <h2 id="web-title">Une vitrine plus belle.<br/><span>Une boutique plus efficace.</span></h2>
     <p>Montrez le meilleur de votre activité, rassurez vos visiteurs et rendez l’achat plus simple.</p>
     <CheckList values={['Design moderne et crédible','Parcours mobile repensé','Bases du référencement Google','Boutique et paiement en ligne']}/>
     <div className={styles.solutionActions}><Action href={OFFER.path} label="Découvrir l’offre"/><span className={styles.price}><b>{euros(OFFER.creation)} HT</b> Création / refonte e-commerce</span></div>
    </div>
    <div className={styles.solutionVisual+' '+styles.websiteStage}><ShopPreview compact/></div>
   </section>

   <section id="jarvis" className={styles.solution+' '+styles.jarvis} aria-labelledby="jarvis-title">
    <div className={styles.solutionText}>
     <span className={styles.eyebrow}>02 · PACK CHATGPT / JARVIS IA</span>
     <h2 id="jarvis-title">Un seul ChatGPT.<br/><span>Vos assistants spécialisés.</span></h2>
     <p>Prospects, clients, finance, marketing, recherche… Des assistants adaptés à votre façon de travailler.</p>
     <CheckList values={['Installation et accompagnement','Des consignes adaptées à vos métiers','Moins de tâches répétitives','Pas de nouveau logiciel à développer']}/>
     <div className={styles.solutionActions}><Action href="/ia-automatisation/" label="Découvrir Jarvis"/><a className={styles.more} href={emailLink('Je souhaite découvrir le pack Jarvis IA')}>Demander une présentation ↗</a></div>
    </div>
    <div className={styles.solutionVisual}><JarvisProductVisual/></div>
   </section>

   <section id="api" className={styles.solution+' '+styles.api} aria-labelledby="api-title">
    <div className={styles.solutionText}>
     <span className={styles.eyebrow}>03 · API & INTÉGRATIONS</span>
     <h2 id="api-title">Vos outils connectés.<br/><span>Moins de saisies manuelles.</span></h2>
     <p>Un catalogue produit, des stocks, des e-mails et des logiciels qui échangent les bonnes informations.</p>
     <CheckList values={['Catalogues et disponibilités','Connexions à vos outils métier','Moins de doubles mises à jour','Exemple : API revendeur RoG Hunting']}/>
     <div className={styles.solutionActions}><Action href="/integrations-api/" label="Voir les intégrations"/><a className={styles.more} href={emailLink('Je souhaite étudier une intégration API')}>Étudier mon besoin ↗</a></div>
    </div>
    <div className={styles.solutionVisual}><ApiSyncVisual/></div>
   </section>
  </div>

  <section id="realisations" className={styles.proof} aria-labelledby="proof-title">
   <div className={styles.proofHeader}><span className={styles.eyebrow}>DES PROJETS CONCRETS</span><h2 id="proof-title">Notre travail, <span>en ligne.</span></h2></div>
   <div className={styles.proofGrid}>
    <a href="https://novaimmo.mu/" target="_blank" rel="noopener noreferrer" className={styles.proofCard}><span>IMMOBILIER</span><strong>NovaImmo</strong><p>Parcours et présentation de projets immobiliers.</p><b>Découvrir ↗</b></a>
    <a href="https://roghunting.com/" target="_blank" rel="noopener noreferrer" className={styles.proofCard}><span>E-COMMERCE</span><strong>RoG Hunting</strong><p>Catalogue spécialisé, expérience d’achat et services connectés.</p><b>Découvrir ↗</b></a>
    <a href="https://naturasell.fr/" target="_blank" rel="noopener noreferrer" className={styles.proofCard}><span>MARKETPLACE</span><strong>NaturaSell</strong><p>Plateforme dédiée à l’univers outdoor.</p><b>Découvrir ↗</b></a>
   </div>
  </section>

  <section id="contact" className={styles.contact} aria-labelledby="contact-title">
   <span className={styles.eyebrow}>ET SI ON PARLAIT DE VOTRE PROJET ?</span>
   <h2 id="contact-title">Une idée ?<br/><span>On la rend concrète.</span></h2>
   <p>Expliquez votre besoin. Nous vous aiderons à choisir la solution la plus utile.</p>
   <div className={styles.contactActions}><Action href={emailLink('Mon projet NovaSoft')} label="Contacter NovaSoft"/><a className={styles.ghost} href="#solutions">Voir nos solutions</a></div>
   <a className={styles.mail} href={emailLink()}>{CONTACT_MAIL}</a>
   <small className={styles.mailInfo}>Votre messagerie s’ouvre : vous restez maître de l’envoi.</small>
  </section>
 </>;
}
