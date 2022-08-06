<script lang="ts">
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import { browser } from '$app/env';
  import Button from '$components/Button.svelte';
  import { toast } from '@zerodevx/svelte-toast';
  import { loadGame } from '$lib/util';
  import { loading, temporaryAttempt } from '$src/store';
  import type { Attempt } from '$src/types';
  import LoadingIndicator from '$components/LoadingIndicator.svelte';
  import Footer from '$components/Footer.svelte';
  import Game from '$components/Game.svelte';
  import { onMount } from 'svelte';

  let playlistUrl = '';
  let playingGame = false;

  page.subscribe(val => {
    if (!browser) return;
    if (!val.url.searchParams.get('playlist') && val.url.pathname.includes('custom')) {
      playingGame = false;
    }
  });

  onMount(async () => {
    if ($page.url.searchParams.get('playlist')) {
      await startCustom($page.url.searchParams.get('playlist'));
    }
  });

  const startCustom = async (id?: string) => {
    if (!playlistUrl && !id) return toast.push('please provide a valid spotify playlist url.');
    id = id ? id : new URL(playlistUrl).pathname.split('/')[2];
    await goto('/custom?playlist=' + id);
    playingGame = true;
    // reset the temporary attempt because this is a custom game
    temporaryAttempt.set(<Attempt>{
      attempts: 0,
      type: 'custom',
      guesses: [],
      date: new Date(),
      correct: false
    });
    await loadGame(id, false);
  };
</script>

{#if playingGame}
  {#if $loading}
    <LoadingIndicator />
  {:else}
    <div class="max-w-screen-md text-center p-3 mx-auto">
      <Game custom random={false} />
    </div>
    <Footer custom />
  {/if}
{:else}
  <div class="w-full w-10/12 max-w-2xl mx-auto my-5">
    <div class="text-center mx-auto w-full text-blue-100 mb-2">
      paste the link to any spotify playlist below
    </div>
    <input
      bind:value={playlistUrl}
      class="p-2 border-2 w-full text-gray-400 rounded-sm border-gray-600 bg-gray-900 hover:border-gray-400 focus:border-gray-400 outline-none transition-all duration-200"
      name="spotify playlist input"
      placeholder="spotify playlist link"
    />
    <div class="w-full mx-auto text-center my-4">
      <Button on:click={() => startCustom()} title="start custom audial" type="submit"
        >start your custom audial
      </Button>
    </div>
  </div>
{/if}
