<script lang="ts">
  import { currentAttempt, currentSong } from "../store";
  import type { Attempt, Song } from "../types";
  import { goto } from "$app/navigation";

  const resetData = () => {
    //readInstructions.set(false);
    currentAttempt.set(<Attempt>{ attempts: 0, guesses: [], correct: false });
    currentSong.set(<Song>{});
    window.location.href = "";
  };
</script>

<div>
  <header class="border-b border-gray-500">
    <div class="max-w-screen-md mx-auto ">
      <div class="flex justify-evenly p-3 items-center">
        <div class="flex flex-1">
          <button
            on:click={() => goto('/about')}
            title="About Audial"
            class="px-2 py-2 tracking-widest border-none flex items-center font-semibold text-sm text-white hover:text-blue-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12.01" y2="8" />
            </svg>
          </button>
          <button
            on:click={() => window.location.href = '/random?=true'}
            title="Random Song"
            class="px-2 py-2 tracking-widest border-none flex items-center font-semibold text-sm text-white hover:text-blue-500"
          >
            <svg xmlns="http://www.w3.org/2000/svg"
                 width="24"
                 height="24"
                 fill="none"
                 viewBox="0 0 24 24"
                 stroke="currentColor"
                 stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </button>
        </div>
        <h1 on:click={window.location.href = '/'}
            class="text-3xl font-bold flex-grow text-center flex-1 cursor-pointer text-white">audial</h1>
        <div class="flex flex-1 justify-end">
          <button
            on:click={() => goto('/stats')}
            title="View Statistics"
            class="px-2 py-2 tracking-widest border-none flex items-center font-semibold text-sm text-white hover:text-blue-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M12 20v-6M6 20V10M18 20V4" />
            </svg>
          </button>
          <button
            on:click={() => goto('/instructions')}
            title="View Instructions"
            class="px-2 py-2 uppercase tracking-widest border-none flex items-center font-semibold text-sm text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </header>
</div>
