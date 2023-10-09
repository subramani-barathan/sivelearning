const sitemap = require('sitemap');
    const hostname = 'http://localhost:3000';

    const urls = [
      { url: '/', changefreq: 'daily', priority: 1 },
      { url: '/about', changefreq: 'monthly', priority: 0.8 },
      { url: '/contact', changefreq: 'monthly', priority: 0.8 },
      // Add additional pages here
    ];

    const sitemapInstance = sitemap.createSitemap({
      hostname,
      urls,
    });