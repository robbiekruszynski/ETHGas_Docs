import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Overview',
      items: [
        'getting-started/welcome',
        'getting-started/connecting',
      ],
    },
    {
      type: 'category',
      label: 'Traders',
      items: [
        'developers/overview',
        'api/overview',
        'websocket/overview',
        {
          type: 'category',
          label: 'API Reference',
          items: [
            'api/authentication/index',
            'api/user/index',
            'api/funding/index',
            'api/public/index',
            'api/bundles/index',
            'api/pricer/index',
            'api/validator/index',
            'api/trading/whole-block/index',
            'api/trading/inclusion-preconf/index',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Validators',
      items: [
        'validators/overview',
        'validators/setup',
        'validators/registration',
        'validators/deposits',
      ],
    },
    {
      type: 'category',
      label: 'Builders',
      items: [
        {
          type: 'doc',
          id: 'api/builder/registration',
          label: 'Setup Guide',
        },
        {
          type: 'doc',
          id: 'api/builder/builders-sequencers',
          label: 'Builders & Sequencers',
        },
      ],
    },
    {
      type: 'category',
      label: 'Resources',
      items: [
        'community',
        {
          type: 'category',
          label: 'Reference',
          items: [
            'reference/data-types/index',
            'reference/data-types/user',
            'reference/data-types/account',
            'reference/data-types/market',
            'reference/data-types/order',
            'reference/data-types/token',
            'reference/lookup-tables',
            'reference/error-codes',
          ],
        },
        'changelog/index',
      ],
    },
  ],
};

export default sidebars;
