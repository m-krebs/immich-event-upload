import { command } from '$app/server';
import { db } from '$lib/server/db';
import { rooms } from '$lib/server/db/schema';
import { eq } from 'drizzle-orm';
import * as z from 'zod/mini';

export const deleteRoom = command(z.string(), async (id: string) => {
	await db.delete(rooms).where(eq(rooms.id, id));
});
