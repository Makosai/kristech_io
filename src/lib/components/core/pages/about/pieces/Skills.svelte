<script>
	// Backend
	import C_Sharp from '$lib/assets/logos/c-sharp.svg';
	import Rust from '$lib/assets/logos/rust.png';
	import CPP from '$lib/assets/logos/cpp.svg';
	import C from '$lib/assets/logos/c.svg';
	import GDScript from '$lib/assets/logos/godot.svg';
	import Go from '$lib/assets/logos/golang.svg';
	import Java from '$lib/assets/logos/java.svg';
	import Python from '$lib/assets/logos/python.svg';
	import PHP from '$lib/assets/logos/php.svg';
	import COBOL from '$lib/assets/logos/cobol.png';

	// Frontend
	import React from '$lib/assets/logos/react.svg';
	import Svelte from '$lib/assets/logos/svelte.svg';
	import HTML5 from '$lib/assets/logos/html5.svg';
	import TailwindCSS from '$lib/assets/logos/tailwindcss.svg';
	import CSS3 from '$lib/assets/logos/css3.svg';
	import SASS from '$lib/assets/logos/sass.svg';
	import Bootstrap from '$lib/assets/logos/bootstrap.svg';
	import MaterialUI from '$lib/assets/logos/material-ui.svg';

	// JavaScript
	import JavaScript from '$lib/assets/logos/javascript.svg';
	import TypeScript from '$lib/assets/logos/typescript.svg';
	import JQuery from '$lib/assets/logos/jquery.png';
	import NodeJS from '$lib/assets/logos/nodejs.svg';

	// Databases
	import MySQL from '$lib/assets/logos/mysql.svg';
	import PostgreSQL from '$lib/assets/logos/postgresql.svg';
	import MongoDB from '$lib/assets/logos/mongodb.svg';
	import SQLite from '$lib/assets/logos/sqlite.svg';
	import Firestore from '$lib/assets/logos/firestore.svg';
	import FirebaseRDB from '$lib/assets/logos/firebase-rdb.svg';

	// Build Tools
	import Webpack from '$lib/assets/logos/webpack.svg';
	import Babel from '$lib/assets/logos/babel.png';
	import Jest from '$lib/assets/logos/jest.svg';
	import NUnit from '$lib/assets/logos/nunit.svg';

	// Artwork
	import Blender3D from '$lib/assets/logos/blender3d.svg';
	import Krita from '$lib/assets/logos/krita.png';
	import Substance from '$lib/assets/logos/substance.svg';
	import ArmorPaint from '$lib/assets/logos/armorpaint.png';
	import QuixelMixer from '$lib/assets/logos/quixelmixer.png';

	// Other
	import Godot from '$lib/assets/logos/godot.svg';
	import Unity from '$lib/assets/logos/unity.png';
	import Unreal from '$lib/assets/logos/unreal.png';
	import Git from '$lib/assets/logos/git.png';
	import Docker from '$lib/assets/logos/docker.svg';
	import Firebase from '$lib/assets/logos/firebase.svg';
	import WordPress from '$lib/assets/logos/wordpress.png';

	import { TabGroup, Tab } from '@skeletonlabs/skeleton';

	$: preloadedImages = [
		// Backend
		C_Sharp,
		Rust,
		CPP,
		C,
		GDScript,
		Go,
		Java,
		Python,
		COBOL,

		// Frontend
		React,
		Svelte,
		HTML5,
		TailwindCSS,
		CSS3,
		SASS,
		Bootstrap,
		MaterialUI,

		// JavaScript
		JavaScript,
		TypeScript,
		JQuery,
		NodeJS,

		// Databases
		MySQL,
		PostgreSQL,
		MongoDB,
		SQLite,
		Firestore,
		FirebaseRDB,

		// Build Tools
		Webpack,
		Babel,
		Jest,
		NUnit,

		// Artwork
		Blender3D,
		Krita,
		Substance,
		ArmorPaint,
		QuixelMixer,

		// Other
		Godot, // The same as GDScript but let's add it here for now
		Unity,
		Unreal,
		Git,
		Docker,
		Firebase,
		WordPress
	];

	let tabSet = 0;
</script>

