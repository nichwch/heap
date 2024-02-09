<script lang="ts">
	import { heapify, heapifyDown, heapifyUp } from '../lib';
	import HeapifyUpExplanation from '../lib/explanations/HeapifyUpExplanation.svelte';
	import ArrayVis from './ArrayVis.svelte';
	import TreeVis from './TreeVis.svelte';

	let arr: number[] = [];
	let hovered: number | null = null;
	const addRandom = () => {
		const newNum = Math.floor(Math.random() * 100);
		arr = [...arr, newNum];
	};
</script>

<div class="w-[20rem] mx-auto mt-16">
	<h1 class="font-semibold">Heap.svelte</h1>
	<a class="block" href="https://nicholaschen.io">By Nicholas Chen</a>
	<a class="block" href="https://github.com/nichwch/heap">source</a>
	<i
		>"Wow, he can do data structures and algorithms and interfaces! This guy is so employable. <a
			href="https://www.linkedin.com/in/nicholas-chen-developer/">I want to hire him!</a
		>" -You, hopefully</i
	>
</div>
<div class="w-[45rem] mx-auto mt-5 h-[30rem] border border-black bg-red-400 flex flex-col">
	<div class="flex flex-grow border-b border-black">
		<div class="  basis-1/2 flex-grow-0 flex-shrink-0 p-3 border-r border-black">
			<ArrayVis bind:hovered {arr} />
		</div>
		<div class=" basis-1/2 flex-grow-0 flex-shrink-0 p-3 overflow-x-auto">
			<TreeVis bind:hovered {arr} />
		</div>
	</div>
	<div class=" flex">
		<div class="border-r border-r-black flex-grow basis-1/2 p-2">
			<h1 class="text-xl mb-2">Adding elements</h1>
			<p class="mb-2">
				Try adding an element, then <HeapifyUpExplanation /> right afterwards. This will maintain the
				heap property. (It will not work if you add multiple then heapify up - you will have to heapify
				down for that.)
			</p>
			<button class="button bg-red-200 hover:bg-red-300" on:click={addRandom}
				>add random number</button
			>
			<button
				class=" button bg-red-200 hover:bg-red-300"
				on:click={() => {
					heapifyUp(arr, arr.length - 1);
					// trigger svelte state update
					arr = arr;
				}}>heapify up</button
			>
		</div>
		<div class="basis-1/2 flex-grow p-2">
			<h1 class="text-xl mb-2">Removing the root</h1>
			<p class="mb-2">
				Try popping the root. This will automatically replace the root with the most recently added
				element. To restore the heap property after doing this, try running heapify down.
			</p>
			<button
				class=" button bg-red-200 hover:bg-red-300"
				on:click={() => {
					arr[0] = arr[arr.length - 1];
					arr.pop();
				}}>pop root</button
			>

			<button
				class=" button bg-red-200 hover:bg-red-300"
				on:click={() => {
					heapify(arr);
					arr = arr;
				}}>heapify down</button
			>
		</div>
	</div>
</div>
