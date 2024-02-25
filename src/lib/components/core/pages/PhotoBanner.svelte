<script>
	/**
	 * @type {string[]}
	 */
	export let defaultset = [
		'1800px',
		'https://images.unsplash.com/photo-1584223783782-4bde1b300193?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&dpr=1&auto=format&fit=crop&w=1999&h=594&q=80 1x, https://images.unsplash.com/photo-1584223783782-4bde1b300193?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&dpr=2&auto=format&fit=crop&w=1999&h=594&q=80 2x'
	];

	/**
	 * @type {string[][]}
	 */
	export let datasets = [
		/* [
			'default',
			'https://images.unsplash.com/photo-1584223783782-4bde1b300193?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&fit=crop&w=1000&h=1000&q=80'
		], */
		[
			'5600px',
			'https://images.unsplash.com/photo-1584223783782-4bde1b300193?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&dpr=1&auto=format&fit=crop&w=5799&h=594&q=80 1x, https://images.unsplash.com/photo-1584223783782-4bde1b300193?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&dpr=2&auto=format&fit=crop&w=5799&h=594&q=80 2x'
		],
		[
			'5400px',
			'https://images.unsplash.com/photo-1584223783782-4bde1b300193?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&dpr=1&auto=format&fit=crop&w=5599&h=594&q=80 1x, https://images.unsplash.com/photo-1584223783782-4bde1b300193?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&dpr=2&auto=format&fit=crop&w=5599&h=594&q=80 2x'
		],
		[
			'5200px',
			'https://images.unsplash.com/photo-1584223783782-4bde1b300193?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&dpr=1&auto=format&fit=crop&w=5399&h=594&q=80 1x, https://images.unsplash.com/photo-1584223783782-4bde1b300193?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&dpr=2&auto=format&fit=crop&w=5399&h=594&q=80 2x'
		],
		[
			'5000px',
			'https://images.unsplash.com/photo-1584223783782-4bde1b300193?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&dpr=1&auto=format&fit=crop&w=5199&h=594&q=80 1x, https://images.unsplash.com/photo-1584223783782-4bde1b300193?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&dpr=2&auto=format&fit=crop&w=5199&h=594&q=80 2x'
		],
		[
			'4800px',
			'https://images.unsplash.com/photo-1584223783782-4bde1b300193?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&dpr=1&auto=format&fit=crop&w=4999&h=594&q=80 1x, https://images.unsplash.com/photo-1584223783782-4bde1b300193?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&dpr=2&auto=format&fit=crop&w=4999&h=594&q=80 2x'
		],
		[
			'4600px',
			'https://images.unsplash.com/photo-1584223783782-4bde1b300193?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&dpr=1&auto=format&fit=crop&w=4799&h=594&q=80 1x, https://images.unsplash.com/photo-1584223783782-4bde1b300193?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&dpr=2&auto=format&fit=crop&w=4799&h=594&q=80 2x'
		],
		[
			'4400px',
			'https://images.unsplash.com/photo-1584223783782-4bde1b300193?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&dpr=1&auto=format&fit=crop&w=4599&h=594&q=80 1x, https://images.unsplash.com/photo-1584223783782-4bde1b300193?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&dpr=2&auto=format&fit=crop&w=4599&h=594&q=80 2x'
		],
		[
			'4200px',
			'https://images.unsplash.com/photo-1584223783782-4bde1b300193?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&dpr=1&auto=format&fit=crop&w=4399&h=594&q=80 1x, https://images.unsplash.com/photo-1584223783782-4bde1b300193?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&dpr=2&auto=format&fit=crop&w=4399&h=594&q=80 2x'
		],
		[
			'4000px',
			'https://images.unsplash.com/photo-1584223783782-4bde1b300193?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&dpr=1&auto=format&fit=crop&w=4199&h=594&q=80 1x, https://images.unsplash.com/photo-1584223783782-4bde1b300193?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&dpr=2&auto=format&fit=crop&w=4199&h=594&q=80 2x'
		],
		[
			'3800px',
			'https://images.unsplash.com/photo-1584223783782-4bde1b300193?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&dpr=1&auto=format&fit=crop&w=3999&h=594&q=80 1x, https://images.unsplash.com/photo-1584223783782-4bde1b300193?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&dpr=2&auto=format&fit=crop&w=3999&h=594&q=80 2x'
		],
		[
			'3600px',
			'https://images.unsplash.com/photo-1584223783782-4bde1b300193?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&dpr=1&auto=format&fit=crop&w=3799&h=594&q=80 1x, https://images.unsplash.com/photo-1584223783782-4bde1b300193?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&dpr=2&auto=format&fit=crop&w=3799&h=594&q=80 2x'
		],
		[
			'3400px',
			'https://images.unsplash.com/photo-1584223783782-4bde1b300193?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&dpr=1&auto=format&fit=crop&w=3599&h=594&q=80 1x, https://images.unsplash.com/photo-1584223783782-4bde1b300193?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&dpr=2&auto=format&fit=crop&w=3599&h=594&q=80 2x'
		],
		[
			'3200px',
			'https://images.unsplash.com/photo-1584223783782-4bde1b300193?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&dpr=1&auto=format&fit=crop&w=3399&h=594&q=80 1x, https://images.unsplash.com/photo-1584223783782-4bde1b300193?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&dpr=2&auto=format&fit=crop&w=3399&h=594&q=80 2x'
		],
		[
			'3000px',
			'https://images.unsplash.com/photo-1584223783782-4bde1b300193?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&dpr=1&auto=format&fit=crop&w=3199&h=594&q=80 1x, https://images.unsplash.com/photo-1584223783782-4bde1b300193?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&dpr=2&auto=format&fit=crop&w=3199&h=594&q=80 2x'
		],
		[
			'2800px',
			'https://images.unsplash.com/photo-1584223783782-4bde1b300193?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&dpr=1&auto=format&fit=crop&w=2999&h=594&q=80 1x, https://images.unsplash.com/photo-1584223783782-4bde1b300193?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&dpr=2&auto=format&fit=crop&w=2999&h=594&q=80 2x'
		],
		[
			'2600px',
			'https://images.unsplash.com/photo-1584223783782-4bde1b300193?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&dpr=1&auto=format&fit=crop&w=2799&h=594&q=80 1x, https://images.unsplash.com/photo-1584223783782-4bde1b300193?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&dpr=2&auto=format&fit=crop&w=2799&h=594&q=80 2x'
		],
		[
			'2400px',
			'https://images.unsplash.com/photo-1584223783782-4bde1b300193?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&dpr=1&auto=format&fit=crop&w=2599&h=594&q=80 1x, https://images.unsplash.com/photo-1584223783782-4bde1b300193?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&dpr=2&auto=format&fit=crop&w=2599&h=594&q=80 2x'
		],
		[
			'2200px',
			'https://images.unsplash.com/photo-1584223783782-4bde1b300193?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&dpr=1&auto=format&fit=crop&w=2399&h=594&q=80 1x, https://images.unsplash.com/photo-1584223783782-4bde1b300193?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&dpr=2&auto=format&fit=crop&w=2399&h=594&q=80 2x'
		],
		[
			'2000px',
			'https://images.unsplash.com/photo-1584223783782-4bde1b300193?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&dpr=1&auto=format&fit=crop&w=2199&h=594&q=80 1x, https://images.unsplash.com/photo-1584223783782-4bde1b300193?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&dpr=2&auto=format&fit=crop&w=2199&h=594&q=80 2x'
		],
		[
			'1800px',
			'https://images.unsplash.com/photo-1584223783782-4bde1b300193?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&dpr=1&auto=format&fit=crop&w=1999&h=594&q=80 1x, https://images.unsplash.com/photo-1584223783782-4bde1b300193?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&dpr=2&auto=format&fit=crop&w=1999&h=594&q=80 2x'
		],
		[
			'1600px',
			'https://images.unsplash.com/photo-1584223783782-4bde1b300193?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&dpr=1&auto=format&fit=crop&w=1799&h=594&q=80 1x, https://images.unsplash.com/photo-1584223783782-4bde1b300193?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&dpr=2&auto=format&fit=crop&w=1799&h=594&q=80 2x'
		],
		[
			'1400px',
			'https://images.unsplash.com/photo-1584223783782-4bde1b300193?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&dpr=1&auto=format&fit=crop&w=1599&h=594&q=80 1x, https://images.unsplash.com/photo-1584223783782-4bde1b300193?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&dpr=2&auto=format&fit=crop&w=1599&h=594&q=80 2x'
		],
		[
			'1200px',
			'https://images.unsplash.com/photo-1584223783782-4bde1b300193?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&dpr=1&auto=format&fit=crop&w=1399&h=594&q=80 1x, https://images.unsplash.com/photo-1584223783782-4bde1b300193?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&dpr=2&auto=format&fit=crop&w=1399&h=594&q=80 2x'
		],
		[
			'1000px',
			'https://images.unsplash.com/photo-1584223783782-4bde1b300193?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&dpr=1&auto=format&fit=crop&w=1199&h=594&q=80 1x, https://images.unsplash.com/photo-1584223783782-4bde1b300193?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&dpr=2&auto=format&fit=crop&w=1199&h=594&q=80 2x'
		],
		[
			'800px',
			'https://images.unsplash.com/photo-1584223783782-4bde1b300193?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&dpr=1&auto=format&fit=crop&w=999&h=594&q=80 1x, https://images.unsplash.com/photo-1584223783782-4bde1b300193?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&dpr=2&auto=format&fit=crop&w=999&h=594&q=80 2x'
		],
		[
			'600px',
			'https://images.unsplash.com/photo-1584223783782-4bde1b300193?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&dpr=1&auto=format&fit=crop&w=799&h=485&q=80 1x, https://images.unsplash.com/photo-1584223783782-4bde1b300193?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&dpr=2&auto=format&fit=crop&w=799&h=485&q=80 2x'
		],
		[
			'400px',
			'https://images.unsplash.com/photo-1584223783782-4bde1b300193?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&dpr=1&auto=format&fit=crop&w=599&h=470&q=80 1x, https://images.unsplash.com/photo-1584223783782-4bde1b300193?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&dpr=2&auto=format&fit=crop&w=599&h=470&q=80 2x'
		],
		[
			'200px',
			'https://images.unsplash.com/photo-1584223783782-4bde1b300193?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&dpr=1&auto=format&fit=crop&w=399&h=440&q=80 1x, https://images.unsplash.com/photo-1584223783782-4bde1b300193?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&dpr=2&auto=format&fit=crop&w=399&h=440&q=80 2x'
		]
	];
