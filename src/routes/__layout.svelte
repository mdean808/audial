<script lang='ts'>
  import '../app.css';
  import { onMount } from 'svelte';
  import analytics from '$lib/analytics';
  import Header from '$components/Header.svelte';
  import { SvelteToast } from '@zerodevx/svelte-toast';
  import Instructions from '$components/Instructions.svelte';
  import { isRandom, readInstructions } from '$src/store';
  import { page } from '$app/stores';

  let prevPathName = '/';

  page.subscribe((val) => {
    if (val.url.pathname !== prevPathName) analytics.page();
    isRandom.set(val.url.pathname.includes('random'));
    prevPathName = val.url.pathname;
  });

  onMount(() => {
    prevPathName = $page.url.pathname;
    isRandom.set($page.url.pathname.includes('random'));
    analytics.page();
  });

</script>

<main class=''>
  <Instructions hidden={$readInstructions} />
  <SvelteToast />
  <Header />
  <slot />
</main>
