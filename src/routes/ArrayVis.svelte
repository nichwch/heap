<script lang="ts">
	export let arr: number[] = [];
</script>

<div class="flex flex-wrap">
	{#each arr as num, i}
		<div class="border border-black bg-red-200 px-1 mb-3">
			{num}
		</div>
	{/each}
</div>
