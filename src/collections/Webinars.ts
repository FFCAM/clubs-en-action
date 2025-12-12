import type { CollectionConfig } from 'payload'

export const Webinars: CollectionConfig = {
  slug: 'webinars',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'date', 'status'],
  },
  labels: {
    singular: 'Webinaire',
    plural: 'Webinaires',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Titre',
      required: true,
    },
    {
      name: 'date',
      type: 'date',
      label: 'Date',
      required: true,
      admin: {
        date: {
          pickerAppearance: 'dayOnly',
          displayFormat: 'dd/MM/yyyy',
        },
      },
    },
    {
      name: 'time',
      type: 'text',
      label: 'Heure de début',
      required: true,
      admin: {
        placeholder: 'HH:MM (ex: 18:30)',
      },
    },
    {
      name: 'endTime',
      type: 'text',
      label: 'Heure de fin',
      required: true,
      admin: {
        placeholder: 'HH:MM (ex: 20:00)',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
      required: true,
    },
    {
      name: 'status',
      type: 'select',
      label: 'Statut',
      options: [
        { label: 'À venir', value: 'upcoming' },
        { label: 'Passé', value: 'past' },
      ],
      defaultValue: 'upcoming',
      required: true,
    },
    {
      name: 'zoomLink',
      type: 'text',
      label: 'Lien Zoom',
      admin: {
        condition: (data) => data?.status === 'upcoming',
        placeholder: 'https://us02web.zoom.us/j/...',
      },
    },
    {
      name: 'recordingLink',
      type: 'text',
      label: 'Lien du compte-rendu',
      admin: {
        condition: (data) => data?.status === 'past',
        placeholder: '/webinaires/nom-du-webinaire',
      },
    },
  ],
}
