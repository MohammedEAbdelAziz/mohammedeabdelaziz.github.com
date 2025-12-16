<script lang="ts">
	let { children } = $props();
</script>

<article class="mx-auto max-w-2xl px-6 py-4">
	{@render children()}
</article>
