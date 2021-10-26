const { configureSitemap } = require('@sergeymyssak/nextjs-sitemap');
const dotenv = require('dotenv');

dotenv.config();

const Sitemap = configureSitemap({
	domains: [{ domain: process.env.HOST, defaultLocale: 'en', http: true }],
	exclude: ['/admin/*'],
	excludeIndex: true,
	trailingSlash: true,
	targetDirectory: __dirname + '/public',
	pagesDirectory: __dirname + '/pages',
});

Sitemap.generateSitemap();
