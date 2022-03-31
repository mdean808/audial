<script lang="ts">
  import "../app.css";
  import Header from "../components/Header.svelte";
  import { GoogleAnalytics } from "@beyonk/svelte-google-analytics";
</script>

<main class="">
  <GoogleAnalytics properties={['GTM-TNTJT9T']} />
  <Header />
  <slot />
</main>
