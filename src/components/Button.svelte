<script lang='ts'>
	export let type: string;
	export let className = '';

	let buttonCSS;

	switch (type) {
		case 'primary':
			buttonCSS = 'bg-orange-600 hover:bg-orange-500';
			break;

		case 'submit':
			buttonCSS = 'bg-blue-600 hover:bg-blue-500';
			break;

		default:
			buttonCSS = 'bg-orange-600 hover:bg-orange-500';
			break;
	}
</script>

<button
	on:click
	class={`p-2 text-white ${buttonCSS} rounded-md shadow hover:shadow-lg transition-all duration-200 ${className}`}
>
	<slot />
</button
>
