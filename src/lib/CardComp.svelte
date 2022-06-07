<script>
  import CustModal from "./CustModal.svelte";
  import { Details, Button } from "svelte-chota";
  let question = "tetst";
  export let course = {
    name: "",
    par: 0,
    drivingRange: true
  };
</script>

<div class="card">
  <header>
    <h4 class="course_title">
      <span>
        {course.name}
      </span>
      <span>
        Par {course.par}
      </span>
    </h4>
  </header>
  <CustModal {question} />
  <Details>
    <span slot="summary">Course Features:</span>

    {#if course.drivingRange}
      <p>now with driving range</p>
    {/if}
  </Details>
  <footer class="is-right">
    <Button on:click={CustModal.} />
    <!-- https://svelte.dev/repl/ba7f569af4a44553b201a9efd8dc6ec2?version=3.35.0 -->
    <a class="button primary" href="/">Start Round</a>
  </footer>
</div>

<style>
  .course_title {
    display: flex;
    justify-content: space-between;
  }
</style>
