<script lang="ts">
	import TreeNode from './TreeNode.svelte';

	export let arr: number[] = [];
</script>

<TreeNode {arr} index={0} />
