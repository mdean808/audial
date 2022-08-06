<script lang="ts">
  import type { Attempt, Guess } from '$src/types';

  export let attempt: Attempt;

  const getColorOfAttempt = (index, attempts) => {
    let color = 'bg-black opacity-40';
    if (attempts === index && !attempt.correct) {
      color = 'bg-blue-500';
    } else if (attempts === index + 1 && attempt.correct) {
      color = 'bg-green-600';
    } else if (attempts > index && (attempt.guesses[index] as Guess).artistCorrect) {
      color = 'bg-amber-400';
    } else if (attempts > index && !(attempt.guesses[index] as Guess).song) {
      color = 'bg-gray-500';
    } else if (attempts > index) {
      color = 'bg-red-600';
    }
    return color;
  };
</script>

<div class=" max-w-3xl mx-auto flex h-3">
  <div class={`w-2/12 ${getColorOfAttempt(0, attempt.attempts)} border-r border-l`} />
  <div class={`w-2/12 ${getColorOfAttempt(1, attempt.attempts)} border-r border-l`} />

  <div class={`w-4/12 ${getColorOfAttempt(2, attempt.attempts)} border-r border-l`} />
  <div class={`w-4/12 ${getColorOfAttempt(3, attempt.attempts)} border-r border-l`} />

  <div class={`w-6/12 ${getColorOfAttempt(4, attempt.attempts)} border-r border-l`} />
  <div class={`w-6/12 ${getColorOfAttempt(5, attempt.attempts)} border-r border-l`} />
</div>
