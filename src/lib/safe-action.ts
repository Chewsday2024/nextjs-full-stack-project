import { createSafeActionClient } from 'next-safe-action';
import type { NeonDbError } from '@neondatabase/serverless';
import { z } from 'zod';


export const actionClient = createSafeActionClient({
  defineMetadataSchema() {
    return z.object({
      actionName: z.string(),
    })
  },
  handleServerError(e) {
    // const { clientInput, metadata } = utils; <-- 有這個可以用

    if (e.constructor.name === 'NeonDbError') {
      const { code, detail } = e as NeonDbError;
      if (code === '23505') {
        return `Unique entry required. ${detail}`
      }
    }


    if (e.constructor.name === 'NeonDbError') {
      return 'Database Error: Your data did not save. Support will be notified.'
    }

    return e.message
  }
})