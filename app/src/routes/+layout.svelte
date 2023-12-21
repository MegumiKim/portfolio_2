<script>
import "../app.css"
import Nav from "../components/Nav.svelte";
import { AppShell } from '@skeletonlabs/skeleton';
</script>

<!-- <div class="">
	<Nav />
	<slot />
</div> -->



<AppShell >
	<svelte:fragment slot="pageHeader"><Nav/></svelte:fragment>

	<slot />

</AppShell>