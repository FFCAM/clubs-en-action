import type { CollectionConfig } from 'payload'

export const Partnerships: CollectionConfig = {
  slug: 'partnerships',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'category'],
  },
  labels: {
    singular: 'Partenariat',
    plural: 'Partenariats',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Nom',
      required: true,
    },
    {
      name: 'url',
      type: 'text',
      label: 'URL',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
      required: true,
    },
    {
      name: 'category',
      type: 'select',
      label: 'Catégorie',
      options: [
        { label: 'Associations environnementales', value: 'environmental' },
        { label: 'Espaces protégés', value: 'protected-areas' },
        { label: 'Institutions', value: 'institutions' },
      ],
      required: true,
    },
  ],
}
