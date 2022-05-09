import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import { resolve } from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(),
  kit: {
    vite: {
      resolve: {
        alias: {
          $src: resolve('src'),
          $lib: resolve('src/lib'),
          $types: resolve('src/types'),
          $routes: resolve('src/routes'),
          $components: resolve('src/components')
        }
      }
    },
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
      name: 'v0.0.9'
    }
  }
};

export default config;
