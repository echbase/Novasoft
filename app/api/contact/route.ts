import { createHash } from 'node:crypto';
import { contactConfigured } from '@/lib/contact-config';
import { OFFER_OPTIONS, isOfferChoice } from '@/lib/site-offers';
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
const MAX_BODY = 16_384;
const json = (body: object, status: number) => Response.json(body, { status, headers: { 'Cache-Control': 'no-store' } });
const validEmail = (v: string) => /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(v) && !/[\r\n]/.test(v);
export async function POST(request: Request) {
  const origin = new URL(request.url).origin;
  if (request.headers.get('origin') !== origin) return json({ error: 'Origine de la demande non autorisée.' }, 403);
  if (!(request.headers.get('content-type') || '').startsWith('application/json')) return json({ error: 'Format de demande non valide.' }, 415);
  if (Number(request.headers.get('content-length') || 0) > MAX_BODY) return json({ error: 'Votre message est trop long.' }, 413);
  // Fermé par défaut : aucun appel externe sans configuration approuvée.
  if (!contactConfigured()) return json({ error: 'L’envoi en ligne n’est pas encore activé. Écrivez à support@novasoft.mu.' }, 503);
  let data: Record<string, unknown>;
  try {
    const reader = request.body?.getReader();
    if (!reader) return json({ error: 'La demande est vide.' }, 400);
    let size = 0; const chunks: Uint8Array[] = [];
    while (true) {
      const part = await reader.read(); if (part.done) break;
      size += part.value.byteLength;
      if (size > MAX_BODY) { await reader.cancel(); return json({ error: 'Votre message est trop long.' }, 413); }
      chunks.push(part.value);
    }
    const parsed: unknown = JSON.parse(Buffer.concat(chunks).toString('utf8'));
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) throw new Error('invalid');
    data = parsed as Record<string, unknown>;
  } catch { return json({ error: 'La demande n’a pas pu être lue. Vérifiez les champs.' }, 400); }
  const text = (key: string, max: number) => typeof data[key] === 'string' && (data[key] as string).length <= max ? (data[key] as string).trim() : null;
  const name = text('name', 120), company = text('company', 160), email = text('email', 254);
  const website = text('website', 500), phone = text('phone', 40), message = text('message', 4000);
  const token = text('token', 2048), requestId = text('requestId', 40);
  if (data.websiteConfirm) return json({ error: 'La vérification de la demande a échoué.' }, 400);
  if (!name || !company || !email || !validEmail(email) || website === null || phone === null || message === null || !isOfferChoice(data.offer) || !['oui', 'non', 'a-confirmer'].includes(String(data.reseller)) || !token || !requestId || !/^[a-f0-9-]{36}$/i.test(requestId)) return json({ error: 'Vérifiez votre nom, votre entreprise, votre e-mail et le besoin sélectionné.' }, 400);
  if (website) { try { if (!['http:', 'https:'].includes(new URL(website).protocol)) throw new Error(); } catch { return json({ error: 'L’adresse du site doit commencer par https:// ou http://.' }, 400); } }
  try {
    const verified = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ secret: process.env.TURNSTILE_SECRET_KEY, response: token }), signal: AbortSignal.timeout(8000),
    });
    const challenge = await verified.json();
    if (!verified.ok || !challenge.success || challenge.action !== 'contact' || challenge.hostname !== new URL(origin).hostname) return json({ error: 'La vérification anti-abus a expiré ou échoué. Recommencez-la.' }, 400);
    const offer = OFFER_OPTIONS.find((o) => o.value === data.offer)!.label;
    const content = `Demande d’information — aucune acceptation de devis.\n\nNom : ${name}\nEntreprise : ${company}\nE-mail : ${email}\nSite : ${website || 'Non renseigné'}\nTéléphone : ${phone || 'Non renseigné'}\nBesoin : ${offer}\nRevendeur RoG : ${data.reseller}\n\nMessage :\n${message || 'Non renseigné'}\n\nRéférence : ${requestId}`;
    const digest = createHash('sha256').update(content).digest('hex');
    const sent = await fetch('https://api.resend.com/emails', {
      method: 'POST', headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, 'Content-Type': 'application/json', 'Idempotency-Key': `novasoft-contact/${requestId}/${digest}` },
      body: JSON.stringify({ from: process.env.CONTACT_FROM, to: [process.env.CONTACT_TO], reply_to: email, subject: `NovaSoft — ${offer}`, text: content }), signal: AbortSignal.timeout(10000),
    });
    const result = await sent.json();
    if (!sent.ok || typeof result.id !== 'string') return json({ error: 'Le service d’envoi n’a pas confirmé la prise en charge. Réessayez ou écrivez à support@novasoft.mu.' }, 502);
    return json({ accepted: true, reference: requestId }, 202);
  } catch { return json({ error: 'L’envoi n’a pas pu être confirmé. Écrivez à support@novasoft.mu ou réessayez avec la même demande.' }, 502); }
}
