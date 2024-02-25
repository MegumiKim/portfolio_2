<script>
  	import { page } from '$app/stores';
import { onMount } from 'svelte';
let showMenu = false;
	let currentPage = $page.route.id;
  
function toggleMenu(){
  showMenu=!showMenu
}

	// Indicate the current page in NAV item
	onMount(() => {
		// Subscribe to changes in the current page
		const unsubscribe = page.subscribe((value) => {
			currentPage = value.route.id;
		});
		return unsubscribe;
	});
</script>

<div class="z-10 text-white bg-transparent absolute top-8 w-full align-middle px-8">
  <button on:click={toggleMenu} class="sm:hidden">
    {#if showMenu}
    <i class="fa-solid fa-xmark text-2xl"></i>
  {:else}
    <i class="fa-solid fa-bars text-2xl"></i>
  {/if}
  </button>
  <nav class=" gap-2 justify-center sm:gap-7 {showMenu? 'flex flex-col pt-4': 'hidden'} sm:flex sm:flex-row sm:m-auto rounded rounded-2" >
    <a class=" text-white hover:text-yellow-500 {currentPage === '/' ? 'border-b' : ''}" href="/" on:click={toggleMenu}>HOME</a>
    <a class=" text-white hover:text-yellow-500 {currentPage === '/projects' ? 'border-b' : ''}" href="/projects" on:click={toggleMenu}>PROJECTS</a>
    <a class=" text-white hover:text-yellow-500 {currentPage === '/contact' ? 'border-b' : ''}" href="/contact" on:click={toggleMenu}>CONTACT</a>
    <a class=" text-white hover:text-yellow-500 " href="https://cv.megumi.no/" target="_blank" on:click={toggleMenu}>CV</a>
  </nav>
</div>

<style>
  nav{
    /* transition: all 1s linear; */
    font-size: 1.2rem;

  }


</style>