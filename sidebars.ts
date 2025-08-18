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
            'api/trading/whole-block/index',
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
        'changelog/index',
        'reference/error-codes',
      ],
    },
  ],
};

export default sidebars;
