<script lang='ts'>
  import { isRandom, playlist, readInstructions } from '$src/store';
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  import { loadGame } from '../lib/util';

  let decade;
  let decadeColor;
  onMount(() => {

    switch (new Date().getDay()) {
      case 0:
        decade = '50s';
        decadeColor = 'yellow-400';
        break;
      case 1:
        decade = '80s';
        decadeColor = 'teal-500';
        break;
      case 2:
        decade = '2000s';
        decadeColor = 'purple-500';
        break;
      case 3:
        decade = '70s';
        decadeColor = 'emerald-500';
        break;
      case 4:
        decade = '60s';
        decadeColor = 'orange-500';
        break;
      case 5:
        decade = '2010s';
        decadeColor = 'indigo-500';
        break;
      case 6:
        decade = '90s';
        decadeColor = 'cyan-500';
        break;
    }
  });

  const enableRandom = async () => {
    isRandom.set(true);
    if ($page.url.pathname.includes('/random')) {// don't endlessly add /random to the url
      await loadGame($playlist, $isRandom);
    } else if ($page.url.pathname.includes('/custom/')) {
      isRandom.set(true);
      await goto($page.url.pathname + '/random');
    } else {
      isRandom.set(true);
      await goto('/random');
    }
  };
</script>

<div>
  <header class='border-b border-gray-500'>
    <div class='max-w-screen-md mx-auto '>
      <div class='flex justify-evenly p-3 items-center'>
        <div class='flex flex-1'>
          <button
            class='px-2 py-2 tracking-widest border-none flex items-center font-semibold text-sm text-white hover:text-blue-500'
            on:click={() => goto('/custom')}
            title='Custom Playlist'
          >
            <svg
              class='h-6 w-6'
              fill='none'
              stroke='currentColor'
              stroke-width='2'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </svg>
          </button>
          <button
            class='px-2 py-2 tracking-widest border-none flex items-center font-semibold text-sm text-white hover:text-blue-500'
            on:click={enableRandom}
            title='Random Song'
          >
            <svg
              fill='currentColor'
              height='25'
              viewBox='0 0 256 256'
              width='25'
              xmlns='http://www.w3.org/2000/svg'
            >
              <rect fill='none' height='256' width='256' />
              <path
                d='M32,72H55.1a64,64,0,0,1,52,26.8l41.8,58.4a64,64,0,0,0,52,26.8H232'
                fill='none'
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='24'
              />
              <polyline
                fill='none'
                points='208 48 232 72 208 96'
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='24'
              />
              <polyline
                fill='none'
                points='208 160 232 184 208 208'
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='24'
              />
              <path
                d='M152.8,93.9A63.7,63.7,0,0,1,200.9,72H232'
                fill='none'
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='24'
              />
              <path
                d='M32,184H55.1a63.7,63.7,0,0,0,48.1-21.9'
                fill='none'
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='24'
              />
            </svg>
          </button>
        </div>
        <div>
          <h1
            class='text-3xl font-bold flex-grow text-center flex-1 cursor-pointer text-white relative hover:underline underline-offset-1 decoration-blue-500 hover:text-blue-500'
            on:click={() => goto('/')}
          >
            audial
            {#if $page.url.href.includes('custom') && $isRandom}
              <span class='absolute rotate-45 text-green-500 text-sm -right-12 -top-1'>custom</span>
              <span class='absolute rotate-45 text-red-600 text-sm -right-10 top-2'>shuffle</span>
            {:else if $page.url.href.includes('custom')}
              <span class='absolute rotate-45 text-green-500 text-sm -right-9'>custom</span>
            {:else if $isRandom}
              <span class='absolute rotate-45 text-red-600 text-sm -right-9'>shuffle</span>
            {:else if $page.url.href.includes('stats')}
              <span class='absolute rotate-45 text-amber-400 text-sm -right-7'>stats</span>
            {:else if decade}
              <span
                class={`absolute rotate-45 text-${decadeColor} text-sm -right-${decade.length > 3 ? '7' : '2'}`}>{decade}</span>
            {/if}
          </h1>
        </div>
        <div class='flex flex-1 justify-end'>
          <button
            class='px-2 py-2 tracking-widest border-none flex items-center font-semibold text-sm text-white hover:text-blue-600'
            on:click={() => goto('/stats')}
            title='View Statistics'
          >
            <svg
              fill='none'
              height='24'
              stroke='currentColor'
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              viewBox='0 0 24 24'
              width='24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M12 20v-6M6 20V10M18 20V4' />
            </svg>
          </button>
          <button
            class='px-2 py-2 uppercase tracking-widest border-none flex items-center font-semibold text-sm text-white hover:text-blue-600'
            on:click={() => readInstructions.set(false)}
            title='View Instructions'
          >
            <svg
              fill='none'
              height='24'
              stroke='currentColor'
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              viewBox='0 0 24 24'
              width='24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <circle cx='12' cy='12' r='10' />
              <path d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3' />
              <line x1='12' x2='12.01' y1='17' y2='17' />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div
      class='hidden text-indigo-500 text-yellow-400 text-teal-500 text-orange-500 text-purple-500 text-cyan-500 text-emerald-500'></div>
  </header>
</div>
