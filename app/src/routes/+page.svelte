<script lang="ts">
  import About from '../components/About.svelte';
  import Welcome from '../components/Welcome.svelte';
</script>

  <!-- Content container -->
  <div class="bg"></div>
  <div class="relative bg-transparent">
    <!-- <Nav /> -->
		<Welcome />
		<About />
  </div>


<style>
  /* Specific styles for the background image */
  .bg {
    position: fixed;
    content: "";
    height: 100vh;
    width: 100%;
    background-image: url('/mountain.jpg');
    /* background-position-y: bottom; */
    background-size: cover;
    opacity: 50%;
    z-index: 0;
  }


</style>
