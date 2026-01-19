---
title: Loslegen
description: In 10 Minuten zur eigenen CDU-Website
---

# Loslegen

Du brauchst **keine** Programmierkenntnisse. Claude macht alles für dich.

**Demo ansehen:** [demo-website.cdu-digital-template.levinkeller.de](https://demo-website.cdu-digital-template.levinkeller.de)

## 1. Repository kopieren

Geh auf [github.com/levino/cdu-digital-template](https://github.com/levino/cdu-digital-template) und klick oben rechts auf **Use this template** → **Create a new repository**.

Gib deinem Repository einen Namen (z.B. `cdu-neustadt-website`) und klick auf **Create repository**.

## 2. GitHub App installieren

Installiere [Claude Code](https://docs.anthropic.com/en/docs/claude-code) falls noch nicht vorhanden.

Dann installiere die GitHub App:

```bash
claude /install-github-app
```

Folge den Anweisungen. Das gibt Claude die Berechtigung, auf Issues zu reagieren und Pull Requests zu erstellen.

## 3. Verband anpassen

**CLI-User:** Starte einfach den Setup-Agent:

```
/setup
```

Der fragt alles Nötige ab und passt die Seite automatisch an.

**Oder** öffne ein **GitHub Issue** in deinem Repository und schreib sowas wie:

> @claude pass die seite für uns an. wir sind der CDU ortsverband neustadt.
>
> vorsitzender ist hans müller (hans.mueller@cdu-neustadt.de, 0123 456789)
> stellvertreterin ist petra schmidt
> schatzmeister ist klaus weber
>
> unsere adresse ist hauptstraße 15, 12345 neustadt
> telefon 05432 12345
> email info@cdu-neustadt.de

Claude macht einen Pull Request mit allen Änderungen. Du musst nur noch mergen.

## 4. Bilder hinzufügen

Für Personenfotos: Lad die Bilder irgendwo hoch (Google Drive mit öffentlichem Link, Dropbox, eigener Webspace) und gib Claude die URLs:

> @claude hier sind die fotos für den vorstand:
> - hans müller: https://example.com/fotos/mueller.jpg
> - petra schmidt: https://example.com/fotos/schmidt.jpg
> - klaus weber: https://example.com/fotos/weber.jpg

Claude lädt sie runter und fügt sie ein.

## 5. Online stellen

Das Template ist für **Cloudflare Pages** vorbereitet:

1. Geh auf [dash.cloudflare.com](https://dash.cloudflare.com)
2. **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**
3. Wähl dein Repository
4. Build settings:
   - Root directory: `website`
   - Build command: `npm run build`
   - Build output directory: `dist`
5. Deploy

Fertig! Deine Seite ist online.

:::note
Der `docs/` Ordner enthält eine interne Dokumentation (z.B. für Briefe). Kann man ignorieren oder später einrichten - nur für Fortgeschrittene.
:::

## 6. Aufräumen

Die `project-docs/` brauchst du nicht - das ist nur die Anleitung die du gerade liest. Sag Claude:

> @claude lösch den project-docs ordner, den brauch ich nicht

## Weitere Änderungen

Für alles weitere: Einfach ein Issue aufmachen und `@claude` fragen:

> @claude füg einen neuen termin hinzu: stammtisch am 15. März um 19 uhr im gasthaus zur post

> @claude schreib eine news über unsere erfolgreiche mitgliederversammlung

> @claude ändere die telefonnummer im impressum auf 05432 99999

Claude versteht auch Tippfehler und umgangssprachliche Anfragen.
