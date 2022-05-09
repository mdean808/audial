<script lang='ts'>
  import { readInstructions } from '$src/store';
  import Button from '$components/Button.svelte';

  export let hidden = true;
</script>

<div class:hidden>
  <div
    class='flex overflow-y-auto overflow-x-hidden fixed absolute right-0 left-0 z-40 justify-center items-center h-modal md:h-full md:inset-0 bg-black opacity-50'
    on:click={() => {
      hidden = true;
      readInstructions.set(true);
    }}
  />
  <!--  make this absolute and prevent changing the page-->
  <div class='absolute px-4 w-full h-full md:h-auto mx-auto z-50'>
    <div class='rounded-lg w-full max-w-2xl mx-auto mt-20 bg-gray-700 p-3 opacity-100 shadow'>
      <h1 class='text-3xl mx-auto text-center'>instructions</h1>
      <div class='p-4'>
        <ul class='text-left'>
          <li>
            <span>listen to the song snippet and type the name of the song into the box</span>
          </li>
          <li>
            <span
            >if you get the song incorrect or press skip, more of the song will be revealed</span
            >
          </li>
          <li>
            <span
            >a <span class='text-red-500'>red result</span> means you guessed incorrectly.</span
            >
          </li>
          <li>
            <span
            >a <span class='text-amber-400'>yellow result</span> means the artist was correct.</span
            >
          </li>
          <li>
            <span
            >a <span class='text-green-500'>green result</span> means your guess was correct!</span
            >
          </li>
          <li class='text-gray-400'>
            hint: the colored text on the header describes the current active playlist
          </li>
          <li class='border-t border-white mt-1 pt-2'>
            <svg
              class='h-5 w-5 inline text-blue-500'
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
            for a custom playlist.
          </li>
          <li>
            <svg
              class='inline text-blue-500'
              fill='currentColor'
              height='20'
              viewBox='0 0 256 256'
              width='20'
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
            for audial shuffle.
          </li>
        </ul>
      </div>
      <div class='w-full'>
        <Button
          className='mx-auto text-center block'
          on:click={() => {
            hidden = true;
            readInstructions.set(true);
          }}
          title='Close Popup'
          type='primary'
        >start listening
        </Button>
      </div>
    </div>
  </div>
</div>
