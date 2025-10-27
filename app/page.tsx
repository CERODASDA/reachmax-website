import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { FounderSection } from "@/components/founder-section"
import { ProblemSection } from "@/components/problem-section"
import { SolutionSection } from "@/components/solution-section"
import { IndustriesSection } from "@/components/industries-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { DashboardPreviewSection } from "@/components/dashboard-preview-section"
import { ResultsSection } from "@/components/results-section"
import { PricingSection } from "@/components/pricing-section"
import { FaqSection } from "@/components/faq-section"
import { FinalCtaSection } from "@/components/final-cta-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="relative min-h-screen">
      <Navigation />

      <div className="relative z-10 space-y-24">
        <HeroSection />
        <FounderSection />
        <ProblemSection />
        <SolutionSection />
        <IndustriesSection />
        <HowItWorksSection />
        <DashboardPreviewSection />
        <ResultsSection />
        <PricingSection />
        <FaqSection />
        <FinalCtaSection />
      </div>
      <Footer />
    </main>
  )
}
