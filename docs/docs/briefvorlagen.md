---
title: Briefvorlagen
description: Anleitung zur Verwendung der Typst-Briefvorlagen
---

# Briefvorlagen

Die Briefvorlagen basieren auf [Typst](https://typst.app/), einem modernen Textsatzsystem.

## Features

- **DIN 5008 konform** – Standardformat für Geschäftsbriefe
- **CDU Corporate Design** – Logo, Farben, Schriften
- **Automatische Formatierung** – Datum, Anschrift, Faltmarken
- **Mehrseitige Dokumente** – Automatische Seitennummerierung

## Struktur

```
briefvorlagen/
├── beispiel-brief.typ    # Beispielbrief
├── lib/
│   └── brief.typ         # Briefvorlage-Bibliothek
└── README.md
```

## Anpassung

### Mit Claude Code

Der einfachste Weg, Briefe zu erstellen:

```
"Erstelle einen Brief an Herrn Schmidt mit folgendem Inhalt: ..."
```

### Manuell mit Typst

1. Kopieren Sie `beispiel-brief.typ`
2. Passen Sie Empfänger und Inhalt an
3. Kompilieren Sie mit: `typst compile mein-brief.typ`

## Vorlage anpassen

Die Absenderdaten können in `lib/brief.typ` angepasst werden:

- Verbandsname
- Adresse
- Telefon/E-Mail
- Bankverbindung

## PDF-Generierung

Die PDFs werden automatisch im Build-Prozess generiert:

```bash
npm -w docs run build:briefe
```

Dies kompiliert alle `.typ`-Dateien zu PDFs im `public/downloads/` Ordner.
