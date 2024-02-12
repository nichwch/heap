<script lang="ts">
	import { heapify, heapifyDown, heapifyUp } from '../lib';
	import HeapifyDownExplanation from '../lib/explanations/HeapifyDownExplanation.svelte';
	import HeapifyUpExplanation from '../lib/explanations/HeapifyUpExplanation.svelte';
	import ArrayVis from './ArrayVis.svelte';
	import TreeVis from './TreeVis.svelte';
	import * as Tabs from '$lib/components/ui/tabs';

	export let arr: number[] = [];
	const addRandom = () => {
		const newNum = Math.floor(Math.random() * 100);
		arr = [...arr, newNum];
	};
</script>

<h1 class="text-xl mb-2">Adding elements</h1>
<p class="mb-2">
	Try adding an element, then <HeapifyUpExplanation /> right afterwards. This will maintain the heap
	property. (It will not work if you add multiple then heapify up - you will have to <HeapifyDownExplanation
		>heapify down</HeapifyDownExplanation
	> for that.)
</p>
<button
	class="button bg-red-200 hover:bg-red-300 px-1 border border-black transition-all"
	on:click={addRandom}>add random number</button
>
<button
	class=" button bg-red-200 hover:bg-red-300 px-1 border border-black transition-all"
	on:click={() => {
		heapifyUp(arr, arr.length - 1);
		// trigger svelte state update
		arr = arr;
	}}>heapify up</button
>
