import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://thevuemedia.com';
  const staticPaths = [
    '/',
    '/about',
    '/portfolio',
    '/contact',
    '/sub1',
    '/sub2',
    '/sub3',
    '/sub4',
    '/sub5',
    '/sub/0101','/sub/0102','/sub/0103','/sub/0104','/sub/0105','/sub/0106',
    '/sub/0201','/sub/0202','/sub/0203','/sub/0204','/sub/0205','/sub/0206',
    '/sub/0301','/sub/0302','/sub/0303','/sub/0304','/sub/0305',
    '/sub/0401','/sub/0402','/sub/0403','/sub/0404','/sub/0405','/sub/0406','/sub/0407','/sub/0408','/sub/0409','/sub/0410',
  ];

  const now = new Date();

  return staticPaths.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: path === '/' ? 1 : 0.7,
  }));
}

