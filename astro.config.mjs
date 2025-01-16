import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import svelte from '@astrojs/svelte';

export default defineConfig({
    site: 'https://www.stimsims.learning.energy', // Full URL of your GitHub Pages site 'https://Stimsims.github.io'
   // base: 'stimsims-website-2', // Base path for your site
    integrations: [mdx(), svelte({ preprocess: [] })],
   /// prefetch: true, apparently its on by default?
    build: {
        inlineStylesheets: 'always'
    }
});
