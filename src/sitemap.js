const sitemap = require('sitemap');
    const hostname = 'http://localhost:3000';

    const urls = [
      { url: '/', changefreq: 'daily', priority: 1 },
      { url: '/thirukkural', changefreq: 'daily', priority: 0.8 },
      { url: '/thirukkural/sections', changefreq: 'daily', priority: 0.8 },
      { url: '/thirukkural/sections/:chgrpid', changefreq: 'daily', priority: 0.8 },
      { url: '/thirukkural/sections/:chgrpid/:chid', changefreq: 'daily', priority: 0.8 },
      { url: '/thirukkural/sections/:chgrpid/:chid/:kuralid', changefreq: 'daily', priority: 0.8 },
      // Add additional pages here
    ];

    const sitemapInstance = sitemap.createSitemap({
      hostname,
      urls,
    });