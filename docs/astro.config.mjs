import tailwind from '@astrojs/tailwind'
import shipyard from '@levino/shipyard-base'
import shipyardDocs from '@levino/shipyard-docs'
import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://demo-docs.cdu-digital-template.levinkeller.de',
  integrations: [
    tailwind({ applyBaseStyles: false }),
    shipyard({
      brand: 'CDU Musterstadt',
      title: 'Dokumentation',
      tagline: 'Internes Handbuch für den Gemeindeverband',
      navigation: {
        home: { label: 'Start', href: '/docs/index' },
        briefe: { label: 'Briefe', href: '/docs/letters' },
        berichte: { label: 'Berichte', href: '/berichte' },
        antraege: { label: 'Anträge', href: '/antraege' },
      },
    }),
    shipyardDocs({
      routeBasePath: 'docs',
    }),
  ],
})
