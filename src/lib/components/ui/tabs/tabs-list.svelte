<script lang="ts">
	import { Tabs as TabsPrimitive } from 'bits-ui';
	import { cn } from '$lib/utils';

	type $$Props = TabsPrimitive.ListProps;

	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<TabsPrimitive.List
	class={cn('inline-flex h-9 items-center justify-center bg-red-100 p-1 ', className)}
	{...$$restProps}
>
	<slot />
</TabsPrimitive.List>
