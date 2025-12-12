import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: 'Paramètres du site',
  admin: {
    group: 'Configuration',
  },
  fields: [
    {
      name: 'seo',
      type: 'group',
      label: 'SEO',
      fields: [
        {
          name: 'siteTitle',
          type: 'text',
          label: 'Titre du site',
          defaultValue: 'Clubs en Action - FFCAM',
        },
        {
          name: 'siteDescription',
          type: 'textarea',
          label: 'Description du site',
        },
      ],
    },
    {
      name: 'contact',
      type: 'group',
      label: 'Contact',
      fields: [
        {
          name: 'email',
          type: 'email',
          label: 'Email de contact',
        },
      ],
    },
  ],
}
