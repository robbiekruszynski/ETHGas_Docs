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
                'api/authentication/index',
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
                'api/user/index',
                'api/user/info',
                'api/user/update',
                'api/user/payout-address',
                'api/user/collateral-per-slot',
              ],
            },
            {
              type: 'category',
              label: 'Trading',
              items: [
                'api/trading/whole-block/index',
                'api/trading/whole-block/place-order',
                'api/trading/whole-block/cancel-order',
                'api/trading/whole-block/get-orders',
                'api/trading/whole-block/get-order',
              ],
            },
            {
              type: 'category',
              label: 'Validator',
              items: [
                'api/validator/fees',
                'api/validator/onchain-payout',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'WebSocket',
          items: [
            'websocket/authentication',
            {
              type: 'category',
              label: 'Public Channels',
              items: [
                'websocket/public/preconf-market-update',
              ],
            },
          ],
        },
        'reference/lookup-tables/markets',
        'reference/lookup-tables/orders',
        'reference/lookup-tables/response-codes',
        'reference/error-codes/general',
        // 'reference/data-types/index', // Hidden from public view
      ],
    },
    {
      type: 'category',
      label: 'For Validators',
      items: [
        'validators/overview',
        {
          type: 'category',
          label: 'Setup',
          items: [
            'validators/setup',
            'validators/setup/standard',
          ],
        },
        {
          type: 'category',
          label: 'Registration',
          items: [
            'validators/registration',
            'validators/registration/standard',
          ],
        },
        'validators/deposits',
        'validators/monitoring',
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
        'api/builder/relay',
        'api/builder/fees',
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
