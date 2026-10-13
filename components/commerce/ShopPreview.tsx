import styles from './Commerce.module.css';
/** Maquette HTML anonyme, pas une capture client ni une boutique livrée. */
export default function ShopPreview({ compact = false }: { compact?: boolean }) {
  return <div className={`${styles.showcase} ${compact ? styles.compact : ''}`} aria-label="Exemple illustratif de boutique sur ordinateur et mobile">
    <div className={styles.orbit} aria-hidden="true" />
    <div className={styles.browser}>
      <div className={styles.browserBar}><span aria-hidden="true">● ● ●</span><span>Aperçu de votre boutique</span><span aria-hidden="true">↗</span></div>
      <div className={styles.store}>
        <div className={styles.storeNav}><b>VOTRE MARQUE<span> /</span></b><span>Collection &nbsp; À propos &nbsp; Contact</span><span aria-hidden="true">⌕ &nbsp; ♧</span></div>
        <div className={styles.storeHero}>
          <div><span className={styles.mockEyebrow}>VOTRE COLLECTION</span><strong>Vos produits.<br />Au premier plan.</strong><p>Une présentation claire.<br />Un parcours plus simple.</p><span className={styles.mockButton}>Découvrir la collection &nbsp; ↗</span></div>
          <div className={styles.objects} aria-hidden="true"><i className={styles.objectOne} /><i className={styles.objectTwo} /><i className={styles.objectThree} /></div>
        </div>
        <div className={styles.storeProducts}>{['Votre sélection', 'Vos nouveautés', 'Vos essentiels'].map((label, i) => <div key={label}><div className={`${styles.productShape} ${styles['shape' + i]}`} aria-hidden="true"><i /></div><b>{label}</b><span>Découvrir →</span></div>)}</div>
      </div>
    </div>
    <div className={styles.phone} aria-hidden="true"><div className={styles.phoneTop} /><b>VOTRE MARQUE /</b><div className={styles.phoneHero}><small>VOTRE COLLECTION</small><strong>Vos produits.<br />Au premier plan.</strong><div className={styles.phoneObject} /><span>Découvrir →</span></div><div className={styles.phoneGrid}><i /><i /></div><div className={styles.phoneBottom} /></div>
    <div className={styles.designTag}><span /> Ordinateur & mobile</div>
  </div>;
}
