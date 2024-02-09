<script lang="ts">
  import TahsinExplanation from "./TahsinExplanation.svelte";
  import tahsin from "./tahsin";

  let rawInputText;

  let tahsinText;

  $: processedText = tahsin(rawInputText);
</script>

<div>
  <textarea class="focus:drop-shadow-lg" maxlength="5242880000000000" bind:value={rawInputText} name="" />
  <!-- explicitly set maxlength; to override low browser default -->

  <hr class="my-0" />
  <br />

  <TahsinExplanation>
    <textarea class="" bind:value={processedText} name="" />
    <!-- kept the textarea and passed it into a slot; to apply styles to both textareas -->
  </TahsinExplanation>
</div>

<style>
  textarea {
    max-height: 60vh;
    min-height: 60vh;
    max-width: 80vw;
    overflow: auto;
    font-size: larger;
  }
  textarea {
    word-break: break-word;
    width: 1000px;
    border-radius: 12px;
    text-align: right;
    padding: 7px 12px;
    border: 1px solid #dadce0;
  }
  textarea:focus {
    outline: none;
  }
</style>
