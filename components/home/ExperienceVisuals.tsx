'use client';
import { useState } from 'react';
import Icon from '@/components/commerce/Icon';
import styles from './ExperienceVisuals.module.css';

type Tone = 'violet' | 'cyan' | 'amber' | 'magenta' | 'green';
const agents: { name:string; role:string; task:string; outcome:string; tone:Tone }[] = [
 {name:'Prospection',role:'Recherche & qualification',task:'Préparer une liste de prospects',outcome:'Liste structurée à contrôler',tone:'magenta'},
 {name:'Marketing',role:'Contenus & réseaux',task:'Préparer une campagne',outcome:'Brouillon à valider',tone:'violet'},
 {name:'Recherche',role:'Veille & analyse',task:'Résumer une étude de marché',outcome:'Synthèse et sources',tone:'green'},
 {name:'Documents',role:'Rapports & présentations',task:'Préparer une proposition',outcome:'Document à personnaliser',tone:'cyan'},
];
export function BotAvatar({tone='violet',size='regular'}:{tone?:Tone;size?:'regular'|'small'|'large'}){
 return <span className={styles.bot+' '+styles['tone'+tone]+' '+styles['bot'+size]} aria-hidden="true"><span className={styles.antenna}/><span className={styles.head}><span className={styles.face}><i/><i/></span></span><span className={styles.body}><i/></span></span>;
}
export function MissionCommandCenter(){
 const [active,setActive]=useState(0);const chosen=agents[active];
 return <div className={styles.heroComposition} aria-label="Démonstration interactive du tableau de bord NovaSoft">
  <div className={styles.aura} aria-hidden="true"/>
  <div className={styles.botRow}><BotAvatar tone="magenta" size="small"/><BotAvatar tone="violet" size="large"/><BotAvatar tone="green" size="small"/></div>
  <div className={styles.browser}>
   <div className={styles.chrome}><div className={styles.dots}><i/><i/><i/></div><span>NovaSoft / Command Center</span><span className={styles.prototype}>DÉMONSTRATION</span></div>
   <div className={styles.app}>
    <aside className={styles.sidebar} aria-hidden="true"><strong>NovaSoft</strong><span className={styles.navActive}>Vue d’ensemble</span><span>Agents IA</span><span>Automatisations</span><span>Documents</span><span>Intégrations</span></aside>
    <div className={styles.main}>
     <small className={styles.eyebrow}>VOTRE ESPACE DE TRAVAIL</small>
     <h3>Une consigne.<br/><em>Les bons spécialistes.</em></h3>
     <div className={styles.prompt}><Icon name="spark" size={15}/><span>Que souhaitez-vous accomplir ?</span><b>→</b></div>
     <div className={styles.agentsTitle}><strong>Une équipe IA sur mesure</strong><span>Choisissez un exemple</span></div>
     <div className={styles.tabs} role="tablist" aria-label="Exemples d’assistants NovaSoft">
      {agents.map((a,i)=><button type="button" role="tab" key={a.name} id={'example-tab-'+i} aria-selected={i===active} aria-controls="example-mission" tabIndex={i===active?0:-1}
       onClick={()=>setActive(i)}
       onKeyDown={e=>{if(e.key==='ArrowRight'||e.key==='ArrowLeft'){e.preventDefault();const next=(i+(e.key==='ArrowRight'?1:agents.length-1))%agents.length;setActive(next);document.getElementById('example-tab-'+next)?.focus();}}}
       className={styles.tab+' '+(i===active?styles.tabActive:'')}><BotAvatar tone={a.tone} size="small"/><span>{a.name}</span></button>)}
     </div>
     <div className={styles.mission} id="example-mission" role="tabpanel" aria-labelledby={'example-tab-'+active}><span className={styles.missionIcon}><Icon name="spark" size={19}/></span><div><small>SCÉNARIO · {chosen.name.toUpperCase()}</small><strong>{chosen.task}</strong><span>{chosen.role} → {chosen.outcome}</span></div></div>
     <div className={styles.tools}><span>Intégrations possibles</span><div><b>E-mail</b><b>Drive</b><b>Réseaux</b><b>API</b></div></div>
    </div>
   </div>
  </div>
  <span className={styles.floatingPill}><Icon name="check" size={14}/> Vos agents, vos missions</span>
  <small className={styles.disclaimer}>Interface illustrative · agents non connectés à cette démonstration</small>
 </div>;
}

const specialties=[
 ['♛','Direction','Stratégie & décisions'],
 ['↗','Prospection','Recherche & contacts'],
 ['◇','Clients / SAV','Demandes & réponses'],
 ['▥','Finance','Tableaux & synthèses'],
 ['✦','Marketing','Contenus & campagnes'],
 ['⌕','Recherche','Veille & analyse'],
];
export function JarvisProductVisual(){
 return <div className={styles.jarvisScene} aria-label="Illustration d’un ensemble d’assistants professionnels pour ChatGPT">
  <div className={styles.pack}>
   <div className={styles.packSymbol}><Icon name="spark" size={42}/></div>
   <span className={styles.packEyebrow}>NOVASOFT · DIGITAL XPERIENCE</span><strong>JARVIS <em>IA</em></strong>
   <p>Vos assistants de travail sur ChatGPT</p><span className={styles.packRule}/><small>DES IDÉES AUX RÉSULTATS</small>
  </div>
  <div className={styles.phone}>
   <span className={styles.notch}/><div className={styles.phoneHeader}><Icon name="spark" size={16}/><strong>Mes assistants</strong><b>•••</b></div>
   <p>Un spécialiste pour chaque besoin</p>
   <div className={styles.phoneList}>{specialties.map(([symbol,name,desc],i)=><div className={styles.phoneAgent} key={name}>
    <span data-tone={i%4}>{symbol}</span><div><b>{name}</b><small>{desc}</small></div><i>›</i>
   </div>)}</div>
   <div className={styles.phoneInput}>Demandez à un assistant… <span>↑</span></div>
  </div>
  <small className={styles.jarvisDisclaimer}>Illustration du pack · les assistants se configurent dans ChatGPT</small>
 </div>;
}
export function ApiSyncVisual(){
 return <div className={styles.apiScene} aria-label="Exemple de connexion entre un catalogue source et une boutique revendeur">
  <div className={styles.source}>
   <div className={styles.apiHead}><span className={styles.sourceIcon}>R</span><div><small>CATALOGUE SOURCE</small><strong>RoG Hunting</strong></div></div>
   <div className={styles.catalog}>{['Colliers GPS','Gilets de protection','Accessoires'].map((a,i)=><div key={a} className={styles.catalogLine}><span><Icon name={i===0?'link':i===1?'shield':'shop'} size={18}/></span><b>{a}</b><i/></div>)}</div>
   <small className={styles.apiFoot}>Produits · visuels · disponibilités</small>
  </div>
  <div className={styles.apiConnector} aria-hidden="true"><span>API</span><b>⇄</b></div>
  <div className={styles.destination}>
   <div className={styles.apiHead}><span className={styles.storeIcon}><Icon name="shop" size={18}/></span><div><small>SITE CONNECTÉ</small><strong>Boutique revendeur</strong></div></div>
   <div className={styles.miniStore}><span className={styles.miniBar}><i/><i/><i/></span><strong>VOTRE SÉLECTION</strong><div className={styles.miniTiles}><i/><i/><i/></div></div>
   <small className={styles.apiFoot}>Moins de double saisie</small>
  </div>
  <div className={styles.apiCaption}><Icon name="check" size={15}/> Selon les accès et la faisabilité</div>
 </div>;
}
