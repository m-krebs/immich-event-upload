<script lang="ts">
	import type { PageProps } from './$types';

	console.log('Hello admin');

	let { data }: PageProps = $props();
</script>

Admin page

<h2>Active</h2>
<div class="flex w-full">
	{#each data.rooms as room, id}
		<a
			class="w-full rounded-md border border-white p-3"
			id={id.toString()}
			href="/admin/room/{room.id}">{room.title}</a
		>
	{/each}
</div>

<h2>Inactive</h2>
