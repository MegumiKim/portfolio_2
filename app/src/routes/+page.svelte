<script lang="ts">
  import About from '../components/About.svelte';
  import Welcome from '../components/Welcome.svelte';
  import Nav from '../components/Nav.svelte';
</script>

<div class="relative">
  <!-- Background image for the home page -->
  <div class="bg"></div>

  <!-- Content container -->
  <div class="relative z-10 bg-transparent">
    <Nav />
		<Welcome />
		<About />
  </div>
</div>

<style>
  /* Specific styles for the background image */
  .bg {
    position: fixed;
    content: "";
    height: 100%;
    width: 100%;
    background-image: url('/mountain.jpg');
    background-position-y: bottom;
    background-size: cover;
    opacity: 50%;
    /* z-index: -1; */
  }
</style>



<!-- <script lang="ts">
	import About from '../components/About.svelte';
import Welcome from '../components/Welcome.svelte';
import Nav from '../components/Nav.svelte';
</script>

<div class="">
	<div class="bg"></div>
				<About />
</div>

<style>
			/* Specific styles for the background image */
			.bg{
			position: fixed;
    content: "";
		height: 100%;
		width: 100%;
    background-image: url('/aurora.jpg');
		background-position-y: bottom;
		/* background-position-x: center; */
    background-size: cover;
    opacity: 1; 
		/* left: 0; */
		/* z-index: -1; */
  }
</style> -->