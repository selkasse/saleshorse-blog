import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex'; // 👈 import mdsvex
import mdsvexConfig from './mdsvex.config.js'; // 👈import our mdsvex config

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  extensions: ['.svelte', ...mdsvexConfig.extensions], // 👈 add mdsvex file extensions
  preprocess: [
    preprocess({ typescript: true, scss: true }),
    mdsvex(mdsvexConfig), // 👈 add mdsvex with mdsvex configuration options
  ],

  kit: {
    adapter: adapter(),
  },
};

export default config;
