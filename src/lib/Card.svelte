<script>
  import { Details } from "svelte-chota";

  export let course = {
    name: "",
    par: 0,
    drivingRange: true
  };
</script>

<div class="card">
  <header>
    <h4>{course.index + 1}{course.name}</h4>
  </header>
  <p>Par {course.par}</p>
  <Details>
    {#if course.drivingRange}
      <p>now with driving range</p>
    {/if}
  </Details>
  <footer class="is-right">
    <a class="button primary" href="/">Start Round</a>
  </footer>
</div>
