import { drizzle } from 'drizzle-orm/libsql/node';
import { env } from '$env/dynamic/private';
import { createClient } from '@libsql/client/sqlite3';
import { log } from 'console';

if (!env.DATABASE_URL) throw new Error('DATABASE_URL is not set');

log(env.DATABASE_URL);

const client = createClient({ url: env.DATABASE_URL });

export const db = drizzle({ client });
