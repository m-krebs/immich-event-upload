import { getAllAlbums } from '@immich/sdk';

export async function GET() {
	const albums = await getAllAlbums({});

	return new Response(JSON.stringify(albums));
}
