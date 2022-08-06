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

  page.subscribe(val => {
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

<svelte:head>
  <!-- Primary Meta Tags -->
  <title>{`audial${$page.routeId ? ` - ${$page.routeId.replace('/', ' ')}` : ''}`}</title>
  <meta
    content={`audial${$page.routeId ? ` - ${$page.routeId.replace('/', ' ')}` : ''}`}
    name='title'
  />
  <meta
    content='listen to the daily song snippet and guess it on audial, a wordle style game.'
    name='description'
  />

  <!--  Misc/Apple -->
  <meta content={`audial${$page.routeId ? ` - ${$page.routeId.replace('/', ' ')}` : ''}`} name='application-name' />
  <meta content='morgan dean' name='author' />
  <meta content={`audial${$page.routeId ? ` - ${$page.routeId.replace('/', ' ')}` : ''}`}
        name='apple-mobile-web-app-title' />
  <meta content='#1f2937' name='theme-color' />

  <!-- Open Graph / Facebook -->
  <meta content='website' property='og:type' />
  <meta content={$page.url.toString()} property='og:url' />
  <meta content={`audial${$page.routeId ? ` - ${$page.routeId.replace('/', ' ')}` : ''}`} property='og:title' />
  <meta
    content='listen to the daily song snippet and guess it on audial, a wordle style game.'
    property='og:description'
  />
  <meta content='/icons/android-chrome-512x512.png' property='og:image' />

  <!-- Twitter -->
  <meta content={$page.url.toString()} property='twitter:url' />
  <meta
    content={`audial${$page.routeId ? ` - ${$page.routeId.replace('/', ' ')}` : ''}`}
    property='twitter:title'
  />
  <meta
    content='listen to the daily song snippet and guess it on audial, a wordle style game.'
    property='twitter:description'
  />
  <meta content='/icons/android-chrome-512x512.png' property='twitter:image' />
</svelte:head>

<main class=''>
  <Instructions hidden={$readInstructions} />
  <SvelteToast />
  <Header />
  <slot />
</main>
