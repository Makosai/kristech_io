<script>
	// Frontend
	import React from '$lib/assets/logos/react.svg';
	// import Svelte from '$lib/assets/logos/svelte.svg';
	import HTML5 from '$lib/assets/logos/html5.svg';
	import CSS3 from '$lib/assets/logos/css3.svg';
	import SASS from '$lib/assets/logos/sass.svg';
	// import TailwindCSS from '$lib/assets/logos/tailwindcss.svg';
	import Bootstrap from '$lib/assets/logos/bootstrap.svg';
	import MaterialUI from '$lib/assets/logos/material-ui.svg';

	// Backend
	import C_Sharp from '$lib/assets/logos/c-sharp.svg';
	// import Rust from '$lib/assets/logos/rust.svg';
	import CPP from '$lib/assets/logos/cpp.svg';
	import C from '$lib/assets/logos/c.svg';
	// import GDScript from '$lib/assets/logos/godot.svg';
	import Go from '$lib/assets/logos/golang.svg';
	import Java from '$lib/assets/logos/java.svg';
	import Python from '$lib/assets/logos/python.svg';
	import PHP from '$lib/assets/logos/php.svg';
	import COBOL from '$lib/assets/logos/cobol.png';

	// JavaScript
	import JavaScript from '$lib/assets/logos/javascript.svg';
	import TypeScript from '$lib/assets/logos/typescript.svg';
	import JQuery from '$lib/assets/logos/jquery.svg';
	import NodeJS from '$lib/assets/logos/nodejs.svg';

	// Databases
	import MySQL from '$lib/assets/logos/mysql.svg';
	// import PostgreSQL from '$lib/assets/logos/postgresql.svg';
	import MongoDB from '$lib/assets/logos/mongodb.svg';
	// import SQLite from '$lib/assets/logos/sqlite.svg';
	import Firestore from '$lib/assets/logos/firestore.svg';
	import FirebaseRDB from '$lib/assets/logos/firebase-rdb.svg';

	// Build Tools
	import Webpack from '$lib/assets/logos/webpack.svg';
	import Babel from '$lib/assets/logos/babel.svg';
	import Jest from '$lib/assets/logos/jest.svg';
	import NUnit from '$lib/assets/logos/nunit.svg';

	// Artwork
	import Blender3D from '$lib/assets/logos/blender3d.svg';
	import Krita from '$lib/assets/logos/krita.png';
	import Substance from '$lib/assets/logos/substance.svg';
	// import ArmorPaint from '$lib/assets/logos/armorpaint.svg';
	// import QuixelMixer from '$lib/assets/logos/quixel-mixer.svg';

	// Other
	// import Godot from '$lib/assets/logos/godot.svg';
	import Unity from '$lib/assets/logos/unity.svg';
	// import Unreal from '$lib/assets/logos/unreal.svg';
	// import Git from '$lib/assets/logos/git.svg';
	// import Docker from '$lib/assets/logos/docker.svg';
	import Firebase from '$lib/assets/logos/firebase.svg';
	import WordPress from '$lib/assets/logos/wordpress.svg';
</script>

<div>
	<div data-section="backend" class="section">
		<h3>Backend</h3>
		<div class="grid grid-cols-3 gap-4">
			<div class="skill"><img src={C_Sharp} alt="C#" width="48" height="48" /></div>
			<div class="skill"><img src={CPP} alt="C++" width="48" height="48" /></div>
			<div class="skill"><img src={C} alt="C" width="48" height="48" /></div>
			<div class="skill"><img src={Go} alt="Go" width="64" height="48" /></div>
			<div class="skill"><img src={Java} alt="Java" width="64" height="48" /></div>
			<div class="skill"><img src={Python} alt="Python" width="64" height="48" /></div>
			<div class="skill"><img src={PHP} alt="PHP" width="64" height="48" /></div>
			<div class="skill"><img src={COBOL} alt="COBOL" width="64" height="48" /></div>
		</div>
	</div>
	<div data-section="frontend" class="section">
		<h3>Frontend</h3>
		<div class="grid grid-cols-3 gap-4">
			<div class="skill">
				<img src={React} alt="React" width="48" height="48" />
				<p>React</p>
			</div>
			<div class="skill"><img src={HTML5} alt="HTML5" width="48" height="48" /></div>
			<div class="skill"><img src={CSS3} alt="CSS3" width="48" height="48" /></div>
			<div class="skill"><img src={SASS} alt="SASS" width="48" height="48" /></div>
			<div class="skill"><img src={Bootstrap} alt="Bootstrap" width="48" height="48" /></div>
			<div class="skill"><img src={MaterialUI} alt="MaterialUI" width="48" height="48" /></div>
		</div>
	</div>
	<div data-section="javascript" class="section">
		<h3>JavaScript</h3>
		<div class="grid grid-cols-3 gap-4">
			<div class="skill"><img src={JavaScript} alt="JavaScript" width="48" height="48" /></div>
			<div class="skill"><img src={TypeScript} alt="TypeScript" width="48" height="48" /></div>
			<div class="skill"><img src={JQuery} alt="JQuery" width="48" height="48" /></div>
			<div class="skill"><img src={NodeJS} alt="NodeJS" width="48" height="48" /></div>
		</div>
	</div>
	<div data-section="databases" class="section">
		<h3>Databases</h3>
		<div class="grid grid-cols-3 gap-4">
			<div class="skill"><img src={MySQL} alt="MySQL" width="48" height="48" /></div>
			<div class="skill"><img src={MongoDB} alt="MongoDB" width="48" height="48" /></div>
			<div class="skill"><img src={Firestore} alt="Firestore" width="48" height="48" /></div>
			<div class="skill"><img src={FirebaseRDB} alt="FirebaseRDB" width="48" height="48" /></div>
		</div>
	</div>
	<div data-section="build-tools" class="section">
		<h3>Build Tools</h3>
		<div class="grid grid-cols-3 gap-4">
			<div class="skill"><img src={Webpack} alt="Webpack" width="48" height="48" /></div>
			<div class="skill"><img src={Babel} alt="Babel" width="48" height="48" /></div>
			<div class="skill"><img src={Jest} alt="Jest" width="48" height="48" /></div>
			<div class="skill"><img src={NUnit} alt="NUnit" width="48" height="48" /></div>
		</div>
	</div>
	<div data-section="artwork" class="section">
		<h3>Artwork</h3>
		<div class="grid grid-cols-3 gap-4">
			<div class="skill"><img src={Blender3D} alt="Blender3D" width="48" height="48" /></div>
			<div class="skill"><img src={Krita} alt="Krita" width="48" height="48" /></div>
			<div class="skill"><img src={Substance} alt="Substance" width="48" height="48" /></div>
		</div>
	</div>
	<div data-section="other" class="section">
		<h3>Other</h3>
		<div class="grid grid-cols-3 gap-4">
			<div class="skill"><img src={Unity} alt="Unity" width="48" height="48" /></div>
			<div class="skill"><img src={Firebase} alt="Firebase" width="48" height="48" /></div>
			<div class="skill"><img src={WordPress} alt="WordPress" width="48" height="48" /></div>
		</div>
	</div>
</div>

<style>
	.skill {
		@apply rounded-full bg-[--color-white] h-24 w-24 flex flex-col text-[--color-black] font-semibold justify-center items-center border-4 border-[--color-black-50] shadow-lg;
	}
</style>
