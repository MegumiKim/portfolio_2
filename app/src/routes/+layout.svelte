<script>
	import "../app.css"
	import Nav from "../components/Nav.svelte";
	import Footer from "../components/Footer.svelte";

</script>


  <Nav />
  <div class="main-content">
    <slot />
  </div>
  <Footer />
