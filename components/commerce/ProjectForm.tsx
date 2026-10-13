'use client';
import { useEffect, useRef, useState, type FormEvent } from 'react';
import Script from 'next/script';
import { OFFER_OPTIONS, type OfferChoice, isOfferChoice } from '@/lib/site-offers';
import styles from './Commerce.module.css';
type Turnstile = { render: (el: HTMLElement, opts: Record<string, unknown>) => string; reset: (id: string) => void; remove: (id: string) => void };
declare global { interface Window { turnstile?: Turnstile; } }
export default function ProjectForm({ selected, onSelect, enabled, siteKey }: { selected: OfferChoice; onSelect: (v: OfferChoice) => void; enabled: boolean; siteKey?: string }) {
  const [status, setStatus] = useState(''); const [pending, setPending] = useState(false); const [token, setToken] = useState('');
  const [scriptReady, setScriptReady] = useState(false); const [accepted, setAccepted] = useState(false);
  const widget = useRef<HTMLDivElement>(null); const widgetId = useRef<string>(); const requestId = useRef('');
  useEffect(() => {
    if (!enabled || !siteKey || !scriptReady || !widget.current || !window.turnstile) return;
    widgetId.current = window.turnstile.render(widget.current, { sitekey: siteKey, action: 'contact', theme: 'dark', size: 'flexible', callback: (t: string) => setToken(t), 'expired-callback': () => setToken(''), 'error-callback': () => { setToken(''); setStatus('La vérification anti-abus est indisponible. Vous pouvez nous écrire par e-mail.'); } });
    return () => { if (widgetId.current) window.turnstile?.remove(widgetId.current); };
  }, [enabled, siteKey, scriptReady]);
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault(); if (pending || accepted) return;
    if (!enabled) { setStatus('Envoi en ligne non activé : aucun message n’a été envoyé. Écrivez à support@novasoft.mu.'); return; }
    if (!token) { setStatus('Effectuez la vérification anti-abus avant l’envoi.'); return; }
    const values = Object.fromEntries(new FormData(e.currentTarget).entries());
    requestId.current ||= crypto.randomUUID(); setPending(true); setStatus('Envoi de votre demande…');
    try {
      const response = await fetch('/api/contact/', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...values, token, requestId: requestId.current }), signal: AbortSignal.timeout(25000) });
      const result = await response.json();
      if (!response.ok || !result.accepted) throw new Error(result.error || 'L’envoi n’a pas pu être confirmé.');
      setAccepted(true); setStatus(`Votre demande a été prise en charge par le service d’envoi. Référence : ${result.reference}. Il ne s’agit pas d’une acceptation de devis.`);
    } catch (error) { setStatus(error instanceof Error ? error.message : 'L’envoi n’a pas pu être confirmé. Écrivez à support@novasoft.mu.'); }
    finally { setPending(false); setToken(''); if (widgetId.current) window.turnstile?.reset(widgetId.current); }
  }
  return <form className={styles.form} onSubmit={submit} aria-describedby="form-explanation" onChange={() => { if (!pending && !accepted) requestId.current = ''; }}>
    {!enabled && <div className={styles.formNotice} role="note"><b>Prévisualisation — envoi non activé.</b><br />La sélection de l’offre et les champs sont testables. Aucun message ne sera envoyé. Pour nous contacter, utilisez le lien e-mail ci-dessous.</div>}
    <div className={styles.formGrid}>
      <label>Votre nom <span>*</span><input name="name" autoComplete="name" required maxLength={120} /></label>
      <label>Entreprise <span>*</span><input name="company" autoComplete="organization" required maxLength={160} /></label>
      <label>E-mail professionnel <span>*</span><input name="email" type="email" autoComplete="email" required maxLength={254} /></label>
      <label>Site actuel <small>facultatif</small><input name="website" type="url" autoComplete="url" placeholder="https://" maxLength={500} /></label>
      <label>Votre besoin <span>*</span><select name="offer" value={selected} onChange={(e) => { if (isOfferChoice(e.target.value)) onSelect(e.target.value); }}>{OFFER_OPTIONS.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}</select></label>
      <label>Téléphone <small>facultatif</small><input name="phone" type="tel" autoComplete="tel" maxLength={40} /></label>
    </div>
    <label>Êtes-vous revendeur autorisé RoG Hunting ?<select name="reseller" defaultValue="a-confirmer"><option value="a-confirmer">À confirmer / je ne sais pas</option><option value="oui">Oui</option><option value="non">Non</option></select></label>
    <label>Votre projet en quelques mots <small>facultatif</small><textarea name="message" rows={4} maxLength={4000} placeholder="Ce que vous aimeriez améliorer, vos besoins…" /></label>
    <div className={styles.honeypot} aria-hidden="true"><label>Ne pas remplir ce champ<input name="websiteConfirm" tabIndex={-1} autoComplete="off" /></label></div>
    {enabled && siteKey && <><Script src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit" strategy="afterInteractive" onReady={() => setScriptReady(true)} onError={() => setStatus('Vérification anti-abus indisponible. Écrivez à support@novasoft.mu.')} /><div ref={widget} /></>}
    <p id="form-explanation" className={styles.small}>Une demande d’information ne vaut pas acceptation de devis. Les champs marqués * servent à préparer notre échange. N’envoyez aucun mot de passe ni donnée sensible.</p>
    <div className={styles.formActions}><button className={styles.primary} disabled={!enabled || pending || accepted} type="submit">{pending ? 'Envoi en cours…' : accepted ? 'Demande prise en charge' : 'Envoyer ma demande'} <span aria-hidden="true">↗</span></button><a href="mailto:support@novasoft.mu">Écrire à support@novasoft.mu</a></div>
    <p className={styles.small}><a href="/confidentialite/">Confidentialité</a> · L’activation de la collecte attend la validation de la notice adaptée au formulaire.</p>
    <p className={styles.formStatus} role="status" aria-live="polite">{status}</p>
  </form>;
}
