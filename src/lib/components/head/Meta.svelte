<script>
	import { page } from '$app/stores';

	export let titlePrefix = '';
	export let titleSuffix = ' | kristech.io';
	export let title = 'Kristopher Ali';
	let _title = `${titlePrefix}${title}${titleSuffix}`;
	export let description =
		"Kristopher Ali is a software engineer who specializes in creating engaging websites, games, and desktop + mobile apps.";
  export let og_description = 'Kristopher Ali is a software engineer who specializes in creating engaging websites, games, and desktop + mobile apps.'

	export let keywords = 'c#, cpp, c++, javascript, nodejs, node.js, jquery, rust, go, golang, flutter, unity, mongodb, react, web, desktop, ios, android, mobile, teacher, teaching, software, software-engineering, express, unity3d';

	export let author = 'Kristopher Ali';

	export let kristech_logo_meta = '/kristech_logo_meta.png';
	export let canonical = true;
</script>

<svelte:head>
	{#if canonical}
		<link rel="canonical" href={`https://kristech.io${$page.url.pathname}`} />
	{/if}

	<title>{_title}</title>
	<meta name="title" content={_title} />
	<meta name="description" content={description} />
	<meta name="keywords" content={keywords} />
	<meta name="theme-color" content="#284267" />
	<meta name="robots" content="index, follow" />
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="language" content="en" />
	<meta name="revisit-after" content="3 days" />
	<meta name="author" content={author} />
	<slot name="structured" />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content={`${$page.url.origin}${$page.url.pathname}`} />
	<meta property="og:title" content={_title} />
	<meta property="og:description" content={og_description} />
	<meta property="og:image" content={`${$page.url.origin}${kristech_logo_meta}`} />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content={`${$page.url.origin}${$page.url.pathname}`} />
	<meta property="twitter:title" content={_title} />
	<meta property="twitter:description" content={og_description} />
	<meta property="twitter:image" content={`${$page.url.origin}${kristech_logo_meta}`} />

	<slot />
</svelte:head>