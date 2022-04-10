<script lang='ts'>
  import Footer from '../components/Footer.svelte';
  import { currentSong, readInstructions } from '../store';
  import Game from '../components/Game.svelte';
  import Instructions from '../components/Instructions.svelte';
  import { onMount } from 'svelte';
  import { getDailySpotifyTrack } from '../api/spotify.ts';
  import { convertSpotifyTrackToSong } from '../api/util.ts';

  let loading = true;
  let showInstructions;

  let allTracks;
  let daily;
  let forceRandom;
  onMount(async () => {
    showInstructions = readInstructions.get();
    forceRandom = new URL(window.location.href).searchParams.get('random') === 'true' || false;

    const trackResponse = await getDailySpotifyTrack('', forceRandom);
    daily = trackResponse.daily;
    allTracks = trackResponse.tracks;
    // if we are in a new date from the past, take the new random song and set it to the current one.
    //    reset the attempts.
    const song = convertSpotifyTrackToSong(daily);
    currentSong.set(song);
    loading = false;
  });

  readInstructions.listen((value) => {
    showInstructions = value;
  });
</script>

<div>
  <Instructions hidden={showInstructions} />
  {#if !loading}
    <div class='max-w-screen-md mx-auto'>
      <div class={`text-center p-3 ${!showInstructions ? 'hidden' : ''}`}>
        <Game custom={forceRandom} {forceRandom} {daily} {allTracks} />
      </div>
    </div>
    <Footer custom={forceRandom} />
  {/if}
  {#if loading}
    <div class={`w-full mx-auto text-center mt-20 text-blue-600`}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        style='margin: auto; background: transparent; display: block; shape-rendering: auto;'
        width='100px'
        height='100px'
        viewBox='0 0 100 100'
        preserveAspectRatio='xMidYMid'
      >
        <circle
          cx='50'
          cy='50'
          fill='none'
          stroke='currentColor'
          stroke-width='7'
          r='38'
          stroke-dasharray='179.0707812546182 61.690260418206066'
        >
          <animateTransform
            attributeName='transform'
            type='rotate'
            repeatCount='indefinite'
            dur='0.9345794392523364s'
            values='0 50 50;360 50 50'
            keyTimes='0;1'
          />
        </circle>
      </svg>
    </div>
  {/if}
</div>
