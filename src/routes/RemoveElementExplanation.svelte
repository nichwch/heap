<script lang="ts">
	import AddElementExplanation from './AddElementExplanation.svelte';

	import { heapify, heapifyDown, heapifyUp } from '../lib';
	import HeapifyDownExplanation from '../lib/explanations/HeapifyDownExplanation.svelte';
	import HeapifyUpExplanation from '../lib/explanations/HeapifyUpExplanation.svelte';
	import ArrayVis from './ArrayVis.svelte';
	import TreeVis from './TreeVis.svelte';
	import * as Tabs from '$lib/components/ui/tabs';

	export let arr: number[] = [];
</script>

<h1 class="text-xl mb-2">Removing the root</h1>
<p class="mb-2">
	Try popping the root. This will automatically replace the root with the most recently added
	element. To restore the heap property after doing this, try running <HeapifyDownExplanation
		>heapify down</HeapifyDownExplanation
	>.
</p>
<button
	class=" button bg-red-200 hover:bg-red-300 px-1 border border-black transition-all"
	on:click={() => {
		arr[0] = arr[arr.length - 1];
		arr.pop();
	}}>pop root</button
>

<button
	class=" button bg-red-200 hover:bg-red-300 px-1 border border-black transition-all"
	on:click={() => {
		heapify(arr);
		arr = arr;
	}}>heapify down</button
>
