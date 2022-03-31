import adapter from "@sveltejs/adapter-static";
import preprocess from "svelte-preprocess";

/** @type {import("@sveltejs/kit").Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(),

  kit: {
    adapter: adapter({
      pages: 'docs',
      assets: 'docs',
      fallback: null
    }),
    prerender: {
      default: true
    },
    serviceWorker: {
      files: (path) => !path.includes('CNAME') && !path.includes('.nojekyll')
    },
    version: {
      pollInterval: 3600,
      name: 'v0.0.3'
    }
  }
};

export default config;
