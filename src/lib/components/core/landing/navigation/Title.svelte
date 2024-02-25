<div id="title">
	<div>
		<div class="block">
			<div class="text-[10rem]">kris</div>
		</div>
		<br />
		<div class="block">
			<div class="text-[10rem]">tech</div>
			<div class="text-[9rem] text-[var(--color-red)]">.</div>
			<div class="lowercase text-[1.5rem]">io</div>
		</div>
	</div>
</div>

<style>
	#title {
		@apply flex items-center grow uppercase font-black;
		font-family: 'Roboto', sans-serif;

		animation-name: faderAnim;
		animation-duration: 1.5s;
		animation-fill-mode: forwards;
		transition: color 0.15s ease;
	}

	#title div {
		@apply inline-block;
		line-height: normal;
	}
</style>
