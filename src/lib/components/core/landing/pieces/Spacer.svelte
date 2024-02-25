<div class="spacer">
	<slot />
</div>

<style>
	.spacer {
		@apply h-full w-full;

		animation-name: loaderAnim;
		animation-duration: 1.5s;
		animation-fill-mode: forwards;
	}
</style>
