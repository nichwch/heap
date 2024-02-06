<script lang="ts">
	import { getChildIndices, getParentIndex } from '../lib';

	export let arr: number[] = [];
	export let index: number;
	export let hovered: number | null = null;
	$: [leftChild, rightChild] = getChildIndices(arr, index);
	$: [leftOfHovered, rightOfHovered] = getChildIndices(arr, hovered);
	$: parentOfHovered = getParentIndex(arr, hovered);
</script>

<div class="block w-full">
	<button
		on:focus={() => {
			hovered = index;
		}}
		on:blur={() => {
			hovered = null;
		}}
		on:mouseover={() => {
			hovered = index;
		}}
		on:mouseleave={() => {
			hovered = null;
		}}
		class:bg-red-300={hovered === index}
		class:bg-green-300={leftOfHovered === index || rightOfHovered === index}
		class:bg-yellow-300={parentOfHovered === index}
		class:bg-red-200={index !== leftOfHovered &&
			index !== rightOfHovered &&
			index !== parentOfHovered &&
			index !== hovered}
		class="block mx-auto text-center w-8 border border-black px-1 mb-2"
	>
		{arr[index]}
	</button>
	<div class="flex">
		{#if leftChild}
			<svelte:self {arr} bind:hovered index={leftChild} />
		{/if}
		{#if rightChild}
			<svelte:self {arr} bind:hovered index={rightChild} />
		{/if}
	</div>
</div>
