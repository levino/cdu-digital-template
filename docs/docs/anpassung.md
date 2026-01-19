---
title: Anpassen
description: Die Vorlage für den eigenen Verband anpassen
---

# Anpassen

So passt du das Template für deinen eigenen Verband an.

## 1. Repository kopieren

Auf GitHub: "Use this template" klicken oder forken.

## 2. Verbandsnamen ändern

In `website/src/` nach "Musterstadt" suchen und ersetzen:

- `astro.config.mjs` - Site-URL
- `layouts/BaseLayout.astro` - Seitentitel
- `components/Hero.astro` - Überschrift
- `pages/impressum.astro` - Impressumstext
- `pages/kontakt.astro` - Kontaktdaten

## 3. Personen austauschen

Alle Dateien in `content/people/` löschen und eigene anlegen.

Dann `vorstand.yaml`, `fraktion-gemeinde.yaml`, `fraktion-kreistag.yaml` anpassen.

## 4. Beispiel-Inhalte ersetzen

- `content/news/` - Beispiel-News löschen, eigene anlegen
- `content/events/` - Beispiel-Termine löschen, eigene anlegen
- `content/berichte/` - Beispiel-Berichte löschen oder anpassen

## 5. Briefvorlagen anpassen

In `briefvorlagen/lib/cdu-brief-template.typ`:

- Absenderadresse
- Telefon/E-Mail
- Bankverbindungen im Footer

## 6. Domain einrichten

In `website/astro.config.mjs`:

```js
export default defineConfig({
  site: 'https://www.cdu-deinort.de',
  // ...
})
```

## Deployment

Das Template ist für Cloudflare Pages vorbereitet. Einfach das Repository verbinden.

Alternativ: Netlify, Vercel, oder jeder andere statische Hoster.

## Hilfe per Claude

Für Änderungen einfach ein GitHub Issue anlegen und `@claude` erwähnen:

> @claude ändere den Verbandsnamen von Musterstadt zu Neustadt

Claude macht einen Pull Request mit den Änderungen.
