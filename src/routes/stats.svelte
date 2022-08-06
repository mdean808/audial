<script lang="ts">
  import type { Attempt, Guess, Song } from '$src/types';
  import {
    currentAttempt,
    currentSong,
    pastAttempts,
    readInstructions,
    temporaryAttempt
  } from '$src/store';
  import { onMount } from 'svelte';
  import { daysBetweenDates } from '$lib/util';
  import { goto } from '$app/navigation';

  const resetData = () => {
    currentAttempt.set(<Attempt>{
      attempts: 0,
      guesses: [],
      correct: false,
      date: new Date()
    });
    temporaryAttempt.set(<Attempt>{
      attempts: 0,
      guesses: [],
      correct: false,
      date: new Date()
    });
    readInstructions.set(false);
    currentSong.set(<Song>{});
    pastAttempts.set({ array: [] });
    goto('/');
  };

  let officialAttempts = <Attempt[]>[];
  let randomAttempts = <Attempt[]>[];
  let customAttempts = <Attempt[]>[];
  let customRandomAttempts = <Attempt[]>[];
  const FIRST_DAY = new Date('4/12/2022');

  onMount(() => {
    const attempts = pastAttempts.get().array;
    officialAttempts = attempts.filter(a => a.type === 'default') as Attempt[];
    randomAttempts = attempts.filter(a => a.type === 'random') as Attempt[];
    customAttempts = attempts.filter(a => a.type === 'custom') as Attempt[];
    customRandomAttempts = attempts.filter(a => a.type === 'custom_random') as Attempt[];
  });

  const getCorrectArtistGuesses = () => {
    officialAttempts = pastAttempts.get().array.filter(a => a.type === 'default') as Attempt[];
    let allGuesses = <Guess[]>[];
    for (const a of officialAttempts) {
      allGuesses = allGuesses.concat(a.guesses);
    }
    return allGuesses.filter(g => g.artistCorrect && !g.correct).length;
  };

  const getIncorrectGuesses = () => {
    officialAttempts = pastAttempts.get().array.filter(a => a.type === 'default') as Attempt[];
    let allGuesses = <Guess[]>[];
    for (const a of officialAttempts) {
      allGuesses = allGuesses.concat(a.guesses);
    }
    return allGuesses.filter(g => !g.artistCorrect && !g.correct && g.song).length;
  };

  const getSkippedGuesses = () => {
    officialAttempts = pastAttempts.get().array.filter(a => a.type === 'default') as Attempt[];
    let allGuesses = <Guess[]>[];
    for (const a of officialAttempts) {
      allGuesses = allGuesses.concat(a.guesses);
    }
    return allGuesses.filter(g => !g.artistCorrect && !g.correct && !g.song).length;
  };
</script>

<div class="w-8/12 mx-auto mt-2">
  <h1 class="text-4xl text-white">official stats</h1>
  <div>
    <ul class="ml-4 mt-2">
      <li class="text-blue-500">
        {officialAttempts.length}/{daysBetweenDates(new Date(), FIRST_DAY)} audials attempted.
      </li>
      <li class="text-green-500">
        {officialAttempts.filter(a => a.correct).length} correct guesses.
      </li>
      <li class="text-amber-400">{getCorrectArtistGuesses()} correct artist guesses.</li>
      <li class="text-red-600">{getIncorrectGuesses()} incorrect guesses.</li>
      <li class="text-gray-400">{getSkippedGuesses()} skips.</li>
    </ul>
  </div>
  <h1 class="text-4xl text-white mt-3">unofficial stats</h1>
  <div>
    <ul class="ml-4 mt-2">
      <li class="text-gray-300">
        {randomAttempts.length} <span class="text-red-600">random</span> attempts with {(randomAttempts.filter(
          a => a.correct
        ).length /
          randomAttempts.length) *
          100 || 0}% correct.
      </li>
      <li class="text-gray-300">
        {customAttempts.length} <span class="text-green-500">custom</span> attempts with {(customAttempts.filter(
          a => a.correct
        ).length /
          customAttempts.length) *
          100 || 0}% correct.
      </li>
      <li class="text-gray-300">
        {customRandomAttempts.length} <span class="text-red-600">random</span>
        <span class="text-green-500">custom</span>
        attempts with {(customRandomAttempts.filter(a => a.correct).length /
          customRandomAttempts.length) *
          100 || 0}% correct.
      </li>
    </ul>
  </div>
  <div class="mt-10 text-gray-400">
    <div>
      open source on <a
        class="underline-offset-1 underline text-blue-500"
        href="https://github.com/mdean808/audial"
        target="_blank">github</a
      >.
    </div>
    <div>
      made by <a
        class="underline-offset-1 underline text-blue-500"
        href="https://mogdan.xyz"
        target="_blank">morgan dean</a
      > with svelte, firebase, and github pages.
    </div>
    <div class="mt-6">
      suggestions? contact me on
      <a
        class="underline underline-offset-1 text-blue-500"
        href="https://twitter.com/mdean808"
        target="_blank">twitter</a
      >.
    </div>
    <p class="cursor-pointer text-red-400 underline-offset-1 underline mt-8" on:click={resetData}>
      reset local data
    </p>
  </div>
</div>
