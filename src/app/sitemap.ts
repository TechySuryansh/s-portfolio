import type { MetadataRoute } from 'next';
import { siteUrl } from '@/lib/site';
export const dynamic = 'force-static';
export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteUrl) return [];
  return [{url: siteUrl + '/', priority:1}, {url:siteUrl + '/projects/churnguard/',priority:0.8}];
}
