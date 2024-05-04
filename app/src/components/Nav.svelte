<script>
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  let showMenu = false;
	let currentPage = $page.route.id;
  let isHomePage = false;
  $: isHomePage = $page.url.pathname === '/';

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

<header class={isHomePage ? "is-home":""}>
  <button on:click={toggleMenu} class="menu-btn">
    {#if showMenu}
    <i class="fa-solid fa-xmark text-2xl"></i>
  {:else}
    <i class="fa-solid fa-bars text-2xl"></i>
  {/if}
  </button>
  <nav class={showMenu? "show":""} >
    <ul>
      <li class={currentPage === '/' ? 'current' : ''}><a href="/" on:click={toggleMenu}>HOME</a></li>
      <li class={currentPage === '/projects' ? 'current' : ''}><a href="/projects" on:click={toggleMenu}>PROJECTS</a></li>
      <li class={currentPage === '/contact' ? 'current' : ''}><a  href="/contact" on:click={toggleMenu}>CONTACT</a></li>
      <li ><a href="https://cv.megumi.no/" target="_blank" on:click={toggleMenu}>CV</a></li>
    </ul>
  </nav>
</header>

<style>



/* Base styles for header */
header {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 10px 20px;
  color: white;
  z-index: 999;
  position: absolute;
right: 0;
}

  

.menu-btn {
  font-size: 24px;
  background: none;
  border: none;
  color: white;
  display: block; 
  cursor: pointer;
  z-index: 1000;
}



nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column; /* Vertical layout by default */
}

nav ul li {
  margin-bottom: 10px; /* Space between items */
}

nav ul li a {
  /* color: white; */
  text-decoration: none;
}

  nav {
    display: none; 
    padding: 0.5em 1.5em;
    background: #fff;
    color: black;
border-radius: 16px;
  }


  nav.show {
    display: block; 
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
/* Larger screens */
@media (min-width: 700px) {

  header{
 
    top: 30px;
    margin: auto;
    width: 100%;
    right: unset;
    align-items: center;

  }
  .menu-btn {
    display: none; /* Hide the menu button on larger screens */
  }

  nav ul {
    flex-direction: row; /* Horizontal layout for nav items */
  }

  nav ul li {
    margin: 0 10px; /* Horizontal spacing between menu items */
  }

  nav {
    display: flex; /* Ensure the nav is always visible */
    color: #fff;
    background:none;

  }


}





</style>