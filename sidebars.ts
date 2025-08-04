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
        {
          type: 'category',
          label: 'User Management',
          items: [
            'api/user/update',
            'api/user/payout-address',
            'api/user/collateral-per-slot',
            'api/user/info',
          ],
        },
        {
          type: 'category',
          label: 'Account Management',
          items: [
            'api/account/list',
            'api/account/details',
            'api/account/transactions',
            'api/account/transfer',
          ],
        },
        {
          type: 'category',
          label: 'Funding',
          items: [
            'api/funding/contract-address',
            'api/funding/deposits',
            'api/funding/withdraw',
            'api/funding/withdraw-history',
            'api/funding/withdraw-limits',
            'api/funding/withdraw-status',
          ],
        },
        {
          type: 'category',
          label: 'Market Data',
          items: [
            'api/market-data/network',
            'api/market-data/tokens',
            'api/market-data/fees',
            'api/market-data/whole-block-markets',
            'api/market-data/inclusion-preconf-markets',
            'api/market-data/orders',
            'api/market-data/positions',
            'api/market-data/trades',
            'api/market-data/top-sales',
          ],
        },
        {
          type: 'category',
          label: 'Trading',
          items: [
            {
              type: 'category',
              label: 'Whole Block Trading',
              items: [
                'api/trading/whole-block/place-order',
                'api/trading/whole-block/cancel-order',
                'api/trading/whole-block/cancel-batch-orders',
                'api/trading/whole-block/cancel-all-orders',
                'api/trading/whole-block/get-orders',
                'api/trading/whole-block/get-positions',
                'api/trading/whole-block/get-transactions',
              ],
            },
            {
              type: 'category',
              label: 'Inclusion Preconf Trading',
              items: [
                'api/trading/inclusion-preconf/place-order',
                'api/trading/inclusion-preconf/cancel-order',
                'api/trading/inclusion-preconf/cancel-batch-orders',
                'api/trading/inclusion-preconf/cancel-all-orders',
                'api/trading/inclusion-preconf/get-orders',
                'api/trading/inclusion-preconf/get-positions',
                'api/trading/inclusion-preconf/get-transactions',
                'api/trading/inclusion-preconf/update-market',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Bundle Submission',
          items: [
            'api/bundle/submit',
          ],
        },
        {
          type: 'category',
          label: 'Slot Bundles',
          items: [
            'api/slot-bundles/list',
            'api/slot-bundles/account-bundles',
            'api/slot-bundles/force-empty-block',
            'api/slot-bundles/transaction-hash',
          ],
        },
        {
          type: 'category',
          label: 'Builder Management',
          items: [
            'api/builder/register',
            'api/builder/signing-message',
            'api/builder/deregister',
            'api/builder/list',
            'api/builder/user-builder',
            'api/builder/delegate',
            'api/builder/user-delegate',
            'api/builder/slot-info',
            'api/builder/delegation',
          ],
        },
        {
          type: 'category',
          label: 'Pricer',
          items: [
            'api/pricer/delegate',
            'api/pricer/user-pricer',
            'api/pricer/account-tokens',
            'api/pricer/inclusion-preconf-orders',
            'api/pricer/inclusion-preconf-positions',
            'api/pricer/wholeblock-orders',
            'api/pricer/wholeblock-positions',
            'api/pricer/active-markets',
          ],
        },
        {
          type: 'category',
          label: 'Validator Operations',
          items: [
            'api/validator/register',
            'api/validator/verify',
            'api/validator/settings',
            'api/validator/deregister',
            'api/validator/fees',
            'api/validator/onchain-payout',
            'api/validator/user-validators',
            'api/validator/list',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'WebSocket API',
      items: [
        'websocket/overview',
        {
          type: 'category',
          label: 'Commands',
          items: [
            'websocket/commands/subscribe',
            'websocket/commands/unsubscribe',
            'websocket/commands/query',
            'websocket/commands/login',
          ],
        },
        {
          type: 'category',
          label: 'Channels',
          items: [
            {
              type: 'category',
              label: 'Public Channels',
              items: [
                'websocket/public/preconf-market-update',
                'websocket/public/candlestick-update',
                'websocket/public/recent-trades-update',
                'websocket/public/order-book-update',
                'websocket/public/ticker-update',
                'websocket/public/inclusion-preconf-top-sales',
                'websocket/public/block-builder-update',
              ],
            },
            {
              type: 'category',
              label: 'Private Channels',
              items: [
                'websocket/private/account-order-update',
                'websocket/private/account-transaction-update',
                'websocket/private/account-position-update',
                'websocket/private/preconf-bundle-update',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Queries',
          items: [
            {
              type: 'category',
              label: 'Public Queries',
              items: [
                'websocket/queries/public/preconf-markets',
                'websocket/queries/public/order-books',
                'websocket/queries/public/current-slot',
                'websocket/queries/public/candlesticks',
                'websocket/queries/public/recent-trades',
                'websocket/queries/public/inclusion-preconf-top-sales',
                'websocket/queries/public/current-block-builder',
              ],
            },
            {
              type: 'category',
              label: 'Private Queries',
              items: [
                'websocket/queries/private/open-orders',
                'websocket/queries/private/account-positions',
                'websocket/queries/private/preconf-bundles',
              ],
            },
          ],
        },
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
            'reference/lookup-tables/token-ids',
            'reference/lookup-tables/transaction-types',
            'reference/lookup-tables/market-types',
            'reference/lookup-tables/action-types',
            'reference/lookup-tables/builder-registration-result',
          ],
        },
        {
          type: 'category',
          label: 'Data Types',
          items: [
            'reference/data-types/user',
            'reference/data-types/account',
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
