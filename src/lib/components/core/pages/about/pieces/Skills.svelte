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

<div class="rounded-full bg-[--color-white]">
	<div data-section="frontend" class="section">
		<h3>Frontend</h3>
		<div class="grid grid-cols-3 gap-4">
			<img src={React} alt="React" width="32" height="32" />
			<img src={HTML5} alt="HTML5" width="32" height="32" />
			<img src={CSS3} alt="CSS3" width="32" height="32" />
			<img src={SASS} alt="SASS" width="32" height="32" />
			<img src={Bootstrap} alt="Bootstrap" width="32" height="32" />
			<img src={MaterialUI} alt="MaterialUI" width="32" height="32" />
		</div>
	</div>
	<div data-section="backend" class="section">
		<h3>Backend</h3>
		<div class="grid grid-cols-3 gap-4">
			<img src={C_Sharp} alt="C#" width="32" height="32" />
			<img src={CPP} alt="C++" width="32" height="32" />
			<img src={C} alt="C" width="32" height="32" />
			<img src={Go} alt="Go" width="32" height="32" />
			<img src={Java} alt="Java" width="32" height="32" />
			<img src={Python} alt="Python" width="32" height="32" />
			<img src={PHP} alt="PHP" width="32" height="32" />
			<img src={COBOL} alt="COBOL" width="32" height="32" />
		</div>
	</div>
	<div data-section="javascript" class="section">
		<h3>JavaScript</h3>
		<div class="grid grid-cols-3 gap-4">
			<img src={JavaScript} alt="JavaScript" width="32" height="32" />
			<img src={TypeScript} alt="TypeScript" width="32" height="32" />
			<img src={JQuery} alt="JQuery" width="32" height="32" />
			<img src={NodeJS} alt="NodeJS" width="32" height="32" />
		</div>
	</div>
	<div data-section="databases" class="section">
		<h3>Databases</h3>
		<div class="grid grid-cols-3 gap-4">
			<img src={MySQL} alt="MySQL" width="32" height="32" />
			<img src={MongoDB} alt="MongoDB" width="32" height="32" />
			<img src={Firestore} alt="Firestore" width="32" height="32" />
			<img src={FirebaseRDB} alt="FirebaseRDB" width="32" height="32" />
		</div>
	</div>
	<div data-section="build-tools" class="section">
		<h3>Build Tools</h3>
		<div class="grid grid-cols-3 gap-4">
			<img src={Webpack} alt="Webpack" width="32" height="32" />
			<img src={Babel} alt="Babel" width="32" height="32" />
			<img src={Jest} alt="Jest" width="32" height="32" />
			<img src={NUnit} alt="NUnit" width="32" height="32" />
		</div>
	</div>
	<div data-section="artwork" class="section">
		<h3>Artwork</h3>
		<div class="grid grid-cols-3 gap-4">
			<img src={Blender3D} alt="Blender3D" width="32" height="32" />
			<img src={Krita} alt="Krita" width="32" height="32" />
			<img src={Substance} alt="Substance" width="32" height="32" />
		</div>
	</div>
	<div data-section="other" class="section">
		<h3>Other</h3>
		<div class="grid grid-cols-3 gap-4">
			<img src={Unity} alt="Unity" width="32" height="32" />
			<img src={Firebase} alt="Firebase" width="32" height="32" />
			<img src={WordPress} alt="WordPress" width="32" height="32" />
		</div>
	</div>
</div>

<style>
</style>
