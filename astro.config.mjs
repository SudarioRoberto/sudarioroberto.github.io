import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://sudarioroberto.github.io',
  base: '/', // root – same as local test
  output: 'static'
});
