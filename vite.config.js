// vite.config.js
import { sveltekit } from '@sveltejs/kit/vite';
import { resolve } from 'path';

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit()],
  server: {
    port: 3000
  },
  preview: {
    port: 3000
  },
  resolve: {
    alias: {
      $src: resolve('src'),
      $types: resolve('src/types'),
      $routes: resolve('src/routes'),
      $components: resolve('src/components')
    }
  }
};

export default config;
