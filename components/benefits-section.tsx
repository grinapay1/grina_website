import { 
  Coins, 
  Zap, 
  Leaf, 
  Home, 
  PiggyBank, 
  Sparkles 
} from "lucide-react"

const benefits = [
  {
    icon: Coins,
    title: "Passive Income",
    description: "€2,500/year from automated energy trading - no solar panels required",
  },
  {
    icon: Zap,
    title: "Fast Construction",
    description: "Move in within 8 weeks. Factory-built precision, weather-proof process",
  },
  {
    icon: Home,
    title: "Energy Efficient",
    description: "40% lower energy consumption than traditional homes - superior insulation",
  },
  {
    icon: Leaf,
    title: "Sustainable",
    description: "Carbon neutral in 3 years. 75% less construction waste than traditional building",
  },
  {
    icon: PiggyBank,
    title: "Affordable",
    description: "Starting at €130K. Government subsidies available. Customer deposits fund construction",
  },
  {
    icon: Sparkles,
    title: "Future-Proof",
    description: "Battery + AI platform updates automatically. Compatible with solar panel upgrades",
  },
]

export function BenefitsSection() {
  return (
    <section id="benefits" className="py-16 md:py-24 bg-muted/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Why Choose GrinaHomes?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Smart homes that work as hard as you do
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 hover:shadow-lg transition-all"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                <benefit.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
