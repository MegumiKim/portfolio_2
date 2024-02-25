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

<div class=" z-10 absolute top-8 w-full px-8 sm:p-0 {currentPage === '/' ? '': "bg-[#15171f]"}">
  <button on:click={toggleMenu} class="sm:hidden">
    {#if showMenu}
    <i class="fa-solid fa-xmark text-2xl"></i>
  {:else}
    <i class="fa-solid fa-bars text-2xl"></i>
  {/if}
  </button>
  <nav class="z-999 gap-x-7 gap-y-3 justify-center {showMenu? 'grid grid-cols-2 flex-col pt-4 w-full mx-0': 'hidden'} sm:flex sm:flex-row rounded rounded-2" >
    <li class={currentPage === '/' ? 'current' : ''}><a href="/" on:click={toggleMenu}>HOME</a></li>
    <li class={currentPage === '/projects' ? 'current' : ''}><a href="/projects" on:click={toggleMenu}>PROJECTS</a></li>
    <li class={currentPage === '/contact' ? 'current' : ''}><a  href="/contact" on:click={toggleMenu}>CONTACT</a></li>
    <li ><a href="https://cv.megumi.no/" target="_blank" on:click={toggleMenu}>CV</a></li>
  </nav>
</div>

<style>
  nav{
    /* transition: all 1s linear; */
    font-size: 1.2rem;
    width: 100%;
    padding: 1rem 0;
  }

  li.current {
   border-bottom: 1px solid white;
  
  }

  li{
    list-style: none;
  }

  li:hover{
   color: rgb(227, 208, 38);
  }


</style>