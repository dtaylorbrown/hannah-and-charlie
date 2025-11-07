import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import netlify from '@astrojs/netlify';

export default defineConfig({
  //   site: 'https://example.com',

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: netlify(),
});