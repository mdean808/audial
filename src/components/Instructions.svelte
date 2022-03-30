<script lang="ts">
	import { readInstructions } from "../store";
	import Button from "./Button.svelte";

	export let hidden = true;
</script>

<div class:hidden>
  <div
    class="flex overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-40 justify-center items-center h-modal md:h-full md:inset-0 bg-black opacity-50"
    on:click={() => (hidden = true)}
  />
  <div class="relative px-4 w-full max-w-2xl h-full md:h-auto mx-auto z-50">
    <div class="relative rounded-lg bg-gray-700 p-3 opacity-100 shadow">
      <h1 class="text-3xl">Instructions</h1>
      <div class="p-4">
        <ul class="text-left">
          <li>
            <span>press the play button</span>
          </li>
          <li>
            <span>listen to the song snippet</span>
          </li>
          <li>
            <span>type the name of the song or song artist into the box</span>
          </li>
          <li>
						<span
            >if you get the song incorrect or press skip, more of the song will be revealed</span
            >
          </li>
        </ul>
      </div>
      <Button
        on:click={() => {
					hidden = true;
					readInstructions.set(true);
				}}
        title="Close Popup"
        type="primary">sounds cool
      </Button
      >
    </div>
  </div>
</div>
