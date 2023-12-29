<script lang='ts'>
	import { PortableText } from "@portabletext/svelte";
	import type { Project } from "../../../sanity/sanity-utils";

export let data:Project;
  console.log(data);
  
</script>

<div class="container mx-auto p-8 space-y-8 h-full mt-40 max-w-screen-lg">

    {#if data}
    <h1 class="h1">{data.name}</h1>
    <img src={data.image} alt="{data.name}">
    <div class="flex gap-2 flex-wrap">
      {#each data.stack as stack}
      <p class="rounded-xl px-2 py-1 variant-outline-secondary">{stack}</p>
      {/each}
    </div>
    <div class="max-w-4xl">
    <PortableText value={data.body}/>
    </div>
    <div>
    <a href={data.url} class="btn variant-outline-tertiary hover:variant-filled-tertiary">Live site</a>
    
    </div>
    {/if}

</div>