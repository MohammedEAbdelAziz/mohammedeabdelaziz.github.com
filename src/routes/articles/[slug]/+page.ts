import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

interface PostMeta {
	title: string;
	date: string;
	tags?: string[];
	excerpt?: string;
}

// Load all posts from src/lib/posts
const posts = import.meta.glob<{ metadata: PostMeta; default: any }>('/src/lib/posts/*.svx', {
	eager: true
});

// Create a map of slug to post metadata
const postMap = new Map<string, { post: any; meta: PostMeta }>();

for (const [path, module] of Object.entries(posts)) {
	// Extract filename without extension: /src/lib/posts/my-post.svx -> my-post
	const slug = path.split('/').pop()?.replace('.svx', '') || '';
	postMap.set(slug, {
		post: module.default,
		meta: module.metadata
	});
}

export const load: PageLoad = ({ params }) => {
	const postData = postMap.get(params.slug);

	if (!postData) {
		error(404, 'Post not found');
	}

	return {
		post: postData.post,
		title: postData.meta.title,
		date: postData.meta.date,
		tags: postData.meta.tags,
		excerpt: postData.meta.excerpt
	};
};

export const prerender = true;

export async function entries() {
	return Array.from(postMap.keys()).map((slug) => ({ slug }));
}
