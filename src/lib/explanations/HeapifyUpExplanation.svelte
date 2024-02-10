<script lang="ts">
	import Modal from '../Modal.svelte';

	let showingWindow = false;
</script>

<button
	class="inline-block bg-green-100 hover:bg-green-200 text-green-700 border border-green-700 px-1 py-0 transition-all"
	on:click={() => (showingWindow = true)}>heapifying up</button
>
{#if showingWindow}
	<Modal bind:showingWindow>
		<div class="p-2">
			<h1 class="text-lg mb-2">Heapify Up</h1>
			<p class="mb-2">
				Heapify up takes a node and checks if it is smaller than its parent. If so, it swaps it with
				its parent. It then runs recursively for the parent, comparing it with its parent, until the
				node is reached.
			</p>
			<p class="mb-2">
				This is useful when a new node is added. New nodes are added to the bottom of the tree from
				left to right, because a heap is a <a
					href="https://homepages.math.uic.edu/~leon/cs-mcs401-s08/handouts/nearly_complete.pdf"
					>nearly complete binary tree</a
				>. However, it might be in the wrong place - it might be smaller than its parent, which
				violates the min heap property. Heapify up fixes this problem, so we run it after adding a
				new node.
			</p>
		</div>
	</Modal>
{/if}
