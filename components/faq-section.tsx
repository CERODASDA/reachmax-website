import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FaqSection() {
  const faqs = [
    {
      question: "Ist die Telefonnummer +49 151 234 567 89 der Live-Demo?",
      answer: "Ja genau! Rufen Sie diese Nummer jetzt sofort an und erleben Sie live, wie unser AI Agent funktioniert. Er wird Sie persönlich begrüßen, ein paar qualifizierende Fragen stellen und automatisch einen Termin mit uns buchen - genau so wie er es später für Ihre eigenen Kunden tun wird. Das ist der beste Weg um die Technologie zu erleben!"
    },
    {
      question: "Was kostet ein einzelner Anruf zusätzlich zum Paket?",
      answer: "Alle unsere Pakete beinhalten unlimited Anrufe - komplett unbegrenzt. Sie zahlen nur die monatliche Pauschale, egal ob Sie 50 oder 500 Anrufe im Monat haben. Keine versteckten Kosten, keine bösen Überraschungen, keine zusätzlichen Gebühren pro Anruf. Der Preis bleibt immer gleich."
    },
    {
      question: "Wie schnell kann ich starten?",
      answer: "Nach der Anmeldung richten wir Ihren AI Agent innerhalb von 24 Stunden ein. Sie führen ein kurzes Onboarding-Gespräch mit uns, damit die AI Ihre Anforderungen lernt."
    },
    {
      question: "Was passiert wenn ich nach dem Kauf unzufrieden bin?",
      answer: "Sie haben eine 14-Tage-Geld-zurück-Garantie ohne Wenn und Aber. Wenn Sie aus irgendeinem Grund nicht zufrieden sind, bekommen Sie Ihr Geld zurück - keine Fragen gestellt, keine komplizierten Bedingungen. Außerdem können Sie unseren Service monatlich kündigen ohne langfristige Vertragsbindung. Null Risiko für Sie!"
    },
    {
      question: "Wie schnell antwortet die AI auf Kundenanfragen?",
      answer: "Die durchschnittliche Antwortzeit unserer AI beträgt nur 2 bis 3 Sekunden - das ist deutlich schneller als die meisten menschlichen Mitarbeiter! Die AI unterbricht den Kunden nie, hört aktiv und aufmerksam zu und antwortet dann präzise auf die gestellte Frage. Ihre Kunden werden den Unterschied zu einem Menschen kaum merken."
    },
    {
      question: "Kann ich jederzeit kündigen?",
      answer: "Ja, Sie können monatlich kündigen. Es gibt keine langfristigen Vertragsbindungen."
    }
  ]

  return (
    <section id="faq" className="relative py-8 px-4 bg-background">
      <div className="max-w-3xl mx-auto space-y-4">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-balance">Häufige Fragen</h2>
        </div>

        <Accordion type="single" collapsible className="space-y-1">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card/30 border border-border rounded-md px-3 py-1 data-[state=open]:border-[#FFD700] transition-all"
            >
              <AccordionTrigger className="text-left text-sm font-medium text-foreground hover:text-[#FFD700] hover:no-underline transition-colors py-2">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-2">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
