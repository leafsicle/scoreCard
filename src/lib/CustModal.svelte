<script>
  import { Modal, Button, Card } from "svelte-chota";

  export let question;
  let modal_open = false;
  export const modal_show = event => (modal_open = true);
  export const modal_hide = event => (modal_open = false);
</script>

<Modal bind:open={modal_open}>
  <Card>
    <h4 slot="header">{question}</h4>

    <p>Are you sure?</p>

    <div slot="footer" class="is-right">
      <Button clear on:click={modal_hide}>Cancel</Button>
      <Button primary on:click={modal_hide}>Confirm</Button>
    </div>
  </Card>
</Modal>
