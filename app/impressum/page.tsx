import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Building2, Mail, Phone } from "lucide-react"

export default function ImpressumPage() {
  return (
    <main className="relative min-h-screen bg-background">
      <Navigation />

      <div className="relative z-10 pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground">Impressum</h1>
            <p className="text-lg text-muted-foreground">Angaben gemäß § 5 TMG</p>
          </div>

          <Card className="p-8 md:p-12 bg-card border-2 border-border">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Building2 className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Firmeninformationen</h2>
                    <div className="space-y-2 text-foreground">
                      <p className="font-semibold">ReachMax GmbH</p>
                      <p>Musterstraße 123</p>
                      <p>12345 Musterstadt</p>
                      <p>Deutschland</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-border pt-8 space-y-4">
                <h2 className="text-2xl font-bold text-foreground">Kontakt</h2>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                    <a
                      href="mailto:ciroreachmax@pm.me"
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      ciroreachmax@pm.me
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                    <a href="tel:+491234567890" className="text-foreground hover:text-primary transition-colors">
                      +49 (0) 123 456 7890
                    </a>
                  </div>
                </div>
              </div>

              <div className="border-t border-border pt-8 space-y-4">
                <h2 className="text-2xl font-bold text-foreground">Vertretungsberechtigter</h2>
                <p className="text-foreground">Geschäftsführer: Ciro Balestrieri</p>
              </div>

              <div className="border-t border-border pt-8 space-y-4">
                <h2 className="text-2xl font-bold text-foreground">Registereintrag</h2>
                <div className="space-y-2 text-foreground">
                  <p>Handelsregister: Amtsgericht Musterstadt</p>
                  <p>Registernummer: HRB 12345</p>
                </div>
              </div>

              <div className="border-t border-border pt-8 space-y-4">
                <h2 className="text-2xl font-bold text-foreground">Umsatzsteuer-ID</h2>
                <p className="text-foreground">
                  Umsatzsteuer-Identifikationsnummer gemäß §27a Umsatzsteuergesetz: DE123456789
                </p>
              </div>

              <div className="border-t border-border pt-8 space-y-4">
                <h2 className="text-2xl font-bold text-foreground">Verantwortlich für den Inhalt</h2>
                <p className="text-foreground">
                  Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV: Ciro Balestrieri, Musterstraße 123, 12345
                  Musterstadt
                </p>
              </div>

              <div className="border-t border-border pt-8 space-y-4">
                <h2 className="text-2xl font-bold text-foreground">Haftungsausschluss</h2>
                <div className="space-y-4 text-foreground leading-relaxed">
                  <div>
                    <h3 className="font-semibold mb-2">Haftung für Inhalte</h3>
                    <p className="text-sm">
                      Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
                      Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Haftung für Links</h3>
                    <p className="text-sm">
                      Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss
                      haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
                      Seiten verantwortlich.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </main>
  )
}
