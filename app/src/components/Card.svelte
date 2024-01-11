<script lang="ts">

import type {Project} from "../types/Project"

	export let data: Project;
	// console.log(data);
	
</script>

<a href={`/project/${data.slug}`} class="flex flex-col rounded-lg w-full h-full mx-auto relative card">
<img class="w-full h-full overflow-hidden object-cover" src={data.image} alt={data.name}>
<div class="">

</div>
	<div class="card-text">
		<!-- <div class="card-title text-2xl sm:text-4xl font-extrabold mb-4">{data.name}</div> -->
    <div class="hidden sm:flex gap-2 flex-wrap">
			{#if data.stack?.length}
			{#each data.stack as stack }
				<p class="variant-filled-tertiary btn-sm rounded-xl">{stack}</p>
			{/each}
			{/if}
		</div>

	</div>

</a>

<style>
	.card{
    position: relative;
    cursor: pointer;
		padding: 0;
    overflow: hidden;
    border-radius: 9px;
		border-style: none;
	}
	.card::after{
		content: "";
    pointer-events: none;
    position: absolute;
    z-index: 1;
    inset: 0px;
    background: linear-gradient(rgba(0, 0, 0, 0.1) 25%, rgba(0, 0, 0, 0.78) 70%);
	}

.card-text{
	position: absolute;
	bottom: 0;
	z-index: 999 !important;
	padding: 2rem;
}

img{
aspect-ratio: auto 500 / 500;
}
</style>