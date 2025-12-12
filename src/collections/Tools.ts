import type { CollectionConfig } from 'payload'

export const Tools: CollectionConfig = {
  slug: 'tools',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'type', 'price'],
  },
  labels: {
    singular: 'Outil',
    plural: 'Outils',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Nom',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
      required: true,
    },
    {
      name: 'type',
      type: 'select',
      label: 'Type',
      options: [
        { label: 'Propriétaire', value: 'Propriétaire' },
        { label: 'Open Source', value: 'Open Source' },
      ],
      required: true,
    },
    {
      name: 'origin',
      type: 'text',
      label: 'Origine',
      required: true,
      admin: {
        placeholder: 'Ex: USA, France, Allemagne...',
      },
    },
    {
      name: 'dataLocation',
      type: 'text',
      label: 'Localisation des données',
      required: true,
    },
    {
      name: 'price',
      type: 'text',
      label: 'Prix',
      required: true,
      admin: {
        placeholder: 'Ex: Gratuit, 5€/mois, À partir de 10€...',
      },
    },
    {
      name: 'targetClub',
      type: 'text',
      label: 'Club cible',
      required: true,
      admin: {
        placeholder: 'Ex: Petits clubs, Tous clubs...',
      },
    },
    {
      name: 'usedBy',
      type: 'text',
      label: 'Utilisé par',
      admin: {
        placeholder: 'Ex: CAF Chambéry, CAF Lyon...',
      },
    },
    {
      name: 'link',
      type: 'text',
      label: 'Lien',
      required: true,
      admin: {
        placeholder: 'https://...',
      },
    },
  ],
}
