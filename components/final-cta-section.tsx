"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Zap, Phone, CheckCircle2, MessageSquare, Calendar } from "lucide-react"
import { useState } from "react"
import CalendarBooking from "@/components/CalendarBooking"

export function FinalCtaSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Erstelle E-Mail Link
    const subject = encodeURIComponent("ReachMax Anfrage")
    const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Telefon: ${formData.phone}

Nachricht: Ich interessiere mich für ReachMax und möchte mehr erfahren.
    `)
    
    const mailtoLink = `mailto:ciroreachmax@pm.me?subject=${subject}&body=${body}`
    window.open(mailtoLink, '_blank')
    
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section id="contact-form" className="relative py-32 px-4 overflow-hidden bg-background">
      <div className="max-w-5xl mx-auto space-y-16 text-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-foreground text-background border-2 border-[#FFD700] shadow-[0_0_30px_rgba(255,215,0,0.4)]">
            <Zap className="w-5 h-5 text-[#FFD700]" />
            <span className="text-base font-bold">Limitierte Plätze verfügbar</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Starten Sie noch heute - Ihr AI Agent ist in 48 Stunden live
          </h2>

          <p className="text-sm text-muted-foreground mb-8">Nach dem Absenden melden wir uns innerhalb von 2 Stunden bei Ihnen</p>
        </div>

        {isSubmitted ? (
          <div className="max-w-5xl mx-auto p-8 bg-green-500/10 backdrop-blur-sm rounded-3xl border-2 border-green-500/50">
            <div className="flex items-center justify-center gap-3 text-green-400 text-xl font-bold">
              <CheckCircle2 className="w-6 h-6" />
              E-Mail-Client geöffnet! Bitte senden Sie Ihre Anfrage ab.
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-5xl mx-auto">
            <div className="flex flex-col gap-6 p-8 bg-muted/50 backdrop-blur-sm rounded-3xl border-2 border-border hover:border-[#FFD700]/50 transition-all">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Input
                  type="text"
                  placeholder="Ihr Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="h-14 text-lg bg-background border-2 border-border text-foreground placeholder:text-muted-foreground focus:border-[#FFD700]"
                  required
                />
                <Input
                  type="email"
                  placeholder="Ihre E-Mail"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="h-14 text-lg bg-background border-2 border-border text-foreground placeholder:text-muted-foreground focus:border-[#FFD700]"
                  required
                />
                <Input
                  type="tel"
                  placeholder="Ihre Telefonnummer"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="h-14 text-lg bg-background border-2 border-border text-foreground placeholder:text-muted-foreground focus:border-[#FFD700]"
                  required
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="h-16 text-xl bg-foreground hover:bg-[#FFD700] hover:text-background text-background font-bold hover:shadow-[0_0_40px_rgba(255,215,0,0.5)] transition-all"
              >
                Jetzt starten
              </Button>
            </div>
          </form>
        )}

        <div className="pt-12 space-y-8">
          <h3 className="text-2xl font-bold text-foreground">Oder kontaktieren Sie uns direkt:</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* TELEFON BOX */}
            <a
              href="tel:+4915123456789"
              className="group p-6 bg-card border-2 border-border hover:border-[#FFD700] rounded-xl transition-all duration-300 hover:shadow-xl hover:scale-105 text-center"
            >
              <div className="w-12 h-12 mx-auto mb-3 bg-[#FFD700]/10 rounded-full flex items-center justify-center group-hover:bg-[#FFD700]/20 transition-colors">
                <Phone className="w-6 h-6 text-[#FFD700]" />
              </div>
              <h4 className="text-lg font-bold text-foreground mb-2">Anrufen</h4>
              <p className="text-sm text-muted-foreground">Live AI Demo erleben</p>
            </a>

            {/* WHATSAPP BOX */}
            <a
              href="https://wa.me/4915123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 bg-card border-2 border-border hover:border-[#FFD700] rounded-xl transition-all duration-300 hover:shadow-xl hover:scale-105 text-center"
            >
              <div className="w-12 h-12 mx-auto mb-3 bg-[#FFD700]/10 rounded-full flex items-center justify-center group-hover:bg-[#FFD700]/20 transition-colors">
                <MessageSquare className="w-6 h-6 text-[#FFD700]" />
              </div>
              <h4 className="text-lg font-bold text-foreground mb-2">WhatsApp</h4>
              <p className="text-sm text-muted-foreground">Schnelle Antwort garantiert</p>
            </a>

            {/* CAL.COM BOX */}
            <a
              href="https://app.cal.com/reachmax/30min?user=reachmax&overlayCalendar=true"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 bg-card border-2 border-border hover:border-[#FFD700] rounded-xl transition-all duration-300 hover:shadow-xl hover:scale-105 text-center"
            >
              <div className="w-12 h-12 mx-auto mb-3 bg-[#FFD700]/10 rounded-full flex items-center justify-center group-hover:bg-[#FFD700]/20 transition-colors">
                <Calendar className="w-6 h-6 text-[#FFD700]" />
              </div>
              <h4 className="text-lg font-bold text-foreground mb-2">Cal.com</h4>
              <p className="text-sm text-muted-foreground">Wunschtermin buchen</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
