/** Offre web approuvée par Ylliano, suite NovaSoft 1.1.4. Les maîtres mail/PDF restent inchangés. */
export const OFFER = {
  creation: 2490,
  essential: 129,
  google: 299,
  supportMinutes: 30,
  googleHours: 2,
  chatgptBonus: 250,
  resellerBonus: 250,
  acceptanceDays: 7,
  path: '/sites-internet-maintenance/',
} as const;
export const OFFER_OPTIONS = [
  { value: 'ecommerce', label: 'Création / refonte e-commerce' },
  { value: 'essentielle', label: 'Maintenance essentielle' },
  { value: 'google', label: 'Maintenance + référencement Google' },
  { value: 'autre', label: 'Autre projet / besoin de conseils' },
] as const;
export type OfferChoice = typeof OFFER_OPTIONS[number]['value'];
export const isOfferChoice = (value: unknown): value is OfferChoice => OFFER_OPTIONS.some((offer) => offer.value === value);
export const euros = (value: number) => new Intl.NumberFormat('fr-FR', { maximumFractionDigits: 0 }).format(value) + ' €';
export const SCOPE_CLAUSE = 'Le prix couvre uniquement les prestations expressément décrites. Toute demande supplémentaire ou modification du périmètre fera l’objet d’un devis complémentaire accepté par écrit avant réalisation.';
export const CREATION_BLOCKS = [
  { title: 'Votre image', icon: 'palette', text: 'Proposition de modernisation de votre logo, de vos couleurs et de vos typographies, adaptée à votre activité et soumise à votre validation.' },
  { title: 'Votre boutique', icon: 'shop', text: 'Accueil, catalogue et fiches produits sur ordinateur et mobile. Reprise du catalogue validé, selon le périmètre et la faisabilité convenus.' },
  { title: 'La vente en ligne', icon: 'cart', text: 'Panier, paiement, livraison et gestion des produits et commandes, dans le périmètre défini au devis.' },
  { title: 'La mise en ligne', icon: 'launch', text: 'Préparation du référencement Google, redirections utiles et tests du parcours d’achat.' },
] as const;
export const MAINTENANCE_ROWS = [
  ['Suivi du fonctionnement, de la sécurité et des sauvegardes', 'Inclus', 'Inclus'],
  ['Assistance et petites corrections', `${OFFER.supportMinutes} minutes / mois`, `${OFFER.supportMinutes} minutes / mois`],
  ['Optimisations pour le référencement Google et améliorations commerciales supplémentaires', 'Non incluses', `${OFFER.googleHours} heures / mois`],
  ['Compte rendu sur le référencement Google', 'Non inclus', 'Inclus'],
] as const;
export const FAQ = [
  ['Que comprend le prix de création ?', 'Les quatre blocs présentés dans l’offre : votre image, votre boutique, la vente en ligne et la mise en ligne. Le catalogue, les accès, la faisabilité et le périmètre sont validés au devis. Il ne s’agit pas d’une migration illimitée. Toute prestation supplémentaire nécessite un devis complémentaire accepté par écrit.'],
  ['La maintenance est-elle obligatoire ?', 'Non. Le paiement de création est unique et la maintenance est facultative, séparée de la création. Sa durée, son renouvellement et sa résiliation sont précisés dans un contrat distinct.'],
  ['Quelle différence entre les deux formules ?', `La formule à ${euros(OFFER.google)} HT/mois inclut la maintenance essentielle, les ${OFFER.supportMinutes} minutes de petites corrections, ${OFFER.googleHours} heures supplémentaires d’optimisations pour le référencement Google et les améliorations commerciales, ainsi qu’un compte rendu. Ce n’est pas ${euros(OFFER.essential)} + ${euros(OFFER.google)}. Aucun classement sur Google n’est garanti.`],
  ['Qui peut bénéficier des bonus partenaires ?', `Les partenaires RoG Hunting éligibles, sous réserve des accès nécessaires et d’une faisabilité confirmée. Le devis doit être accepté par écrit dans les ${OFFER.acceptanceDays} jours calendaires suivant son envoi. Les deux services offerts représentent ${euros(OFFER.chatgptBonus + OFFER.resellerBonus)}, pas une remise sur les ${euros(OFFER.creation)} de création.`],
  ['Quels frais restent séparés ?', 'Hébergement, nom de domaine, licences, abonnements logiciels, commissions de paiement et autres services tiers, sauf inclusion écrite. L’historique des commandes et comptes clients, la rédaction de masse et les intégrations spécifiques sont hors forfait, sauf la connexion RoG Hunting offerte lorsqu’elle est applicable.'],
  ['Comment sont définis le paiement et le calendrier ?', 'Les modalités proposées sont de 50 % à la commande et 50 % à la livraison, à préciser au devis. Le calendrier dépend du périmètre, des accès et des éléments fournis. Les taxes applicables sont précisées au devis. Aucun délai de livraison ferme n’est annoncé ici.'],
  ['Pouvez-vous assurer la maintenance de mon site actuel ?', 'La compatibilité du site, les accès, l’infrastructure et le périmètre doivent être vérifiés avant toute proposition. Les nouvelles fonctionnalités ou interventions hors forfait nécessitent un devis.'],
] as const;
