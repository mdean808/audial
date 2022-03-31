<script>
  import Footer from "../components/Footer.svelte";
  import { currentAttempt, readInstructions } from "../store";
  import Game from "../components/Game.svelte";
  import Instructions from "../components/Instructions.svelte";
  import { onMount } from "svelte";

  let loading = true;
  let showInstructions;
  onMount(() => {
    showInstructions = readInstructions.get();
    currentAttempt.listen(value => {
      if (value.date) {
        loading = false;
      }
    });
    readInstructions.listen(value => showInstructions = value);
  });
</script>

<div>
  <Instructions hidden={showInstructions} />
  <div class="max-w-screen-md mx-auto">
    <div class={`text-center p-3 ${!showInstructions || loading ? 'hidden' : ''}`}>
      <Game />
    </div>
  </div>
  <Footer />
  <div class={`w-full mx-auto text-center mt-20 text-blue-600 ${loading ? '' : 'hidden'}`}>
    <svg xmlns="http://www.w3.org/2000/svg"
         style="margin: auto; background: transparent; display: block; shape-rendering: auto;" width="100px"
         height="100px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
      <circle cx="50" cy="50" fill="none" stroke="currentColor" stroke-width="7" r="38"
              stroke-dasharray="179.0707812546182 61.690260418206066">
        <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="0.9345794392523364s"
                          values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
      </circle>
    </svg>
  </div>
</div>