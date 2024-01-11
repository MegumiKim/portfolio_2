<script>
let showMenu = false;

function toggleMenu(){
  showMenu=!showMenu
}

</script>

<div class="z-10 text-white bg-transparent absolute top-8 w-full align-middle">
  <button on:click={toggleMenu} class="mx-4 sm:hidden">
    {#if showMenu}
    <i class="fa-solid fa-xmark"></i>
  {:else}
    <i class="fa-solid fa-bars text-2xl"></i>
  {/if}
  </button>
  <nav class="ml-4 gap-2 justify-center sm:gap-7 {showMenu? 'flex flex-col bg-slate-900 p-5': 'hidden'} sm:flex sm:flex-row sm:m-auto">
    <a class=" text-white hover:text-yellow-500" href="/">HOME</a>
    <a class=" text-white hover:text-yellow-500" href="/projects">PROJECTS</a>
    <!-- <a class=" text-white hover:text-yellow-500" href="/about">ABOUT</a> -->
    <a class=" text-white hover:text-yellow-500" href="/contact">CONTACT</a>
    <a class=" text-white hover:text-yellow-500" href="https://cv.megumi.no/" target="_blank">CV</a>
  </nav>
</div>

<style>
  /* 
</style>