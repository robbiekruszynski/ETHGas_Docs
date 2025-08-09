import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'ETHGas Documentation',
  tagline: 'Complete API documentation for ETHGas platform - Ethereum gas trading and MEV opportunities',
  favicon: 'img/EG.svg',

  future: {
    v4: true,
  },

  url: 'https://docs.ethgas.com',
  baseUrl: '/',

  organizationName: 'ethgas',
  projectName: 'ethgas-docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // Add Google Fonts for better typography
  scripts: [
    {
      src: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap',
      type: 'text/css',
    },
    {
      src: '/js/sidebar-tabs.js',
      type: 'text/javascript',
    },
  ],

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
        src: 'img/ETHGas_logo.png',
        srcDark: 'img/ETHGas_logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Overview',
        },
        {
          to: '/docs/developers/overview',
          label: 'Developers',
          position: 'left',
        },
        {
          to: '/docs/api/builder/overview',
          label: 'Builders',
          position: 'left',
        },
        {
          to: '/docs/validators/overview',
          label: 'Validators',
          position: 'left',
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
              label: 'Overview',
              to: '/docs/getting-started/welcome',
            },
            {
              label: 'API Reference',
              to: '/docs/api/overview',
            },
            {
              label: 'WebSocket API',
              to: '/docs/websocket/overview',
            },
            {
              label: 'Error Codes',
              to: '/docs/reference/error-codes/general',
            },
          ],
        },
        {
          title: 'Platform',
          items: [
            {
              label: 'TestNet App',
              href: 'https://testnet.ethgas.com',
            },
            {
              label: 'ETHGas Homepage',
              href: 'https://ethgas.com',
            },
            {
              label: 'Original Docs',
              href: 'https://developers.ethgas.com',
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
            {
              label: 'Twitter',
              href: 'https://twitter.com/ethgas',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ETHGas. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'json', 'typescript'],
    },
    // Add color mode toggle
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
