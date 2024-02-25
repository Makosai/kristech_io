<script>
	import '../app.postcss';

	// Highlight JS
	import hljs from 'highlight.js/lib/core';
	import 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	import xml from 'highlight.js/lib/languages/xml'; // for HTML
	import css from 'highlight.js/lib/languages/css';
	import javascript from 'highlight.js/lib/languages/javascript';
	import typescript from 'highlight.js/lib/languages/typescript';

	hljs.registerLanguage('xml', xml); // for HTML
	hljs.registerLanguage('css', css);
	hljs.registerLanguage('javascript', javascript);
	hljs.registerLanguage('typescript', typescript);
	storeHighlightJs.set(hljs);

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';

	// Fonts
	import '@fontsource/poppins/400.css';
	import '@fontsource/poppins/700.css';
	import '@fontsource/roboto/900.css';

	// Components
	import Landing from '$lib/components/core/landing/Landing.svelte';
	import Loader from '$lib/components/core/loader/Loader.svelte';
	
	
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<Loader />
<Landing />
<slot />
