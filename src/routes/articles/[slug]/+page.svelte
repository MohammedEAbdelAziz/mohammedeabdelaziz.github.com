<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	const { post, title, date, tags } = data;
</script>

<svelte:head>
	<title>{title} - Mohammed Essam</title>
	<meta name="description" content="Read the article &quot;{title}&quot; by Mohammed Essam." />
</svelte:head>

<header class="mb-8">
	<h1 class="mb-3 text-3xl font-bold text-gray-900">{title}</h1>
	<div class="flex items-center justify-between text-sm text-gray-600">
		<time
			>{new Date(date).toLocaleDateString('en-US', {
				year: 'numeric',
				month: 'long',
				day: 'numeric'
			})}</time
		>
		{#if tags && tags.length > 0}
			<div class="flex gap-2">
				{#each tags as tag}
					<span class="rounded-full bg-gray-100 px-3 py-1 text-xs">{tag}</span>
				{/each}
			</div>
		{/if}
	</div>
</header>

<svelte:component this={post} />

<footer class="mt-12 border-t border-gray-200 pt-6">
	<a href="/articles" class="text-blue-600 hover:underline">← Back to articles</a>
</footer>
