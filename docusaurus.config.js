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
          href: 'https://github.com/factly/dega',
          position: 'right',
        },
      ],
    },
    footer: {
      links: [
        {
          title: 'About',
          items: [
            {
              label: 'Factly Media & Research',
              to: 'https://factly.in',
              target: '_blank',
            },
            {
              label: 'About Us',
              to: 'https://factly.in/about',
              target: '_blank',
            },
            {
              label: 'Contact',
              href: 'mailto:admin@factly.in',
            },
            {
              label: 'Privacy Policy',
              to: 'docs/privacy-policy',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Github',
              to: 'https://github.com/factly',
              target: '_blank',
            },
            {
              label: 'Facebook',
              to: 'https://facebook.com/factlyindia',
              target: '_blank',
            },
            {
              label: 'Twitter',
              to: 'https://twitter.com/factlyindia',
              target: '_blank',
            },
            {
              label: 'Instagram',
              to: 'https://www.instagram.com/factlyindia',
              target: '_blank',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Slack',
              to: 'https://slack.factly.org/',
              target: '_blank',
            },
            {
              label: 'Dega',
              href: 'https://github.com/factly/dega',
              target: '_blank',
            },
            {
              label: 'Dega Server',
              href: 'https://github.com/factly/dega-server',
              target: '_blank',
            },
            {
              label: 'Dega Studio',
              href: 'https://github.com/factly/dega-studio',
              target: '_blank',
            },
            // {
            //   label: 'Dega Themes',
            //   href: 'https://github.com/factly/dega-themes',
            //   target: '_blank',
            // },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'Guides',
              to: 'docs/what-is-dega',
            },
            {
              label: 'FAQ',
              to: 'docs/faq',
            },
            {
              label: 'API',
              to: 'docs/api/intro',
            },
            // {
            //   label: 'Blog',
            //   to: 'docs/blogs',
            // },
          ],
        },
      ],
      logo: {
        alt: 'Dega',
        src: 'img/dega.svg',
      },
      copyright: `Copyright © ${new Date().getFullYear()} Factly Media & Research.`,
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