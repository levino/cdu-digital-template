// Beispielbrief mit CDU-Briefvorlage
// Diese Datei zeigt die Verwendung der Vorlage mit Beispieldaten

#import "lib/cdu-brief-template.typ": cdu-brief

#set text(lang: "de")

#show: cdu-brief.with(
  // CDU spezifisch
  kreisverband: "Kreisverband Musterstadt",

  // Letter Pro Daten
  sender: (
    name: "CDU KV Musterstadt",
    address: "Musterstraße 8\n31171 Musterstadt",
    phone: "05069 12345",
    email: "info@cdu-musterstadt.de",
    web: "www.cdu-musterstadt.de",
  ),

  recipient: [
    Max Mustermann \
    Musterstraße 123 \
    12345 Musterstadt
  ],
  margin: (
    bottom: 30mm,
  ),

  annotations: [Einschreiben - Rückschein],

  reference-signs: (
    ([Ihr Zeichen], [MV-2026-01]),
    ([Unser Zeichen], [CDU-NS-001/26]),
  ),

  date: "19. Januar 2026",
  subject: "Einladung zur Mitgliederversammlung",

  briefpapier-footer: {
    set text(size: 7pt)
    grid(
      columns: (1fr, 1fr, 1fr, 1fr),

      [
        *Kreisvorsitzende* \
        Sabine Musterfrau \
        Hans-Muster-Straße 31 \
        31171 Musterstadt
      ],

      [
        05069 12345 \
        info\@cdu-musterstadt.de \
        www.cdu-musterstadt.de
      ],

      [
        *Konto* \
        Kreissparkasse Hildesheim \
        IBAN: DE43 123456789001230000 \
        BIC: DEUTABCDE123
      ],

      [
        *Spendenkonto* \
        Kreissparkasse Hildesheim \
        IBAN: DE43 987654321009870000 \
        BIC: DEUTABCDE123
      ],
    )
  },
)

Sehr geehrter Herr Mustermann,

hiermit laden wir Sie herzlich zur nächsten Mitgliederversammlung des CDU Kreisverbands Musterstadt ein.

Die Versammlung findet am *15. Februar 2026* um *19:00 Uhr* im Rathaus Musterstadt statt.

*Tagesordnung:*

+ Begrüßung und Feststellung der Beschlussfähigkeit
+ Bericht des Vorstands
+ Kassenbericht
+ Entlastung des Vorstands
+ Verschiedenes

Wir freuen uns auf Ihr Kommen und bitten um Rückmeldung bis zum 10. Februar 2026.

Als zusätzliche Information möchten wir Sie darüber informieren, dass in der Versammlung auch über wichtige Zukunftsthemen des Kreisverbands diskutiert wird. Dazu gehören unter anderem die Digitalisierungsinitiative, die Stärkung der lokalen Wirtschaft und die Verbesserung der Infrastruktur in unserer Region.

Des Weiteren werden wir über die geplanten Aktivitäten für das Jahr 2026 sprechen, einschließlich lokaler Veranstaltungen, politischer Initiativen und Bürgergespräche. Ihre Teilnahme und Ihr Input sind dabei von großer Bedeutung für die erfolgreiche Umsetzung unserer gemeinsamen Ziele.

Sollten Sie Fragen haben oder bereits im Vorfeld Themen einbringen möchten, stehen wir Ihnen gerne zur Verfügung. Sie können uns telefonisch unter der angegebenen Nummer erreichen oder eine E-Mail an die genannte Adresse senden.

Bitte beachten Sie, dass aufgrund der aktuellen Situation möglicherweise besondere Hygienemaßnahmen gelten können. Weitere Informationen hierzu erhalten Sie rechtzeitig vor der Veranstaltung.

#pagebreak()

Wir möchten auch die Gelegenheit nutzen, um Ihnen für Ihr kontinuierliches Engagement und Ihre Unterstützung zu danken. Durch Ihr Mitwirken können wir gemeinsam wichtige Projekte vorantreiben und positive Veränderungen in unserer Gemeinde bewirken.

Die Versammlung wird voraussichtlich gegen 21:00 Uhr enden. Im Anschluss besteht die Möglichkeit zu informellen Gesprächen bei einem kleinen Imbiss.

Mit freundlichen Grüßen

#v(15mm)

Sabine Musterfrau \
_Kreisvorsitzende_
