<script lang="ts">
	import RemoveElementExplanation from './RemoveElementExplanation.svelte';

	import AddElementExplanation from './AddElementExplanation.svelte';
	import ArrayVis from './ArrayVis.svelte';
	import TreeVis from './TreeVis.svelte';
	import * as Tabs from '$lib/components/ui/tabs';

	let arr: number[] = [];
	let hovered: number | null = null;
</script>

<div class="w-[15rem] md:w-[20rem] mx-auto mt-16">
	<h1 class="font-semibold">Heap.svelte</h1>
	<a class="block" href="https://nicholaschen.io">By Nicholas Chen</a>
	<a class="block" href="https://github.com/nichwch/heap">source</a>
	<i
		>"Wow, he can do data structures and algorithms and interfaces! This guy is so employable. <a
			href="https://www.linkedin.com/in/nicholas-chen-developer/">I want to hire him!</a
		>" -You, hopefully</i
	>
</div>
<div
	class="w-4/5 md:w-[45rem] mx-auto mt-5 h-[35rem] md:h-[30rem] border border-black bg-red-400 flex flex-col"
>
	<!-- desktop -->
	<div class="hidden md:flex flex-grow border-b border-black">
		<div class="  basis-1/2 flex-grow-0 flex-shrink-0 p-3 border-r border-black">
			<ArrayVis bind:hovered {arr} />
		</div>
		<div class=" basis-1/2 flex-grow-0 flex-shrink-0 p-3 overflow-x-auto">
			<TreeVis bind:hovered {arr} />
		</div>
	</div>
	<!-- mobile -->
	<Tabs.Root value="array" class="p-3 block md:hidden basis-1/2 border-b border-black">
		<Tabs.List>
			<Tabs.Trigger value="array">array view</Tabs.Trigger>
			<Tabs.Trigger value="tree">tree view</Tabs.Trigger>
		</Tabs.List>
		<Tabs.Content value="array">
			<ArrayVis bind:hovered {arr} />
		</Tabs.Content>
		<Tabs.Content value="tree">
			<TreeVis bind:hovered {arr} />
		</Tabs.Content>
	</Tabs.Root>
	<!-- desktop -->
	<div class="hidden md:flex">
		<div class="border-r border-r-black flex-grow basis-1/2 p-2">
			<AddElementExplanation bind:arr />
		</div>
		<div class="basis-1/2 flex-grow p-2">
			<RemoveElementExplanation bind:arr />
		</div>
	</div>
	<!-- mobile -->
	<Tabs.Root
		value="addElement"
		class="p-3 block md:hidden basis-1/2 overflow-y-auto border-b border-black"
	>
		<Tabs.List>
			<Tabs.Trigger value="addElement">add element</Tabs.Trigger>
			<Tabs.Trigger value="removeElement">remove element</Tabs.Trigger>
		</Tabs.List>
		<Tabs.Content value="addElement">
			<AddElementExplanation bind:arr />
		</Tabs.Content>
		<Tabs.Content value="removeElement">
			<RemoveElementExplanation bind:arr />
		</Tabs.Content>
	</Tabs.Root>
</div>
