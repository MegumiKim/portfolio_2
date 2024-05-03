<script lang='ts'>
	import { PortableText } from "@portabletext/svelte";
	import type { Project } from "../../../sanity/sanity-utils";

export let data:Project;
const components = {};
  // console.log(data);
  
</script>

<div class="container flex justify-center">

    {#if data}
    <div class="m-auto p-8 max-w-screen-xl md:p-0 mt-20 md:mt-40">
      <h1 class="h1 mb-10">{data.name}</h1>
        <div class="flex flex-col md:flex-row gap-10">
          <div class="flex-[2] space-y-5 ">
            <div class="flex gap-2 flex-wrap">
              {#each data.stack as item}
              <p class="rounded-xl px-2 py-1 variant-filled-secondary">{item}</p>
              {/each}
            </div>
            <div class="max-w-4xl">
            <PortableText value={data.body} components={components}/>
            </div>
            <div class="flex gap-5">
            <a href={data.url} target="_blank" class="btn variant-outline-tertiary hover:variant-filled-tertiary" >Live site</a>
            <a href={data.gitHub} target="_blank" class="btn variant-outline-tertiary hover:variant-filled-tertiary">GitHub</a>
          
          </div>
        </div>
                <div class="flex-[3]"><img src={data.image} alt="{data.name}" class="max-h-full"></div>
        </div>
    </div>
    {/if}

</div>