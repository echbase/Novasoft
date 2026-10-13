/** Visuels de référence fournis par NovaSoft et RoG Hunting.
 * CDN provisoire pour la prévisualisation. À migrer vers l'hébergement NovaSoft avant mise en production.
 */
export const VISUALS = {
  agents: 'https://d2ol7oe51mr4n9.cloudfront.net/user_3GLFFmRgVIZxWIRAHmNRA9fwAKY/a06236b5-32ea-4127-bb92-6098d2b3103f.webp',
  jarvis: 'https://d2ol7oe51mr4n9.cloudfront.net/user_3GLFFmRgVIZxWIRAHmNRA9fwAKY/0adb2849-819a-4c10-ac00-d4bcb4fb7f22.webp',
  reseller: 'https://d2ol7oe51mr4n9.cloudfront.net/user_3GLFFmRgVIZxWIRAHmNRA9fwAKY/335e5c38-0650-4317-bc25-726f02388b4f.webp',
  shopCover: 'https://d2ol7oe51mr4n9.cloudfront.net/user_3GLFFmRgVIZxWIRAHmNRA9fwAKY/b0725315-6131-4534-9f95-09ab3e877560.webp',
} as const;

export const CONTACT_MAIL = 'support@novasoft.mu';
export function emailLink(subject = 'Mon projet NovaSoft', body?: string): string {
  const params = new URLSearchParams({ subject, ...(body ? { body } : {}) });
  return `mailto:${CONTACT_MAIL}?${params.toString()}`;
}
