import type { Metadata } from 'next';
import LegalShell from '@/components/LegalShell';
import { contactConfigured } from '@/lib/contact-config';

export const metadata: Metadata = {
  title: 'Politique de confidentialité — NovaSoft',
  description: 'Politique de confidentialité et données du site NovaSoft — Digital Xperience.',
};

export default function Confidentialite() {
  const formEnabled = contactConfigured();
  return (
    <LegalShell title="Confidentialité & données" updated="13 octobre 2026">
      <h2>En résumé</h2>
      <p>
        Le site NovaSoft présente nos services et peut proposer un formulaire de demande de projet.
        Nous n&apos;utilisons pas les informations transmises pour les revendre ni pour créer un profil publicitaire.
      </p>

      <h2>Formulaire de projet</h2>
      {formEnabled ? (
        <p>
          Le formulaire peut recueillir votre nom, votre entreprise, votre e-mail professionnel, l&apos;adresse
          éventuelle de votre site, un téléphone facultatif, votre besoin et votre message. Ces informations sont
          utilisées pour traiter votre demande et préparer notre réponse. L&apos;envoi est protégé par un contrôle
          anti-abus et transmis à la boîte NovaSoft configurée côté serveur.
        </p>
      ) : (
        <p>
          Le formulaire affiché sur certaines pages est actuellement <strong>désactivé</strong> : aucune donnée
          saisie n&apos;est transmise à NovaSoft. Vous pouvez nous contacter directement à{' '}
          <a href="mailto:support@novasoft.mu">support@novasoft.mu</a>.
        </p>
      )}

      <h2>Contact par e-mail</h2>
      <p>
        Si vous nous écrivez, votre adresse e-mail et le contenu de votre message sont utilisés pour répondre
        et assurer le suivi de la demande. Ils ne sont pas présentés comme destinés à une prospection automatique
        sans base appropriée.
      </p>

      <h2>Données techniques d&apos;hébergement</h2>
      <p>
        Comme pour tout site web, notre hébergeur Vercel Inc. peut générer des journaux techniques nécessaires
        au fonctionnement, à la sécurité et à la prévention des abus. Sa politique est disponible sur{' '}
        <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
          vercel.com/legal/privacy-policy
        </a>.
      </p>

      <h2>Vos droits</h2>
      <p>
        Pour toute question relative à vos données, écrivez-nous à{' '}
        <a href="mailto:support@novasoft.mu">support@novasoft.mu</a>.
      </p>

      <h2>Évolution</h2>
      <p>
        Toute activation d&apos;un nouveau traitement de données, outil d&apos;analyse ou fonctionnalité de suivi
        devra être reflétée dans cette page avant sa mise en production.
      </p>
    </LegalShell>
  );
}