<svelte:head>
	{#each preloadedImages as image}
		<link rel="preload" as="image" href={image} />
	{/each}
</svelte:head>

<TabGroup
	class="text-[--color-black] font-semibold"
	border="border-b border-[--color-black-75]"
	active="text-[--color-black] border-b-2 border-[--color-black-75]"
	hover="hover:text-[--color-black] hover:opacity-100 opacity-75"
	justify="center"
>
	<Tab bind:group={tabSet} name="backend" value={0}>Backend</Tab>
	<Tab bind:group={tabSet} name="frontend" value={1}>Frontend</Tab>
	<Tab bind:group={tabSet} name="javascript" value={2}>JavaScript</Tab>
	<Tab bind:group={tabSet} name="databases" value={3}>Databases</Tab>
	<Tab bind:group={tabSet} name="build-tools" value={4}>Build Tools</Tab>
	<Tab bind:group={tabSet} name="artwork" value={5}>Artwork</Tab>
	<Tab bind:group={tabSet} name="other" value={6}>Other</Tab>
	<svelte:fragment slot="panel">
		{#if tabSet === 0}
			<div data-section="backend" class="section">
				<div class="grid grid-cols-3 gap-4">
					<div class="skill">
						<img src={C_Sharp} alt="C#" width="48" height="48" />
						<p>C#</p>
					</div>
					<div class="skill">
						<img src={Rust} alt="Rust" width="44" height="44" class="invert-img" />
						<p>Rust</p>
					</div>
					<div class="skill">
						<img src={CPP} alt="C++" width="48" height="48" />
						<p>C++</p>
					</div>
					<div class="skill">
						<img src={C} alt="C" width="48" height="48" />
						<p>C</p>
					</div>
					<div class="skill">
						<img src={GDScript} alt="GDScript" width="48" height="48" />
						<p>GDScript</p>
					</div>
					<div class="skill">
						<img src={Go} alt="Go" width="64" height="48" />
						<p>Go</p>
					</div>
					<div class="skill">
						<img src={Java} alt="Java" width="64" height="48" />
						<p>Java</p>
					</div>
					<div class="skill">
						<img src={Python} alt="Python" width="72" height="72" />
						<p>Python</p>
					</div>
					<div class="skill">
						<img src={PHP} alt="PHP" width="64" height="48" />
						<p>PHP</p>
					</div>
					<div class="skill">
						<img src={COBOL} alt="COBOL" width="96" height="64" class="bright-img" />
						<p>COBOL</p>
					</div>
				</div>
			</div>
		{:else if tabSet === 1}
			<div data-section="frontend" class="section">
				<div class="grid grid-cols-3 gap-4">
					<div class="skill">
						<img src={React} alt="React" width="48" height="48" />
						<p>React</p>
					</div>
					<div class="skill">
						<img src={Svelte} alt="Svelte" width="40" height="40" />
						<p>Svelte</p>
					</div>
					<div class="skill">
						<img src={HTML5} alt="HTML5" width="64" height="64" />
						<p>HTML5</p>
					</div>
					<div class="skill">
						<img src={TailwindCSS} alt="Tailwind CSS" width="42" height="42" />
						<p>Tailwind CSS</p>
					</div>
					<div class="skill">
						<img src={CSS3} alt="CSS3" width="64" height="64" />
						<p>CSS3</p>
					</div>
					<div class="skill">
						<img src={SASS} alt="SASS" width="64" height="64" />
						<p>SASS</p>
					</div>
					<div class="skill">
						<img src={Bootstrap} alt="Bootstrap" width="48" height="48" />
						<p>Bootstrap</p>
					</div>
					<div class="skill">
						<img src={MaterialUI} alt="MaterialUI" width="48" height="48" />
						<p>MaterialUI</p>
					</div>
				</div>
			</div>
		{:else if tabSet === 2}
			<div data-section="javascript" class="section">
				<div class="grid grid-cols-3 gap-4">
					<div class="skill">
						<img src={JavaScript} alt="JavaScript" width="48" height="48" />
						<p>JavaScript</p>
					</div>
					<div class="skill">
						<img src={TypeScript} alt="TypeScript" width="48" height="48" />
						<p>TypeScript</p>
					</div>
					<div class="skill">
						<img src={JQuery} alt="JQuery" width="72" height="72" class="brighter-img" />
						<p>JQuery</p>
					</div>
					<div class="skill">
						<img src={NodeJS} alt="NodeJS" width="48" height="48" />
						<p>NodeJS</p>
					</div>
				</div>
			</div>
		{:else if tabSet === 3}
			<div data-section="databases" class="section">
				<div class="grid grid-cols-3 gap-4">
					<div class="skill">
						<img src={MySQL} alt="MySQL" width="64" height="64" />
						<p>MySQL</p>
					</div>
					<div class="skill">
						<img src={PostgreSQL} alt="PostgreSQL" width="42" height="42" />
						<p>PostgreSQL</p>
					</div>
					<div class="skill">
						<img src={MongoDB} alt="MongoDB" width="96" height="96" />
						<p>MongoDB</p>
					</div>
					<div class="skill">
						<img src={SQLite} alt="SQLite" width="64" height="64" />
						<p>SQLite</p>
					</div>
					<div class="skill">
						<img src={Firestore} alt="Firestore" width="52" height="52" />
						<p>Firestore</p>
					</div>
					<div class="skill">
						<img src={FirebaseRDB} alt="Firebase RDB" width="52" height="52" />
						<p>Firebase RDB</p>
					</div>
				</div>
			</div>
		{:else if tabSet === 4}
			<div data-section="build-tools" class="section">
				<div class="grid grid-cols-3 gap-4">
					<div class="skill">
						<img src={Webpack} alt="Webpack" width="48" height="48" />
						<p>Webpack</p>
					</div>
					<div class="skill">
						<img src={Babel} alt="Babel" width="64" height="64" />
						<p>Babel</p>
					</div>
					<div class="skill">
						<img src={Jest} alt="Jest" width="48" height="48" />
						<p>Jest</p>
					</div>
					<div class="skill">
						<img src={NUnit} alt="NUnit" width="48" height="48" />
						<p>NUnit</p>
					</div>
				</div>
			</div>
		{:else if tabSet === 5}
			<div data-section="artwork" class="section">
				<div class="grid grid-cols-3 gap-4">
					<div class="skill">
						<img src={Blender3D} alt="Blender3D" width="48" height="48" />
						<p>Blender3D</p>
					</div>
					<div class="skill">
						<img src={Krita} alt="Krita" width="48" height="48" />
						<p>Krita</p>
					</div>
					<div class="skill">
						<img src={Substance} alt="Substance" width="48" height="48" />
						<p>Substance</p>
					</div>
					<div class="skill">
						<img src={ArmorPaint} alt="ArmorPaint" width="40" height="40" />
						<p>ArmorPaint</p>
					</div>
					<div class="skill">
						<img src={QuixelMixer} alt="QuixelMixer" width="40" height="40" />
						<p>QuixelMixer</p>
					</div>
				</div>
			</div>
		{:else if tabSet === 6}
			<div data-section="other" class="section">
				<div class="grid grid-cols-3 gap-4">
					<div class="skill">
						<img src={Godot} alt="Godot" width="48" height="48" />
						<p>Godot Engine</p>
					</div>
					<div class="skill">
						<img src={Unity} alt="Unity" width="64" height="64" class="brighter-img" />
						<p>Unity Engine</p>
					</div>
					<div class="skill">
						<img src={Unreal} alt="Unreal" width="48" height="48" class="invert-img" />
						<p>Unreal Engine</p>
					</div>
					<div class="skill">
						<img src={Git} alt="Git" width="42" height="42" />
						<p>Git</p>
					</div>
					<div class="skill">
						<img src={Docker} alt="Docker" width="48" height="48" />
						<p>Docker</p>
					</div>
					<div class="skill">
						<img src={Firebase} alt="Firebase" width="52" height="52" />
						<p>Firebase</p>
					</div>
					<div class="skill">
						<img src={WordPress} alt="WordPress" width="52" height="52" class="invert-img" />
						<p>WordPress</p>
					</div>
				</div>
			</div>
		{/if}
	</svelte:fragment>
</TabGroup>

<style>
	:global(html[data-theme-mode='dark']) .bright-img {
		@apply brightness-[2.25];
	}

	:global(html[data-theme-mode='dark']) .brighter-img {
		--tw-brightness: brightness(100);
		filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert)
			var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
	}

	:global(html[data-theme-mode='dark']) .invert-img {
		@apply invert;
	}

	.skill {
		@apply relative rounded-full bg-[--color-white] h-24 w-24 flex flex-col text-[--color-black] font-semibold justify-center items-center border-4 border-[--color-black-50] shadow-lg;
	}

	.skill p {
		@apply absolute opacity-0 text-center;
		transition: opacity 0.2s;
	}

	.skill img {
		@apply opacity-100;
		transition: opacity 0.2s;
	}

	.skill:hover p {
		@apply opacity-100;
	}

	.skill:hover img {
		@apply opacity-25;
	}
</style>
