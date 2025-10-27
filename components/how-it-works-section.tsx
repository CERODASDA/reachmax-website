import { CheckCircle2, Brain, Rocket, TrendingUp } from "lucide-react"

export function HowItWorksSection() {
  const steps = [
    {
      icon: CheckCircle2,
      title: "Tag 1, Vormittag: Onboarding-Call",
      subtitle: "30 Minuten",
      description: "Sie erzählen uns über Ihr Geschäft. Wir machen den Rest!",
    },
    {
      icon: Brain,
      title: "Tag 1, Nachmittag: AI Training",
      subtitle: "Automatisch",
      description: "AI Agent wird erstellt und trainiert. Komplett automatisch.",
    },
    {
      icon: Rocket,
      title: "Tag 2, Vormittag: Testing mit Ihnen",
      subtitle: "15 Minuten",
      description: "Test-Calls mit Ihnen. Feedback geben, optimieren bis perfekt.",
    },
    {
      icon: TrendingUp,
      title: "Tag 2, Mittag: GO LIVE!",
      subtitle: "Sofort aktiv",
      description: "AI Agent nimmt rund um die Uhr Anrufe entgegen.",
    },
  ]

  return (
    <section id="how-it-works" className="relative py-24 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-[1600px] mx-auto space-y-16">
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground text-balance">In 24 bis 48 Stunden fertiger Assistent</h2>
          <p className="text-2xl text-muted-foreground text-pretty leading-relaxed">
            Das ReachMax Team übernimmt die komplette Einrichtung und Betreuung - Sie müssen nichts tun
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div
                key={index}
                className="relative bg-gradient-to-br from-card/80 to-card/40 rounded-2xl p-8 border-2 border-border hover:border-[#FFD700]/50 hover:shadow-2xl transition-all duration-300 h-full flex flex-col group hover:scale-105"
              >
                <div className="flex flex-col items-center text-center space-y-6 flex-1">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#FFD700]/20 to-[#FFA500]/10 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300 border-2 border-[#FFD700]/30">
                      <Icon className="w-12 h-12 text-[#FFD700]" />
                    </div>
                    <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-[#FFD700] border-4 border-background flex items-center justify-center shadow-lg">
                      <span className="text-lg font-bold text-background">{index + 1}</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-foreground leading-tight text-balance group-hover:text-[#FFD700] transition-colors duration-300">{step.title}</h3>
                    <p className="text-base font-semibold uppercase tracking-wide text-[#FFD700]">
                      {step.subtitle}
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed text-pretty">{step.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
