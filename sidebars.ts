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
      label: 'Developers',
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
            'api/markets/whole-block/index',
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
        {
          type: 'category',
          label: 'Setup',
          items: [
            'validators/setup',
          ],
        },
        {
          type: 'category',
          label: 'Registration',
          items: [
            'validators/registration',
          ],
        },
        'validators/deposits',
        'validators/monitoring',
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
        'reference/lookup-tables',
        'reference/error-codes',
        'changelog/index',
      ],
    },
  ],
};

export default sidebars;
