import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { StatsBar } from "@/components/stats-bar"
import { ServicesSection } from "@/components/services-section"
import { ProcessSection } from "@/components/process-section"
import { ResultsSection } from "@/components/results-section"
import { PricingSection } from "@/components/pricing-section"
import { CtaFooter } from "@/components/cta-footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <HeroSection />
        <StatsBar />
        <ServicesSection />
        <ProcessSection />
        <ResultsSection />
        <PricingSection />
        <CtaFooter />
      </main>
    </div>
  )
}
