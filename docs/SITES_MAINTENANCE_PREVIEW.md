# Adaptation commerciale — prévisualisation, aucune autorisation de production

Base : b9ed2e2391b0161543719750a2b741e260d73675, branche de production claude/audit-plugins-skills-ka2bn9.
Source d’offre : suite NovaSoft 1.1.4, modèles mail/PDF verrouillés lus et NON modifiés.

## Changements bornés
- Nouvelle page /sites-internet-maintenance/, nav commune et bloc d’accueil.
- Introduction accueil simplifiée ; expertises, méthode, réalisations, IA, shader et animations existants conservés.
- Prix centralisés dans lib/site-offers.ts : 2490 HT, options 129/299 HT par mois, 500 de services partenaires sous conditions.
- Tableau desktop + cartes mobiles, FAQ native, sélection d’offre et formulaire minimal.
- Aperçu HTML anonyme, non contractuel : aucun client nommé, aucune preuve de résultats inventée.
- PNG RoG/NovaSoft récupéré depuis sa source Drive publique et vérifié au prébuild. Pas de recadrage, compression, recomposition ni altération. Le logo NovaSoft existant et sa procédure de reconstruction restent inchangés.
- Aucun maître privé ni PDF nominatif ajouté au site.

## Exception technique justifiée et limitée
L’existant est un export statique Next.js sans formulaire (contact mailto). Un POST côté serveur n’est pas compatible avec output:export. Seul ce verrou est retiré ; Next.js, dépendances, pages pré-rendues, URLs et hébergement restent conservés. Une route POST isolée /api/contact/ est ajoutée. Pas de base, CRM, abonnement ou administration.

## Formulaire : fermé par défaut
Aucun envoi tant que toutes les conditions ne sont pas explicitement configurées et approuvées :
- CONTACT_FORM_ENABLED=true
- CONTACT_PRIVACY_APPROVED=true, uniquement après validation de la notice de collecte.
- CONTACT_FROM : identité NovaSoft et adresse vérifiée dans le domaine novasoft.mu, format NovaSoft <adresse@novasoft.mu>.
- CONTACT_TO : support@novasoft.mu en production ; uniquement doriano.hermes@gmail.com en preview/test.
- RESEND_API_KEY côté serveur uniquement, limitée aux envois nécessaires.
- NEXT_PUBLIC_TURNSTILE_SITE_KEY + TURNSTILE_SECRET_KEY, domaines de test/production autorisés.

Ne pas emprunter les secrets/routages d’un autre projet. Ce circuit est distinct des propositions revendeurs (RoG Hunting <info@roghunting.com>, Resend, Reply-To identique), qui ne sont pas modifiées ni envoyées.
Protections : même origine, JSON seulement, taille bornée, validation serveur, honeypot, Turnstile vérifié côté serveur (hostname/action), délais bornés, idempotence Resend, aucune journalisation du corps/secret. Le formulaire ne stocke pas de donnée applicative et ne crée pas d’auto-réponse prospect.
Une réponse 202 prouve la prise en charge par Resend, PAS la réception en boîte. Un test autorisé doit être vérifié dans la boîte de test avant activation publique. Aucun test envoyé à ce stade.

## Validations avant publication
1. Valider visuel/copie et aperçu anonyme. Pour une maquette client nommée : obtenir l’autorisation de publication. Ne pas transformer ElectroHunt en référence livrée.
2. Prix publics HT ; taxes à préciser au devis. Ne pas généraliser le 0 % ElectroHunt ni fixer 15 %.
3. La politique actuelle déclare « aucun formulaire ». Préparer et faire valider sa mise à jour (finalité, champs, destinataires, prestataires, conservation, droits, anti-abus), puis seulement activer la collecte. Aucune durée ou clause juridique n’est inventée ici.
4. Configurer le canal NovaSoft vérifié et l’anti-abus, puis contrôler la réception d’un test autorisé exclusivement à doriano.hermes@gmail.com.
5. Vérifier les règles Vercel : route POST et fonctions prises en compte, pas de répertoire de sortie forcé à out. Ne pas modifier de domaine ni d’environnement de production pour la preview.
6. Validation explicite de Ylliano avant fusion/déploiement production. Garder le déploiement de base comme retour arrière.

## Recette à exécuter
Build + TypeScript ; accueil/offre/légal/404 ; tailles 390/768/1440 ; absence de débordement horizontal ; menu et Escape ; liens/ancres ; préremplissage des deux maintenances ; FAQ clavier ; prix et conditions ; hash PNG servi ; 503 sans config et absence de fausse confirmation ; 403 origine tierce ; 415 mauvais format ; validation anti-abus et envoi réel uniquement après configuration et autorisation. Relever les résultats réels plutôt que cocher sans preuve.
