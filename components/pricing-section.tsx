"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, X, Sparkles, Crown, Zap, Gem } from "lucide-react"

export function PricingSection() {
  const scrollToContact = () => {
    const contactForm = document.getElementById("contact-form")
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <section id="pricing" className="py-20 bg-background dark:bg-slate-900 cafe:bg-[#f5f2e8]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-6 text-slate-900 dark:text-slate-100 cafe:text-[#8b7355]">
          Transparente Preise, keine versteckten Kosten
        </h2>
        <p className="text-center text-slate-600 dark:text-slate-300 cafe:text-[#a68b5b] mb-16 text-lg max-w-3xl mx-auto">
          Wählen Sie das Paket, das zu Ihrem Unternehmen passt
        </p>
        
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto items-stretch">
          
          {/* ESSENTIAL CARD */}
          <Card className="relative p-6 border-2 border-slate-300 dark:border-slate-600 cafe:border-[#e6d7c3] hover:border-slate-400 dark:hover:border-slate-500 cafe:hover:border-[#c19a6b] hover:shadow-xl transition-all duration-500 bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 dark:from-slate-800 dark:via-slate-700 dark:to-slate-800 cafe:from-[#faf8f3] cafe:via-[#f5f2e8] cafe:to-[#faf8f3] flex flex-col h-full group hover:scale-105 hover:shadow-2xl">
            <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-slate-100 cafe:text-[#8b7355] flex items-center gap-2 group-hover:text-slate-800 dark:group-hover:text-slate-200 cafe:group-hover:text-[#c19a6b] transition-colors duration-300">
              <Zap className="w-4 h-4 text-slate-500 dark:text-slate-400 cafe:text-[#a68b5b] group-hover:text-slate-600 dark:group-hover:text-slate-300 cafe:group-hover:text-[#c19a6b] transition-colors duration-300" />
              BASIC
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 cafe:text-[#a68b5b] mb-3">Startet ab €1.497</p>
            <div className="mb-4">
              <span className="text-4xl font-bold bg-gradient-to-r from-slate-400 via-gray-500 to-slate-600 cafe:from-[#8b7355] cafe:via-[#a68b5b] cafe:to-[#8b7355] bg-clip-text text-transparent group-hover:from-slate-500 group-hover:via-gray-600 group-hover:to-slate-700 cafe:group-hover:from-[#c19a6b] cafe:group-hover:via-[#d4af37] cafe:group-hover:to-[#c19a6b] transition-all duration-500">€697</span>
              <span className="text-slate-600 dark:text-slate-300 cafe:text-[#a68b5b] text-base">/Monat</span>
                </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 cafe:text-[#a68b5b] mb-4 font-medium">Für kleine Teams</p>
            
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <Check className="w-3 h-3 text-slate-500 dark:text-slate-400 cafe:text-[#a68b5b] group-hover:text-slate-600 dark:group-hover:text-slate-300 cafe:group-hover:text-[#c19a6b] transition-colors duration-300 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-700 dark:text-slate-200 cafe:text-[#8b7355]">24/7 AI Voice Agent</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-3 h-3 text-slate-500 dark:text-slate-400 cafe:text-[#a68b5b] group-hover:text-slate-600 dark:group-hover:text-slate-300 cafe:group-hover:text-[#c19a6b] transition-colors duration-300 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-700 dark:text-slate-200 cafe:text-[#8b7355]">Unlimited Anrufe</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-3 h-3 text-slate-500 dark:text-slate-400 cafe:text-[#a68b5b] group-hover:text-slate-600 dark:group-hover:text-slate-300 cafe:group-hover:text-[#c19a6b] transition-colors duration-300 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-700 dark:text-slate-200 cafe:text-[#8b7355]">Schnelle Terminbuchung</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-3 h-3 text-slate-500 dark:text-slate-400 cafe:text-[#a68b5b] group-hover:text-slate-600 dark:group-hover:text-slate-300 cafe:group-hover:text-[#c19a6b] transition-colors duration-300 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-700 dark:text-slate-200 cafe:text-[#8b7355]">SMS + Email Benachrichtigungen</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-3 h-3 text-slate-500 dark:text-slate-400 cafe:text-[#a68b5b] group-hover:text-slate-600 dark:group-hover:text-slate-300 cafe:group-hover:text-[#c19a6b] transition-colors duration-300 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-700 dark:text-slate-200 cafe:text-[#8b7355]">Deutsche Telefonnummer inklusive</span>
              </li>
              <li className="flex items-start gap-2">
                <X className="w-3 h-3 text-slate-400 dark:text-slate-500 cafe:text-[#a68b5b] shrink-0 mt-0.5" />
                <span className="text-xs text-slate-400 dark:text-slate-500 cafe:text-[#a68b5b]">Kein Dashboard</span>
              </li>
              <li className="flex items-start gap-2">
                <X className="w-3 h-3 text-slate-400 dark:text-slate-500 cafe:text-[#a68b5b] shrink-0 mt-0.5" />
                <span className="text-xs text-slate-400 dark:text-slate-500 cafe:text-[#a68b5b]">Keine CRM Integration</span>
              </li>
              <li className="flex items-start gap-2">
                <X className="w-3 h-3 text-slate-400 dark:text-slate-500 cafe:text-[#a68b5b] shrink-0 mt-0.5" />
                <span className="text-xs text-slate-400 dark:text-slate-500 cafe:text-[#a68b5b]">Keine Analytics</span>
              </li>
            </ul>
            
            <div className="flex-grow flex flex-col justify-end">
            <Button 
              onClick={scrollToContact}
                className="w-full bg-gradient-to-r from-slate-400 via-gray-500 to-slate-600 cafe:from-[#8b7355] cafe:via-[#a68b5b] cafe:to-[#8b7355] hover:from-slate-500 hover:via-gray-600 hover:to-slate-700 cafe:hover:from-[#c19a6b] cafe:hover:via-[#d4af37] cafe:hover:to-[#c19a6b] text-white font-bold py-2.5 px-5 rounded-lg transition-all duration-500 flex items-center justify-center shadow-lg hover:shadow-2xl transform hover:scale-105 group-hover:shadow-xl text-sm"
            >
                <Sparkles className="w-3 h-3 mr-2 group-hover:animate-spin transition-all duration-300" />
              Jetzt starten
            </Button>
              <p className="text-xs text-center text-slate-500 dark:text-slate-400 cafe:text-[#a68b5b] mt-3">
                💰 ROI: 10 mehr Aufträge/Monat = €5k+ mehr Umsatz
              </p>
            </div>
          </Card>
          
                 {/* PREMIUM CARD */}
                 <Card className="relative p-6 border-2 border-yellow-300 dark:border-yellow-600 cafe:border-[#b8860b] hover:border-yellow-400 dark:hover:border-yellow-500 cafe:hover:border-[#daa520] hover:shadow-xl transition-all duration-500 transform md:scale-105 bg-gradient-to-br from-yellow-50 via-amber-50 to-yellow-100 dark:from-yellow-900/20 dark:via-amber-900/20 dark:to-yellow-800/20 cafe:from-[#faf8f3] cafe:via-[#f5f2e8] cafe:to-[#faf8f3] mt-3 flex flex-col h-full group hover:scale-110 hover:shadow-2xl">
                   {/* AM BELIEBTESTEN Badge inside the card */}
                   <div className="absolute top-4 right-4 z-10">
                     <div className="bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 cafe:from-[#b8860b] cafe:via-[#daa520] cafe:to-[#b8860b] text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg border border-yellow-300 cafe:border-[#b8860b]">
                       <span className="font-black tracking-wide">AM BELIEBTESTEN</span>
                     </div>
                   </div>
                   
                   <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-slate-100 cafe:text-[#8b4513] flex items-center gap-2 group-hover:text-yellow-800 dark:group-hover:text-yellow-200 cafe:group-hover:text-[#b8860b] transition-colors duration-300">
                     <Crown className="w-4 h-4 text-yellow-600 dark:text-yellow-400 cafe:text-[#b8860b] group-hover:text-yellow-700 dark:group-hover:text-yellow-300 cafe:group-hover:text-[#daa520] transition-colors duration-300" />
                     PREMIUM
                   </h3>
                   <p className="text-xs text-slate-600 dark:text-slate-300 cafe:text-[#a0522d] mb-3">Startet ab €4.497</p>
                   <div className="mb-4">
                     <span className="text-4xl font-bold bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-700 cafe:from-[#b8860b] cafe:via-[#daa520] cafe:to-[#b8860b] bg-clip-text text-transparent group-hover:from-yellow-600 group-hover:via-amber-600 group-hover:to-yellow-800 cafe:group-hover:from-[#daa520] cafe:group-hover:via-[#b8860b] cafe:group-hover:to-[#daa520] transition-all duration-500">€1.497</span>
                     <span className="text-slate-600 dark:text-slate-300 cafe:text-[#a0522d] text-base">/Monat</span>
                   </div>
                   <p className="text-xs text-slate-600 dark:text-slate-300 cafe:text-[#a0522d] mb-4 font-medium">Für wachsende Unternehmen</p>
                   
                   <ul className="space-y-2 mb-6">
                     <li className="flex items-start gap-2">
                       <Check className="w-3 h-3 text-yellow-600 dark:text-yellow-400 cafe:text-[#b8860b] group-hover:text-yellow-700 dark:group-hover:text-yellow-300 cafe:group-hover:text-[#daa520] transition-colors duration-300 shrink-0 mt-0.5" />
                       <span className="text-xs text-slate-700 dark:text-slate-200 cafe:text-[#8b4513]">Alles von Essential</span>
                     </li>
                     <li className="flex items-start gap-2">
                       <Check className="w-3 h-3 text-yellow-600 dark:text-yellow-400 cafe:text-[#b8860b] group-hover:text-yellow-700 dark:group-hover:text-yellow-300 cafe:group-hover:text-[#daa520] transition-colors duration-300 shrink-0 mt-0.5" />
                       <span className="text-xs text-slate-700 dark:text-slate-200 cafe:text-[#8b4513]">Unlimited Anrufe (natürlich!)</span>
                     </li>
                     <li className="flex items-start gap-2">
                       <Check className="w-3 h-3 text-yellow-600 dark:text-yellow-400 cafe:text-[#b8860b] group-hover:text-yellow-700 dark:group-hover:text-yellow-300 cafe:group-hover:text-[#daa520] transition-colors duration-300 shrink-0 mt-0.5" />
                       <span className="text-xs text-slate-700 dark:text-slate-200 cafe:text-[#8b4513]">Live Dashboard mit Deal-Tracking</span>
                     </li>
                     <li className="flex items-start gap-2">
                       <Check className="w-3 h-3 text-yellow-600 dark:text-yellow-400 cafe:text-[#b8860b] group-hover:text-yellow-700 dark:group-hover:text-yellow-300 cafe:group-hover:text-[#daa520] transition-colors duration-300 shrink-0 mt-0.5" />
                       <span className="text-xs text-slate-700 dark:text-slate-200 cafe:text-[#8b4513]">Intelligente Lead-Qualifizierung</span>
                     </li>
                     <li className="flex items-start gap-2">
                       <Check className="w-3 h-3 text-yellow-600 dark:text-yellow-400 cafe:text-[#b8860b] group-hover:text-yellow-700 dark:group-hover:text-yellow-300 cafe:group-hover:text-[#daa520] transition-colors duration-300 shrink-0 mt-0.5" />
                       <span className="text-xs text-slate-700 dark:text-slate-200 cafe:text-[#8b4513]">CRM Integration (Salesforce, HubSpot)</span>
                     </li>
                     <li className="flex items-start gap-2">
                       <Check className="w-3 h-3 text-yellow-600 dark:text-yellow-400 cafe:text-[#b8860b] group-hover:text-yellow-700 dark:group-hover:text-yellow-300 cafe:group-hover:text-[#daa520] transition-colors duration-300 shrink-0 mt-0.5" />
                       <span className="text-xs text-slate-700 dark:text-slate-200 cafe:text-[#8b4513]">ROI Analytics & Reports</span>
                     </li>
                     <li className="flex items-start gap-2">
                       <Check className="w-3 h-3 text-yellow-600 dark:text-yellow-400 cafe:text-[#b8860b] group-hover:text-yellow-700 dark:group-hover:text-yellow-300 cafe:group-hover:text-[#daa520] transition-colors duration-300 shrink-0 mt-0.5" />
                       <span className="text-xs text-slate-700 dark:text-slate-200 cafe:text-[#8b4513]">Kalender-Integration</span>
                     </li>
                     <li className="flex items-start gap-2">
                       <Check className="w-3 h-3 text-yellow-600 dark:text-yellow-400 cafe:text-[#b8860b] group-hover:text-yellow-700 dark:group-hover:text-yellow-300 cafe:group-hover:text-[#daa520] transition-colors duration-300 shrink-0 mt-0.5" />
                       <span className="text-xs text-slate-700 dark:text-slate-200 cafe:text-[#8b4513]">WhatsApp-Integration</span>
                     </li>
                     <li className="flex items-start gap-2">
                       <Check className="w-3 h-3 text-yellow-600 dark:text-yellow-400 cafe:text-[#b8860b] group-hover:text-yellow-700 dark:group-hover:text-yellow-300 cafe:group-hover:text-[#daa520] transition-colors duration-300 shrink-0 mt-0.5" />
                       <span className="text-xs text-slate-700 dark:text-slate-200 cafe:text-[#8b4513]">Prioritäts-Support</span>
                     </li>
                   </ul>

                   <div className="flex-grow flex flex-col justify-end">
                     <Button
                       onClick={scrollToContact}
                       className="w-full bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 cafe:from-[#b8860b] cafe:via-[#daa520] cafe:to-[#b8860b] hover:from-yellow-500 hover:via-amber-600 hover:to-yellow-700 cafe:hover:from-[#daa520] cafe:hover:via-[#b8860b] cafe:hover:to-[#daa520] text-white font-bold py-2.5 px-5 rounded-lg transition-all duration-500 flex items-center justify-center shadow-lg hover:shadow-2xl transform hover:scale-105 group-hover:shadow-xl text-sm"
                     >
                       <Crown className="w-3 h-3 mr-2 group-hover:animate-bounce transition-all duration-300" />
                       Jetzt starten
                     </Button>
                     <p className="text-xs text-center text-slate-500 dark:text-slate-400 cafe:text-[#a0522d] mt-3">
                       💰 ROI: Ein Solar-Auftrag (€15k) = Investment in Woche 1 zurück
                     </p>
                     </div>
                   </Card>

          {/* ELITE CARD */}
          <Card className="relative p-6 border-2 border-purple-300 dark:border-purple-600 cafe:border-[#b8860b] hover:border-purple-400 dark:hover:border-purple-500 cafe:hover:border-[#daa520] hover:shadow-xl transition-all duration-500 bg-gradient-to-br from-purple-50 via-indigo-50 to-purple-100 dark:from-purple-900/20 dark:via-indigo-900/20 dark:to-purple-800/20 cafe:from-[#faf8f3] cafe:via-[#f5f2e8] cafe:to-[#faf8f3] flex flex-col h-full group hover:scale-105 hover:shadow-2xl">
            <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-slate-100 cafe:text-[#8b4513] flex items-center gap-2 group-hover:text-purple-800 dark:group-hover:text-purple-200 cafe:group-hover:text-[#b8860b] transition-colors duration-300">
              <Gem className="w-4 h-4 text-purple-600 dark:text-purple-400 cafe:text-[#b8860b] group-hover:text-purple-700 dark:group-hover:text-purple-300 cafe:group-hover:text-[#daa520] transition-colors duration-300" />
              ELITE
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 cafe:text-[#a0522d] mb-3">Startet ab €9.497</p>
            <div className="mb-4">
              <span className="text-4xl font-bold bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-700 cafe:from-[#8b4513] cafe:via-[#a0522d] cafe:to-[#8b4513] bg-clip-text text-transparent group-hover:from-purple-600 group-hover:via-indigo-600 group-hover:to-purple-800 cafe:group-hover:from-[#b8860b] cafe:group-hover:via-[#daa520] cafe:group-hover:to-[#b8860b] transition-all duration-500">€2.997</span>
              <span className="text-slate-600 dark:text-slate-300 cafe:text-[#a0522d] text-base">/Monat</span>
                </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 cafe:text-[#a0522d] mb-4 font-medium">White-Label für Agenturen & Enterprise</p>
            
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <Check className="w-3 h-3 text-purple-600 dark:text-purple-400 cafe:text-[#b8860b] group-hover:text-purple-700 dark:group-hover:text-purple-300 cafe:group-hover:text-[#daa520] transition-colors duration-300 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-700 dark:text-slate-200 cafe:text-[#8b4513]">Alles von Premium</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-3 h-3 text-purple-600 dark:text-purple-400 cafe:text-[#b8860b] group-hover:text-purple-700 dark:group-hover:text-purple-300 cafe:group-hover:text-[#daa520] transition-colors duration-300 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-700 dark:text-slate-200 cafe:text-[#8b4513]">Multi-Tenant System</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-3 h-3 text-purple-600 dark:text-purple-400 cafe:text-[#b8860b] group-hover:text-purple-700 dark:group-hover:text-purple-300 cafe:group-hover:text-[#daa520] transition-colors duration-300 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-700 dark:text-slate-200 cafe:text-[#8b4513]">White-Label Branding (dein Logo)</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-3 h-3 text-purple-600 dark:text-purple-400 cafe:text-[#b8860b] group-hover:text-purple-700 dark:group-hover:text-purple-300 cafe:group-hover:text-[#daa520] transition-colors duration-300 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-700 dark:text-slate-200 cafe:text-[#8b4513]">Reseller-Lizenz</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-3 h-3 text-purple-600 dark:text-purple-400 cafe:text-[#b8860b] group-hover:text-purple-700 dark:group-hover:text-purple-300 cafe:group-hover:text-[#daa520] transition-colors duration-300 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-700 dark:text-slate-200 cafe:text-[#8b4513]">API-Zugang</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-3 h-3 text-purple-600 dark:text-purple-400 cafe:text-[#b8860b] group-hover:text-purple-700 dark:group-hover:text-purple-300 cafe:group-hover:text-[#daa520] transition-colors duration-300 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-700 dark:text-slate-200 cafe:text-[#8b4513]">Dedizierter Account Manager</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-3 h-3 text-purple-600 dark:text-purple-400 cafe:text-[#b8860b] group-hover:text-purple-700 dark:group-hover:text-purple-300 cafe:group-hover:text-[#daa520] transition-colors duration-300 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-700 dark:text-slate-200 cafe:text-[#8b4513]">Unbegrenzte Telefonnummern</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-3 h-3 text-purple-600 dark:text-purple-400 cafe:text-[#b8860b] group-hover:text-purple-700 dark:group-hover:text-purple-300 cafe:group-hover:text-[#daa520] transition-colors duration-300 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-700 dark:text-slate-200 cafe:text-[#8b4513]">Custom Voice Training</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-3 h-3 text-purple-600 dark:text-purple-400 cafe:text-[#b8860b] group-hover:text-purple-700 dark:group-hover:text-purple-300 cafe:group-hover:text-[#daa520] transition-colors duration-300 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-700 dark:text-slate-200 cafe:text-[#8b4513]">Priority Development</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-3 h-3 text-purple-600 dark:text-purple-400 cafe:text-[#b8860b] group-hover:text-purple-700 dark:group-hover:text-purple-300 cafe:group-hover:text-[#daa520] transition-colors duration-300 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-700 dark:text-slate-200 cafe:text-[#8b4513]">Custom Features auf Anfrage</span>
              </li>
            </ul>

            <div className="flex-grow flex flex-col justify-end">
              <Button
                onClick={scrollToContact}
                className="w-full bg-gradient-to-r from-purple-400 via-indigo-500 to-purple-600 cafe:from-[#8b4513] cafe:via-[#a0522d] cafe:to-[#8b4513] hover:from-purple-500 hover:via-indigo-600 hover:to-purple-700 cafe:hover:from-[#b8860b] cafe:hover:via-[#daa520] cafe:hover:to-[#b8860b] text-white font-bold py-2.5 px-5 rounded-lg transition-all duration-500 flex items-center justify-center shadow-lg hover:shadow-2xl transform hover:scale-105 group-hover:shadow-xl text-sm"
              >
                <Gem className="w-3 h-3 mr-2 group-hover:animate-pulse transition-all duration-300" />
                Jetzt starten
              </Button>
              <p className="text-xs text-center text-slate-500 dark:text-slate-400 cafe:text-[#a0522d] mt-3">
                💰 ROI: Verkaufe an 10 Kunden = €50k+ Profit/Jahr
              </p>
            </div>
          </Card>
          
        </div>

        <div className="text-center mt-12 space-y-4">
          <p className="text-lg text-slate-700 dark:text-slate-200 cafe:text-[#8b4513] font-semibold">
            🎯 Keine Mindestlaufzeit - Monatlich kündbar - 14 Tage Geld-zurück-Garantie 🎯
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-400 cafe:text-[#a0522d]">Alle Preise zzgl. MwSt.</p>
        </div>
      </div>
    </section>
  )
}