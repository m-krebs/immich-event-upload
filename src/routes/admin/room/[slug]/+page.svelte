<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import type { PageProps } from './$types';
	import { deleteRoom } from './rooms.remote';

	let { data }: PageProps = $props();
</script>

{#if data.room}
	<h1>{data.room.title}</h1>
	<Button
		onclick={async () => {
			try {
				await deleteRoom(data.room.id);
			} catch (error) {
				console.error('Something went wrong');
			}
		}}>Delete</Button
	>
{/if}
