<script lang='ts'>
  import Footer from '$components/Footer.svelte';
  import { loading, temporaryAttempt } from '$src/store';
  import Game from '$components/Game.svelte';
  import { onMount } from 'svelte';
  import { loadGame } from '$lib/util';
  import LoadingIndicator from '$components/LoadingIndicator.svelte';
  import type { Attempt } from '$src/types';

  onMount(async () => {
    // reset the temporary attempt because this is a random game
    temporaryAttempt.set(<Attempt>{
      attempts: 0,
      type: 'random',
      guesses: [],
      date: new Date(),
      correct: false
    });
    await loadGame('', true);
  });

</script>

<div>
  {#if $loading}
    <LoadingIndicator />
  {:else}
    <div class='max-w-screen-md mx-auto'>
      <div class={`text-center p-3`}>
        <Game custom={false} random />
      </div>
    </div>
    <Footer custom />
  {/if}
</div>
