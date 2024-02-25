<script>
	import GitHub from 'svelte-material-icons/Github.svelte';
	import LinkedIn from 'svelte-material-icons/Linkedin.svelte';
	import Twitter from 'svelte-material-icons/Twitter.svelte';
	import Instagram from 'svelte-material-icons/Instagram.svelte';
	import YouTube from 'svelte-material-icons/Youtube.svelte';
	/**
	 * @type {{
	 *  Icon: typeof GitHub;
	 *  title: string;
	 *  href: string;
	 * }[]}
	 */
	const socials = [
		{ Icon: GitHub, title: 'GitHub', href: 'https://github.com/Makosai' },
		{ Icon: LinkedIn, title: 'LinkedIn', href: 'https://www.linkedin.com/in/kristopher-ali/' },
		{ Icon: YouTube, title: 'YouTube', href: 'https://www.youtube.com/@kristech_io' },
		{ Icon: Twitter, title: 'Twitter', href: 'https://twitter.com/kristech_io' },
		{ Icon: Instagram, title: 'YouTube', href: 'https://instagram.com/kristech_io' }
	];
</script>

<div class="social-card">
	{#each socials as { Icon, title, href }}
		<a {href} aria-label={title}>
			<Icon color={'var(--color-black)'} width={'1.5rem'} height={'1.5rem'} {title} />
		</a>
	{/each}
</div>

<style>
	.social-card {
		@apply flex justify-between gap-2 p-4 bg-[--color-white] rounded-[4px];
	}

	.social-card * path {
		@apply fill-[--color-black];
	}
</style>
