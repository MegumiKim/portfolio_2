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
        projects = data;
      }
    } catch (error) {
      console.error(error);
    }
  });
</script>

          
<div class="container pt-20 sm:pt-40">
	<h1 class="h1">Latest Projects</h1>
	<section>
{#if projects.length > 0}
  <div class="grid md:grid-cols-2 gap-6">
    {#each projects as project (project._id)}
      <Card data={project}/>
    {/each}
  </div>
{/if}
	</section>
</div>
