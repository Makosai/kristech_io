<div class="fader">
	<slot />
</div>

<style>
	.fader {
		opacity: 0;

		animation-name: faderAnim;
		animation-duration: 1.5s;
		animation-fill-mode: forwards;
	}
</style>
