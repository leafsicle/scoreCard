<script>
  import "chota";
  import Router, { location } from "svelte-spa-router";
  import { Confetti } from "svelte-confetti";

  import Search from "./lib/Search.svelte";
  import Card from "./lib/CardComp.svelte";

  let nonsense = true;
  let courses = [
    { id: 1, name: "Pebble Beach", par: 71, drivingRange: true },
    { id: 2, name: "Sawgrass", par: 72, drivingRange: true },
    { id: 3, name: "portrush", par: 72, drivingRange: true },
    { id: 4, name: "pinehurst", par: 71, drivingRange: true },
    { id: 5, name: "mangrove bay", par: 71, drivingRange: true },
    { id: 6, name: "doral", par: 71, drivingRange: false },
    { id: 7, name: "jupiter beach", par: 71, drivingRange: false },
    { id: 8, name: "Sawgrass", par: 71, drivingRange: false },
    { id: 9, name: "Sawgrass", par: 71, drivingRange: false },
    { id: 10, name: "Sawgrass", par: 71, drivingRange: false }
  ];

  let src =
    "https://images.unsplash.com/photo-1534952506409-ccf5bd2ae736?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80";
</script>

<div style="background-image: url({src});">
  <nav class="nav">
    <div class="nav-left">
      <a class="brand" href="/#/" title="logo">
        <img src="src/assets/svelte.png" alt="" />
      </a>
    </div>
    <div class="nav-right">
      <a
        title="logo"
        class="button outline text-white bg-primary bordered_text"
        bg-primary
        href="/#/">Profile</a
      >
      <a
        title="logo"
        class="button outline text-white bg-primary bordered_text"
        bg-primary
        href="/#/">Stats</a
      >
    </div>
  </nav>
  <!-- <Router
    routes={{
      "/profile": Profile
    }}
    /> -->
  <main>
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
    {#each courses as course (course.id)}
      <Card {course} />
    {:else}
      <span>We aren't able to see any courses nearby.</span>
    {/each}
  </main>
</div>

<style>
  :global(:root) {
    --color-primary: #14854f;
    --color-lightGrey: #d2d6dd;
    --color-grey: #747681;
    --color-darkGrey: #3f4144;
    --color-error: #d43939;
    --color-success: #28bd14;
    --grid-maxWidth: 120rem;
    --grid-gutter: 2rem;
    --font-size: 1.2rem;
    --font-family: " -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

  main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  }
  nav {
    display: flex;
    justify-content: space-between;
  }

  .glowing {
    color: white;
    text-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue;
  }

  .bordered_text {
    color: white;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  }

  /* 
  @media (min-width: 1200px) {
  }
  @media (min-width: 1024px) {
  }
  @media (min-width: 768px) {
  }*/
  /* @media screen and (min-width: 375px) {
    main {
      background-color: darkblue;
    }
  } */

  @media (prefers-color-scheme: dark) {
    .dark-scheme {
      --bg-color: #000;
      --bg-secondary-color: #131316;
      --font-color: #f5f5f5;
      --color-grey: #ccc;
      --color-darkGrey: #777;
    }
  }

  @media (prefers-color-scheme: light) {
    .light-scheme {
      background: #eee;
      color: black;
    }
  }

</style>
