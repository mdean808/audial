<script lang="ts">
  import "../app.css";
  import Header from "../components/Header.svelte";
  import { onMount } from "svelte";
  import analytics from "../api/analytics";

  // Google Analytics id: GTM-TNTJT9T
  onMount(() => {
    analytics.page();
  });
</script>

<main class="">
  <Header />
  <slot />
</main>
