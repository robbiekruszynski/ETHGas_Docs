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
            'api/authentication/index',
            'api/user/index',
            'api/trading/whole-block/index',
          ],
        },
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
      ],
    },
    {
      type: 'category',
      label: 'Resources',
      items: [
        'community',
        'changelog/index',
        {
          type: 'category',
          label: 'Reference',
          items: [
            'reference/error-codes',
            'reference/lookup-tables',
          ],
        },
      ],
    },
  ],
};

export default sidebars;
