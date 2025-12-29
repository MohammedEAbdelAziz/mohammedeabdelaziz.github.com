import { mdsvex, escapeSvelte } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { createHighlighter } from 'shiki';
import {
	transformerNotationDiff,
	transformerNotationHighlight,
	transformerNotationFocus,
	transformerNotationErrorLevel,
	transformerRenderWhitespace,
	transformerCompactLineOptions
} from '@shikijs/transformers';

const highlighter = await createHighlighter({
	themes: ['material-theme-palenight'],
	langs: ['javascript', 'typescript', 'svelte', 'html', 'css', 'json', 'bash', 'shell', 'sql', 'go', 'mdx', 'yaml', 'ini', 'properties', 'dockerfile', 'docker', ]
});

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.svx'],
	smartypants: {
		quotes: true,
		ellipses: true,
		backticks: false,
		dashes: true
	},
	highlight: {
		highlighter: async (code, lang = 'text') => {
			const html = escapeSvelte(
				highlighter.codeToHtml(code, {
					lang,
					theme: 'material-theme-palenight',
					transformers: [
						transformerNotationDiff(),
						transformerNotationHighlight(),
						transformerNotationFocus(),
						transformerNotationErrorLevel(),
						transformerRenderWhitespace({ position: 'inline' }),
						transformerCompactLineOptions()
					],
					meta: {
						__raw: code
					}
				})
			);
			return `{@html \`${html}\`}`;
		}
	}
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],

	kit: {
		adapter: adapter(),
		paths: {
			base: process.env.BASE_PATH || ''
		}
	},
	extensions: ['.svelte', '.svx']
};

export default config;
