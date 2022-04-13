<script lang='ts'>
  import type { Attempt, Guess, Song } from '../types';
  import { currentAttempt, currentSong, pastAttempts, readInstructions } from '../store';
  import { onMount } from 'svelte';
  import { daysBetweenDates } from '../api/util';

  const resetData = () => {
    currentAttempt.set(<Attempt>{
      attempts: 0,
      guesses: [],
      correct: false,
      date: new Date()
    });
    readInstructions.set(false);
    currentSong.set(<Song>{});
    pastAttempts.set({ array: [] });
    window.location.href = '/';
  };

  let officialAttempts = <Attempt[]>[];
  let randomAttempts = <Attempt[]>[];
  let customAttempts = <Attempt[]>[];
  let customRandomAttempts = <Attempt[]>[];
  const FIRST_DAY = new Date('4/12/2022');

  onMount(() => {
    officialAttempts = pastAttempts.get().array.filter(a => a.type === 'default') as Attempt[];
    randomAttempts = pastAttempts.get().array.filter(a => a.type === 'random') as Attempt[];
    customAttempts = pastAttempts.get().array.filter(a => a.type === 'custom') as Attempt[];
    customRandomAttempts = pastAttempts.get().array.filter(a => a.type === 'custom_random') as Attempt[];
  });

  const getCorrectArtistGuesses = () => {
    let allGuesses = <Guess[]>[];
    for (const a of officialAttempts) {
      allGuesses = allGuesses.concat(a.guesses);
    }
    return allGuesses.filter(g => g.artistCorrect).length;
  };

  const getIncorrectGuesses = () => {
    let allGuesses = <Guess[]>[];
    for (const a of officialAttempts) {
      allGuesses = allGuesses.concat(a.guesses);
    }
    return allGuesses.filter(g => !g.artistCorrect && !g.correct && g.song).length;
  };

  const getSkippedGuesses = () => {
    let allGuesses = <Guess[]>[];
    for (const a of officialAttempts) {
      allGuesses = allGuesses.concat(a.guesses);
    }
    return allGuesses.filter(g => !g.artistCorrect && !g.correct && !g.song).length;
  };
</script>

<div class='w-8/12 mx-auto mt-2'>
  <h1 class='text-4xl text-white'>official stats</h1>
  <div>
    <ul class='ml-4 mt-2'>
      <li class='text-blue-500'>{officialAttempts.length}/{daysBetweenDates(new Date(), FIRST_DAY)} audials attempted.
      </li>
      <li class='text-green-500'>{officialAttempts.filter(a => a.correct).length} correct guesses.</li>
      <li class='text-amber-400'>{getCorrectArtistGuesses()} correct artist guesses.</li>
      <li class='text-red-600'>{getIncorrectGuesses()} incorrect guesses.</li>
      <li class='text-gray-400'>{getSkippedGuesses()} skips.</li>
    </ul>
  </div>
  <h1 class='text-4xl text-white mt-3'>unofficial stats</h1>
  <div>
    <ul class='ml-4 mt-2'>
      <li class='text-gray-300'>{randomAttempts.length} <span class='text-red-600'>random</span> attempts
        with {(randomAttempts.filter(a => a.correct).length / randomAttempts.length * 100) || 0}% correct.
      </li>
      <li class='text-gray-300'>{customAttempts.length} <span class='text-green-500'>custom</span> attempts
        with {(customAttempts.filter(a => a.correct).length / customAttempts.length * 100) || 0}% correct.
      </li>
      <li class='text-gray-300'>{customRandomAttempts.length} <span class='text-red-600'>random</span> <span
        class='text-green-500'>custom</span> attempts
        with {(customAttempts.filter(a => a.correct).length / customAttempts.length * 100) || 0}% correct.
      </li>
    </ul>
  </div>
  <div class='mt-10 text-gray-400'>
    <div>
      open source on <a
      href='https://github.com/mdean808/audial'
      class='underline-offset-1 underline text-blue-500'
      target='_blank'>github</a
    >.
    </div>
    <div>
      made by <a
      href='https://mogdan.xyz'
      class='underline-offset-1 underline text-blue-500'
      target='_blank'>morgan dean</a
    > with svelte, firebase, and github pages.
    </div>
    <p on:click={resetData} class='cursor-pointer text-red-400 underline-offset-1 underline mt-10'>
      reset local data
    </p>
  </div>
</div>
