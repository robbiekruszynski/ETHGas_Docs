import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Overview',
      items: [
        'getting-started/welcome',
        'getting-started/environments',
        'getting-started/connecting',
      ],
    },
    {
      type: 'category',
      label: 'For Developers',
      items: [
        'developers/overview',
        'api/overview',
        'websocket/overview',
        {
          type: 'category',
          label: 'API Reference',
          items: [
            {
              type: 'category',
              label: 'Authentication',
              items: [
                'api/authentication/login',
                'api/authentication/logout',
                'api/authentication/refresh',
                'api/authentication/verify',
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
        'reference/lookup-tables/markets',
        'reference/lookup-tables/orders',
        'reference/lookup-tables/response-codes',
        'reference/error-codes/general',
      ],
    },
    {
      type: 'category',
      label: 'For Validators',
      items: [
        'validators/overview',
        'validators/setup',
        'validators/registration',
        'validators/deposits',
      ],
    },
    {
      type: 'category',
      label: 'For Builders',
      items: [
        'api/builder/overview',
        'api/builder/setup',
        'api/builder/registration',
        'api/builder/building',
      ],
    },
    {
      type: 'category',
      label: 'Resources',
      items: [
        'community',
        'changelog/index',
      ],
    },
  ],
};

export default sidebars;
