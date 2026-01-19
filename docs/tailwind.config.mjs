import path from 'node:path'
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './{docs,src}/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    path.join(
      path.dirname(require.resolve('@levino/shipyard-base')),
      '../astro/**/*.astro',
    ),
    path.join(
      path.dirname(require.resolve('@levino/shipyard-docs')),
      '../astro/**/*.astro',
    ),
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: [
      {
        cdu: {
          'primary': '#52B7C1',      // Cadenabbia-Türkis
          'secondary': '#2D3C4B',    // Rhöndorf-Blau
          'accent': '#FFA600',       // Union-Gold
          'neutral': '#1B191D',      // Union-Schwarz
          'base-100': '#ffffff',
        },
      },
    ],
  },
}
