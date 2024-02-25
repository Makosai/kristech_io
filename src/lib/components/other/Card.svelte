<div class="card">
	{#if $$slots['header']}
		<div class="header-section">
			<div class="header-name">
				{#if $$slots['lead']}
					<div class="lead">
						<slot name="lead" />
					</div>
				{/if}
				<h3 class="header">
					<slot name="header" />
				</h3>
			</div>
			{#if $$slots['subheader']}
				<strong class="subheader">
					<slot name="subheader" />
				</strong>
			{/if}
		</div>
	{/if}
	<slot />
	{#if $$slots['footer']}
		<div class="footer">
			<slot name="footer" />
		</div>
	{/if}
</div>

<style>
	.card {
		@apply flex flex-col rounded-[4px] bg-[--color-white] text-[--color-black] p-4 border-[1px] border-[--color-black-50];
	}

	.header-section {
		@apply flex flex-col border-b-2 pb-2 mb-2;
	}

	.header {
		@apply font-bold text-lg;
		border-color: rgba(var(--color-dither), 0.15);
	}

  .header-name {
    @apply flex gap-2;
  }

	.subheader {
		@apply text-sm text-[--color-black-75] inline-block;
	}

	.lead {
		@apply text-xl text-[--color-black-75] inline-block;
	}

	.footer {
		@apply flex items-end gap-2 grow;
	}
</style>
