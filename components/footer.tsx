import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground">ReachMax</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              KI-gestützte Kommunikationslösungen für automatisierte Lead-Qualifizierung und Kundenkommunikation.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#dashboard" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Preise
                </a>
              </li>
              <li>
                <a href="#faq" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Rechtliches</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/impressum" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Impressum
                </Link>
              </li>
              <li>
                <Link
                  href="/datenschutz"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link href="/agb" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  AGB
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Kontakt</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:ciroreachmax@pm.me"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors break-all"
                >
                  ciroreachmax@pm.me
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+491234567890"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  +49 (0) 123 456 7890
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  Musterstraße 123
                  <br />
                  12345 Musterstadt
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {new Date().getFullYear()} ReachMax GmbH. Alle Rechte vorbehalten.
            </p>
            <div className="flex gap-6">
              <Link href="/impressum" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Impressum
              </Link>
              <Link href="/datenschutz" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Datenschutz
              </Link>
              <Link href="/agb" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                AGB
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
