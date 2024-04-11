<!-- Breadcrumb.svelte -->
<!--
  The purpose of this is to have a navbar at the top of the screen
  that fades when the user scrolls down and fades back in when the
  user scrolls up.

  Additionally, the navbar fades in when the user hovers over it if
  it is faded out.

  The breadcrumbs are Home, About Me, Portfolio, Blog, and Contact.
-->

<script>
	import { onMount } from 'svelte';
	// import { fade } from '$lib/utils/animation';

	let isFaded = false;
	let isHovered = false;

	onMount(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 0) {
				isFaded = true;
			} else {
				isFaded = false;
			}
		});
	});

	function handleMouseEnter() {
		isHovered = true;
	}

	function handleMouseLeave() {
		isHovered = false;
	}
</script>

<div
	class="breadcrumb"
	style="opacity: {isFaded || isHovered ? 1 : 0}"
	on:mouseenter={handleMouseEnter}
	on:mouseleave={handleMouseLeave}
	aria-label="Breadcrumb"
	role="navigation"
>
	<div class="container mx-auto flex justify-between items-center py-4">
		<a href="/" class="text-lg font-bold">Home</a>
		<div class="flex gap-4">
			<a href="/about">About Me</a>
			<a href="/portfolio">Portfolio</a>
			<a href="/blog">Blog</a>
			<a href="/contact">Contact</a>
		</div>
	</div>
</div>

<style>
	/* This is the navbar that fades in and out */
	.breadcrumb {
		@apply fixed top-0 left-0 w-full z-50 bg-[var(--color-white)] shadow-md;
		transition: opacity 0.5s;
	}

	.breadcrumb a {
		@apply text-lg font-bold;
	}

	.breadcrumb a:hover {
		@apply text-[var(--color-red)];
	}
</style>
