<script>
	import "../app.css"
	import Nav from "../components/Nav.svelte";

	</script>

<div class="">
	<header class="flex justify-between ">
		<Nav />
	</header>
	<main class="">
		<slot />
	</main>
	<footer class=" text-slate-400 align-middle text-center flex flex-col py-5">
		<p class="footer__text text-center mx-auto">
megumi kimura
		</p>
		<a href="https://www.instagram.com/meubelherstel/"><i class="fa-brands fa-github"></i></a>
	</footer>
</div>
