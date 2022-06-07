<script>
  import CustModal from "./CustModal.svelte";
  import { Details, Button } from "svelte-chota";
  let child;
  export let course = {
    name: "",
    par: 0,
    drivingRange: true
  };
  let question = `Do you wanna build a snow man at ${course.name}?`;
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
  <CustModal {question} bind:this={child} />
  <Details>
    <span slot="summary">Course Features:</span>

    {#if course.drivingRange}
      <p>Driving range 🚩</p>
    {/if}
  </Details>
  <footer class="is-right">
    <Button on:click={child.modal_show} primary>Start round</Button>
    <!-- https://svelte.dev/repl/ba7f569af4a44553b201a9efd8dc6ec2?version=3.35.0 -->
  </footer>
</div>

<style>
  .course_title {
    display: flex;
    justify-content: space-between;
  }
  .card {
    margin: 1.3rem;
  }
</style>
