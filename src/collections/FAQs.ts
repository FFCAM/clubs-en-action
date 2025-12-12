import type { CollectionConfig } from 'payload'

export const FAQs: CollectionConfig = {
  slug: 'faqs',
  admin: {
    useAsTitle: 'question',
    defaultColumns: ['question', 'order'],
  },
  labels: {
    singular: 'Question FAQ',
    plural: 'FAQ',
  },
  fields: [
    {
      name: 'question',
      type: 'text',
      label: 'Question',
      required: true,
    },
    {
      name: 'answer',
      type: 'textarea',
      label: 'Réponse',
      required: true,
    },
    {
      name: 'order',
      type: 'number',
      label: 'Ordre d\'affichage',
      required: true,
      defaultValue: 0,
      admin: {
        description: 'Les questions sont triées par ordre croissant',
      },
    },
  ],
}
