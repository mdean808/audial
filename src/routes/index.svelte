<script lang="ts">
  import Footer from '$components/Footer.svelte';
  import { loading } from '$src/store';
  import Game from '$components/Game.svelte';
  import { onMount } from 'svelte';
  import { loadGame } from '$lib/util';
  import LoadingIndicator from '$components/LoadingIndicator.svelte';

  onMount(async () => {
    await loadGame('', false);
  });
</script>

<div>
  {#if $loading}
    <LoadingIndicator />
  {:else}
    <div class="max-w-screen-md mx-auto">
      <div class={`text-center p-3`}>
        <Game custom={false} random={false} />
      </div>
    </div>
    <Footer custom={false} />
  {/if}
</div>
