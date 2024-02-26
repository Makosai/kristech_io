<script>
	import Fader from '$lib/components/core/pages/Fader.svelte';
	import AboutMe from '$lib/components/core/pages/about/AboutMe.svelte';
	import Meta from '$lib/components/head/Meta.svelte';
</script>

<Fader>
	<div class="bg-transparent">
		<AboutMe />
	</div>
</Fader>

<Meta>
	<script type="application/ld+json" slot="structured">
		{
			"@context": "https://schema.org/",
			"@type": "WebSite",
			"name": "Kristopher Ali | kristech.io",
			"url": "https://kristech.io"
		}
	</script>
</Meta>
