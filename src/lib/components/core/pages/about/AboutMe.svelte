<script>
	import ItsaMee from './pieces/ItsaMee.svelte';

	import Info from './pieces/Info.svelte';
	import SocialCard from './pieces/SocialCard.svelte';
	import PhotoBanner from '../PhotoBanner.svelte';
	import Slogan from './pieces/Slogan.svelte';
</script>

<div id="about" class="section about-me text-[--color-white] bg-[--color-red]">
	<PhotoBanner>
		<div class="content flex flex-col justify-center items-center p-10">
			<ItsaMee />
			<Info />
			<SocialCard />
		</div>
	</PhotoBanner>
	<div class="me">
		<h2>History</h2>
		<p>
			Back in 2012 I worked on a project that enabled a community of other developers to upload and host their projects for free. The only
			requirement was that their idea has to be unique. The exception to this requirement, which also funded the servers, was that they
			could pay to skip this application process. This wasn't the beginning of my programming journey. But, it was the catalyst that led me
			to jump into the deep end.
		</p>

		<p>
			Shortly after that, I jumped straight into C# and started programming a chat bot with WebSockets. Back then, that was a different
			beast. This sparked my love for developing networking infrastructures. Now, I look at using Sockets and HTTP calls as a fun and simple
			task.
		</p>

		<p>
			Fast-forward to today and I've worked with a <a href="https://www.freshlime.com">customer interaction platform</a>
			and a <a href="https://adigma.io">digital marketing</a> company. I also acted as the CTO for LetsLiink and helped to get redevelop
			their app, eliminating existing bugs and designing. While focusing on game development, I also worked on an undisclosed 3D game that
			and helped develop the web-version of <a href="https://quikmoji.com">QuikMoji</a>.
		</p>

		<h2>My Focus Today</h2>

		<p>
			Now my primary focus is improving my skills in languages such as C++, Rust, and GoLang. While I have several years of experience in
			languages like C#, PHP, and various web frameworks, my experience with C++, Rust, and Go are limited.
		</p>

		<p>
			For 2024, I'll be primarily working on <a href="https://playreia.com">Reia</a> an action adventure MMO that uses Godot's GDScript and Rust. On the side I'll be working on <a href="https://github.com/Quaint-Studios/Sustenet">Sustenet</a> that I'll reprogram from C# to C++ to be used with Reia, <a href="https://github.com/Makosai/VISP">VISP</a> (Video - Image - Sound - Post) with Rust & Dioxus, and <a href="https://github.com/Makosai/Nyxy">Nyxy</a> a Game Engine built with C++ as well as a small Simulation game in it as well. All of these are to improve my skills in various areas, including art and collaboration.
		</p>
	</div>
</div>

<style>
	.content {
		@apply relative z-10;
	}
</style>
