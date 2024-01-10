<script lang='ts'>
	import { PortableText } from "@portabletext/svelte";
	import type { Project } from "../../../sanity/sanity-utils";

export let data:Project;
  // console.log(data);
  
</script>

<div class="container flex justify-center mb-20">

    {#if data}
    <div class="mx-auto p-8 space-y-8 mt-40 max-w-screen-lg md:p-0">

        <div class="flex-1 space-y-5">
          <h1 class="h1">{data.name}</h1>
          <div class="flex gap-2 flex-wrap">
            {#each data.stack as item}
            <p class="rounded-xl px-2 py-1 variant-outline-secondary">{item}</p>
            {/each}
          </div>
          <div class="max-w-4xl">
          <PortableText value={data.body}/>
          </div>
          <div class="flex gap-5">
          <a href={data.url} class="btn variant-outline-tertiary hover:variant-filled-tertiary">Live site</a>
          <a href={data.gitHub} class="btn variant-outline-tertiary hover:variant-filled-tertiary">GitHub</a>
          
        </div>
      </div>


      <div class="flex-1"><img src={data.image} alt="{data.name}" class=""></div>
    </div>
    {/if}

</div>