import * as zod from 'zod';
import { form } from '$app/server';
import { db } from '$lib/server/db';
import { rooms } from '$lib/server/db/schema';
import { createAlbum, getAllAlbums } from '@immich/sdk';
import { invalid } from '@sveltejs/kit';

export const createRoom = form(
	zod.object({
		title: zod.string().nonempty()
	}),
	async ({ title }: { title: string }, issue) => {
		const albumExists = (await getAllAlbums({})).some((item) => item.albumName === title);

		if (albumExists) {
			invalid(issue.title('Album already exists'));
		}

		const album = await createAlbum({ createAlbumDto: { albumName: title } });
		console.log(album);
		// FIXME: type mismatch
		// db.insert(rooms).values({ title, album.id });
	}
);
