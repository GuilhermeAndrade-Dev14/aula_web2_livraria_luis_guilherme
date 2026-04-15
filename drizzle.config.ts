import { defineConfig } from 'drizzle-kit';
import { DATABASE_URL } from './src/db/database/database.constants';
export default defineConfig({
  schema: './src/db/schemas/index.ts',
  dialect: 'mssql',
  out: './src/db/migrations',
  dbCredentials: {
    url: DATABASE_URL,
  },
});
