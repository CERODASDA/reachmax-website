import { Card } from "@/components/ui/card"
import { PhoneOff, TrendingDown, Clock } from "lucide-react"

export function ProblemSection() {
  const problems = [
    {
      icon: PhoneOff,
      title: "30% verpasste Anrufe außerhalb Bürozeiten",
      description: "Potenzielle Kunden rufen an, aber niemand nimmt ab",
    },
    {
      icon: TrendingDown,
      title: "Keine Anrufannahme = 50% weniger Geschäft",
      description: "Konkurrenten sind erreichbarer und gewinnen Ihre Kunden",
    },
    {
      icon: Clock,
      title: "Manuelle Lead-Qualifizierung kostet Stunden",
      description: "Zeit, die Sie für Abschlüsse nutzen könnten",
    },
  ]

  return (
    <section id="problem" className="relative py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <p className="text-xl md:text-2xl text-foreground">
              Jedes Jahr verlieren Unternehmen durchschnittlich
            </p>
            <div className="text-6xl md:text-8xl lg:text-9xl font-bold text-red-500 animate-pulse">
              €150.000
            </div>
            <p className="text-xl md:text-2xl text-foreground">
              durch verpasste Anrufe außerhalb der Bürozeiten
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((problem, index) => {
            const Icon = problem.icon
            return (
              <Card
                key={index}
                className="p-6 bg-card backdrop-blur-xl border-border hover:bg-card/80 transition-all duration-300 hover:scale-105"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-destructive/20 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-destructive" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground leading-relaxed">{problem.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
