import { db } from '$lib/server/db';
import { rooms } from '$lib/server/db/schema';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	return {
		rooms: await db.select().from(rooms)
	};
};
