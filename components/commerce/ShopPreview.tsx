import { VISUALS } from '@/lib/visual-assets';
import styles from './ShopPreview.module.css';

/** Maquette illustrative fictive, assemblée en HTML/CSS, non issue d'un site client. */
export default function ShopPreview({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`${styles.scene} ${compact ? styles.compact : ''}`} aria-label="Maquette de boutique moderne sur ordinateur et mobile">
      <div className={styles.desktop}>
        <div className={styles.topbar}><i /><i /><i /><span>Aperçu boutique — proposition graphique</span></div>
        <div className={styles.store}>
          <div className={styles.storeNav}><strong>ATELIER<span> NATURE</span></strong><span>Collections&nbsp;&nbsp; À propos&nbsp;&nbsp; Contact</span><span aria-hidden="true">⌕</span></div>
          <div className={styles.cover} style={{ backgroundImage: `linear-gradient(90deg,rgba(6,20,31,.75),rgba(6,20,31,.03)),url("${VISUALS.shopCover}")` }}>
            <div><small>NOUVELLE COLLECTION</small><strong>Explorez plus loin.</strong><span>Équipement pensé pour vos aventures.</span><b>Découvrir <span aria-hidden="true">→</span></b></div>
          </div>
          <div className={styles.products}>
            {['Votre sélection','Vos nouveautés','À découvrir'].map((text,i)=><div key={text}><i className={styles['shape'+i]} /><span>{text}</span><b>Explorer →</b></div>)}
          </div>
        </div>
      </div>
      <div className={styles.mobile} aria-hidden="true">
        <div className={styles.notch} />
        <div className={styles.mobNav}>ATELIER NATURE <span>☰</span></div>
        <div className={styles.mobCover} style={{backgroundImage:`linear-gradient(180deg,rgba(5,18,32,.12),rgba(5,18,32,.78)),url("${VISUALS.shopCover}")`}}>
          <small>NOUVELLE COLLECTION</small><b>Explorez plus loin.</b><span>Découvrir →</span>
        </div>
        <div className={styles.mobTiles}><span /><span /></div>
      </div>
      <span className={styles.demo}>EXEMPLE DE DESIGN · MAQUETTE NON CONTRACTUELLE</span>
    </div>
  );
}
