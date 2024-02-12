<script lang="ts">
	import Modal from '../Modal.svelte';

	let showingWindow = false;
</script>

<button
	class="inline-block bg-green-100 hover:bg-green-200 text-green-700 border transition-all border-green-700 px-1 py-0"
	on:click={() => (showingWindow = true)}><slot /></button
>
{#if showingWindow}
	<Modal bind:showingWindow>
		<div class="p-2">
			<h1 class="text-lg mb-2">Heapify Down</h1>
			<p class="mb-2">
				Heapify down removes the root of the tree, and replaces it with the most recently added
				element. Because a heap is a <a
					href="https://homepages.math.uic.edu/~leon/cs-mcs401-s08/handouts/nearly_complete.pdf"
					>nearly complete binary tree</a
				>, this is the rightmost leaf node.
			</p>
			<p class="mb-2">
				It then compares the node to its children, and swaps it with the smaller of the two, if one
				of them is smaller. It then does this recursively with the node that was swapped, comparing
				it to its children and swapping, so on and so forth until the bottom of the tree is reached.
			</p>
			<p>Once this is done, the tree will satisfy the min heap property again.</p>
		</div>
	</Modal>
{/if}
