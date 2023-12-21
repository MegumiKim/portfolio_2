<script lang="ts">
import Card from '../../components/Card.svelte';
	import type { PageData } from './$types';
  import { getPosts } from '$lib/utils/sanity';
import { error } from '@sveltejs/kit';
	import { onMount } from 'svelte';
  import {getProjects} from "../../sanity/sanity-utils"
	import type { Project } from '../../types/Project';

export let projects:Project[] = [];


onMount(async () => {
    try {
      const data = await getProjects();
      if (data) {
        console.log(data[0]);
        projects = data;
      }
    } catch (error) {
      console.error(error);
    }
  });
</script>


<div class="container mx-auto p-8 space-y-8 h-full mt-40 max-w-screen-xl">
	<h1 class="h1">My Projects</h1>


	<!-- <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> -->
	<section>
{#if projects.length > 0}
  <div class="grid md:grid-cols-2 grid-rows-4 gap-6">
    {#each projects as project (project._id)}
      <Card data={project}/>
    {/each}
  </div>
{:else}
<p>No projects found.</p>
{/if}
	</section>
</div>
