<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import type { PageProps } from './$types';

	import Plus from '@lucide/svelte/icons/plus';

	console.log('Hello admin');

	let { data }: PageProps = $props();
</script>

<h1 class="text-xl">Administration</h1>

<div class="flex flex-row justify-between">
	<h2 class="text-lg">Rooms</h2>
	<Button variant="link" href="/admin/room/new">Create new <Plus /></Button>
</div>

<h3>Active</h3>
<div class="flex w-full">
	{#each data.rooms as room, id}
		<a
			class="w-full rounded-md border border-white p-3"
			id={id.toString()}
			href="/admin/room/{room.id}">{room.title}</a
		>
	{/each}
</div>

<h3>Inactive</h3>
