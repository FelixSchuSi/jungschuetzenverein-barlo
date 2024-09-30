// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import icon from 'astro-icon';
import lit from '@astrojs/lit';
import { BASE_PATH_WITHOUT_DOMAIN, SITE } from './base-path.mjs';

// https://astro.build/config
export default defineConfig({
	site: SITE,
	base: BASE_PATH_WITHOUT_DOMAIN,
	integrations: [sitemap(), mdx(), lit(), icon()],
});
