<script lang='ts'>
  import { goto } from '$app/navigation';
  import Button from '$components/Button.svelte';
  import { toast } from '@zerodevx/svelte-toast';

  let playlistUrl = '';

  const startCustom = () => {
    if (!playlistUrl) return toast.push('please provide a valid spotify playlist url.');
    const id = new URL(playlistUrl).pathname.split('/')[2];
    goto('/custom/' + id);
  };
</script>
<div>
  <div class='w-full w-10/12 max-w-2xl mx-auto my-5'>
    <div class='text-center mx-auto w-full text-blue-100 mb-2'>
      paste the link to any spotify playlist below
    </div>
    <input
      bind:value={playlistUrl}
      class='p-2 border-2 w-full text-gray-400 rounded-sm border-gray-600 bg-gray-900 hover:border-gray-400 focus:border-gray-400 outline-none transition-all duration-200'
      name='spotify playlist input'
      placeholder='spotify playlist link'
    />
    <div class='w-full mx-auto text-center my-4'>
      <Button on:click={startCustom} title='start custom audial' type='submit'
      >start your custom audial
      </Button>
    </div>
  </div>
</div>
