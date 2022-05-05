<script lang="ts">
  import Footer from '../components/Footer.svelte';
  import { currentSong, readInstructions } from '../store';
  import Game from '../components/Game.svelte';
  import Instructions from '../components/Instructions.svelte';
  import { onMount } from 'svelte';
  import Button from '../components/Button.svelte';
  import { goto } from '$app/navigation';
  import { getDailySpotifyTrack } from '../api/spotify';
  import { convertSpotifyTrackToSong } from '../api/util';

  let loading = false;
  let showInstructions;
  let customPlaylist;
  let playlistUrl;

  let forceRandom = false;
  let allTracks;
  let daily;
  onMount(async () => {
    showInstructions = readInstructions.get();
    readInstructions.listen((value) => {
      showInstructions = value;
    });
    forceRandom = new URL(window.location.href).searchParams.get('random') === 'true' || false;

    if (new URL(window.location.href).searchParams.get('playlist')) {
      customPlaylist = true;
      await startCustom(new URL(window.location.href).searchParams.get('playlist'));
    }
  });

  const startCustom = async (id?: string) => {
    if (!playlistUrl && !id) return;
    const playlistId =
      typeof id === 'string' ? id : null || new URL(playlistUrl).pathname.split('/')[2];
    loading = true;
    const queryParams = new URL(window.location.href).searchParams;
    queryParams.set('playlist', playlistId);
    queryParams.set('random', forceRandom ? 'true' : 'false');
    await goto('/custom?' + queryParams.toString());

    const trackResponse = await getDailySpotifyTrack(playlistId, forceRandom);
    daily = trackResponse.daily;
    allTracks = trackResponse.tracks;
    // if we are in a new date from the past, take the new random song and set it to the current one.
    //    reset the attempts.
    const song = convertSpotifyTrackToSong(daily);
    currentSong.set(song);
    loading = false;
    customPlaylist = true;
  };
</script>

<div>
  <Instructions hidden={showInstructions} />
  <div class="max-w-screen-md mx-auto">
    {#if customPlaylist}
      <div class={`text-center p-3 ${!showInstructions || loading ? 'hidden' : ''}`}>
        <Game custom={true} {forceRandom} {allTracks} />
      </div>
    {:else}
      <div class="w-full w-10/12 mx-auto my-5">
        <div class="text-center mx-auto w-full text-blue-100 mb-2">
          paste the link to any spotify playlist below
        </div>
        <input
          bind:value={playlistUrl}
          class="p-2 border-2 w-full text-gray-400 rounded-sm border-gray-600 bg-gray-900 hover:border-gray-400 focus:border-gray-400 outline-none transition-all duration-200"
          placeholder="spotify playlist link"
          name="spotify playlist input"
        />
        <div class="w-full mx-auto text-center my-4">
          <Button title="start custom audial" type="submit" on:click={() => startCustom()}
            >start your custom audial</Button
          >
        </div>
      </div>
    {/if}
  </div>
  {#if customPlaylist && !loading}
    <Footer custom={true} />
  {/if}
  <div class={`w-full mx-auto text-center mt-20 text-blue-600 ${loading ? '' : 'hidden'}`}>
    <svg
      height="100px"
      preserveAspectRatio="xMidYMid"
      class="animate-spin"
      style="margin: auto; background: transparent; display: block; shape-rendering: auto;"
      viewBox="0 0 100 100"
      width="100px"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="50"
        cy="50"
        fill="none"
        r="38"
        stroke="currentColor"
        stroke-dasharray="179.0707812546182 61.690260418206066"
        stroke-width="7"
      />
    </svg>
  </div>
</div>
