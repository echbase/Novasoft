import type { Metadata } from 'next';
import LegalShell from '@/components/LegalShell';

export const metadata: Metadata = {
  title: 'Politique de confidentialité — NovaSoft',
  description: 'Politique de confidentialité et cookies du site NovaSoft — Digital Xperience.',
};

export default function Confidentialite() {
  return (
    <LegalShell title="Confidentialité & cookies" updated="23 juillet 2026">
      <h2>En résumé</h2>
      <p>
        Ce site est une vitrine statique : il ne collecte <strong>aucune donnée personnelle</strong>, ne
        contient <strong>aucun formulaire</strong>, n&apos;utilise <strong>aucun cookie</strong> ni aucun
        outil de mesure d&apos;audience ou de traçage. C&apos;est pourquoi aucune bannière de consentement
        n&apos;est affichée : il n&apos;y a rien à consentir.
      </p>

      <h2>Contact par e-mail</h2>
      <p>
        Le seul moyen de contact proposé est un lien e-mail direct vers{' '}
        <a href="mailto:contact@novasoft.mu">contact@novasoft.mu</a>. Si vous nous écrivez, les informations
        transmises (votre adresse e-mail et le contenu de votre message) sont utilisées uniquement pour vous
        répondre et assurer le suivi de votre demande. Elles ne sont ni revendues, ni transmises à des tiers,
        ni utilisées à des fins de prospection sans votre accord.
      </p>

      <h2>Données techniques d&apos;hébergement</h2>
      <p>
        Comme pour tout site web, notre hébergeur (Vercel Inc.) peut générer des journaux techniques
        (adresse IP, horodatage des requêtes) nécessaires au fonctionnement, à la sécurité et à la
        prévention des abus. Ces journaux sont gérés par l&apos;hébergeur conformément à sa propre politique
        de confidentialité, consultable sur{' '}
        <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
          vercel.com/legal/privacy-policy
        </a>.
      </p>

      <h2>Vos droits</h2>
      <p>
        Pour toute question relative à vos données (accès, rectification, suppression d&apos;un échange
        e-mail), écrivez-nous à <a href="mailto:contact@novasoft.mu">contact@novasoft.mu</a>. Nous répondons
        sous 48&nbsp;h ouvrées.
      </p>

      <h2>Évolution de cette politique</h2>
      <p>
        Si le site venait à intégrer un formulaire, un outil d&apos;analyse d&apos;audience ou tout autre
        traitement de données, cette page serait mise à jour en conséquence avant l&apos;activation de ces
        fonctionnalités.
      </p>
    </LegalShell>
  );
}
