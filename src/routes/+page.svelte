<script lang="ts">
	import ArrayVis from './ArrayVis.svelte';

	let arr: number[] = [];
	const addRandom = () => {
		const newNum = Math.floor(Math.random() * 100);
		arr = [...arr, newNum];
	};
</script>

<div class="w-52 mx-auto mt-10">
	<h1>Heap.svelte</h1>
	<a class="block" href="https://nicholaschen.io">By Nicholas Chen</a>
	<a class="block" href="https://github.com/nichwch/heap">source</a>
</div>
<div class="w-[45rem] mx-auto mt-24 h-[30rem] border border-black bg-red-400 flex flex-col">
	<div class="flex flex-grow border-b border-black">
		<div class="  basis-1/2 flex-grow-0 flex-shrink-0 p-3 border-r border-black">
			<ArrayVis {arr} />
		</div>
		<div class=" basis-1/2 flex-grow-0 flex-shrink-0 p-3">hello</div>
	</div>
	<div class="p-3">
		<button class="button bg-red-200 hover:bg-red-300" on:click={addRandom}
			>add random number</button
		>
		<button class=" button bg-red-200 hover:bg-red-300">pop root</button>
		<button class=" button bg-red-200 hover:bg-red-300">heapify up</button>
		<button class=" button bg-red-200 hover:bg-red-300">heapify down</button>
	</div>
</div>
