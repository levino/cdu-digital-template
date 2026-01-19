#import "letter-pro-lib.typ": letter-simple

// Globale Design-Konstanten
#let schutzzone = 9mm
#let cdu-tuerkis = rgb("#52b7c1")
#let verbandsFontSize = 10pt
#let leftMargin = 25mm

#let cdu-brief(
  // CDU spezifisch
  kreisverband: "",
  // Footer (beliebiger Inhalt)
  briefpapier-footer: none,
  // Letter Pro Parameter durchreichen
  ..args,
  body,
) = {
  let briefpapier = [
    #let logo-hoehe = 2 * schutzzone
    #let balken-hoehe = 2 * schutzzone
    #let logo-abstand = schutzzone

    #place(
      top + left,
      dy: logo-abstand,
      rect(
        width: 100%,
        height: balken-hoehe,
        fill: cdu-tuerkis,
      ),
    )

    #place(
      top + right,
      dx: -logo-abstand,
      dy: logo-abstand,
      image("brieflogo.png", height: balken-hoehe),
    )

    #place(
      top + left,
      dx: leftMargin,
      dy: 3 * schutzzone - 1.5 * verbandsFontSize,
      {
        set text(font: "Inter", size: verbandsFontSize, weight: "regular", fill: white)
        upper(kreisverband)
      },
    )
  ]

  letter-simple(
    ..args,
    letterpaper: briefpapier,
    custom-footer: briefpapier-footer,
    sender-margin-top: 3 * schutzzone + 5mm,
    body,
  )
}
