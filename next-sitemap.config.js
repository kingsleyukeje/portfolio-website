

// 

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://kingsleyukeje.com",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ["/fonts"],
      },
    ]
  },
  additionalPaths: async (config) => {
    return [
      // await config.transform(config, '/', { changefreq: 'daily', priority: 1.0 }),        
      await config.transform(config, '/', { changefreq: 'daily', priority: 1 }),   
      // Add other pages you want to include
    ];
  },
};