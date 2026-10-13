/** Visuels de référence fournis par NovaSoft et RoG Hunting.
 * CDN provisoire pour la prévisualisation. À migrer vers l'hébergement NovaSoft avant mise en production.
 */
export const VISUALS = {
  agents: 'https://d2ol7oe51mr4n9.cloudfront.net/user_3GLFFmRgVIZxWIRAHmNRA9fwAKY/8a4273e5-5467-45ee-8c9b-66ba1c355276.jpg',
  jarvis: 'https://d2ol7oe51mr4n9.cloudfront.net/user_3GLFFmRgVIZxWIRAHmNRA9fwAKY/1b3dace0-59fe-458a-b22c-18b41ca93d8e.jpg',
  reseller: 'https://d2ol7oe51mr4n9.cloudfront.net/user_3GLFFmRgVIZxWIRAHmNRA9fwAKY/8d65ecdf-ce6b-4ef6-833a-6efa662b8012.jpg',
  shopCover: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1150&q=78',
} as const;

export const CONTACT_MAIL = 'support@novasoft.mu';
export function emailLink(subject = 'Mon projet NovaSoft', body?: string): string {
  const params = new URLSearchParams({ subject, ...(body ? { body } : {}) });
  return `mailto:${CONTACT_MAIL}?${params.toString()}`;
}
