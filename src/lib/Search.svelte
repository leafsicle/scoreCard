<script>
  export let courseSearchText = "";
  let showSearchFilterDropdown = false;
  let amenities = [];
  function toggleFilterDropdown(toggle) {
    toggle = !toggle;
  }
</script>

<section>
  <label for="courseSearchText" />
  <input
    bind:value={courseSearchText}
    type="text"
    name="courseSearchText"
    id=""
    placeholder="Search by course name "
  />
  <button on:click={() => toggleFilterDropdown(showSearchFilterDropdown)}
    >Filter icon</button
  >
  {#if showSearchFilterDropdown}
    <p>
      <select multiple bind:value={amenities}>
        <option value="Rice">clubhouse</option>
        <option value="Beans">showers</option>
        <option value="Cheese">Cheese</option>
      </select>
    </p>
  {/if}
</section>

<style>
  section {
    display: flex;
    align-items: flex-end;
  }
</style>
