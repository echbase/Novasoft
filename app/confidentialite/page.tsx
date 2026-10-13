import type { Metadata } from 'next';
import LegalShell from '@/components/LegalShell';

export const metadata: Metadata = {
  title: 'Politique de confidentialité — NovaSoft',
  description: 'Données et contact par e-mail sur le site NovaSoft.',
  alternates: { canonical: '/confidentialite/' },
};

export default function Confidentialite() {
  return <LegalShell title="Confidentialité & données" updated="13 octobre 2026">
    <h2>Prise de contact</h2>
    <p>Le site propose des liens e-mail et un outil pour <strong>préparer un e-mail dans votre messagerie</strong>.
    Les champs saisis ne sont pas transmis à NovaSoft par un formulaire web : votre application e-mail
    s&apos;ouvre et vous décidez si vous envoyez le message.</p>
    <h2>Utilisation des e-mails reçus</h2>
    <p>Si vous nous écrivez à <a href="mailto:support@novasoft.mu">support@novasoft.mu</a>,
    votre adresse et le contenu envoyé sont utilisés pour répondre et suivre votre demande.
    Ils ne sont pas revendus à des annonceurs.</p>
    <h2>Hébergement et données techniques</h2>
    <p>L&apos;hébergeur Vercel peut conserver des journaux techniques nécessaires au fonctionnement et à la sécurité.
    Consultez sa <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">politique de confidentialité</a>.</p>
    <h2>Vos droits</h2>
    <p>Pour toute question sur vos informations, pour demander un accès ou une rectification, écrivez-nous à
    <a href="mailto:support@novasoft.mu"> support@novasoft.mu</a>.</p>
    <h2>Évolution</h2>
    <p>Tout nouvel outil d&apos;analyse, suivi ou formulaire serveur nécessitera une mise à jour de la présente notice avant activation.</p>
  </LegalShell>;
}
