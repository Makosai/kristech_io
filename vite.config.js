import { enhancedImages } from '@sveltejs/enhanced-img';
import { purgeCss } from 'vite-plugin-tailwind-purgecss';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  base: "/kristech_io/",
	plugins: [enhancedImages(), sveltekit(), purgeCss({
			safelist: {
				// any selectors that begin with "hljs-" will not be purged
				greedy: [/^hljs-/],
			},
		}),
	],
});