import { sqliteTable, text } from 'drizzle-orm/sqlite-core';
import { createInsertSchema } from 'drizzle-orm/zod';

// const users = sqliteTable('user', {
// 	id: text().primaryKey(),
// 	name: text()
// });

// export const userSchema = createInsertSchema(users);

export const rooms = sqliteTable('rooms', {
	id: text('id')
		.primaryKey()
		.$defaultFn(() => crypto.randomUUID()),
	title: text('title').notNull()
});

export const roomSchema = createInsertSchema(rooms);

// export * from './auth.schema';
