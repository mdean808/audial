<script lang='ts'>
  import { currentAttempt, currentSong, songPaused, temporaryAttempt } from '$src/store';
  import { onMount } from 'svelte';
  import type { Attempt } from '$src/types';
  import AttemptVisualizer from '$components/AttemptVisualizer.svelte';
  import analytics from '$lib/analytics';
  import { page } from '$app/stores';

  let player: HTMLAudioElement;
  let attempt = <Attempt>{ attempts: 0, guesses: [], correct: false, date: new Date() };
  let paused = true;
  let songLength = 0;
  let timeElapsed = '0:00';
  let timerInterval;
  let playerTimeout;
  export let custom = false;

  let prevPathName = '/';
  page.subscribe(val => {
    if (val.url.pathname !== prevPathName && player) {
      clearTimeout(playerTimeout);
      player.pause();
      player.remove();
    }
    prevPathName = val.url.pathname;
  });

  onMount(() => {
    prevPathName = $page.url.pathname;
    if (custom) {
      attempt = temporaryAttempt.get();
      temporaryAttempt.listen((value) => (attempt = value));
    } else {
      attempt = currentAttempt.get();
      currentAttempt.listen((value) => (attempt = value));
    }
    player = new Audio(currentSong.get().preview);
    player.addEventListener('loadedmetadata', () => (songLength = player.duration));
    // disable media keys
    if (navigator.mediaSession) { // handle weird safari-apple browser incompatibility
      navigator.mediaSession.setActionHandler('play', () => null);
      navigator.mediaSession.setActionHandler('pause', () => null);
      navigator.mediaSession.setActionHandler('seekbackward', null);
      navigator.mediaSession.setActionHandler('seekforward', () => null);
    }
  });

  currentSong.listen((value) => {
    player.remove();
    player = new Audio(value.preview);
  });
  songPaused.listen((value) => (paused = value));

  const playSong = () => {
    analytics.track('play-song');
    songPaused.set(false);
    player.play();
    timeElapsed = '0:00';
    let denominator: number;
    const BASE_LENGTH_DIVIDER = 0.08333333;
    switch (attempt.attempts) {
      case 0:
        denominator = BASE_LENGTH_DIVIDER;
        break;
      case 1:
        denominator = BASE_LENGTH_DIVIDER * 2;
        break;
      case 2:
        denominator = BASE_LENGTH_DIVIDER * 4;
        break;
      case 3: // on the 5th attempt, halfway through the song
        denominator = 0.5;
        break;
      case 4: // 75% of the way through the song
        denominator = 0.75;
        break;
      default:
        // last attempt, full preview
        denominator = 1;
        break;
    }
    // get the duration in song length, divided by 2, unless 100% correct!
    const durationMS = attempt.correct
      ? player.duration * 1000
      : (player.duration / 2) * 1000 * denominator;
    playerTimeout = setTimeout(() => {
      player.pause();
      player.currentTime = 0;
      songPaused.set(true);
      clearInterval(timerInterval);
    }, durationMS);

    timerInterval = setInterval(() => {
      timeElapsed = `${Math.floor(player.currentTime / 60)}:${
        player.currentTime % 60 < 10
          ? '0' + Math.round(player.currentTime % 60)
          : Math.round(player.currentTime % 60)
      }`;
    }, 1000);
  };

  const stopSong = () => {
    player.pause();
    player.currentTime = 0;
    songPaused.set(true);
  };
</script>

<footer class='border-t border-white bottom-0 w-full fixed bg-gray-800'>
  <div class='border-b'>
    <AttemptVisualizer {attempt} />
  </div>

  <div class='max-w-screen-md mx-auto p-3'>
    <!-- TRACK CONTROL AREA -->
    <div class='flex justify-evenly items-center w-full'>
      {#if player}
        <div class='flex flex-1 justify-start font-mono'>{timeElapsed}</div>
      {/if}
      <div class='text-center flex-1 justify-center'>
        <button
          class={`hover:text-blue-600 transition-colors duration-200 ${paused ? '' : 'hidden'}`}
          on:click={playSong}
          title='Play Song'
        >
          <svg
            class='w-14 h-14 mx-auto'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z'
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
            />
            <path
              d='M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
            />
          </svg>
        </button>
        <button
          class={`hover:text-blue-600 transition-colors duration-200 ${paused ? 'hidden' : ''}`}
          on:click={stopSong}
          title='Pause Song'
        >
          <svg
            class='w-14 h-14 mx-auto'
            fill='none'
            stroke='currentColor'
            stroke-width='2'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
            <path
              d='M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
          </svg>
        </button>
      </div>
      {#if player}
        <div class='flex flex-1 justify-end font-mono'>
          {Math.floor(songLength / 60) +
          ':' +
          (Math.round(songLength % 60) < 10
            ? '0' + Math.round(songLength % 60)
            : Math.round(songLength % 60))}
        </div>
      {/if}
    </div>
  </div>
</footer>
