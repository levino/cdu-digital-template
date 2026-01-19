# CDU Website Template

Eine moderne, mobilfreundliche Website-Vorlage für CDU Gemeinde- und Ortsverbände.

## Features

- **Modernes Design** nach offiziellem CDU Corporate Design 2023
- **Mobilfreundlich** – optimiert für alle Geräte
- **Schnell** – statische Seiten, keine Datenbank
- **Sicher** – HTTPS, keine Cookies, DSGVO-konform
- **Kostenlos** – Hosting über Cloudflare Pages (kostenlos)
- **KI-gestützte Bearbeitung** – Änderungen mit Claude Code
- **Briefvorlagen** – Professionelle DIN-5008-konforme Briefe mit Typst

## Enthaltene Seiten

- Startseite mit aktuellen News und Terminen
- Vorstand
- Fraktion (Gemeinde & Kreistag)
- Aktuelles (News)
- Termine (Events)
- Berichte (aus Gemeinderat/Kreistag)
- Kontakt
- Impressum

## Schnellstart

### 1. Repository erstellen

Klicke auf **"Use this template"** oben rechts, um ein eigenes Repository zu erstellen.

### 2. Claude in GitHub aktivieren (optional aber empfohlen)

Die Claude GitHub Action ist bereits vorkonfiguriert. Um sie zu nutzen:

