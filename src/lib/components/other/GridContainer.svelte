<div class="grid">
	<slot />
</div>

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
		grid-gap: 1rem;
	}

  @media (min-width: 768px) {
    .grid {
      grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
    }
  }
</style>
