'use server'

import config from '@payload-config'
import { handleServerFunctions } from '@payloadcms/next/layouts'
import type { ServerFunctionClient } from 'payload'

import { importMap } from './importMap'

export const serverFunctions: ServerFunctionClient = async (args) => {
  return handleServerFunctions({
    ...args,
    config,
    importMap,
  })
}
