<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const articles = data.articles.sort(
		(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
	);
</script>

<svelte:head>
	<title>Articles - Mohammed Essam</title>
	<meta
		name="description"
		content="Read articles by Mohammed Essam on various topics including web development, programming, and technology."
	/>
</svelte:head>

<main class="mx-auto max-w-2xl px-6 py-4">
	<h1 class="mb-8 text-4xl font-bold text-gray-900">Articles</h1>

	<div class="space-y-8">
		{#each articles as article (article.slug)}
			<article class="border-b border-gray-200 pb-8 last:border-b-0">
				<h2 class="mb-2">
					<a
						href="/articles/{article.slug}"
						class="text-2xl font-bold text-gray-900 hover:text-blue-600 hover:underline"
					>
						{article.title}
					</a>
				</h2>
				<div class="mb-3 text-sm text-gray-600">
					{new Date(article.date).toLocaleDateString('en-US', {
						year: 'numeric',
						month: 'long',
						day: 'numeric'
					})}
				</div>
				<p class="text-gray-700">{article.excerpt}</p>
			</article>
		{/each}
	</div>

	<div class="mt-12 border-t border-gray-200 pt-6">
		<a href="/" class="text-blue-600 hover:underline">← Back home</a>
	</div>
</main>
