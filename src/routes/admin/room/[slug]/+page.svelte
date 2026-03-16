<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

{#if data.room}
	<h1>{data.room.title}</h1>
{/if}
