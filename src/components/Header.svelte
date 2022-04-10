<script lang="ts">
  import { readInstructions } from "../store";
  import { goto } from "$app/navigation";
  import { browser } from "$app/env";
  import { page } from "$app/stores";
  import { onMount } from "svelte";


  let queryParams;
  let url = "https://audial.mogdan.xyz";

  onMount(() => {
    if (browser) {
      url = window.location.href;
    }
    queryParams = new URL(url).searchParams;
  })

  const enableRandom = async () => {
    if (browser) {
      url = window.location.href;
    }
    queryParams = new URL(url).searchParams;
    queryParams.set("random", "true");
    await goto("?" + queryParams.toString());
    window.location.reload();
  };
</script>

<div>
  <header class="border-b border-gray-500">
    <div class="max-w-screen-md mx-auto ">
      <div class="flex justify-evenly p-3 items-center">
        <div class="flex flex-1">
          <button
            on:click={() => goto('/custom').then(() => window.location.reload())}
            title="Custom Playlist"
            class="px-2 py-2 tracking-widest border-none flex items-center font-semibold text-sm text-white hover:text-blue-500"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          </button>
          <button
            on:click={enableRandom}
            title="Random Song"
            class="px-2 py-2 tracking-widest border-none flex items-center font-semibold text-sm text-white hover:text-blue-500"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 256 256">
              <rect width="256" height="256" fill="none"></rect>
              <path d="M32,72H55.1a64,64,0,0,1,52,26.8l41.8,58.4a64,64,0,0,0,52,26.8H232" fill="none"
                    stroke="currentColor"
                    stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></path>
              <polyline points="208 48 232 72 208 96" fill="none" stroke="currentColor" stroke-linecap="round"
                        stroke-linejoin="round" stroke-width="24"></polyline>
              <polyline points="208 160 232 184 208 208" fill="none" stroke="currentColor" stroke-linecap="round"
                        stroke-linejoin="round" stroke-width="24"></polyline>
              <path d="M152.8,93.9A63.7,63.7,0,0,1,200.9,72H232" fill="none" stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round" stroke-width="24"></path>
              <path d="M32,184H55.1a63.7,63.7,0,0,0,48.1-21.9" fill="none" stroke="currentColor" stroke-linecap="round"
                    stroke-linejoin="round" stroke-width="24"></path>
            </svg>
          </button>
        </div>
        <div>
          <h1 on:click={() => goto('/')}
              class="text-3xl font-bold flex-grow text-center flex-1 cursor-pointer text-white relative">
            audial
            {#if $page.url.href.includes('custom') && new URL(url).searchParams.get("random") === "true"}
              <span class="absolute rotate-45 text-green-500 text-sm -right-12 -top-1">custom</span>
              <span class="absolute rotate-45 text-red-600 text-sm -right-10 top-2">shuffle</span>
            {:else if $page.url.href.includes('custom')}
              <span class="absolute rotate-45 text-green-500 text-sm -right-9">custom</span>
            {:else if new URL(url).searchParams.get("random") === "true"}
              <span class="absolute rotate-45 text-red-600 text-sm -right-9">shuffle</span>
            {/if}
          </h1>
        </div>
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
            on:click={() => readInstructions.set(false)}
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
