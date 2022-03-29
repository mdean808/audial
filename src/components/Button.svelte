<script lang="ts">
  export let type: string;
  export let className = "";
  export let title: string;
  let buttonCSS;

  switch (type) {
    case "primary":
      buttonCSS = "bg-blue-600 hover:bg-blue-500";
      break;

    case "submit":
      buttonCSS = "bg-green-600 hover:bg-green-500";
      break;

    case "warning":
      buttonCSS = "bg-orange-600 hover:bg-orange-500";
      break;

    case "breaking":
      buttonCSS = "bg-red-600 hover:bg-red-500";
      break;

    default:
      buttonCSS = "bg-blue-600 hover:bg-blue-500";
      break;
  }
</script>

<button
  on:click
  title={title}
  class={`p-2 text-white ${buttonCSS} rounded-md shadow hover:shadow-lg transition-all duration-200 ${className}`}
>
  <slot />
</button
>
