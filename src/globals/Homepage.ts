import type { GlobalConfig } from 'payload'

export const Homepage: GlobalConfig = {
  slug: 'homepage',
  label: 'Page d\'accueil',
  admin: {
    group: 'Contenu',
  },
  fields: [
    {
      name: 'hero',
      type: 'group',
      label: 'Section Hero',
      fields: [
        {
          name: 'headline',
          type: 'text',
          label: 'Titre principal',
          required: true,
          defaultValue: 'Ensemble, innovons pour nos clubs',
        },
        {
          name: 'subtitle',
          type: 'textarea',
          label: 'Sous-titre',
          required: true,
        },
      ],
    },
    {
      name: 'vision',
      type: 'group',
      label: 'Section Vision',
      fields: [
        {
          name: 'cards',
          type: 'array',
          label: 'Cartes',
          maxRows: 3,
          fields: [
            {
              name: 'title',
              type: 'text',
              label: 'Titre',
              required: true,
            },
            {
              name: 'description',
              type: 'textarea',
              label: 'Description',
              required: true,
            },
          ],
        },
      ],
    },
    {
      name: 'webinars',
      type: 'group',
      label: 'Section Webinaires',
      fields: [
        {
          name: 'upcomingThemes',
          type: 'array',
          label: 'Thèmes à venir',
          fields: [
            {
              name: 'theme',
              type: 'text',
              label: 'Thème',
              required: true,
            },
          ],
        },
      ],
    },
  ],
}
