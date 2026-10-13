import type { MetadataRoute } from 'next';
import { OFFER } from '@/lib/site-offers';
export const dynamic = 'force-static';
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://novasoft.mu/', lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: 'https://novasoft.mu' + OFFER.path, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://novasoft.mu/mentions-legales/', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.2 },
    { url: 'https://novasoft.mu/confidentialite/', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.2 },
  ];
}
