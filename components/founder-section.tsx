import { Card } from "@/components/ui/card"
import { Mail, Shield, Award } from "lucide-react"
import Image from "next/image"

export function FounderSection() {
  return (
    <section className="relative py-16 px-4 bg-background border-y border-border">
      <div className="max-w-6xl mx-auto">
        <Card className="p-8 md:p-12 bg-card border-2 border-border shadow-xl">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-shrink-0">
              <div className="relative">
                <Image
                  src="/images/ceo-founder.jpg"
                  alt="Ciro Balestrieri - Gründer ReachMax"
                  width={224}
                  height={224}
                  className="w-56 h-56 rounded-2xl border-4 border-foreground/20 shadow-lg object-cover"
                  priority
                />
                <div className="absolute -bottom-3 -right-3 bg-foreground text-background rounded-full p-3 shadow-lg">
                  <Award className="w-6 h-6" />
                </div>
              </div>
            </div>

            <div className="flex-1 space-y-4 text-center md:text-left">
              <div>
                <h3 className="text-3xl font-bold text-foreground">Ciro Balestrieri</h3>
                <p className="text-xl text-muted-foreground mt-1">Gründer & CEO von ReachMax</p>
              </div>

              <div className="space-y-3">
                <p className="text-lg text-foreground leading-relaxed">
                  Nach Jahren im B2B-Vertrieb habe ich miterlebt, wie Unternehmen täglich Tausende Euro durch verpasste Anrufe verlieren.
                </p>
                
                <p className="text-lg text-foreground leading-relaxed">
                  ReachMax ist die Lösung, die ich selbst immer gebraucht hätte: Ein AI Agent, der nie schläft und jeden Lead in einen Termin verwandelt.
                </p>
                
                <p className="text-lg text-foreground leading-relaxed">
                  Ich stehe persönlich hinter jedem Setup. Ihr Erfolg ist mein Erfolg - deshalb biete ich 14 Tage Geld-zurück-Garantie ohne Wenn und Aber.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <div className="flex items-center gap-2 px-3 py-2 bg-muted/50 rounded-md border border-border/50">
                  <span className="text-sm font-medium text-foreground">✓ Persönlicher Support</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 bg-muted/50 rounded-md border border-border/50">
                  <span className="text-sm font-medium text-foreground">✓ Made in Germany</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 bg-muted/50 rounded-md border border-border/50">
                  <span className="text-sm font-medium text-foreground">✓ DSGVO-konform</span>
                </div>
              </div>

              <div className="flex items-center gap-2 px-4 py-2 bg-muted rounded-lg justify-center md:justify-start">
                <Mail className="w-5 h-5 text-foreground" />
                <a
                  href="mailto:ciroreachmax@pm.me"
                  className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
                >
                  ciroreachmax@pm.me
                </a>
              </div>
            </div>
          </div>

          {/* Video Section - Full Width Below */}
          <div className="mt-12">
            <div className="relative bg-muted/30 border-2 border-dashed border-muted-foreground/50 rounded-lg p-12 text-center">
              <div className="text-6xl mb-4 opacity-60">🎥</div>
              <h4 className="text-2xl font-bold text-foreground mb-2">Video-Intro folgt bald</h4>
              <p className="text-muted-foreground font-medium text-lg">Persönliche Nachricht von Ciro</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
