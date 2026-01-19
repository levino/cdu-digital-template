import tailwind from '@astrojs/tailwind'
import shipyard from '@levino/shipyard-base'
import shipyardDocs from '@levino/shipyard-docs'
import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://cdu-digital-template.levinkeller.de',
  integrations: [
    tailwind({ applyBaseStyles: false }),
    shipyard({
      brand: 'CDU Digital Template',
      title: 'Dokumentation',
      tagline: 'Website-Vorlage für CDU-Verbände',
      navigation: {
        docs: { label: 'Loslegen', href: '/docs/index' },
        examples: { label: 'Beispiele', href: '/docs/beispiele' },
      },
    }),
    shipyardDocs({
      routeBasePath: 'docs',
    }),
  ],
})
