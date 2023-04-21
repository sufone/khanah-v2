<script lang="ts">
  import tahsin from "./tahsin";

  let rawInputText

  let tahsinText

  $: processedText = tahsin(rawInputText)
    </script>

<div>
  <textarea bind:value={rawInputText} name="" />
  <br />
  <br />

  <hr class="my-0" />
  <br />

  <h2>نص محسَّن</h2>
  <textarea bind:value={processedText} name="" />

</div>

<style>
  textarea {
    max-height: 60vh;
    min-height: 60vh;
    max-width: 80vw;
    overflow: auto;
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
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
</style>
