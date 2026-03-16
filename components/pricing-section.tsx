import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Gift } from "lucide-react"

const tiers = [
  {
    name: "Landowner",
    badge: "Most Popular",
    price: "€130,000",
    deposit: "€30,000",
    balance: "€100,000 on delivery",
    description: "You have land, we build your home",
    features: [
      "50m² GrinaHome",
      "13.8 kWh battery system",
      "AI trading platform (€1K/year subscription)",
      "Air-source heat pump + underfloor heating",
      "10-year warranty",
      "Earn €2,500/year",
    ],
    cta: "Reserve Now - €5K Off",
    popular: true,
  },
  {
    name: "Affordable",
    badge: "Government Subsidized",
    price: "€80,000-100,000",
    deposit: "€15,000-20,000",
    balance: null,
    description: "Government land + subsidies",
    features: [
      "All Landowner features",
      "Government partnership required",
      "Volume pricing",
      "Priority processing",
      "Community support",
      "Earn €2,500/year",
    ],
    cta: "Apply for Partnership",
    popular: false,
  },
  {
    name: "Turnkey Premium",
    badge: "All Inclusive",
    price: "€200,000",
    deposit: "€50,000",
    balance: "€150,000 on delivery",
    description: "We provide land + home + everything",
    features: [
      "All Landowner features",
      "Land included (location selection)",
      "Premium finishes available",
      "White-glove service",
      "Extended 12-year warranty",
      "Earn €2,500/year",
    ],
    cta: "Reserve Now - €5K Off",
    popular: false,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Choose Your GrinaHome
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Flexible options to match your situation
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <Card 
              key={index} 
              className={`relative flex flex-col ${tier.popular ? 'border-primary shadow-lg ring-1 ring-primary' : ''}`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground">
                    {tier.badge}
                  </Badge>
                </div>
              )}
              {!tier.popular && (
                <Badge variant="secondary" className="absolute -top-3 left-1/2 -translate-x-1/2">
                  {tier.badge}
                </Badge>
              )}
              
              <CardHeader className="pt-8">
                <CardTitle className="text-xl">{tier.name}</CardTitle>
                <CardDescription>{tier.description}</CardDescription>
                <div className="pt-4">
                  <p className="text-3xl font-bold text-foreground">{tier.price}</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Deposit: {tier.deposit}
                  </p>
                  {tier.balance && (
                    <p className="text-sm text-muted-foreground">
                      Balance: {tier.balance}
                    </p>
                  )}
                </div>
              </CardHeader>

              <CardContent className="flex-1">
                <ul className="space-y-3">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button 
                  className={`w-full ${tier.popular ? 'bg-[#F59E0B] hover:bg-[#D97706] text-[#1F2937]' : ''}`}
                  variant={tier.popular ? "default" : "outline"}
                  asChild
                >
                  <Link href="#reserve">{tier.cta}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Early Bird Banner */}
        <div className="mt-12 bg-gradient-to-r from-[#F59E0B]/10 to-[#F59E0B]/5 rounded-xl p-6 border border-[#F59E0B]/20">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
            <Gift className="h-8 w-8 text-[#F59E0B]" />
            <div>
              <p className="font-semibold text-foreground">
                EARLY BIRD SPECIAL: First 10 customers save {"€"}5,000!
              </p>
              <p className="text-sm text-muted-foreground">
                Offer ends April 30, 2026
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
