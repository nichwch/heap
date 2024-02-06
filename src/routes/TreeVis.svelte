<script lang="ts">
	import TreeNode from './TreeNode.svelte';

	export let arr: number[] = [];
	export let hovered: number | null = null;
</script>

{#if arr.length > 0}
	<TreeNode {arr} bind:hovered index={0} />
{:else}
	<div>[empty]</div>
{/if}
