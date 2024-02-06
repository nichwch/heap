<script lang="ts">
	import { getChildIndices } from '../lib';

	export let arr: number[] = [];
	export let index: number;
	$: [leftChild, rightChild] = getChildIndices(arr, index);
</script>

<div class="block">
	<div class="block">{arr[index]}</div>
	<div class="flex">
		{#if leftChild}
			<svelte:self {arr} index={leftChild} />
		{/if}
		{#if rightChild}
			<svelte:self {arr} index={rightChild} />
		{/if}
	</div>
</div>
