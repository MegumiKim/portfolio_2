<script lang="ts">

import type {Project} from "../types/Project"

	export let data: Project;
	// console.log(data);
	
</script>

<a href={`/project/${data.slug}`} class="card">
<img class="w-full h-full overflow-hidden object-cover" src={data.image} alt={data.name}>

	<div class="card-text">
			<h2 class="text-3xl">{data.name}</h2>
			<p class="">{data.excerpt}</p>
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
		transition: all 1s ease-in-out;

	}


	.card:hover > .card-text {
		opacity: 1;
		transform: translateY(0%);
	}
.card-text{
	position: absolute;
	width: 100%;
	height: 100%;
	bottom: 0;
	z-index: 999 !important;
	padding: 2rem;
	background-color: rgba(5, 6, 7, 0.9);
	align-items: end;
	transition: opacity 0.5s ease-in-out, transform 0.4s ease-in-out; /* Smooth transition for opacity and transform */
	opacity: 0; /* Start with .card-text hidden */
  transform: translateY(100%); /* Move .card-text up from the bottom */
}

h2{
	margin-bottom: 1em;
}

img{
aspect-ratio: auto 500 / 500;
}
</style>