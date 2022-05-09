<script lang='ts'>
  import Footer from '$components/Footer.svelte';
  import { loading, temporaryAttempt } from '$src/store';
  import Game from '$components/Game.svelte';
  import { onMount } from 'svelte';
  import { loadGame } from '$lib/util';
  import type { Attempt } from '$src/types';
  import LoadingIndicator from '$components/LoadingIndicator.svelte';

  export let playlist;

  onMount(async () => {
    // reset the temporary attempt because this is a custom random game
    temporaryAttempt.set(<Attempt>{
      attempts: 0,
      type: 'custom_random',
      guesses: [],
      date: new Date(),
      correct: false
    });
    await loadGame(playlist, true);
  });
</script>

<div>
  {#if $loading}
    <LoadingIndicator />
  {:else}
    <div class='max-w-screen-md text-center p-3 mx-auto'>
      <Game custom random={true} />
    </div>
    <Footer custom />
  {/if}
</div>