</script>

<div class="photo-banner">
	<div class="picture-set">
		<div class="picture-frame">
			<picture class="_2XHNB">
				{#each datasets as dataset}
					<source srcSet={dataset[1]} media="(min-width: {dataset[0]})" />
				{/each}
				<source srcSet={defaultset[1]} />
				<img role="presentation" alt="Lucas Ludwig's photography piece." src={defaultset[1]} />
				<div class="credits">
					Photo by{' '}
					<a href="https://unsplash.com/@luddyphoto">Lucas Ludwig</a>
				</div>
			</picture>
		</div>
		<slot />
	</div>
</div>

<style>
	.photo-banner {
		margin-bottom: 48px;
	}
	.photo-banner .picture-set {
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		position: relative;
		background-color: var(--color-dither);
	}
	.photo-banner .picture-frame {
		position: absolute;
		height: 100%;
		width: 100%;
	}
	.photo-banner .picture-frame picture {
		width: 100%;
		height: 100%;
		display: block;
		position: relative;
	}
	.photo-banner .picture-frame picture::after {
		width: inherit;
		height: inherit;
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		background: linear-gradient(
			180deg,
			rgba(var(--color-dither), 0.38) 0,
			rgba(var(--color-dither), 0.38) 3.5%,
			rgba(var(--color-dither), 0.379) 7%,
			rgba(var(--color-dither), 0.377) 10.35%,
			rgba(var(--color-dither), 0.375) 13.85%,
			rgba(var(--color-dither), 0.372) 17.35%,
			rgba(var(--color-dither), 0.369) 20.85%,
			rgba(var(--color-dither), 0.366) 24.35%,
			rgba(var(--color-dither), 0.364) 27.85%,
			rgba(var(--color-dither), 0.361) 31.35%,
			rgba(var(--color-dither), 0.358) 34.85%,
			rgba(var(--color-dither), 0.355) 38.35%,
			rgba(var(--color-dither), 0.353) 41.85%,
			rgba(var(--color-dither), 0.351) 45.35%,
			rgba(var(--color-dither), 0.35) 48.85%,
			rgba(var(--color-dither), 0.353) 52.35%,
			rgba(var(--color-dither), 0.36) 55.85%,
			rgba(var(--color-dither), 0.371) 59.35%,
			rgba(var(--color-dither), 0.385) 62.85%,
			rgba(var(--color-dither), 0.402) 66.35%,
			rgba(var(--color-dither), 0.42) 69.85%,
			rgba(var(--color-dither), 0.44) 73.35%,
			rgba(var(--color-dither), 0.46) 76.85%,
			rgba(var(--color-dither), 0.48) 80.35%,
			rgba(var(--color-dither), 0.498) 83.85%,
			rgba(var(--color-dither), 0.515) 87.35%,
			rgba(var(--color-dither), 0.529) 90.85%,
			rgba(var(--color-dither), 0.54) 94.35%,
			rgba(var(--color-dither), 0.547) 97.85%,
			rgba(var(--color-dither), 0.55)
		);
	}
	.photo-banner .picture-frame picture img {
		width: 100%;
		height: 100%;
		vertical-align: middle;
		border-style: none;
		font-family: 'object-fit:cover';
		-o-object-fit: cover;
		object-fit: cover;
	}
	.photo-banner .picture-frame picture .credits {
		position: absolute;
		color: var(--color-white);
		font-weight: lighter;
		z-index: 20;
		left: 12px;
		bottom: 24px;
	}
	.photo-banner .picture-frame picture .credits a:hover {
		text-decoration: underline;
	}
</style>
