import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://SudarioRoberto.github.io/micropig',  // <-- replace with your GitHub username
  base: '/micropig/',                               // <-- MUST match repo name
  output: 'static'
});

