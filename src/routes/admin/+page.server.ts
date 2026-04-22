import { db } from '$lib/server/db';
import { rooms, roomSchema } from '$lib/server/db/schema';
import type { PageServerLoad } from './$types';
import { superValidate } from 'sveltekit-superforms';
import { zod4 } from 'sveltekit-superforms/adapters';

export const load: PageServerLoad = async ({ params }) => {
	return {
		rooms: await db.select().from(rooms),
		form: await superValidate(zod4(roomSchema))
	};
};
