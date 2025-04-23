import { migrate } from 'drizzle-orm/neon-http/migrator';
import { db } from './index';

const main = async () => {
  try {
    await migrate( db, {
      migrationsFolder: 'src/db/migrations'
    })

    console.log('Migration completed')
  } catch (err) {
    console.log('Error during migration:', err)

    process.exit(1)
  }
}


main();