import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://astryss.acethekawaii.work',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: 'https://astryss.acethekawaii.work/release',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: 'https://astryss.acethekawaii.work/entries',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },  
    {
      url: 'https://astryss.acethekawaii.work/unsent',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: 'https://astryss.acethekawaii.work/time-capsule',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: 'https://astryss.acethekawaii.work/faqs',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ]
}