<script lang="ts" context="module">
  export function load({ error, status }) {
    return {
      props: {
        status,
        error
      }
    };
  }
</script>

<script lang="ts">
  export let status;
  export let error;
</script>
<div class="max-w-screen-md mx-auto px-4 py-2">
  <h1 class="text-5xl text-red-600">error</h1>
  <p class="text-lg"><span class="text-amber-400">{status}:</span> {error.message.split(':')[0]}</p>
</div>
