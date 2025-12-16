<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<div class="flex min-h-screen flex-col">
	<nav class="sticky top-0 z-50 border-b border-gray-200 bg-white">
		<div class="mx-auto max-w-3xl px-6 py-4">
			<div class="flex items-center justify-between">
				<a href="/" class="text-lg font-semibold text-black transition hover:text-gray-600">
					Mohammed Essam
				</a>
				<div class="flex gap-6 text-sm">
					<a href="/" class="text-black transition hover:text-gray-600">Home</a>
					<a href="/articles" class="text-gray-600 transition hover:text-black">Articles</a>
				</div>
			</div>
		</div>
	</nav>

	{@render children()}

	<footer class="border-t border-gray-200 bg-white">
		<div class="mx-auto max-w-3xl px-6 py-8 text-center text-sm text-gray-600">
			<p>&copy; {new Date().getFullYear()} Mohammed Essam. All rights reserved.</p>
		</div>
	</footer>
</div>
