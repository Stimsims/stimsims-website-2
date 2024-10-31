import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import svelte from '@astrojs/svelte';

// Load environment variables
import dotenv from 'dotenv';
dotenv.config();

export default defineConfig({
    site: 'https://Stimsims.github.io', // Full URL of your GitHub Pages site
    base: process.env.ASTRO_BASE_URL, // Base path for your site
    integrations: [mdx(), svelte({ preprocess: [] })],
    
});
