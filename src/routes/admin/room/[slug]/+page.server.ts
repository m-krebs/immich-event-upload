import { db } from '$lib/server/db';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const room = await db.query.rooms.findFirst({
		where: (rooms, { eq }) => eq(rooms.id, params.slug)
	});
	return {
		room: room ? room : error(404)
	};
};
