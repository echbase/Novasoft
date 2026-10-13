import type { Metadata } from 'next';
import LegalShell from '@/components/LegalShell';

export const metadata: Metadata = {
  title: 'Mentions légales — NovaSoft',
  description: 'Mentions légales du site NovaSoft — Digital Xperience.',
  alternates: { canonical: '/mentions-legales/' },
};

export default function MentionsLegales() {
  return (
    <LegalShell title="Mentions légales" updated="23 juillet 2026">
      <h2>Éditeur du site</h2>
      <p>
        Le site <strong>novasoft.mu</strong> est édité par <strong>NovaSoft Ltd</strong>, société de
        droit mauricien.
      </p>
      <ul>
        <li>Siège social : Pereybere 30546, République de Maurice</li>
        <li>Numéro d&apos;enregistrement commercial (BRN) : C25226236</li>
        <li>Directeur de la publication : la direction de NovaSoft Ltd</li>
        <li>
          Contact : <a href="mailto:support@novasoft.mu">support@novasoft.mu</a>
        </li>
      </ul>

      <h2>Hébergement</h2>
      <p>
        Le site est hébergé par <strong>Vercel Inc.</strong>, 440 N Barranca Ave #4133, Covina, CA 91723,
        États-Unis — <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">vercel.com</a>.
      </p>

      <h2>Propriété intellectuelle</h2>
      <p>
        L&apos;ensemble des contenus de ce site (textes, visuels, logo, éléments graphiques, code) est la
        propriété exclusive de NovaSoft Ltd, sauf mention contraire. Toute reproduction, représentation ou
        adaptation, totale ou partielle, sans autorisation écrite préalable est interdite.
      </p>

      <h2>Liens externes</h2>
      <p>
        Ce site contient des liens vers des sites tiers (notamment les réalisations présentées). NovaSoft Ltd
        n&apos;exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leurs contenus.
      </p>

      <h2>Droit applicable</h2>
      <p>
        Le présent site est soumis au droit mauricien. Tout litige relatif à son utilisation relève des
        juridictions compétentes de la République de Maurice.
      </p>
    </LegalShell>
  );
}
