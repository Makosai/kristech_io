<script>
	import Slogan from "./Slogan.svelte";

</script>
<div class="info">
	<div class="name">Kristopher Ali</div>
	<div class="location">Tampa, FL</div>
  <Slogan />
</div>

<style>
  .info {
    @apply flex flex-col justify-center items-center mb-6;
  }

	.name {
		@apply text-xl font-bold mt-4;
	}

	.location {
		@apply text-base mb-2;
	}
</style>
