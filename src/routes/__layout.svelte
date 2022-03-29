<script lang='ts'>
	import Header from '../components/Header.svelte';
	import '../app.css';
	import Footer from '../components/Footer.svelte';
	import { currentAttempt } from '../store';

	let loading = true;
	currentAttempt.listen(value => {
		if (value.date) {
			loading = false;
		}
	});
</script>

<main class=''>
	<Header />
	<div class={`${loading ? 'hidden' : ''}`}>
		<div class='max-w-screen-md mx-auto'>
			<div class='text-center p-3'>
				<slot />
			</div>
		</div>
		<Footer />
		</div>
		<div class={`w-full mx-auto text-center mt-20 ${loading ? '' : 'hidden'} text-blue-600`}>
			<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: transparent; display: block; shape-rendering: auto;" width="100px" height="100px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
				<circle cx="50" cy="50" fill="none" stroke="currentColor" stroke-width="7" r="38" stroke-dasharray="179.0707812546182 61.690260418206066">
					<animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="0.9345794392523364s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
				</circle>
		</div>
</main>
