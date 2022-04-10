<script lang="ts">
  import '../app.css';
  import { onMount } from 'svelte';
  import analytics from '../api/analytics';
  import Header from '../components/Header.svelte';

  // Google Analytics id: GTM-TNTJT9T
  onMount(() => {
    analytics.page();
  });
</script>

<main class="">
  <Header />
  <slot />
</main>
