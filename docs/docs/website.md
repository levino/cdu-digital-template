---
title: Website
description: Wie die Website funktioniert
---

# Website

Die Website basiert auf [Astro](https://astro.build) und liegt im Ordner `website/`.

## Struktur

```
website/
├── src/
│   ├── content/      # Inhalte (News, Termine, Personen, ...)
│   ├── pages/        # Seiten
│   ├── components/   # UI-Komponenten
│   ├── layouts/      # Seitenlayouts
│   └── data/         # Statische Daten
├── public/           # Bilder, Dateien
└── astro.config.mjs  # Konfiguration
```

## Seiten

| URL | Beschreibung |
|-----|--------------|
| `/` | Startseite mit News und Terminen |
| `/aktuelles` | Alle Neuigkeiten |
| `/termine` | Alle Termine |
| `/vorstand` | Vorstandsmitglieder |
| `/fraktion/gemeinde` | Gemeinderatsfraktion |
| `/fraktion/kreistag` | Kreistagsfraktion |
| `/berichte` | Berichte aus Gremien |
| `/kontakt` | Kontaktformular |
| `/impressum` | Impressum |

## Lokal starten

```bash
cd website
npm install
npm run dev
```

Die Seite läuft dann unter `http://localhost:4321`.

## Build

```bash
npm run build
```

Die fertige Seite landet in `website/dist/`.
