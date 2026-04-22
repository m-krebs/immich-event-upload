<script lang="ts">
	import { Input } from '$lib/components/ui/input/index';
	import * as Form from '$lib/components/ui/form/index';
	// FIXME: impossible situation
	// import { roomSchema } from '$lib/server/db/schema';
	import { superForm, type Infer, type SuperValidated } from 'sveltekit-superforms';
	import { zod4Client } from 'sveltekit-superforms/adapters';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	// const createRoom = () => {};

	// const form = superForm(data.form, {
	// 	validators: zod4Client(roomSchema)
	// });
	//
	// const { form: formData, enhance } = form;
</script>

Admin page

<!-- <form method="POST" use:enhance> -->
<!-- 	<Form.Field {form} name="title"> -->
<!-- 		<Form.Control> -->
<!-- 			{#snippet children({ props })} -->
<!-- 				<Form.Label>Title</Form.Label> -->
<!-- 				<Input {...props} bind:value={$formData.title} /> -->
<!-- 			{/snippet} -->
<!-- 		</Form.Control> -->
<!-- 		<Form.Description /> -->
<!-- 		<Form.FieldErrors /> -->
<!-- 	</Form.Field> -->
<!-- </form> -->

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
