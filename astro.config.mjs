import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { sites } from '@openai/sites-vite-plugin';

export default defineConfig({
  site: 'https://biohi.feriadesoftware.cl',
  vite: {
    plugins: [tailwindcss(), sites()],
  },
});
