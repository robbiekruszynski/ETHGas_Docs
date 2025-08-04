import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/welcome',
        'getting-started/environments',
        'getting-started/connecting',
      ],
    },
    {
      type: 'category',
      label: 'REST API',
      items: [
        'api/overview',
        {
          type: 'category',
          label: 'Authentication',
          items: [
            'api/authentication/login',
            'api/authentication/verify',
            'api/authentication/refresh',
            'api/authentication/logout',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'WebSocket API',
      items: [
        'websocket/overview',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      items: [
        {
          type: 'category',
          label: 'Error Codes',
          items: [
            'reference/error-codes/general',
          ],
        },
        {
          type: 'category',
          label: 'Lookup Tables',
          items: [
            'reference/lookup-tables/markets',
            'reference/lookup-tables/orders',
            'reference/lookup-tables/response-codes',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Changelog',
      items: [
        'changelog/index',
      ],
    },
  ],
};

export default sidebars;
