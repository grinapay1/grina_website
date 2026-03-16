"use client"

import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProblemSection } from "@/components/problem-section"
import { SolutionSection } from "@/components/solution-section"
import { BenefitsSection } from "@/components/benefits-section"
import { PricingSection } from "@/components/pricing-section"
import { CalculatorSection } from "@/components/calculator-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { TechSpecsSection } from "@/components/tech-specs-section"
import { TimelineSection } from "@/components/timeline-section"
import { FAQSection } from "@/components/faq-section"
import { EarlyBirdSection } from "@/components/early-bird-section"
import { FinalCTASection } from "@/components/final-cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <BenefitsSection />
      <PricingSection />
      <CalculatorSection />
      <TestimonialsSection />
      <TechSpecsSection />
      <TimelineSection />
      <FAQSection />
      <EarlyBirdSection />
      <FinalCTASection />
      <Footer />
    </main>
  )
}
