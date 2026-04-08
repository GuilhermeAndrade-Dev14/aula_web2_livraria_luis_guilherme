import { defineConfig } from 'drizzle-kit';
export default defineConfig({
  schema: './src/db/schemas/index.ts',
  dialect: 'mssql',
  out: './src/db/migrations',
  dbCredentials: {
    url: '',
  },
});
