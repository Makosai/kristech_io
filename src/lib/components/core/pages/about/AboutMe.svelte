<script>
	import ItsaMee from './pieces/ItsaMee.svelte';

	import Info from './pieces/Info.svelte';
	import SocialCard from './pieces/SocialCard.svelte';
	import PhotoBanner from '../PhotoBanner.svelte';
	import Slogan from './pieces/Slogan.svelte';
	import GridContainer from '$lib/components/other/GridContainer.svelte';
	import Card from '$lib/components/other/Card.svelte';
	import Skills from './pieces/Skills.svelte';
</script>

<div id="about" class="section about-me text-[--color-white] bg-transparent">
	<PhotoBanner>
		<div class="content flex flex-col justify-center items-center p-10 pb-14">
			<ItsaMee />
			<Info />
			<SocialCard />
		</div>
	</PhotoBanner>
	<div class="me section-container">
		<div class="h1">
			•
			<h1>About Me</h1>
			•
		</div>
		<h2>Skills</h2>
		<Skills />

		<h2>Experiences</h2>

		<GridContainer>
			<Card>
				<svelte:fragment slot="header">Founder</svelte:fragment>
				<svelte:fragment slot="subheader">Quaint Studios <br /> Dec 2016 - Present</svelte:fragment>

				<svelte:fragment slot="footer">
					<span class="badge variant-filled">GDScript</span>
					<span class="badge variant-filled">Rust</span>
					<span class="badge variant-filled">C++</span>
					<span class="badge variant-filled">C#</span>
					<span class="badge variant-filled">Go</span>
				</svelte:fragment>
			</Card>
			<Card>
				<svelte:fragment slot="header">Chief Tech Officer</svelte:fragment>
				<svelte:fragment slot="subheader">LetsLiink <br /> Oct 2021 - March 2023</svelte:fragment>

				<svelte:fragment slot="footer">
					<span class="badge variant-filled">Flutter</span>
					<span class="badge variant-filled">iOS</span>
					<span class="badge variant-filled">Android</span>
					<span class="badge variant-filled">Large Team</span>
				</svelte:fragment>
			</Card>
			<Card>
				<svelte:fragment slot="header">Lead Software Engineer</svelte:fragment>
				<svelte:fragment slot="subheader">Alukos <br /> Apr 2019 - Present</svelte:fragment>

				<svelte:fragment slot="footer">
					<span class="badge variant-filled">Node.js</span>
					<span class="badge variant-filled">Express</span>
					<span class="badge variant-filled">React</span>
					<span class="badge variant-filled">Web</span>
				</svelte:fragment>
			</Card>
			<Card>
				<svelte:fragment slot="header">Tutor @ Georgia Tech</svelte:fragment>
				<svelte:fragment slot="subheader">Trilogy <br /> Nov 2019 - Present</svelte:fragment>

				<svelte:fragment slot="footer">
					<span class="badge variant-filled">JavaScript</span>
					<span class="badge variant-filled">JQuery</span>
					<span class="badge variant-filled">Teaching</span>
				</svelte:fragment>
			</Card>
			<Card>
				<svelte:fragment slot="header">Lead Programmer</svelte:fragment>
				<svelte:fragment slot="subheader">Vercer Entertainment <br /> Nov 2019 - Feb 2022</svelte:fragment>

				<svelte:fragment slot="footer">
					<span class="badge variant-filled">C#</span>
					<span class="badge variant-filled">Unity</span>
					<span class="badge variant-filled">MongoDB</span>
					<span class="badge variant-filled">Desktop</span>
				</svelte:fragment>
			</Card>
			<Card>
				<svelte:fragment slot="header">Lead Software Engineer</svelte:fragment>
				<svelte:fragment slot="subheader">Virl <br /> Jan 2018 - Mar 2019</svelte:fragment>

				<svelte:fragment slot="footer">
					<span class="badge variant-filled">Node.js</span>
					<span class="badge variant-filled">Express</span>
					<span class="badge variant-filled">React</span>
					<span class="badge variant-filled">Web</span>
				</svelte:fragment>
			</Card>
			<Card>
				<svelte:fragment slot="header">Full Stack Engineer</svelte:fragment>
				<svelte:fragment slot="subheader">Vercer Entertainment <br /> Feb 2016 - Jun 2016</svelte:fragment>

				<svelte:fragment slot="footer">
					<span class="badge variant-filled">C#</span>
					<span class="badge variant-filled">Unity</span>
					<span class="badge variant-filled">iOS</span>
					<span class="badge variant-filled">Android</span>
				</svelte:fragment>
			</Card>
		</GridContainer>

		<h2>History</h2>

		<GridContainer>
			<Card>
				<svelte:fragment slot="lead">I.</svelte:fragment><svelte:fragment slot="header">Dev Community Hosting</svelte:fragment>
				<p>
					Back in 2012 I worked on a project that enabled a community of other developers to upload and host their projects for free. The
					only requirement was that their idea has to be unique. The exception to this requirement, which also funded the servers, was that
					they could pay to skip this application process. This wasn't the beginning of my programming journey. But, it was the catalyst
					that led me to jump into the deep end.
				</p>
			</Card>

			<Card>
				<svelte:fragment slot="lead">II.</svelte:fragment><svelte:fragment slot="header">Sockets - Networking and APIs</svelte:fragment>
				<p>
					Shortly after that, I jumped straight into C# and started programming a chat bot with WebSockets. Back then, that was a different
					beast. This sparked my love for developing networking infrastructures. Now, I look at using Sockets and HTTP calls as a fun and
					simple task. It's actually my favorite area to work in.
				</p>
			</Card>

			<Card>
				<svelte:fragment slot="lead">III.</svelte:fragment><svelte:fragment slot="header">Web & Mobile Development</svelte:fragment>
				<p>
					Fast-forward to today and I've worked with a <a href="https://www.freshlime.com">customer interaction platform</a>
					and a <a href="https://adigma.io">digital marketing</a> company. I also acted as the CTO for LetsLiink and helped to redevelop their
					app, eliminating existing bugs and designing efficient infrastructures.
				</p>
			</Card>

			<Card>
				<svelte:fragment slot="lead">IV.</svelte:fragment><svelte:fragment slot="header">Game Development</svelte:fragment>
				<p>
					While focusing on game development, I also worked on an undisclosed 3D game that allowed me to dive into the early stages of
					Unity's DOTS system. Something very recently was developing the web-version of
					<a href="https://quikmoji.com">QuikMoji</a>. Both of these projects were fun experiences.
				</p>
			</Card>
		</GridContainer>

		<h2>My Focus Now</h2>

		<Card>
			<svelte:fragment slot="header">New Goals</svelte:fragment>
			<p>
				Now my primary focus is improving my skills in languages such as C++, Rust, and GoLang by working on some interesting projects.
				Currently I'm working on VISP for Rust, Nyxy for C++, and Reia for Rust & GDScript. I'm also working on a few other projects. I'm
				excited to see where these projects take me and what I can learn from them.
			</p>
		</Card>

		<br />

		<GridContainer>
			<Card>
				<svelte:fragment slot="header">Reia & Sustenet</svelte:fragment>
				<p>
					For 2024, I'll be primarily working on <a href="https://www.playreia.com">Reia</a> an action adventure MMO that uses Godot's
					GDScript and Rust. The website is made using SvelteKit. On the side I'll be working on
					<a href="https://github.com/Quaint-Studios/Sustenet">Sustenet</a> that I'll reprogram from C# to C++ to be used with Reia.
				</p>
			</Card>

			<Card>
				<svelte:fragment slot="header">VISP</svelte:fragment>
				<p>
					<a href="https://github.com/Makosai/VISP">VISP</a> (Video - Image - Sound - Post) with Rust & Dioxus. It's a multimedia editor that
					allows you to create and edit videos, images, and sound. As well as being a social media management tool that can schedule posts to
					your favorite platforms like Instagram, TikTok, Twitter / X, Facebook, and YouTube!
				</p>
			</Card>

			<Card>
				<svelte:fragment slot="header">Nyxy</svelte:fragment>
				<p>
					<a href="https://github.com/Makosai/Nyxy">Nyxy</a>, a Game Engine built with C++ and includes a small Simulation game in it. All
					of these are to improve my skills in various areas such as: art, design, complex systems, programming, and marketing.
				</p>
			</Card>
		</GridContainer>
	</div>
</div>

<style>
	.content {
		@apply relative z-10;
	}

	h1 {
		@apply mb-4 mt-4 text-[--color-black] text-center;
	}

	h2 {
		@apply mb-6 mt-4 text-[--color-black];
	}
</style>
