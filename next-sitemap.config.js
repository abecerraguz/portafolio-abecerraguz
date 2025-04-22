/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://www.abecerraguz.com',
    generateRobotsTxt: true, // genera robots.txt
    sitemapSize: 7000,
    exclude: ['/404'], // excluye rutas que no quieres indexar
  }
  