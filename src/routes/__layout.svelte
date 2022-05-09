<script lang='ts'>
  import '../app.css';
  import { onMount } from 'svelte';
  import analytics from '$lib/analytics';
  import Header from '$components/Header.svelte';
  import { SvelteToast } from '@zerodevx/svelte-toast';
  import Instructions from '$components/Instructions.svelte';
  import { isRandom, readInstructions } from '$src/store';
  import { page } from '$app/stores';
  import { browser } from '$app/env';

  page.subscribe((val) => {
    if (browser) isRandom.set(val.url.searchParams.get('random') === 'true');
  });

  onMount(() => {
    analytics.page();
    isRandom.set($page.url.searchParams.get('random') === 'true');
  });

</script>

<main class=''>
  <Instructions hidden={$readInstructions} />
  <SvelteToast />
  <Header />
  <slot />
</main>
