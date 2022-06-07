<script>
  import "chota";
  import { Confetti } from "svelte-confetti";
  import { darkmode } from "./lib/store.js";
  import Search from "./lib/Search.svelte";
  export let menu = 1;
  let nonsense = false;
  let courses = [
    { id: 1, name: "Pebble Beach", par: 71 },
    { id: 2, name: "Sawgrass", par: 71 },
    { id: 3, name: "portrush", par: 71 },
    { id: 4, name: "pinehurst", par: 71 },
    { id: 5, name: "mangrove bay", par: 71 },
    { id: 6, name: "doral", par: 71 },
    { id: 7, name: "jupiter beach", par: 71 },
    { id: 8, name: "Sawgrass", par: 71 },
    { id: 9, name: "Sawgrass", par: 71 },
    { id: 10, name: "Sawgrass", par: 71 }
  ];
</script>

<nav class="nav">
  <div class="nav-left">
    <a class="brand" href="/" title="logo">
      <img src="src/assets/svelte.png" alt="" />
    </a>
  </div>
  <div class="nav-right">
    <a title="logo" href="/">Profile</a>
    <a title="logo" href="/">Stats</a>
  </div>
</nav>

{#if menu === 1}
  <main class="">
    <div class="test">
      <Search />
      <span class="hide-xs hide-sm">
        <input
          type="checkbox"
          name="nonsenseToggle"
          id=""
          bind:checked={nonsense}
        />
        <label for="nonsenseToggle">Nonsense?</label>
      </span>
    </div>
    <!-- list of course sections -->
    {#each courses as course, index}
      <div class="card">
        <header>
          <h4>{course.name}</h4>
        </header>
        <p>Par {course.par}</p>
        <footer class="is-right">
          <a class="button">Cancel</a>
          <a class="button primary">Start Round</a>
        </footer>
        {course.name}
      </div>
    {:else}
      <span>We aren't able to see any courses nearby.</span>
    {/each}
  </main>
{:else if menu === 2}
  See yo stats!
{:else}
  signout modal{/if}

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  nav {
    display: flex;
    justify-content: space-between;
  }

  #menu li {
    display: inline;
  }

  /* 
  @media (min-width: 1200px) {
  }
  @media (min-width: 1024px) {
  }
  @media (min-width: 768px) {
  }*/
  @media (min-width: 480px) {
    main {
      background-color: red;
    }
  }
</style>
