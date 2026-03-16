import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Battery, Brain, TrendingUp, Wallet } from "lucide-react"

const steps = [
  {
    icon: Battery,
    step: "Step 1",
    title: "Smart Battery Charges",
    description: "Your 13.8 kWh battery charges when electricity is cheap (€0.04/kWh at 3 AM)",
    color: "bg-primary",
  },
  {
    icon: Brain,
    step: "Step 2",
    title: "AI Platform Trades",
    description: "Our AI trades energy on Nord Pool market 24/7 - no effort from you",
    color: "bg-[#0EA5E9]",
  },
  {
    icon: TrendingUp,
    step: "Step 3",
    title: "You Earn Money",
    description: "Sell energy when prices peak (€0.25/kWh at 6 PM). Grid pays you €3K/year just for availability",
    color: "bg-[#F59E0B]",
  },
  {
    icon: Wallet,
    step: "Step 4",
    title: "Passive Income",
    description: "€2,500/year deposited automatically. Every year. Forever.",
    color: "bg-primary",
  },
]

export function SolutionSection() {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            GrinaHomes Turn Energy Into Income
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {"Here's how your home works for you, 24/7"}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <div key={index} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-14 left-1/2 w-full h-0.5 bg-border" />
              )}
              
              <div className="relative bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-colors">
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-lg ${item.color} mb-4`}>
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <p className="text-sm font-medium text-muted-foreground mb-1">
                  {item.step}
                </p>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" asChild>
            <Link href="#calculator">See Your Earnings Potential</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
