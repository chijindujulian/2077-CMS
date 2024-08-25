import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import node from '@astrojs/node'
import svelte from '@astrojs/svelte'

import vercel from '@astrojs/vercel/serverless'

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind(), svelte()],
    output: 'server',
    darkMode: 'selector',
    adapter: vercel(),
    devToolbar: {
        enabled: false,
    },
    adapter: vercel({
        webAnalytics: { enabled: true },
    }),
})
