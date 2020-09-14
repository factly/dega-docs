/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  title: 'Dega',
  tagline:
    'Open source platform for publishing fact checks',
  url: 'https://degacms.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'Factly',
  projectName: 'Dega',
  themes: ['@docusaurus/theme-search-algolia'],
  plugins: ['my-loaders'], // loader required for .svg
  themeConfig: {
    algolia: {
      apiKey: '6ff191a0ddf30e01046c2cd8d844af57',
      indexName: 'degacms',
      searchParameters: {
        hitsPerPage: 5,
      },
    },
    navbar: {
      logo: {
        alt: 'Dega',
        src: 'img/dega.svg',
        src_theme: {
          light: 'img/dega.svg',
          dark: 'img/dega.svg',
          href: 'https://degacms.com',
        },
      },
      links: [
        {
          label: 'Documentation',
          to: 'docs/what-is-dega',
          position: 'right',
        },
        {label:'API',to:'docs/api/intro',position:'right'},
        {
          label: 'GitHub',
          href: 'https://github.com/factly',
          position: 'right',
        },
      ],
    },
    footer: {
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/at-a-glance',
            },
            {
              label: 'FAQ',
              to: 'docs/faq',
            },
            {
              label: 'DocSearch.js',
              to: 'docs/dropdown',
            },
            {
              label: 'Run your own scraper',
              to: 'docs/run-your-own',
            },
            {
              label: 'Playground',
              to: 'playground',
            },
          ],
        },
        {
          title: 'Factly',
          items: [
            {
              label: 'Issues',
              to: 'https://github.com/algolia/docsearch/issues',
            },
            {
              label: 'Scraper',
              to: 'https://github.com/algolia/docsearch-scraper',
            },
            {
              label: 'Configurations',
              to: 'https://github.com/algolia/docsearch-configs',
            },
            {
              label: 'Privacy',
              to: 'docs/privacy-policy',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Apply',
              to: 'apply',
            },
            {
              label: 'Forum',
              href: 'https://discourse.algolia.com/tags/docsearch',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/tXdr5mP',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'GitHub',
              to: 'https://github.com/algolia/docsearch',
            },
            {
              label: 'Twitter',
              to: 'https://twitter.com/docsearch_',
            },
            {
              label: 'Algolia Blog',
              to: 'https://blog.algolia.com/',
            },
          ],
        },
      ],
      logo: {
        alt: 'Dega',
        src: 'img/dega.svg',
      },
      copyright: `&copy; Factly Media & Research 2020`,
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
