<script>
</script>

<div id="loader">
	<div id="dot"></div>
</div>

<style>
	#loader {
		@apply fixed flex justify-center items-center min-h-full min-w-full bg-[--color-red];

		animation-name: loaderAnim;
		animation-duration: 1.5s;
		animation-fill-mode: forwards;
	}

	#dot {
		@apply w-10 h-10 inline-block rounded-full bg-[--color-white] mx-auto;

		animation-name: dotAnim;
		animation-duration: 1.5s;
		animation-fill-mode: forwards;
		transition: background-color 0.25s ease;
	}

	@keyframes loaderAnim {
		0% {
      display: flex;
      z-index: inherit;
		}

		60% {
      display: flex;
      z-index: inherit;
		}

		100% {
      @apply hidden;
      z-index: -10;
		}
	}

	@keyframes dotAnim {
		0% {
			transform: scale(1);
		}
		50% {
			transform: scale(4);
		}
		70% {
			transform: scale(0);
			margin-right: auto;
			width: 40px;
			height: 40px;
			border-radius: 100%;
		}
		75.01% {
			transform: scale(0);
			margin-right: 0;
			width: 0px;
			height: auto;
			min-height: 100%;
			border-radius: 0;
		}
		75.02% {
			transform: scale(1);
			margin-right: 0;
			width: 0px;
			height: auto;
			min-height: 100%;
			border-radius: 0;
		}
		80% {
			transform: scale(1);
			margin-right: 0;
			width: 65%;
			height: auto;
			min-height: 100%;
			border-radius: 0;
		}
		100% {
			transform: scale(1);
			margin-right: 0;
			width: 60%;
			height: auto;
			min-height: 100%;
			border-radius: 0;
		}
	}
</style>
