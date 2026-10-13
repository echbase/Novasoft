import { OFFER, euros } from '@/lib/site-offers';
import Icon from './Icon';
import styles from './Commerce.module.css';
export default function CommerceTeaser() {
  return <section className={styles.teaser} aria-labelledby="commerce-home-title">
    <div><span className={styles.eyebrow}>SITES INTERNET & MAINTENANCE</span><h2 id="commerce-home-title">Votre boutique.<br /><span className={styles.accent}>Sa prochaine version.</span></h2><p>Création ou refonte e-commerce, parcours d’achat simplifié et accompagnement après la mise en ligne.</p></div>
    <div className={styles.teaserOffer}><span>Création / refonte e-commerce</span><p><strong>{euros(OFFER.creation)}</strong> HT</p><small>Paiement de création unique · maintenance optionnelle</small><a className={styles.primary} href={OFFER.path}>Découvrir l’offre <Icon name="arrow" size={20} /></a><span className={styles.micro}>Autres projets : sur étude et devis.</span></div>
  </section>;
}
