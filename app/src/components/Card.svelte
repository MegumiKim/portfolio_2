<script lang="ts">

import type {Project} from "../types/Project"

	export let data: Project;
	// console.log(data);
	
</script>

<a href={`/project/${data.slug}`} class="flex flex-col rounded-lg w-full aspect-[3/2] mx-auto relative card">
<img class="w-full h-full overflow-hidden object-cover" src={data.image} alt={data.name}>
<div class="">

</div>
	<div class="card-text hidden">
			<h2 class="text-3xl">{data.name}</h2>
			<p class="opacity-100">{data.excerpt}</p>
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


	.card:hover > .card-text {
		display: block;
	}
.card-text{
	position: absolute;
	width: 100%;
	/* height: 50%; */
	bottom: 0;
	z-index: 999 !important;
	padding: 2rem;
background: #000;
opacity: 80%;
	 /* background: linear-gradient(rgba(0, 0, 0, 0.1) 70%,rgba(0, 0, 0, 0.78) 90%, rgba(0, 0, 0, 0.78) 90%); */
	align-items: end;
}

img{
aspect-ratio: auto 500 / 500;
}
</style>