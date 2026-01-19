---
title: Inhalte bearbeiten
description: News, Termine, Personen und Berichte anlegen
---

# Inhalte bearbeiten

Alle Inhalte liegen in `website/src/content/`. Einfach Dateien anlegen oder bearbeiten.

## News

Ordner: `content/news/`

```markdown
---
title: "Neuer Vorstand gewählt"
date: 2024-11-15
author: "Max Mustermann"
category: Politik
excerpt: "Kurze Zusammenfassung für die Übersicht"
---

Hier kommt der Artikeltext. Markdown funktioniert:

**Fett**, *kursiv*, [Links](https://example.com)

- Aufzählungen
- gehen auch
```

Dateiname egal, aber am besten beschreibend: `sommerfest-rueckblick.md`

## Termine

Ordner: `content/events/`

```markdown
---
title: "Politischer Stammtisch"
date: 2026-02-19T19:30:00
location: "Gasthaus Zur Eiche"
address: "Am Markt 5, 12345 Musterstadt"
description: "Offener Stammtisch für alle Interessierten"
status: upcoming
organizer: "CDU Gemeindeverband Musterstadt"
---

Längere Beschreibung hier, falls nötig.
```

`status` kann sein: `upcoming`, `cancelled`, `completed`

## Personen

Ordner: `content/people/`

```yaml
firstName: Max
lastName: Mustermann
email: max.mustermann@cdu-musterstadt.de
phone: "+4912345678"
address: |
  Musterstraße 1
  12345 Musterstadt
imageUrl: https://beispiel.com/foto.jpg
```

Dateiname = ID der Person: `max-mustermann.md`

## Vorstand

Datei: `content/vorstand.yaml`

```yaml
- id: "1"
  person: max-mustermann    # Verweis auf Person
  amt: Vorsitzender

- id: "2"
  person: erika-musterfrau
  amt: Stellv. Vorsitzende
```

## Fraktionen

Dateien: `content/fraktion-gemeinde.yaml` und `content/fraktion-kreistag.yaml`

```yaml
- id: "1"
  person: max-mustermann
  funktion: Fraktionsvorsitzender

- id: "2"
  person: erika-musterfrau
  funktion: Stellv. Fraktionsvorsitzende
```

## Berichte

Ordner: `content/berichte/`

```markdown
---
title: "Bericht aus der Gemeinderatssitzung August 2025"
date: 2025-08-13
gremium: Gemeinderat
excerpt: "Kurze Zusammenfassung"
---

## Erstes Thema

Text zum Thema...

## Zweites Thema

Weiterer Text...
```

`gremium` kann sein: `Gemeinderat`, `Kreistag`, oder andere.
