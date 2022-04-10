<script lang="ts">
  import type { Attempt, Song } from '../types';
  import { currentAttempt, currentSong, readInstructions } from '../store';

  const resetData = () => {
    currentAttempt.set(<Attempt>{
      attempts: 0,
      guesses: [],
      correct: false,
      date: new Date()
    });
    readInstructions.set(false);
    currentSong.set(<Song>{});
    window.location.href = '/';
  };
</script>

<div class="w-8/12 mx-auto mt-2">
  <h1 class="text-4xl text-white">your stats</h1>
  <div>
    <ul class="ml-4 mt-2">
      <li class="text-blue-500">9/12 audials attempted.</li>
      <li class="text-green-500">5 correct guesses.</li>
      <li class="text-amber-400">13 correct artist guesses.</li>
      <li class="text-red-600">20 incorrect guesses.</li>
      <li class="text-gray-400">2 skips.</li>
    </ul>
  </div>
  <div class="text-gray-400 mt-3 italic">
    this section of audial is under development and may not be functional.
  </div>

  <div class="mt-20 text-gray-400">
    <div>
      open source on <a
        href="https://github.com/mdean808/audial"
        class="underline-offset-1 underline text-blue-500"
        target="_blank">github</a
      >.
    </div>
    <div>
      made by <a
        href="https://mogdan.xyz"
        class="underline-offset-1 underline text-blue-500"
        target="_blank">morgan dean</a
      > with svelte, firebase, and github pages.
    </div>
    <p on:click={resetData} class="cursor-pointer text-red-400 underline-offset-1 underline mt-10">
      reset local data
    </p>
  </div>
</div>
