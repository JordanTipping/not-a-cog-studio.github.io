// astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
    vite: {
        css: {
            devSourcemap: true, // Optional, but good for debugging
        }
    }
});