1. Du benötigst ein **Claude Pro/Max/Team Abo** (claude.ai)
2. Erstelle einen OAuth Token unter [claude.ai/settings/api](https://claude.ai/settings/api)
3. Füge den Token als Repository Secret hinzu:
   - Repository → Settings → Secrets and variables → Actions
   - "New repository secret" → Name: `CLAUDE_CODE_OAUTH_TOKEN` → Value: dein Token
4. Merge den offenen PR "Add Claude Code GitHub Workflow"

**Wichtig:** Ohne den Token funktioniert die GitHub Action nicht!

Danach kannst du in Issues oder PRs `@claude` erwähnen und Claude arbeitet direkt im Repository:

> "@claude füge einen neuen Termin für die Jahreshauptversammlung am 14. März hinzu"

> "@claude erstelle einen Bericht aus der letzten Gemeinderatssitzung"

**Hinweis:** Die Action läuft mit `--dangerously-skip-permissions`, d.h. Claude kann ohne Nachfragen Dateien ändern. Das ist unbedenklich, da es nur in der isolierten CI-Umgebung läuft – nicht auf deinem Computer.

### 3. Inhalte mit KI anpassen (lokal)

Alternativ öffne dein Repository mit [Claude Code](https://claude.ai/code) lokal und sage der KI was du ändern möchtest:

> "Ändere den Verbandsname zu CDU Musterstadt und aktualisiere die Kontaktdaten im Impressum"

> "Füge einen neuen Termin hinzu: Jahreshauptversammlung am 15. März 2025"

> "Erstelle einen News-Beitrag über die Wahl des neuen Vorstands"

Die KI findet automatisch die richtigen Dateien und macht die Änderungen für dich.

### 4. Automatisches Deployment

Verbinde dein Repository mit [Cloudflare Pages](https://pages.cloudflare.com/):

1. Gehe zu Cloudflare Dashboard → Pages → "Create a project"
2. Wähle "Connect to Git" und verbinde dein GitHub Repository
3. Build settings:
   - Build command: `npm install && npm -w website run build`
   - Build output directory: `website/dist`
4. Klicke "Save and Deploy"

Jede Änderung in deinem Repository wird automatisch deployed.

## Was du anpassen musst

Sage Claude Code einfach, was du ändern möchtest. Hier die wichtigsten Punkte:

- **Verbandsname** – z.B. "CDU Ortsverband Musterstadt"
- **Kontaktdaten** – Adresse, Telefon, E-Mail
- **Impressum** – Verantwortlicher, Anschrift
- **Vorstand** – Namen und Ämter der Vorstandsmitglieder
- **Fraktion** – Mitglieder im Gemeinde-/Kreistag

## Inhalte hinzufügen

### Neue Termine

Sage der KI z.B.:
> "Erstelle einen Termin für das Sommerfest am 15. Juni 2025 um 14:00 Uhr im Bürgerhaus"

### Neue News-Beiträge

Sage der KI z.B.:
> "Schreibe einen News-Beitrag über die gestrige Vorstandssitzung"

### Neue Personen

Sage der KI z.B.:
> "Füge Max Mustermann als neues Vorstandsmitglied hinzu, E-Mail max@beispiel.de"

## Briefvorlagen

Im Ordner `briefvorlagen/` findest du professionelle Typst-Vorlagen für offizielle Briefe im CDU Corporate Design:

- **DIN 5008 konform** – Geschäftsbrief-Standard
- **CDU Branding** – Logo, Farben, Schriften
- **Mehrseitige Dokumente** – Automatische Seitennummerierung
- **Kontaktdaten im Footer** – Ansprechpartner, Bankverbindung

Sage Claude Code z.B.:

> "Erstelle einen Brief an die Mitglieder mit Einladung zur Jahreshauptversammlung"

> "Schreibe einen offiziellen Brief an den Bürgermeister zum Thema Straßenausbau"

> "Passe die Absenderdaten in der Briefvorlage an unseren Verband an"

---

## Für Experten

<details>
<summary>Manuelle Einrichtung (Kommandozeile)</summary>

### Voraussetzungen

- [Node.js](https://nodejs.org/) (Version 20 oder neuer)
- [Git](https://git-scm.com/)

### Lokale Entwicklung

```bash
git clone https://github.com/DEIN-USERNAME/DEIN-REPO.git
cd DEIN-REPO
npm install
npm -w website run dev
```

Die Website ist dann unter `http://localhost:4321` erreichbar.

### Dateien bearbeiten

Wichtige Konfigurationsdateien:

- `website/astro.config.mjs` – Domain
- `website/wrangler.toml` – Cloudflare Projektname
- `website/src/components/Navigation.astro` – Verbandsname
- `website/src/components/Footer.astro` – Kontaktdaten
- `website/src/pages/impressum.astro` – Impressum
- `website/src/pages/kontakt.astro` – Kontaktdaten

### Content-Struktur

**Personen** in `website/src/content/people/`:

```markdown
---
firstName: Max
lastName: Mustermann
email: max.mustermann@cdu-musterstadt.de
phone: "+4912345678"
---
```

**Vorstand** in `website/src/content/vorstand.yaml`:

```yaml
- person: max-mustermann
  amt: Vorsitzender
```

**Termine** in `website/src/content/events/`:

```markdown
---
title: "Jahreshauptversammlung"
date: 2025-03-15T19:00:00
location: "Bürgerhaus Musterstadt"
status: upcoming
---
```

**News** in `website/src/content/news/`:

```markdown
---
title: "Neuer Vorstand gewählt"
date: 2024-11-15
category: Politik
---

Artikeltext hier...
```

### Briefvorlagen (Typst)

```bash
cd briefvorlagen
typst compile beispiel-brief.typ beispiel-brief.pdf
```

</details>

## Ordnerstruktur

```
cdu-template/
├── website/                    # Die eigentliche Website
│   ├── src/
│   │   ├── components/         # Wiederverwendbare Komponenten
│   │   ├── content/           # Inhalte (Markdown/YAML)
│   │   │   ├── events/        # Termine
│   │   │   ├── news/          # Aktuelles
│   │   │   └── people/        # Personen
│   │   ├── layouts/           # Seitenlayouts
│   │   └── pages/             # Einzelne Seiten
│   └── public/                # Statische Dateien (Bilder, etc.)
└── briefvorlagen/             # Typst-Briefvorlagen
```

## Technologie

- [Astro](https://astro.build/) – Static Site Generator
- [Tailwind CSS](https://tailwindcss.com/) – Styling
- [DaisyUI](https://daisyui.com/) – UI-Komponenten
- [Cloudflare Pages](https://pages.cloudflare.com/) – Hosting
- [Typst](https://typst.app/) – Briefvorlagen

## Hilfe & Support

Nutze [Claude Code](https://claude.ai/code) um Fragen zu stellen:

> "Wie füge ich ein Bild zu einem News-Beitrag hinzu?"

> "Erkläre mir die Ordnerstruktur"

Bei technischen Problemen erstelle ein [Issue](https://github.com/DEIN-REPO/issues).

## Lizenz

UNLICENSED – Bitte Lizenz vor Verwendung klären.
