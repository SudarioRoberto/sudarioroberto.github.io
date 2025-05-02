import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://sudarioroberto.github.io',
  base: '', // Empty string for username.github.io sites
  output: 'static'
});