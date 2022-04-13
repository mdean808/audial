<script lang='ts'>
  import { currentAttempt, currentSong, temporaryAttempt } from '../store';
  import { daysBetweenDates } from '../api/util';
  import Button from './Button.svelte';
  import analytics from '../api/analytics';

  export let forceRandom;
  export let custom;

  let notifyClipboard = false;
  const FIRST_DAY = new Date('4/12/2022');

  const generateEmojis = () => {
    let emojiString = '';
    for (const guess of ((custom || forceRandom) ? temporaryAttempt.get().guesses : currentAttempt.get().guesses) ||
    []) {
      if (guess.correct) emojiString += '🟩 ';
      else if (guess.artistCorrect) emojiString += '🟨 ';
      else if (!guess.song) emojiString += '⬜ ';
      else emojiString += '🟥 ';
    }
    for (
      let i = 0;
      i < 6 - ((custom || forceRandom) ? temporaryAttempt.get().attempts : currentAttempt.get().attempts);
      i++
    ) {
      emojiString += '⬛ ';
    }
    return emojiString;
  };

  const generateShareClipboard = () => {
    let string = `${custom ? 'custom ' : ''}audial #` + daysBetweenDates(new Date(), FIRST_DAY);
    string += '\n' + generateEmojis();
    const link =
      'https://audial.mogdan.xyz' +
      (custom
        ? '/custom?playlist=' + new URLSearchParams(window.location.search).get('playlist')
        : '');
    string += '\n' + link;
    navigator.clipboard.writeText(string);
    notifyClipboard = true;
    analytics.track('share-score', { result: generateEmojis(), custom });
  };
</script>

<div class='py-3'>
  {#if (custom || forceRandom) ? !temporaryAttempt.get().correct : !currentAttempt.get().correct}
    <div
      title='Open in Spotify'
      on:click={() => {
        window.open(`https://open.spotify.com/track/${currentSong.get().id}`, '_blank').focus();
      }}
      class={`cursor-pointer border-blue-600 border-2 h-10 p-2 my-2 w-full text-left rounded-sm bg-gray-900 overflow-ellipsis whitespace-nowrap overflow-hidden`}
    >
      {currentSong.get().name} by {currentSong.get().artist}
    </div>
  {/if}
  {#if !forceRandom}
    <span class='my-2'>{custom ? 'custom ' : ''}audial #{daysBetweenDates(new Date(), FIRST_DAY)}</span>
  {/if}
  <span> {generateEmojis()}</span>
  {#if !forceRandom}
    <div class='w-full mx-auto my-2'>
      <Button
        title='Share Score'
        className='block mx-auto'
        type='submit'
        on:click={generateShareClipboard}
      >
        share
      </Button>
      <p
        class={`${
          notifyClipboard ? 'opacity-100' : 'opacity-0'
        } text-blue-100 font-semibold transition-all duration-500 my-2`}
      >
        copied to clipboard.
      </p>
    </div>
  {/if}
</div>
