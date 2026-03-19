<script>
	import { Button } from '$lib/components/ui/button/index';
	import { Input } from '$lib/components/ui/input/index';
	import { createRoom } from './data.remote';
</script>

<h1 class="text-xl">Create new room</h1>

<form {...createRoom}>
	{#each createRoom.fields.title.issues() as issue}
		<p class="issue">{issue.message}</p>
	{/each}
	<Input type="text" placeholder="Title" {...createRoom.fields.title.as('text')} />
	<Button type="submit">Submit</Button>
</form>
