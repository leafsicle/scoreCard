<script>
  export let menu = 1;
</script>

<nav>
  <ul id="menu">
    <li>
      <a href="/profile" on:click|preventDefault={() => (menu = 1)}>Profile</a>
    </li>
    |
    <li>
      <a href="/userStats" on:click|preventDefault={() => (menu = 2)}
        >Player Stats</a
      >
    </li>
    |
    <li>
      <a href="/logOff" on:click|preventDefault={() => (menu = 3)}>sign Out</a>
    </li>
  </ul>
</nav>
