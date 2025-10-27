import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Shield, Lock, Eye, Database } from "lucide-react"

export default function DatenschutzPage() {
  return (
    <main className="relative min-h-screen bg-background">
      <Navigation />

      <div className="relative z-10 pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <Shield className="w-16 h-16 text-primary" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground">Datenschutzerklärung</h1>
            <p className="text-lg text-muted-foreground">Ihre Daten sind bei uns sicher</p>
          </div>

          <Card className="p-8 md:p-12 bg-card border-2 border-border">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
                  <Lock className="w-6 h-6 text-primary" />
                  Datenschutz auf einen Blick
                </h2>
                <p className="text-foreground leading-relaxed">
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten
                  passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
                  persönlich identifiziert werden können.
                </p>
              </div>

              <div className="border-t border-border pt-8 space-y-4">
                <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
                  <Database className="w-6 h-6 text-primary" />
                  Datenerfassung auf dieser Website
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      Wer ist verantwortlich für die Datenerfassung auf dieser Website?
                    </h3>
                    <p className="text-foreground leading-relaxed">
                      Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten
                      können Sie dem Impressum dieser Website entnehmen.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Wie erfassen wir Ihre Daten?</h3>
                    <p className="text-foreground leading-relaxed">
                      Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich
                      z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben. Andere Daten werden automatisch
                      beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.B.
                      Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Wofür nutzen wir Ihre Daten?</h3>
                    <p className="text-foreground leading-relaxed">
                      Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten.
                      Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-border pt-8 space-y-4">
                <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
                  <Eye className="w-6 h-6 text-primary" />
                  Ihre Rechte
                </h2>
                <div className="space-y-3 text-foreground leading-relaxed">
                  <p>Sie haben jederzeit das Recht:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten zu erhalten</li>
                    <li>Berichtigung unrichtiger personenbezogener Daten zu verlangen</li>
                    <li>Löschung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen</li>
                    <li>
                      Einschränkung der Datenverarbeitung zu verlangen, sofern wir Ihre Daten noch nicht löschen dürfen
                    </li>
                    <li>Der Verarbeitung Ihrer personenbezogenen Daten zu widersprechen</li>
                    <li>Datenübertragbarkeit zu verlangen</li>
                  </ul>
                </div>
              </div>

              <div className="border-t border-border pt-8 space-y-4">
                <h2 className="text-2xl font-bold text-foreground">Hosting</h2>
                <p className="text-foreground leading-relaxed">
                  Wir hosten die Inhalte unserer Website bei Vercel Inc. Anbieter ist die Vercel Inc., 340 S Lemon Ave
                  #4133, Walnut, CA 91789, USA. Vercel verarbeitet Daten von Ihnen in den USA. Wir weisen darauf hin,
                  dass nach Meinung des Europäischen Gerichtshofs derzeit kein angemessenes Schutzniveau für den
                  Datentransfer in die USA besteht.
                </p>
              </div>

              <div className="border-t border-border pt-8 space-y-4">
                <h2 className="text-2xl font-bold text-foreground">Kontaktformular</h2>
                <p className="text-foreground leading-relaxed">
                  Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular
                  inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall
                  von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                </p>
              </div>

              <div className="border-t border-border pt-8 space-y-4">
                <h2 className="text-2xl font-bold text-foreground">SSL- bzw. TLS-Verschlüsselung</h2>
                <p className="text-foreground leading-relaxed">
                  Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine
                  SSL-bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile
                  des Browsers von "http://" auf "https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
                </p>
              </div>

              <div className="border-t border-border pt-8 space-y-4">
                <h2 className="text-2xl font-bold text-foreground">Kontakt</h2>
                <p className="text-foreground leading-relaxed">
                  Bei Fragen zum Datenschutz können Sie sich jederzeit an uns wenden:{" "}
                  <a href="mailto:ciroreachmax@pm.me" className="text-primary hover:underline">
                    ciroreachmax@pm.me
                  </a>
                </p>
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
