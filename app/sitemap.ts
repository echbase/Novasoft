import type { MetadataRoute } from 'next';
import { OFFER } from '@/lib/site-offers';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: 'https://novasoft.mu/', lastModified: now, changeFrequency: 'monthly', priority: 1 },
    { url: 'https://novasoft.mu' + OFFER.path, lastModified: now, changeFrequency: 'monthly', priority: 0.95 },
    { url: 'https://novasoft.mu/ia-automatisation/', lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://novasoft.mu/integrations-api/', lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://novasoft.mu/a-propos/', lastModified: now, changeFrequency: 'yearly', priority: 0.6 },
    { url: 'https://novasoft.mu/mentions-legales/', lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
    { url: 'https://novasoft.mu/confidentialite/', lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
  ];
}
