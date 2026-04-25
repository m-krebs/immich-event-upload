<script lang="ts">
	import { Input } from '$lib/components/ui/input/index';
	import * as Form from '$lib/components/ui/form/index';
	// FIXME: impossible situation
	// import { roomSchema } from '$lib/server/db/schema';
	import { superForm, type Infer, type SuperValidated } from 'sveltekit-superforms';
	import { zod4Client } from 'sveltekit-superforms/adapters';
	import type { PageProps } from './$types';

	import Button from '$lib/components/ui/button/button.svelte';

	import Plus from '@lucide/svelte/icons/plus';

	let { data }: PageProps = $props();

	// const createRoom = () => {};

	// const form = superForm(data.form, {
	// 	validators: zod4Client(roomSchema)
	// });
	//
	// const { form: formData, enhance } = form;
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
