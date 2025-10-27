"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Phone, Sparkles, Clock, Target, TrendingUp, Zap, Shield, CheckCircle, Play, X } from "lucide-react"
import { useState, useEffect } from "react"

export function HeroSection() {
  const [isCalOpen, setIsCalOpen] = useState(false)
  const [isCalLoading, setIsCalLoading] = useState(false)
  const [calIframeLoaded, setCalIframeLoaded] = useState(false)

  // Preload Cal.com resources immediately on component mount
  useEffect(() => {
    // Preload Cal.com resources immediately
    const preloadLink = document.createElement('link')
    preloadLink.rel = 'preload'
    preloadLink.href = 'https://app.cal.com/reachmax/30min?user=reachmax&overlayCalendar=true'
    preloadLink.as = 'document'
    preloadLink.crossOrigin = 'anonymous'
    document.head.appendChild(preloadLink)

    // Preload DNS for faster connection
    const dnsPrefetch = document.createElement('link')
    dnsPrefetch.rel = 'dns-prefetch'
    dnsPrefetch.href = '//app.cal.com'
    document.head.appendChild(dnsPrefetch)

    // Preconnect to Cal.com domain
    const preconnect = document.createElement('link')
    preconnect.rel = 'preconnect'
    preconnect.href = 'https://app.cal.com'
    preconnect.crossOrigin = 'anonymous'
    document.head.appendChild(preconnect)

    return () => {
      // Cleanup
      document.head.removeChild(preloadLink)
      document.head.removeChild(dnsPrefetch)
      document.head.removeChild(preconnect)
    }
  }, [])

  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isCalOpen) {
        setIsCalOpen(false)
      }
    }

    if (isCalOpen) {
      document.addEventListener('keydown', handleEscKey)
      document.body.style.overflow = 'hidden'
      setIsCalLoading(true)
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey)
      document.body.style.overflow = 'unset'
    }
  }, [isCalOpen])

  const scrollToContact = () => {
    const ctaSection = document.querySelector("#contact-form")
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  const scrollToPricing = () => {
    const pricingSection = document.querySelector("#pricing")
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 py-20 pt-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/30 via-40% to-background/95 to-90%" />

      <div className="relative z-10 max-w-6xl mx-auto text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground border-2 border-[#FFD700] shadow-[0_0_30px_rgba(255,215,0,0.4)]">
          <Sparkles className="w-5 h-5 text-background" />
          <span className="text-base text-background font-bold">24/7 AI Voice Agent</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-black text-foreground leading-tight text-balance">
          Nie wieder <span className="text-foreground/70">Kunden verpassen mit ReachMax</span>
        </h1>

        <p className="text-2xl md:text-3xl text-foreground max-w-4xl mx-auto text-pretty leading-relaxed font-semibold">
          AI Agent qualifiziert Ihre Anfragen 24/7.
          <br />
          <span className="text-foreground/70">Sie konzentrieren sich aufs Geschäft.</span>
        </p>

        <div className="flex flex-wrap justify-center gap-6 pt-6">
          <Badge
            variant="secondary"
            className="px-6 py-3 text-lg font-bold bg-foreground text-background border-2 border-[#FFD700] shadow-[0_0_20px_rgba(255,215,0,0.3)]"
          >
            <Clock className="w-5 h-5 mr-2 text-[#FFD700]" />
            24/7 Erreichbar
          </Badge>
          <Badge
            variant="secondary"
            className="px-6 py-3 text-lg font-bold bg-foreground text-background border-2 border-[#FFD700] shadow-[0_0_20px_rgba(255,215,0,0.3)]"
          >
            <Target className="w-5 h-5 mr-2 text-[#FFD700]" />
            100% Anrufquote
          </Badge>
          <Badge
            variant="secondary"
            className="px-6 py-3 text-lg font-bold bg-foreground text-background border-2 border-[#FFD700] shadow-[0_0_20px_rgba(255,215,0,0.3)]"
          >
            <TrendingUp className="w-5 h-5 mr-2 text-[#FFD700]" />
            +300% Mehr Leads
          </Badge>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-6 text-foreground/70 text-sm">
          <span className="font-semibold">Vertrauen von 100+ Unternehmen</span>
          <span>•</span>
          <span>DSGVO-konform</span>
          <span>•</span>
          <span>Made in Germany</span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-4 text-foreground/60 text-xs">
          <div className="flex items-center gap-1">
            <Shield className="w-3 h-3" />
            <span>Made in Germany</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-1">
            <Shield className="w-3 h-3" />
            <span>DSGVO-konform</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-1">
            <CheckCircle className="w-3 h-3" />
            <span>ISO 27001 zertifiziert</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
          <button
            onClick={() => setIsCalOpen(true)}
            className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#FFD700] to-[#FFA500] hover:from-[#FFA500] hover:to-[#FF8C00] text-black font-bold text-lg rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 border-2 border-[#FFD700]/30 hover:border-[#FFD700]/50"
          >
            <span className="relative z-10 flex items-center gap-2">
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
              </svg>
              <span>Termin buchen</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          <Button
            size="lg"
            variant="outline"
            onClick={scrollToPricing}
            className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-background hover:border-[#FFD700] font-bold text-xl px-12 py-8 bg-background/80 backdrop-blur-sm transition-all"
          >
            <Phone className="w-6 h-6 mr-2" />
            Preise ansehen
          </Button>
        </div>

        <p className="text-sm text-foreground/60 text-center">
          <Zap className="w-3 h-3 inline mr-1" />
          Setup in 48 Stunden • 
          <Shield className="w-3 h-3 inline mx-1" />
          Keine Vertragsbindung • 
          <CheckCircle className="w-3 h-3 inline mr-1" />
          14 Tage Geld-zurück
        </p>

        <div className="max-w-2xl mx-auto mt-8 p-6 bg-gradient-to-r from-[#FFD700]/20 to-[#FFA500]/20 border-2 border-[#FFD700] rounded-2xl shadow-xl">
          <h3 className="text-xl font-bold text-[#FFD700] mb-3 flex items-center justify-center gap-2">
            <Play className="w-5 h-5" />
            Testen Sie die AI jetzt sofort live!
          </h3>
          <p className="text-foreground mb-4">Rufen Sie diese Nummer an und erleben Sie Ihren AI Agent in Aktion:</p>
          <a
            href="tel:+4915123456789"
            className="inline-flex items-center gap-2 text-2xl font-bold text-foreground hover:text-[#FFD700] transition-colors"
          >
            <Phone className="w-6 h-6" />
            +49 151 234 567 89
          </a>
        </div>
      </div>

      {/* Hidden preload iframe */}
      {!calIframeLoaded && (
        <iframe 
          src="https://app.cal.com/reachmax/30min?user=reachmax&overlayCalendar=true"
          width="1" 
          height="1"
          style={{ position: 'absolute', left: '-9999px', top: '-9999px', visibility: 'hidden' }}
          loading="eager"
          onLoad={() => setCalIframeLoaded(true)}
        />
      )}

      {/* Cal.com Modal */}
      {isCalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={(e) => {
            // Schließe Modal wenn außerhalb geklickt wird
            if (e.target === e.currentTarget) {
              setIsCalOpen(false)
            }
          }}
        >
          <div className="relative w-full max-w-5xl h-[95vh] bg-background rounded-2xl overflow-hidden shadow-2xl">
            {/* Loading indicator */}
            {isCalLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-background z-10">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-8 h-8 border-4 border-[#FFD700] border-t-transparent rounded-full animate-spin"></div>
                  <p className="text-foreground font-semibold">Terminbuchung wird geladen...</p>
                </div>
              </div>
            )}
            
            {/* Cal.com iframe */}
            <iframe 
              src="https://app.cal.com/reachmax/30min?user=reachmax&overlayCalendar=true"
              width="100%" 
              height="100%"
              className="border-0"
              style={{ minHeight: '600px' }}
              loading="eager"
              allow="camera; microphone; geolocation"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
              referrerPolicy="no-referrer-when-downgrade"
              importance="high"
              fetchPriority="high"
              onLoad={() => {
                setIsCalLoading(false)
                setCalIframeLoaded(true)
              }}
              onError={() => {
                setIsCalLoading(false)
                // Fallback falls iframe nicht lädt
                const iframe = document.querySelector('iframe')
                if (iframe) {
                  iframe.style.display = 'none'
                  const fallback = document.createElement('div')
                  fallback.innerHTML = `
                    <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; padding: 2rem; text-align: center;">
                      <div style="width: 4rem; height: 4rem; margin-bottom: 1rem; background: #FFD700; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                        <svg style="width: 2rem; height: 2rem; color: black;" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                        </svg>
                      </div>
                      <h3 style="font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem; color: white;">Termin buchen</h3>
                      <p style="margin-bottom: 2rem; color: #ccc;">Klicke unten um deinen Termin zu buchen</p>
                      <a href="https://app.cal.com/reachmax/30min?user=reachmax&overlayCalendar=true" target="_blank" style="display: inline-flex; align-items: center; justify-content: center; padding: 1rem 2rem; background: #FFD700; color: black; font-weight: bold; border-radius: 0.5rem; text-decoration: none; transition: all 0.2s;">
                        Termin buchen
                      </a>
                    </div>
                  `
                  iframe.parentNode.appendChild(fallback)
                }
              }}
            />
          </div>
        </div>
      )}
    </section>
  )
}
