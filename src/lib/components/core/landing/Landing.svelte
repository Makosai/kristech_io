<script>
	import LightSwitch from './pieces/LightSwitch.svelte';
	import Spacer from './pieces/Spacer.svelte';
	import Navigation from './navigation/Navigation.svelte';
	import Title from './navigation/Title.svelte';
	import Fader from '../pages/Fader.svelte';
</script>

<div id="landing">
	<Spacer>
		<LightSwitch />
	</Spacer>
	<Title />
	<Navigation />
</div>

<style>
	#landing {
		@apply min-h-full ml-auto w-full md:w-[60%] flex flex-col pl-4 pb-4 gap-4 bg-[--color-white];

		animation-name: landingAnim;
		animation-duration: 1.5s;
		animation-fill-mode: forwards;
	}

	@media (max-width: 767px) {
		#landing {
			width: 100% !important;
		}
	}

	@keyframes landingAnim {
		0% {
			width: 0px;
			min-height: 100%;
			@apply p-0;
		}

		75.01% {
			width: 0px;
			min-height: 100%;
			@apply p-0;
		}
		75.02% {
			width: 0px;
			min-height: 100%;
			@apply p-0;
		}
		80% {
			@apply pl-4 pb-4;
			min-height: 100%;
			width: 75%;
		}
		100% {
			@apply pl-4 pb-4;
			min-height: 100%;
			width: 60%;
		}
	}

	@keyframes landingAnimMobile {
		0% {
			width: 0px;
			min-height: 100%;
			@apply p-0;
		}

		75.01% {
			width: 0px;
			min-height: 100%;
			@apply p-0;
		}
		75.02% {
			width: 0px;
			min-height: 100%;
			@apply p-0;
		}
		80% {
			@apply pl-4 pb-4;
			min-height: 100%;
			width: 100%;
		}
		100% {
			@apply pl-4 pb-4;
			min-height: 100%;
			width: 100%;
		}
	}
</style>
