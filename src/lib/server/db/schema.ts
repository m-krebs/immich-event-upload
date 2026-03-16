import { sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const rooms = sqliteTable('rooms', {
	id: text('id')
		.primaryKey()
		.$defaultFn(() => crypto.randomUUID()),
	title: text('title').notNull()
});

// export * from './auth.schema';
