import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import svelte from '@astrojs/svelte';

export default defineConfig({
    site: 'https://Stimsims.github.io', // Full URL of your GitHub Pages site
    base: '/stimsims-website-2', // Base path for your site
    integrations: [mdx(), svelte({ preprocess: [] })],
    
});
