import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { fileURLToPath } from 'url'

import { Users, Webinars, FAQs, Tools, Media, Partnerships } from './collections'
import { Homepage, SiteSettings } from './globals'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: ' - Clubs en Action',
    },
    dateFormat: 'dd/MM/yyyy',
  },
  collections: [Users, Webinars, FAQs, Tools, Media, Partnerships],
  globals: [Homepage, SiteSettings],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || 'your-secret-key',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    push: true,
    pool: {
      connectionString: process.env.DATABASE_URL || '',
    },
  }),
  localization: {
    locales: ['fr'],
    defaultLocale: 'fr',
  },
})
