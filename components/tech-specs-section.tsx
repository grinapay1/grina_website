import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Battery, Brain, Home, Shield } from "lucide-react"

const specs = [
  {
    icon: Battery,
    title: "Battery System",
    items: [
      { label: "Capacity", value: "13.8 kWh LiFePO₄" },
      { label: "Lifespan", value: "10-15 years (5,000-10,000 cycles)" },
      { label: "Safety", value: "CE certified, fire suppression built-in" },
      { label: "Supplier", value: "BYD (global tier-1)" },
    ],
  },
  {
    icon: Brain,
    title: "AI Trading Platform",
    items: [
      { label: "Markets", value: "Nord Pool, FCR (Estonia, Lithuania)" },
      { label: "Trading frequency", value: "24/7 automated" },
      { label: "Prediction accuracy", value: "85-90%" },
      { label: "Platform fee", value: "€1,000/year (included Year 1)" },
    ],
  },
  {
    icon: Home,
    title: "Home Construction",
    items: [
      { label: "Size", value: "50m² standard" },
      { label: "Build time", value: "6-10 weeks (factory + on-site)" },
      { label: "Energy efficiency", value: "40% better than traditional" },
      { label: "Insulation", value: "Passive House standards" },
      { label: "Heating", value: "Air-source heat pump (8-10 kW) + underfloor heating" },
      { label: "Temperature range", value: "-25°C to +35°C" },
    ],
  },
  {
    icon: Shield,
    title: "Warranty",
    items: [
      { label: "Structure", value: "10 years" },
      { label: "Battery", value: "10 years" },
      { label: "Heat pump", value: "5 years" },
      { label: "Platform", value: "Lifetime updates" },
    ],
  },
]

export function TechSpecsSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            The Technology Behind Your Earnings
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Built with premium components for lasting performance
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {specs.map((spec, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <spec.icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="font-semibold text-left">{spec.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="pl-13 space-y-3 ml-13">
                    {spec.items.map((item, itemIndex) => (
                      <div 
                        key={itemIndex} 
                        className="flex justify-between py-2 border-b border-border last:border-0"
                      >
                        <span className="text-muted-foreground">{item.label}</span>
                        <span className="font-medium text-foreground">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
