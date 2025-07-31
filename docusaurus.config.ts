import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'ETHGas Documentation',
  tagline: 'Complete API documentation for ETHGas platform',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',

  organizationName: 'ethgas',
  projectName: 'ethgas-docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/ethgas/ethgas-docs/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/ethgas/ethgas-docs/tree/main/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'ETHGas Docs',
      logo: {
        alt: 'ETHGas Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://developers.ethgas.com',
          label: 'Original Docs',
          position: 'right',
        },
        {
          href: 'https://github.com/ethgas',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/intro',
            },
            {
              label: 'API Reference',
              to: '/docs/category/api-reference',
            },
            {
              label: 'WebSocket API',
              to: '/docs/category/websocket-api',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'Original ETHGas Docs',
              href: 'https://developers.ethgas.com',
            },
            {
              label: 'ETHGas Homepage',
              href: 'https://ethgas.com',
            },
            {
              label: 'TestNet App',
              href: 'https://testnet.ethgas.com',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/ethgas',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/ethgas',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ETHGas. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
