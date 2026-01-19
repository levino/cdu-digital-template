# CDU Musterstadt Template

Dieses Repository enthält die Website und Dokumentation für den CDU Gemeindeverband Musterstadt.

## Struktur

- `website/` - Astro-basierte öffentliche Website
- `docs/` - Interne Dokumentation (Astro + Shipyard)
- `briefvorlagen/` - Typst-Vorlagen für offizielle Briefe

## Briefeschreiber Agent

Wenn der User einen Brief erstellen möchte, nutze folgendes Wissen:

### Typst Briefvorlage

Briefe werden mit Typst geschrieben und nutzen die CDU-Vorlage unter `briefvorlagen/lib/cdu-brief-template.typ`.

**Neue Briefe erstellen:**
1. Erstelle eine neue `.typ` Datei in `briefvorlagen/`
2. Nutze die Vorlage wie folgt:

```typst
#import "lib/cdu-brief-template.typ": cdu-brief

#set text(lang: "de")

#show: cdu-brief.with(
  kreisverband: "Kreisverband Musterstadt",

  sender: (
    name: "CDU KV Musterstadt",
    address: "Musterstraße 8\n31171 Musterstadt",
    phone: "05069 12345",
    email: "info@cdu-musterstadt.de",
    web: "www.cdu-musterstadt.de",
  ),

  recipient: [
    Name des Empfängers \
    Straße Hausnummer \
    PLZ Ort
  ],

  date: "19. Januar 2026",
  subject: "Betreff des Briefes",

  // Optional:
  annotations: [Einschreiben],
  reference-signs: (
    ([Ihr Zeichen], [ABC-123]),
    ([Unser Zeichen], [CDU-001/26]),
  ),

  briefpapier-footer: {
    set text(size: 7pt)
    grid(
      columns: (1fr, 1fr, 1fr, 1fr),
      [*Vorsitzende*\nName\nAdresse],
      [Telefon\nEmail\nWeb],
      [*Konto*\nBank\nIBAN],
      [*Spendenkonto*\nBank\nIBAN],
    )
  },
)

// Brieftext hier - Typst Markdown-ähnliche Syntax
Sehr geehrte Damen und Herren,

hier kommt der Brieftext.

*Fett* und _kursiv_ funktionieren.

Aufzählungen:
+ Punkt 1
+ Punkt 2
+ Punkt 3

Mit freundlichen Grüßen

#v(15mm)

Unterschrift \
_Funktion_
```

### Typst Syntax Kurzreferenz

- `*fett*` - Fettdruck
- `_kursiv_` - Kursiv
- `\` am Zeilenende - Zeilenumbruch ohne Absatz
- `#v(15mm)` - Vertikaler Abstand
- `#pagebreak()` - Seitenumbruch
- `+ Punkt` - Nummerierte Liste
- `- Punkt` - Aufzählung
- `#link("url")` - Klickbarer Link

### Dateinamen-Konvention

Briefe sollten beschreibend benannt werden:
- `einladung-mitgliederversammlung-q1-2026.typ`
- `antwort-buergermeister-strassenbau.typ`
- `dankschreiben-spende-mueller.typ`

### Nach dem Erstellen

Die Briefe werden beim nächsten Build automatisch zu PDFs kompiliert und erscheinen auf der `/docs/letters` Seite.

Zum manuellen Testen:
```bash
cd briefvorlagen
typst compile dateiname.typ
```
