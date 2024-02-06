<script lang="ts">
	import { heapifyUp } from '../lib';
	import ArrayVis from './ArrayVis.svelte';
	import TreeVis from './TreeVis.svelte';

	let arr: number[] = [];
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
			<ArrayVis {arr} />
		</div>
		<div class=" basis-1/2 flex-grow-0 flex-shrink-0 p-3">
			<TreeVis {arr} />
		</div>
	</div>
	<div class="p-3">
		<button class="button bg-red-200 hover:bg-red-300" on:click={addRandom}
			>add random number</button
		>
		<button class=" button bg-red-200 hover:bg-red-300">TODO: pop root</button>
		<button
			class=" button bg-red-200 hover:bg-red-300"
			on:click={() => {
				heapifyUp(arr, arr.length - 1);
				// trigger svelte state update
				arr = arr;
			}}>heapify up</button
		>
		<button class=" button bg-red-200 hover:bg-red-300">TODO: heapify down</button>
	</div>
</div>
