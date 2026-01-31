<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<div class="flex min-h-screen flex-col" style="background-color: #F9FAFB;">
	<nav class="sticky top-0 z-50 border-b border-gray-200" style="background-color: #F9FAFB;">
		<div class="mx-auto max-w-7xl px-6 py-4">
			<div class="flex items-center justify-between">
				<a
					href="/"
					class="text-lg font-semibold transition"
					style="color: #2563EB; border-bottom: none;"
				>
					Mohammed Essam
				</a>
				<div class="flex gap-6 text-sm">
					<a
						href="/"
						class="transition hover:opacity-70"
						style="color: #2563EB; border-bottom: none;">Home</a
					>
					<a
						href="/articles"
						class="transition hover:opacity-70"
						style="color: #2563EB; border-bottom: none;">Articles</a
					>
				</div>
			</div>
		</div>
	</nav>

	{@render children()}

	<footer class="mt-auto border-t border-gray-200" style="background-color: #F9FAFB;">
		<div class="mx-auto max-w-7xl px-6 py-8 text-center text-sm" style="color: #6b7280;">
			<p>&copy; {new Date().getFullYear()} Mohammed Essam. All rights reserved.</p>
		</div>
	</footer>
</div>
