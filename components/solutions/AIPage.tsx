import Icon from '@/components/commerce/Icon';
import { emailLink } from '@/lib/visual-assets';
import { JarvisProductVisual } from '@/components/home/ExperienceVisuals';
import styles from './Solutions.module.css';

const cards=[
 ['Direction & finance','Préparez des synthèses, comparatifs et documents de décision.'],
 ['Prospection & clients','Retrouvez les bonnes informations et préparez vos réponses.'],
 ['Marketing & contenus','Transformez vos idées en textes, supports et campagnes.'],
 ['Recherche & organisation','Résumez vos sources et structurez vos prochaines actions.']
];
export default function AIPage(){
 return <div className={styles.page}>
  <header className={styles.hero}>
   <div className={styles.copy}>
    <span className={styles.eyebrow}>VOTRE ÉQUIPE D’ASSISTANTS · SUR CHATGPT</span>
    <h1>ChatGPT devient votre <span className={styles.accent}>assistant de travail.</span></h1>
    <p>Des spécialistes pour les prospects, les clients, le marketing ou les documents. Une installation adaptée à votre activité, sans développer un logiciel de plus.</p>
    <div className={styles.actions}><a className={styles.primary} href={emailLink('Présentation du pack ChatGPT / Jarvis IA')}>Découvrir le pack <Icon name="arrow" size={19}/></a><a href="#usages" className={styles.secondary}>Voir les usages</a></div>
    <p className={styles.micro}>La démonstration est illustrative. Les fonctions disponibles dépendent de la configuration, des accès et des autorisations.</p>
   </div>
   <div className={styles.nativeVisual}><JarvisProductVisual/></div>
  </header>

  <section className={styles.section} id="usages">
   <div className={styles.sectionHead}><span className={styles.eyebrow}>DES ASSISTANTS UTILES</span><h2>Moins de tâches répétitives.<br/><span className={styles.accent}>Plus de temps pour l’essentiel.</span></h2></div>
   <div className={styles.grid}>{cards.map(([name,desc],i)=><article className={styles.card} key={name}><span>{String(i+1).padStart(2,'0')}</span><h3>{name}</h3><p>{desc}</p></article>)}</div>
  </section>

  <section className={\`\${styles.section} \${styles.sectionAlt}\`}>
   <div className={styles.sectionHead}><span className={styles.eyebrow}>COMMENT ÇA MARCHE ?</span><h2>Simple à comprendre.<br/><span className={styles.accent}>Pensé pour travailler.</span></h2></div>
   <div className={styles.flow}>
    {[
     ['01','Comprendre','Nous identifions vos tâches et vos besoins.'],
     ['02','Configurer','Nous préparons les assistants et leurs consignes.'],
     ['03','Utiliser','Vous travaillez dans ChatGPT avec les spécialistes utiles.'],
     ['04','Améliorer','Les procédures évoluent selon vos retours.']
    ].map(([num,title,desc])=><article key={num}><span>{num}</span><h3>{title}</h3><p>{desc}</p></article>)}
   </div>
  </section>
  <section className={styles.cta}><h2>Et si ChatGPT travaillait <span className={styles.accent}>vraiment pour vous ?</span></h2><p>Expliquez-nous ce que vous aimeriez simplifier. Nous vous présenterons la configuration adaptée.</p><div className={styles.actions}><a className={styles.primary} href={emailLink('Je souhaite un assistant de travail ChatGPT')}>Parler de mon projet <Icon name="arrow" size={18}/></a><a className={styles.secondary} href="/integrations-api/">Découvrir les intégrations</a></div></section>
 </div>;
}
