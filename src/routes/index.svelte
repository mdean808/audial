<script lang="ts">
  import Footer from '$components/Footer.svelte';
  import { loading } from '$src/store';
  // import Game from '$components/Game.svelte';
  import { onMount } from 'svelte';
  //import { loadGame } from '$lib/util';
  import LoadingIndicator from '$components/LoadingIndicator.svelte';

  onMount(async () => {
    //await loadGame('', false);
    loading.set(false);
  });
</script>

<div>
  {#if $loading}
    <LoadingIndicator />
  {:else}
    <div class="max-w-screen-md mx-auto">
      <div class={`text-center p-3`}>
        <!--         <Game custom={false} random={false} /> -->
        <h1 class="text-2xl mt-40">Audial Defunct</h1>
        <p>
          Due to <a
            class="text-blue-600 underline cursor-pointer"
            href="https://developer.spotify.com/blog/2024-11-27-changes-to-the-web-api">changes</a
          > in the Spotify API, Audial is no longer able to play music snippets from Spotify playlist
          tracks.
        </p>
        <p>
          Since these changes are unlikely to be reverted, Audial will disabled until I am able put
          aside time to find an alternative music API.
        </p>
        <p class="mt-2 text-lg">
          In the meantime, check out <a
            class="text-blue-600 underline cursor-pointer"
            href="https://friendsfm.app">FriendsFM</a
          >, another music-related project of mine still works.
        </p>
      </div>
    </div>
    <Footer custom={false} />
  {/if}
</div>
