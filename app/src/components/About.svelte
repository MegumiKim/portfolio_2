<div class="px-8 h-[100%vh]  text-white py-20 " id="about">
  <section class="mx-auto max-w-screen-lg sm:flex gap-10 justify-center">
    <div >
      <h2 class="h1 mb-5">About me</h2>
          <p class="leading-relaxed text-xl font-thin">Born and raised in Japan, studied and worked in Belgium/India/Japan/Norway, I am a multicultural and multidisciplinary person with zen in mind. Besides coding, I play saxophone 🎷 and train capoeira 🤸‍♀️ in my free time.</p>
    </div>
      <img src="/profile2.jpg" alt="Megumi's Portrait" class="max-w-[250px] rounded-full m-auto mt-10">
      
  </section>

  <section class="mx-auto max-w-screen-lg">
    <h2 class="h1 mb-5">Stack</h2>
    <div class="resume_info">
      <h4 class="">Language</h4>
      <div class="stacks">
        <p class="stack">HTML</p>
        <p class="stack">CSS</p>
        <p class="stack">JavaScript</p>
        <p class="stack">TypeScript</p>
        <p class="stack">SQL</p>
        <p class="stack">Python</p>
      </div>
    </div>
    <div class="resume_info">
      <h4 class="">Framework</h4>
      <div class="stacks">
        <p class="stack">React</p>
        <p class="stack">Svelte</p>
        <p class="stack">Sass</p>
      </div>
    </div>
    <div class="resume_info">
      <h4 class="">DBs, CMS, APIs</h4>
      <div class="stacks">
        <p class="stack">Postgres</p>
        <p class="stack">REST API</p>
        <p class="stack">Sanity</p>
        <p class="stack">Express</p>
      </div>
    </div>
    <div class="resume_info">
      <h4 class="">Tools</h4>
      <div class="stacks">
        <p class="stack">GitHub</p>
        <p class="stack">GitHub Action</p>
        <p class="stack">Postman</p>
        <p class="stack">Cypress</p>
        <p class="stack">Jest</p>
      </div>
    </div>



  </section>

    <div class="mx-auto flex gap-5  max-w-screen-lg ">
      <a href="/projects" class="btn variant-outline-success hover:variant-filled-success">Check out Projects</a>
      <a href="/projects" class="btn variant-outline-success hover:variant-filled-success">Contact</a>
    </div>
</div>


<style>

  #about{
    background-color: rgba(42, 48, 55, 0.85);
    /* background-blend-mode: darken; */
  }
  .stacks {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  row-gap: 0.2rem;
  margin-bottom: 1rem;
}

.stack {
  background: rgb(45, 80, 132);
  padding: 0.2rem 1rem;
  border-radius: 5rem;
  font-size: 1.2rem;
}


section{
  margin-bottom: 4rem;
} 
  
      h4 {
        color: #2edf8c;
        margin-bottom: 0.3rem;
        font-size: 1.5rem;
      }
  
      .resume_info {
        margin-top: 2em;
      }
      .resume_info > h4{
        margin-bottom: 1rem;
      }
</style>