<script>
	import Title from './Title.svelte';

	const sections = [
		{ name: 'About me', url: '#about' },
		{ name: 'Portfolio', url: '#portfolio' },
		{ name: 'Blog', url: '#blog' },
		{ name: 'Contact', url: '#contact' }
	];

	/**
	 * @param {{ preventDefault: () => void; currentTarget: any; }} e
	 */
	function handleAnchorClick(e) {
		e.preventDefault();
		const link = e.currentTarget;
		const anchorId = new URL(link.href).hash.replace('#', '');
		const anchor = document.getElementById(anchorId);

		if (anchor == null) return;

		window.scrollTo({
			top: anchor.offsetTop,
			behavior: 'smooth'
		});
	}
</script>

<div id="navigation">
	<ul>
		{#each sections as section}
			<li class="nav-item">
				<a class="un-a" href={section.url} on:click={handleAnchorClick}>{section.name}</a>
			</li>
		{/each}
	</ul>
</div>

<style>
	#navigation {
		@apply flex flex-col grow justify-center h-full uppercase font-bold text-lg;

		animation-name: faderAnim;
		animation-duration: 1.5s;
		animation-fill-mode: forwards;
	}

	.nav-item {
		transition: color 0.1s linear;
	}

	.nav-item:hover {
		color: var(--color-red);
	}

	.nav-item:before {
		@apply inline-block my-auto bottom-full;
		background-color: var(--color-black);
		content: '';
		opacity: 0;
		width: 0.5rem;
		height: 0.5rem;
		border-radius: 1rem;
		z-index: -1;
		transition: none;
	}

	.nav-item:hover:before {
		content: '';
		opacity: 1;
		width: 0.5rem;
		height: 0.5rem;
		background-color: var(--color-red);
		border-radius: 1rem;
		margin-right: 0.25rem;
		transition: background-color 0.15s ease-in;
		z-index: 1;
	}
</style>
