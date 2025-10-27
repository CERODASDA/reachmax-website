import { Card } from "@/components/ui/card"
import { Building2, Sun, Hammer, Briefcase, ShoppingBag, HeartPulse, Car, Sparkles } from "lucide-react"

export function IndustriesSection() {
  const industries = [
    {
      icon: Building2,
      title: "IMMOBILIEN",
      description: "Besichtigungen buchen • Kaufinteressenten qualifizieren • Finanzierung klären",
    },
    {
      icon: Sun,
      title: "SOLAR & ENERGIE",
      description: "Förderungen erklären • Kostenvoranschläge erstellen • Installateure vermitteln",
    },
    {
      icon: Hammer,
      title: "HANDWERK",
      description: "Notdienst 24/7 • Termine koordinieren • Kostenvoranschläge erstellen",
    },
    {
      icon: Briefcase,
      title: "DIENSTLEISTUNGEN",
      description: "Erstberatung buchen • Leistungspakete erklären • Preise nennen",
    },
    {
      icon: ShoppingBag,
      title: "E-COMMERCE",
      description: "Produktberatung • Bestellungen aufnehmen • Support-Tickets",
    },
    {
      icon: HeartPulse,
      title: "GESUNDHEIT",
      description: "Arzttermine buchen • Rezepte anfordern • Sprechzeiten mitteilen",
    },
    {
      icon: Car,
      title: "AUTOMOTIVE",
      description: "Probefahrten vereinbaren • Werkstatttermine • Finanzierung klären",
    },
    {
      icon: Sparkles,
      title: "VIELE WEITERE",
      description: "Versicherungen • Anwälte • Fitness-Studios • Restaurants • Coaching",
    },
  ]

  return (
    <section id="industries" className="relative py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground text-balance">Für jede Branche optimiert</h2>
          <p className="text-2xl text-muted-foreground max-w-3xl mx-auto">
            Individuell angepasst an Ihre Branche und Prozesse
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon
            return (
              <Card
                key={index}
                className="p-6 bg-card border-2 border-border hover:border-[#FFD700]/50 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-lg bg-foreground/10 border border-foreground/20 flex items-center justify-center group-hover:bg-foreground/15 group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-7 h-7 text-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{industry.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{industry.description}</p>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
