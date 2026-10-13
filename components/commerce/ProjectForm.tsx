'use client';

import { useState, type FormEvent } from 'react';
import { OFFER_OPTIONS, type OfferChoice } from '@/lib/site-offers';
import { CONTACT_MAIL, emailLink } from '@/lib/visual-assets';
import styles from './Commerce.module.css';

/** Prépare un e-mail dans le client de messagerie du visiteur. Aucune donnée n'est envoyée au serveur. */
export default function ProjectForm({ selected, onSelect }: {
  selected: OfferChoice;
  onSelect: (value: OfferChoice) => void;
}) {
  const [status,setStatus] = useState('');
  function prepare(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data=new FormData(event.currentTarget);
    const get=(name:string) => String(data.get(name) || '').trim();
    const offer=OFFER_OPTIONS.find(o=>o.value===selected)?.label || 'Projet NovaSoft';
    const subject='Demande NovaSoft — '+offer;
    const body=[
      'Bonjour NovaSoft,',
      '',
      'Je souhaite échanger à propos de : '+offer,
      '',
      'Nom : '+get('name'),
      'Entreprise : '+(get('company') || 'Non précisée'),
      'E-mail : '+get('email'),
      'Téléphone : '+(get('phone') || 'Non précisé'),
      'Site actuel : '+(get('website') || 'Non renseigné'),
      'Revendeur RoG Hunting : '+get('reseller'),
      '',
      'Mon projet :',
      get('message') || 'Je souhaite recevoir davantage d’informations.',
      '',
      'Merci de me recontacter.',
    ].join('\n');
    setStatus("Ouverture de votre messagerie demandée. Vérifiez le message puis cliquez sur Envoyer dans votre application.");
    window.location.href=emailLink(subject,body);
  }

  return (
    <form className={styles.form} onSubmit={prepare} aria-describedby="form-explanation">
      <div className={styles.formNotice} role="note">
        <b>Contact direct par e-mail.</b> Renseignez les informations utiles puis ouvrez votre messagerie.
        Le message n&apos;est <strong>pas envoyé automatiquement</strong> et aucune donnée n&apos;est transmise par ce site.
      </div>
      <div className={styles.formGrid}>
        <label>Votre nom <span>*</span><input name="name" autoComplete="name" required maxLength={120} placeholder="Votre nom" /></label>
        <label>Votre e-mail <span>*</span><input type="email" name="email" autoComplete="email" required maxLength={254} placeholder="vous@entreprise.com" /></label>
        <label>Entreprise <small>facultatif</small><input name="company" autoComplete="organization" maxLength={160} /></label>
        <label>Votre site <small>facultatif</small><input type="url" name="website" placeholder="https://" maxLength={500} /></label>
        <label>Votre besoin <span>*</span>
          <select name="offer" value={selected} onChange={e=>onSelect(e.target.value as OfferChoice)}>
            {OFFER_OPTIONS.map(o=><option key={o.value} value={o.value}>{o.label}</option>)}
          </select>
        </label>
        <label>Téléphone <small>facultatif</small><input type="tel" name="phone" autoComplete="tel" maxLength={40} /></label>
      </div>
      <label>Vous êtes revendeur RoG Hunting ?
        <select name="reseller" defaultValue="a-confirmer">
          <option value="a-confirmer">À confirmer / pas concerné</option>
          <option value="oui">Oui</option>
          <option value="non">Non</option>
        </select>
      </label>
      <label>Votre projet <small>facultatif</small>
        <textarea name="message" rows={4} maxLength={1200} placeholder="Parlez-nous de ce que vous souhaitez améliorer…" />
      </label>
      <p id="form-explanation" className={styles.small}>
        Vous gardez le contrôle du message dans votre application e-mail. Une demande n&apos;est pas une commande.
        Ne transmettez pas de mot de passe ni de donnée sensible.
      </p>
      <div className={styles.formActions}>
        <button type="submit" className={styles.primary}>
          Préparer mon e-mail <span aria-hidden="true">↗</span>
        </button>
        <a href={emailLink('Contact NovaSoft')} className={styles.mailLink}>{CONTACT_MAIL}</a>
      </div>
      <p className={styles.small}>Aucune application e-mail ne s&apos;ouvre ? Écrivez directement à <a href={emailLink()}>{CONTACT_MAIL}</a>.</p>
      <p className={styles.formStatus} role="status" aria-live="polite">{status}</p>
      <p className={styles.small}><a href="/confidentialite/">Politique de confidentialité</a></p>
    </form>
  );
}
