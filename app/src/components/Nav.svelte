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
  align-items: end;
  padding: 10px 20px;
  color: white;
  z-index: 999;
}

  
.is-home{
  
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

.menu-btn .fa-xmark {
  color: black;
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
    position:fixed;
    top: 0px;
    right:0 ;
    padding: 0.5em 1.5em;
    background: #fff;
    color: black;
    z-index: 10;
    padding-top: 50px;
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
@media (min-width: 500px) {

  header{
 
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
    position: static;
    color: #fff;
    background:none;
  }

  .is-home{
  right: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
}





</style>