import { Card } from "@/components/ui/card"
import { Phone, CheckCircle, Zap, Shield } from "lucide-react"

export function SolutionSection() {
  const solutions = [
    {
      icon: Phone,
      title: "24/7 AI Voice Agent",
      description: "Ihr persönlicher AI Agent nimmt jeden Anruf entgegen - rund um die Uhr, 365 Tage im Jahr",
    },
    {
      icon: CheckCircle,
      title: "Intelligente Qualifizierung",
      description: "Nur kaufbereite Interessenten mit vollständigen Informationen werden an Sie weitergeleitet",
    },
    {
      icon: Zap,
      title: "Sofortige Terminbuchung",
      description: "AI bucht automatisch Termine in Ihrem Kalender und Sie erhalten sofort eine Benachrichtigung",
    },
  ]

  return (
    <section id="solution" className="relative py-20 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
            Die Lösung: Ihr persönlicher AI Agent
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ein leistungsstarker AI Agent, der <strong className="text-foreground">nur 100% seriöse, kaufbereite Interessenten</strong> an Sie weiterleitet
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon
            return (
              <Card
                key={index}
                className="p-8 bg-card backdrop-blur-xl border-2 border-border hover:border-[#FFD700]/50 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="space-y-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FFD700]/20 to-[#FFA500]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-[#FFD700]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">{solution.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">{solution.description}</p>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-[#FFD700]/10 to-[#FFA500]/10 border-2 border-[#FFD700]/30 rounded-2xl">
            <Shield className="w-6 h-6 text-[#FFD700]" />
            <span className="text-lg font-semibold text-foreground">
              ✓ AI sammelt alle Informationen • ✓ Sie müssen nur noch abschließen
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
