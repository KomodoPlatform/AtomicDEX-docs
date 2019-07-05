require('dotenv').config()
var redirectAliases = require("./public/_redirects.js");
var sidebarImport = require("./sidebar.js");
// var algoliaSecret = require("./algolia-secret.js")
module.exports = {
  plugins: [
    [
      "redirect",
      {
        alias: redirectAliases
      }
    ],
    [
      "@vuepress/google-analytics",
      {
        ga: "UA-84859153-3"
      }
    ]
  ],
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "mark_only.svg"
      }
    ]
  ],
  title: "AtomicDEX Documentation",
  base: "/",
  description: "Documentation for developers building on AtomicDEX",
  themeConfig: {
    repo: "siddhartha-crypto/atomicdex-docs-clone-of-dev-docs",
    repoLabel: "Github",
    docsDir: "docs",
    editLinks: true,
    editLinkText: "Suggest an improvement for this page",
    lastUpdated: "Last Updated",
    // sidebarDepth: 3,
    logo: "/logo_light.svg",
    // algolia: {
      // apiKey: algoliaSecret.key,
      // indexName: 'komodoplatform'
    // },
    nav: [
      {
        text: "AtomicDEX.io",
        link: "https://atomicdex.io"
      }
    ],
    sidebar: {
      "/basic-docs/": sidebarImport,

      // Repeat everything from above
      "/": sidebarImport
    }
  }
};
