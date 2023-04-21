<script lang="ts">
  import svelteLogo from "./assets/svelte.svg";
  import viteLogo from "/vite.svg";
  import TextBox from "./lib/TextBox.svelte";
  import TextArea from "./lib/TextArea.svelte";
    import TahsinExplanation from "./lib/TahsinExplanation.svelte";
</script>

<main>
  <h1 class="text-4xl m-0">خانة النصوص</h1>
  <TextArea />
  <br />

  <hr class="my-0" />
  <!-- <TextBox />
  <hr class="my-0" /> -->

  <TahsinExplanation />
</main>

