<script>
	import BlobB from '$lib/assets/images/blob-b.svelte';
	import BlobT from '$lib/assets/images/blob-t.svelte';
	import Circle from '$lib/assets/images/circle.svelte';
</script>

<div>
	<div id="background">
		<div class="top">
			<BlobT />
		</div>
		<div class="bottom">
			<BlobB />
		</div>
		<div class="tl">
			<Circle />
		</div>
	</div>
	<div>
		<slot />
	</div>
</div>

<style>
	#background {
		@apply w-full h-full fixed z-[-1];
	}

	#background .top {
		@apply absolute right-0;
	}

  #background .top :global(path) {
		@apply !fill-[--color-white];
	}

	#background .bottom {
		@apply absolute bottom-0;
	}

	#background .bottom :global(path) {
		@apply !fill-[--color-white];
	}

	#background .tl {
		@apply absolute;
	}

  #background .tl :global(circle) {
		@apply !fill-[--color-white];
	}
</style>
