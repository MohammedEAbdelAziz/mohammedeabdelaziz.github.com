import type { PageLoad } from './$types';

interface PostMeta {
	title: string;
	date: string;
	tags?: string[];
	excerpt?: string;
}

// Load all posts from src/lib/posts
const posts = import.meta.glob<{ metadata: PostMeta }>('/src/lib/posts/*.svx', { eager: true });

export const load: PageLoad = () => {
	const articles = Object.entries(posts).map(([path, module]) => {
		// Extract slug from path: /src/lib/posts/my-post.svx -> my-post
		const slug = path.split('/').pop()?.replace('.svx', '') || '';
		const meta = module.metadata;

		return {
			slug,
			title: meta.title,
			date: meta.date,
			tags: meta.tags,
			excerpt: meta.excerpt
		};
	});

	return { articles };
};
