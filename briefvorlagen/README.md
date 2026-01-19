# CDU Briefvorlagen

Typst-Templates für offizielle Briefkorrespondenz.

## Vorlagen

**Dateien:**
- `beispiel-brief.typ` - Beispielbrief zum Anpassen
- `lib/cdu-brief-template.typ` - Hauptvorlage
- `lib/letter-pro-lib.typ` - DIN 5008 Bibliothek
- `lib/brieflogo.png` - CDU Logo

**Fonts:**
- Inter (CDU Headline-Font)
- IBM Plex Serif (CDU Body-Font)

**Features:**
- CDU Corporate Design (Türkis #52b7c1)
- DIN 5008 konforme Briefgestaltung
- Automatische Seitennummerierung
- Mehrseitiger Footer mit Kontaktdaten

## Installation

### Typst installieren

**macOS:**
```bash
brew install typst
```

**Linux:**
```bash
curl -fsSL https://github.com/typst/typst/releases/download/v0.12.0/typst-x86_64-unknown-linux-musl.tar.xz | tar -xJ
sudo mv typst-x86_64-unknown-linux-musl/typst /usr/local/bin/
```

**Windows:**
Download von https://github.com/typst/typst/releases

### Fonts installieren

Die Fonts Inter und IBM Plex Serif müssen auf dem System installiert sein:

**macOS:**
```bash
brew install font-inter font-ibm-plex-serif
```

**Alternativ:** Download von https://fonts.google.com/

## Verwendung

1. `beispiel-brief.typ` öffnen
2. Absender- und Empfängerdaten anpassen
3. Brieftext schreiben
4. Kompilieren:

```bash
typst compile beispiel-brief.typ
```

## Anpassung

In `lib/cdu-brief-template.typ` kannst du die Standardwerte für deinen Verband anpassen:
- Absenderadresse
- Telefon/E-Mail
- Logo

## Tipps

- Links können klickbar gemacht werden: `#link("https://...")`
- Für Seitenumbrüche: `#pagebreak()`
- Für nicht-trennbare Blöcke: `#block(breakable: false)[...]`
