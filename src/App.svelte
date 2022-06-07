<script>
  import "chota";
  let hidden = false;
  import { Confetti } from "svelte-confetti";
  import { darkmode } from "./lib/store.js";
  import Search from "./lib/Search.svelte";
  import Card from "./lib/Card.svelte";
  let nonsense = false;
  let courses = [
    { id: 1, name: "Pebble Beach", par: 71, drivingRange: false },
    { id: 2, name: "Sawgrass", par: 71, drivingRange: false },
    { id: 3, name: "portrush", par: 71, drivingRange: false },
    { id: 4, name: "pinehurst", par: 71, drivingRange: false },
    { id: 5, name: "mangrove bay", par: 71, drivingRange: false },
    { id: 6, name: "doral", par: 71, drivingRange: false },
    { id: 7, name: "jupiter beach", par: 71, drivingRange: false },
    { id: 8, name: "Sawgrass", par: 71, drivingRange: false },
    { id: 9, name: "Sawgrass", par: 71, drivingRange: false },
    { id: 10, name: "Sawgrass", par: 71, drivingRange: false }
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
  {#each courses as course (course.id)}
    <Card {course} />
  {:else}
    <span>We aren't able to see any courses nearby.</span>
  {/each}
</main>

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
      background: #333;
      color: white;
    }
    .dark-scheme {
      background: black;
      color: #ddd;
    }
  }

  @media (prefers-color-scheme: light) {
    .light-scheme {
      background: white;
      color: #555;
    }
    .light-scheme {
      background: #eee;
      color: black;
    }
  }

  .day,
  .night {
    display: inline-block;
    padding: 1em;
    width: 7em;
    height: 2em;
    vertical-align: middle;
  }
  /* .dark {
    --bg-color: #000;
    --bg-secondary-color: #131316;
    --font-color: #f5f5f5;
    --color-grey: #ccc;
    --color-darkGrey: #777;
  } */
  /* 
  .glowing {
    color: white;
    text-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue;
  }

  .bordered_text {
    color: white;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  } */
</style>
