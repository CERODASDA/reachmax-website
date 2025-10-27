import { Card } from "@/components/ui/card"
import { TrendingUp, PhoneOff, Target } from "lucide-react"

export function ResultsSection() {
  const results = [
    {
      icon: TrendingUp,
      value: "+300%",
      label: "Mehr qualifizierte Leads",
    },
    {
      icon: PhoneOff,
      value: "0%",
      label: "Verpasste Anfragen",
    },
    {
      icon: Target,
      value: "24/7",
      label: "Erreichbarkeit",
    },
  ]

  return (
    <section className="relative py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">Messbare Ergebnisse</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {results.map((result, index) => {
            const Icon = result.icon
            return (
              <Card
                key={index}
                className="p-8 bg-card/50 backdrop-blur-sm border-2 border-border hover:border-[#FFD700] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,215,0,0.3)] group"
              >
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-[#FFD700]/20 flex items-center justify-center group-hover:bg-[#FFD700]/30 transition-colors">
                    <Icon className="w-8 h-8 text-[#FFD700]" />
                  </div>
                  <div className="text-6xl font-bold text-foreground group-hover:text-[#FFD700] transition-colors">
                    {result.value}
                  </div>
                  <p className="text-xl text-muted-foreground leading-relaxed">{result.label}</p>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
