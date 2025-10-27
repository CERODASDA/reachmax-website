import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { FileText, CheckCircle2 } from "lucide-react"

export default function AGBPage() {
  return (
    <main className="relative min-h-screen bg-background">
      <Navigation />

      <div className="relative z-10 pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <FileText className="w-16 h-16 text-primary" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground">Allgemeine Geschäftsbedingungen</h1>
            <p className="text-lg text-muted-foreground">Gültig ab {new Date().toLocaleDateString("de-DE")}</p>
          </div>

          <Card className="p-8 md:p-12 bg-card border-2 border-border">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                  1. Geltungsbereich
                </h2>
                <p className="text-foreground leading-relaxed">
                  Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen ReachMax GmbH
                  (nachfolgend "ReachMax" oder "wir") und unseren Kunden über die Bereitstellung von KI-gestützten
                  Kommunikationslösungen und damit verbundenen Dienstleistungen.
                </p>
              </div>

              <div className="border-t border-border pt-8 space-y-4">
                <h2 className="text-2xl font-bold text-foreground">2. Vertragsgegenstand</h2>
                <div className="space-y-3 text-foreground leading-relaxed">
                  <p>
                    ReachMax bietet KI-gestützte Kommunikationslösungen zur automatisierten Lead-Qualifizierung und
                    Kundenkommunikation an. Der genaue Leistungsumfang ergibt sich aus dem gewählten Paket (Basic oder
                    Premium).
                  </p>
                  <p>Die Leistungen umfassen insbesondere:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Bereitstellung von KI-Agenten für die Kundenkommunikation</li>
                    <li>Lead-Qualifizierung und -Verwaltung</li>
                    <li>Integration in bestehende Kommunikationskanäle</li>
                    <li>Analytics und Reporting (je nach Paket)</li>
                    <li>Technischer Support</li>
                  </ul>
                </div>
              </div>

              <div className="border-t border-border pt-8 space-y-4">
                <h2 className="text-2xl font-bold text-foreground">3. Vertragsschluss</h2>
                <p className="text-foreground leading-relaxed">
                  Der Vertrag kommt durch die Annahme des Angebots des Kunden durch ReachMax zustande. Die Annahme
                  erfolgt durch schriftliche Bestätigung per E-Mail oder durch Freischaltung des Zugangs.
                </p>
              </div>

              <div className="border-t border-border pt-8 space-y-4">
                <h2 className="text-2xl font-bold text-foreground">4. Preise und Zahlungsbedingungen</h2>
                <div className="space-y-3 text-foreground leading-relaxed">
                  <p>Es gelten die zum Zeitpunkt der Bestellung auf der Website angegebenen Preise.</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Die Setup-Gebühr ist einmalig bei Vertragsschluss fällig</li>
                    <li>Die monatliche Gebühr wird im Voraus zum Monatsbeginn fällig</li>
                    <li>Alle Preise verstehen sich zzgl. der gesetzlichen Mehrwertsteuer</li>
                    <li>Die Zahlung erfolgt per Banküberweisung oder SEPA-Lastschrift</li>
                  </ul>
                </div>
              </div>

              <div className="border-t border-border pt-8 space-y-4">
                <h2 className="text-2xl font-bold text-foreground">5. Vertragslaufzeit und Kündigung</h2>
                <div className="space-y-3 text-foreground leading-relaxed">
                  <p>
                    Der Vertrag wird auf unbestimmte Zeit geschlossen und kann von beiden Parteien mit einer Frist von
                    einem Monat zum Monatsende gekündigt werden.
                  </p>
                  <p>
                    Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt unberührt. Ein wichtiger Grund
                    liegt insbesondere vor bei:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Zahlungsverzug von mehr als zwei Monaten</li>
                    <li>Verstoß gegen wesentliche Vertragspflichten</li>
                    <li>Insolvenz einer Vertragspartei</li>
                  </ul>
                </div>
              </div>

              <div className="border-t border-border pt-8 space-y-4">
                <h2 className="text-2xl font-bold text-foreground">6. Geld-zurück-Garantie</h2>
                <p className="text-foreground leading-relaxed">
                  Wir bieten eine 14-tägige Geld-zurück-Garantie ab Vertragsschluss. Innerhalb dieser Frist können Sie
                  den Vertrag ohne Angabe von Gründen kündigen und erhalten die gezahlten Gebühren vollständig
                  zurückerstattet.
                </p>
              </div>

              <div className="border-t border-border pt-8 space-y-4">
                <h2 className="text-2xl font-bold text-foreground">7. Pflichten des Kunden</h2>
                <div className="space-y-3 text-foreground leading-relaxed">
                  <p>Der Kunde verpflichtet sich:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Die Dienste nur für rechtmäßige Zwecke zu nutzen</li>
                    <li>Zugangsdaten vertraulich zu behandeln</li>
                    <li>ReachMax unverzüglich über Sicherheitsvorfälle zu informieren</li>
                    <li>Die geltenden Datenschutzbestimmungen einzuhalten</li>
                  </ul>
                </div>
              </div>

              <div className="border-t border-border pt-8 space-y-4">
                <h2 className="text-2xl font-bold text-foreground">8. Verfügbarkeit und Support</h2>
                <p className="text-foreground leading-relaxed">
                  ReachMax strebt eine Verfügbarkeit der Dienste von 99% im Jahresmittel an. Ausgenommen sind geplante
                  Wartungsarbeiten, die nach Möglichkeit außerhalb der Geschäftszeiten durchgeführt werden. Der Support
                  ist je nach gewähltem Paket per E-Mail oder mit Priority-Status verfügbar.
                </p>
              </div>

              <div className="border-t border-border pt-8 space-y-4">
                <h2 className="text-2xl font-bold text-foreground">9. Haftung</h2>
                <p className="text-foreground leading-relaxed">
                  ReachMax haftet unbeschränkt für Vorsatz und grobe Fahrlässigkeit sowie für Schäden aus der Verletzung
                  des Lebens, des Körpers oder der Gesundheit. Für leichte Fahrlässigkeit haftet ReachMax nur bei
                  Verletzung wesentlicher Vertragspflichten. Die Haftung ist in diesem Fall auf den vertragstypischen,
                  vorhersehbaren Schaden begrenzt.
                </p>
              </div>

              <div className="border-t border-border pt-8 space-y-4">
                <h2 className="text-2xl font-bold text-foreground">10. Datenschutz</h2>
                <p className="text-foreground leading-relaxed">
                  Die Verarbeitung personenbezogener Daten erfolgt gemäß unserer Datenschutzerklärung und den geltenden
                  Datenschutzgesetzen, insbesondere der DSGVO. Beide Parteien verpflichten sich zur Einhaltung der
                  datenschutzrechtlichen Bestimmungen.
                </p>
              </div>

              <div className="border-t border-border pt-8 space-y-4">
                <h2 className="text-2xl font-bold text-foreground">11. Schlussbestimmungen</h2>
                <div className="space-y-3 text-foreground leading-relaxed">
                  <p>
                    Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts. Gerichtsstand
                    ist der Sitz von ReachMax, sofern der Kunde Kaufmann, juristische Person des öffentlichen Rechts
                    oder öffentlich-rechtliches Sondervermögen ist.
                  </p>
                  <p>
                    Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, bleibt die Wirksamkeit der
                    übrigen Bestimmungen hiervon unberührt.
                  </p>
                </div>
              </div>

              <div className="bg-muted/50 rounded-lg p-6 mt-8">
                <p className="text-sm text-muted-foreground">
                  Stand: {new Date().toLocaleDateString("de-DE", { year: "numeric", month: "long", day: "numeric" })}
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </main>
  )
}
