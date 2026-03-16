import type { Handle, ServerInit } from '@sveltejs/kit';
import { building } from '$app/environment';
import { auth } from '$lib/server/auth';
import { svelteKitHandler } from 'better-auth/svelte-kit';
import { init as immichInit } from '@immich/sdk';
import { IMMICH_API_KEY, IMMICH_BASE } from '$env/static/private';

export const init: ServerInit = async () => {
	immichInit({
		baseUrl: IMMICH_BASE,
		apiKey: IMMICH_API_KEY,
		headers: {}
	});
};

const handleBetterAuth: Handle = async ({ event, resolve }) => {
	const session = await auth.api.getSession({ headers: event.request.headers });

	if (session) {
		event.locals.session = session.session;
		event.locals.user = session.user;
	}

	return svelteKitHandler({ event, resolve, auth, building });
};

export const handle: Handle = handleBetterAuth;
