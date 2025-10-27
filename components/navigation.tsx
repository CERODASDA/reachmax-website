"use client"
import { Phone, Menu, X, Zap } from "lucide-react"
import { useState } from "react"
import { ThemeToggle } from "@/components/theme-toggle"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const section = document.querySelector(id)
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" })
      setIsMenuOpen(false)
    }
  }

  const navItems = [
    { label: "Start", id: "#hero" },
    { label: "Problem", id: "#problem" },
    { label: "Lösung", id: "#solution" },
    { label: "Branchen", id: "#industries" },
    { label: "Wie es funktioniert", id: "#how-it-works" },
    { label: "Preise", id: "#pricing" },
    { label: "FAQ", id: "#faq" },
    { label: "Kontakt", id: "#contact-form" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/98 backdrop-blur-xl border-b border-border/50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 -ml-16">
            <button onClick={() => scrollToSection("#hero")} className="flex items-center gap-3 group">
              {/* 3D Speech Bubble */}
              <div className="relative">
                {/* Glow Ring */}
                <div className="absolute inset-0 bg-[#FFD700] cafe:bg-[#c19a6b] rounded-xl blur-md opacity-40 group-hover:opacity-60 transition-opacity" />
                
                {/* Speech Bubble Body */}
                <div className="relative w-10 h-10 bg-gradient-to-br from-slate-800 to-slate-900 dark:from-slate-200 dark:to-slate-100 cafe:from-[#8b7355] cafe:to-[#a68b5b] rounded-xl flex items-center justify-center shadow-xl border-2 border-[#FFD700] cafe:border-[#c19a6b] group-hover:scale-105 transition-transform overflow-hidden">
                  {/* Voice Waves Background - Slow Robotic Animation */}
                  <div className="absolute inset-0 flex items-center justify-center gap-0.5">
                    <div className="w-0.5 h-1.5 bg-[#FFD700]/30 cafe:bg-[#c19a6b]/30 rounded-full animate-pulse" style={{animationDelay: '0ms', animationDuration: '2s'}} />
                    <div className="w-0.5 h-2.5 bg-[#FFD700]/40 cafe:bg-[#c19a6b]/40 rounded-full animate-pulse" style={{animationDelay: '400ms', animationDuration: '2s'}} />
                    <div className="w-0.5 h-2 bg-[#FFD700]/30 cafe:bg-[#c19a6b]/30 rounded-full animate-pulse" style={{animationDelay: '800ms', animationDuration: '2s'}} />
                    <div className="w-0.5 h-3 bg-[#FFD700]/40 cafe:bg-[#c19a6b]/40 rounded-full animate-pulse" style={{animationDelay: '1200ms', animationDuration: '2s'}} />
                    <div className="w-0.5 h-2.5 bg-[#FFD700]/30 cafe:bg-[#c19a6b]/30 rounded-full animate-pulse" style={{animationDelay: '1600ms', animationDuration: '2s'}} />
                  </div>
                  
                  {/* Café Mode: Coffee Cup Icon */}
                  <div className="cafe:absolute cafe:inset-0 cafe:flex cafe:items-center cafe:justify-center">
                    <div className="cafe:w-5 cafe:h-5 cafe:bg-gradient-to-br cafe:from-[#f0e6d2] cafe:to-[#e6d7c3] cafe:rounded-sm cafe:relative cafe:border cafe:border-[#c19a6b]">
                      <div className="cafe:absolute cafe:top-0.5 cafe:left-0.5 cafe:w-2.5 cafe:h-2.5 cafe:bg-[#8b7355] cafe:rounded-full"></div>
                      <div className="cafe:absolute cafe:-right-0.5 cafe:top-1 cafe:w-0.5 cafe:h-2 cafe:bg-[#f0e6d2] cafe:rounded-sm"></div>
                    </div>
                  </div>
                  
                  {/* 3D Shine Effect */}
                  <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/10 to-transparent rounded-t-xl" />
                </div>
                
                {/* Speech Bubble Tail */}
                <div className="absolute -bottom-1.5 left-3 w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[6px] border-t-foreground cafe:border-t-[#8b7355]" />
                <div className="absolute -bottom-1 left-[13px] w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[5px] border-t-[#FFD700] cafe:border-t-[#c19a6b]" />
              </div>

              {/* Text */}
              <div className="flex flex-col">
                     <span className="text-xl font-black text-foreground cafe:text-[#8b7355] group-hover:scale-105 transition-transform duration-300">
                       Reach<span className="text-[#FFD700] cafe:text-[#c19a6b] group-hover:animate-pulse">Max</span>
                     </span>
                <span className="text-xs font-black text-[#FFD700] cafe:text-[#c19a6b] tracking-wider uppercase -mt-0.5 group-hover:animate-bounce">
                  AI VOICE AGENT
                </span>
              </div>
            </button>
          </div>

          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative px-4 py-2 text-sm font-semibold text-foreground/70 hover:text-foreground transition-all group"
              >
                <span className="relative z-10">{item.label}</span>
                <div className="absolute inset-0 bg-foreground/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-xl hover:bg-foreground/10 transition-all"
          >
            {isMenuOpen ? <X className="w-6 h-6 text-foreground" /> : <Menu className="w-6 h-6 text-foreground" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden border-t border-border/50 bg-background/98 backdrop-blur-xl shadow-2xl">
          <div className="px-4 py-6 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-3 text-base font-semibold text-foreground/70 hover:text-foreground hover:bg-foreground/5 rounded-xl transition-all"
              >
                {item.label}
              </button>
            ))}
            <div className="flex items-center justify-center gap-2 mt-4">
              <ThemeToggle />
            </div>
            <a
              href="tel:+491234567890"
              className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-gradient-to-r from-slate-900 to-slate-800 dark:from-slate-800 dark:to-slate-700 rounded-xl font-bold hover:bg-slate-800 transition-all shadow-xl mt-4 border-2 border-[#FFD700]"
            >
              <Phone className="w-5 h-5 text-[#FFD700]" />
              <span className="text-[#FFD700] font-bold">+49 123 456 7890</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
