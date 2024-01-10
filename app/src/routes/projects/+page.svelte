<script lang="ts">
import Card from '../../components/Card.svelte';
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


<div class="container mx-auto p-8 space-y-8 mt-40 max-w-screen-lg">
	<h1 class="h1">Latest Projects</h1>
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
