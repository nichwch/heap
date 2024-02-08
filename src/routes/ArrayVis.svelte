<script lang="ts">
	import { getChildIndices, getParentIndex } from '../lib';

	export let arr: number[] = [];
	export let hovered: number | null = null;

	$: parentOfHovered = getParentIndex(arr, hovered);
	$: [leftChild, rightChild] = getChildIndices(arr, hovered);
</script>

{#if arr.length > 0}
	<div class="flex flex-wrap">
		{#each arr as num, i}
			<button
				on:focus={() => {
					hovered = i;
				}}
				on:blur={() => {
					hovered = null;
				}}
				on:mouseover={() => {
					hovered = i;
				}}
				on:mouseleave={() => {
					hovered = null;
				}}
				class:bg-red-300={hovered === i}
				class:bg-green-300={leftChild === i || rightChild === i}
				class:bg-yellow-300={parentOfHovered === i}
				class:bg-red-200={i !== leftChild &&
					i !== rightChild &&
					i !== parentOfHovered &&
					i !== hovered}
				class="border border-black px-1 mb-3 w-8"
			>
				{num}
			</button>
		{/each}
	</div>

	{#if leftChild !== null || rightChild !== null}
		<div class="text-green-300">Green = child nodes</div>
	{/if}
	{#if parentOfHovered !== null}
		<div class="text-yellow-200">Yellow = parent node</div>
	{/if}
	{#if arr.length > 0 && parentOfHovered === null && leftChild === null && rightChild === null}
		<div class="">Try mousing over an element!</div>
	{/if}
{:else}
	<div>[empty]</div>
{/if}
