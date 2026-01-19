import tailwind from '@astrojs/tailwind'
import shipyard from '@levino/shipyard-base'
import shipyardDocs from '@levino/shipyard-docs'
import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://docs.cdu-musterstadt.de',
  integrations: [
    tailwind({ applyBaseStyles: false }),
    shipyard({
      brand: 'CDU Musterstadt',
      title: 'Dokumentation',
      tagline: 'Internes Handbuch für den Gemeindeverband',
      navigation: {
        docs: { label: 'Dokumentation', href: '/docs' },
        downloads: { label: 'Downloads', href: '/docs/downloads' },
      },
    }),
    shipyardDocs({
      routeBasePath: 'docs',
    }),
  ],
})
