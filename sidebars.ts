import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Introduction',
      items: [
        'intro',
        'getting-started/welcome',
        'getting-started/environments',
        'getting-started/connecting',
      ],
    },
    {
      type: 'category',
      label: 'Core Concepts',
      items: [
        'api/overview',
        // Add concept pages here when created
        // 'concepts/block-building',
        // 'concepts/mev-protection',
        // 'concepts/inclusion-preconf',
        // 'concepts/whole-block-trading',
      ],
    },
    {
      type: 'category',
      label: 'API Reference',
      items: [
        {
          type: 'category',
          label: 'REST API',
          items: [
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
            {
              type: 'category',
              label: 'User Management',
              items: [
                'api/user/update',
                'api/user/payout-address',
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
      ],
    },
    {
      type: 'category',
      label: 'Resources',
      items: [
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
        'changelog/index',
      ],
    },
  ],
};

export default sidebars;
