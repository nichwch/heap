<script lang="ts">
	import Modal from '../Modal.svelte';

	let showingWindow = false;
</script>

<button
	class="inline-block bg-blue-100 hover:bg-blue-200 text-blue-700 border border-blue-700 px-1 py-0"
	on:click={() => (showingWindow = true)}>heapifying up</button
>
{#if showingWindow}
	<Modal bind:showingWindow>
		<div class="p-2">This is an explanation of heap up</div>
	</Modal>
{/if}
