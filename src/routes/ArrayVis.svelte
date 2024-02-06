<script lang="ts">
	export let arr: number[] = [];
	export let hovered: number | null = null;

	const getChildIndices = (index: number | null): [number | null, number | null] => {
		if (index === null) return [null, null];
		const left = index * 2 + 1;
		const right = index * 2 + 2;
		if (left > arr.length - 1) return [null, null];
		if (right > arr.length - 1) return [left, null];
		return [left, right];
	};
	const getParentIndex = (index: number | null): number | null => {
		if (index === null) return null;
		const parent = Math.floor((index - 1) / 2);
		if (parent < 0) return null;
		return parent;
	};

	$: parentOfHovered = getParentIndex(hovered);
	$: [leftChild, rightChild] = getChildIndices(hovered);
</script>

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
			class:bg-red-200={hovered !== i}
			class:bg-green-300={leftChild === i || rightChild === i}
			class:bg-yellow-300={parentOfHovered === i}
			class="border border-black bg-red-200 px-1 mb-3 w-8"
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
