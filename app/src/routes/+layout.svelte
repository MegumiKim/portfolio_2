<script>
	import "../app.css"
	import Nav from "../components/Nav.svelte";
import Footer from "../components/Footer.svelte";
	</script>

	<Nav />
	<main class="overflow-hidden">
	<slot />
	</main>
	<Footer />
