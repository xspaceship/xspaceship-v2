const fs = require('fs');
const { configureSitemap } = require('@sergeymyssak/nextjs-sitemap');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

// generate sitemap
const domain = (process.env.HOST || '').replace(/https?:\/\//g, '');

const Sitemap = configureSitemap({
  domains: [{ domain, defaultLocale: 'en' }],
  exclude: ['/admin/*'],
  excludeIndex: true,
  trailingSlash: true,
  targetDirectory: path.join(__dirname, 'public'),
  pagesDirectory: path.join(__dirname, 'pages'),
});

Sitemap.generateSitemap();

// generate robots.txt
const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${process.env.HOST}/sitemap.xml`;

try {
  fs.writeFileSync('./public/robots.txt', robotsTxt);
} catch (err) {
  console.error(err);
}
