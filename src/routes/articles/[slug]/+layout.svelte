<script>
	let { children } = $props();
</script>

<div class="min-h-screen bg-white">
	<main class="mx-auto w-full max-w-2xl px-4 py-4 sm:px-6 sm:py-6">
		<a href="/articles" class="mb-8 inline-block text-sm text-gray-600 transition hover:text-black">
			← Back to articles
		</a>

		<article class="prose prose-slate prose-lg">
			{@render children()}
		</article>
	</main>
</div>
