import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  Banknote,
  BatteryCharging,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  CircleDollarSign,
  Factory,
  Gauge,
  House,
  Leaf,
  LineChart,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  SunMedium,
  Wallet,
  Zap,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Grina Solar Syndicate | Own a Share of Nigeria's Energy Future",
  description:
    "Invest in Grina's community solar farms in Nigeria and earn passive income from long-term power infrastructure.",
}

const navLinks = [
  { href: "#opportunity", label: "Opportunity" },
  { href: "#terms", label: "Investment Terms" },
  { href: "#projects", label: "Projects" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
]

const heroStats = [
  { label: "Minimum investment", value: "₦5,000,000" },
  { label: "Target farm size", value: "500+ panels" },
  { label: "Battery storage", value: "400 kWh" },
  { label: "Revenue horizon", value: "25+ years" },
]

const farmSpecs = [
  "500+ solar panels (200 kW capacity)",
  "400 kWh battery storage for day and night power",
  "Dedicated transformer for a private minigrid",
  "Smart metering with real-time monitoring",
  "Grina AI platform for trading and settlements",
]

const impactItems = [
  "100+ homes powered with reliable electricity",
  "Local businesses reducing generator dependency",
  "Schools and clinics with uninterrupted power",
  "Community development through energy independence",
  "50,000+ liters of diesel displaced annually per farm",
]

const investmentBenefits = [
  "Own 10 solar panels with registered serial numbers",
  "800 kWh monthly power allocation worth ₦800,000 equivalent",
  "Day and night power backed by battery storage",
  "25+ years revenue stream with battery replacement included",
  "Zero maintenance costs and fully managed operations",
  "Real-time monitoring via the Grina app",
  "Monthly automated profit distributions",
]

const investmentCovers = [
  "Solar panels (10 units)",
  "Battery allocation",
  "Transformer and distribution infrastructure",
  "Installation and wiring to premises",
]

const revenueStreams = [
  {
    title: "Power sales",
    description: "Recurring income from households and businesses connected to the community farm.",
    icon: House,
  },
  {
    title: "Battery arbitrage",
    description: "AI-optimized charging and discharging creates value from time-based energy pricing.",
    icon: BatteryCharging,
  },
  {
    title: "Grid surplus sales",
    description: "Unused generation can be sold externally, adding another revenue layer.",
    icon: LineChart,
  },
]

const nigeriaProblem = ["Generator fuel", "Diesel", "NEPA bills", "Maintenance"]

const solutionPoints = [
  "70% cost reduction versus generators",
  "24/7 reliable power from solar plus battery",
  "Zero fuel costs because sunlight is free",
  "Zero noise pollution through silent operation",
  "Predictable pricing without diesel shocks",
]

const howItWorks = [
  {
    title: "You invest",
    description:
      "Secure your slot with a minimum ₦5,000,000 commitment for 10 panels. A ₦500,000 booking payment can be used to reserve an ongoing project slot.",
  },
  {
    title: "We build",
    description:
      "Grina installs the 500-panel farm, battery storage, transformer, and distribution system in about 3 to 4 months.",
  },
  {
    title: "Community powers up",
    description:
      "Homes, shops, schools, and clinics connect to clean electricity and reduce generator dependence.",
  },
  {
    title: "You earn monthly",
    description:
      "Profits are distributed through GrinaPay with mobile visibility into performance and settlements.",
  },
  {
    title: "Revenue flows long term",
    description:
      "Solar assets are designed to generate for 25 to 30 years, with battery replacement included by Grina.",
  },
]

const benefitColumns = [
  {
    title: "Financial",
    icon: CircleDollarSign,
    items: [
      "Passive income for 25+ years",
      "Monthly cash distributions",
      "Inflation-protected returns as energy prices rise",
      "Asset ownership tied to your panels",
      "No hidden operating costs",
      "Battery replacement covered by Grina",
    ],
  },
  {
    title: "Operational",
    icon: Gauge,
    items: [
      "Zero management required from investors",
      "Professional maintenance included",
      "24/7 monitoring via GrinaPay",
      "Automated settlements",
      "Insurance coverage included",
      "Real-time performance tracking",
    ],
  },
  {
    title: "Impact",
    icon: Leaf,
    items: [
      "Power 100+ homes with clean energy",
      "Eliminate 50,000+ liters of diesel annually",
      "Create local installation and maintenance jobs",
      "Enable community economic development",
      "Reduce carbon emissions",
      "Build durable local infrastructure",
    ],
  },
]

const projects = [
  {
    name: "Ilishan-Remo Solar Farm #1",
    status: "Funding in progress",
    location: "Ilishan-Remo, Ogun State",
    capacity: "500 panels, 400 kWh battery",
    slots: "10 slots total, 4 remaining",
    completion: "Target completion: Q2 2026",
    extra: "Communities served: residential estates, local businesses, and Babcock University facilities.",
  },
  {
    name: "Ilishan-Remo Solar Farm #2",
    status: "Pre-launch",
    location: "Ilishan-Remo, Ogun State",
    capacity: "500 panels, 400 kWh battery",
    slots: "10 slots available",
    completion: "Target completion: Q3 2026",
    extra: "Pipeline project opening to additional syndicate investors.",
  },
  {
    name: "Ilishan-Remo Solar Farm #3",
    status: "Secured with institutional partner",
    location: "Ilishan-Remo, Ogun State",
    capacity: "500 panels, 400 kWh battery",
    slots: "Institutional allocation secured",
    completion: "Target completion: Q3 2026",
    extra: "Partnership with The Camelot private development.",
  },
]

const protectionItems = [
  "Each investor owns specific registered panels with serial numbers",
  "Management agreement with Grina for operations",
  "Insurance coverage across equipment, liability, and interruption",
  "Defined transfer and exit rights",
  "Equipment warranties for panels and inverters",
  "Minimum performance guarantees",
  "24/7 professional monitoring and monthly reporting",
]

const riskMitigation = [
  "Diversified revenue from multiple customer types",
  "Proven solar and battery technology",
  "Tested Grina platform for secure automation",
  "Local partnerships including Babcock University and the Remo Kingdom",
  "Experienced management with international operating track record",
]

const trackRecord = {
  estonia: [
    "Virtual Power Plant operational since 2025",
    "Battery trading platform live",
    "GrinaPay settlements proven",
    "AI optimization tested at scale",
  ],
  nigeria: [
    "Royal endorsement from the Remo Kingdom",
    "University partnership with Babcock",
    "₦420M projects secured",
    "Three farms in construction pipeline",
  ],
}

const techStack = [
  "Optimizes charging and discharging cycles",
  "Predicts demand patterns",
  "Maximizes battery arbitrage",
  "Balances grid loads",
  "Automates trading decisions",
  "Provides performance dashboards and transparent accounting",
]

const faqs = [
  {
    question: "What's the minimum investment?",
    answer: "₦5,000,000 for 10 solar panels.",
  },
  {
    question: "How long do I earn revenue?",
    answer: "25+ years, aligned with the typical 25 to 30 year lifespan of the solar panels.",
  },
  {
    question: "What about battery replacement?",
    answer: "Battery replacement is included at no extra cost to the investor and covered by Grina.",
  },
  {
    question: "How are profits distributed?",
    answer: "Monthly via GrinaPay through automated transfers to your bank account.",
  },
  {
    question: "Can I visit the farm?",
    answer: "Yes. Investor site visits are scheduled quarterly and your panels are tied to registered serial numbers.",
  },
  {
    question: "Can I sell my investment?",
    answer: "Yes. You can transfer or sell your panels, with other syndicate members receiving first right of refusal.",
  },
  {
    question: "Who maintains the equipment?",
    answer: "Grina manages maintenance, monitoring, and operations end to end.",
  },
  {
    question: "What if the farm underperforms?",
    answer: "Grina states minimum performance guarantees and compensates investors if targets are not met.",
  },
  {
    question: "Is this legal?",
    answer: "The page states all farms are registered, permits are secured, and partnerships are formalized.",
  },
  {
    question: "Can I own more than 10 panels?",
    answer: "Yes. Investors can expand across multiple farms and own 20 to 30 panels or more.",
  },
]

const paymentOptions = [
  "Full payment: ₦5,000,000 one-time",
  "Installment plan: ₦2M + ₦1.5M + ₦1M over 3 months",
]

function SectionHeading({
  eyebrow,
  title,
  description,
  inverted = false,
}: {
  eyebrow: string
  title: string
  description: string
  inverted?: boolean
}) {
  return (
    <div className="max-w-3xl space-y-4">
      <p className={`text-sm font-semibold uppercase tracking-[0.22em] ${inverted ? "text-[#F59E0B]" : "text-primary"}`}>
        {eyebrow}
      </p>
      <h2 className={`text-3xl font-bold tracking-tight sm:text-4xl ${inverted ? "text-white" : "text-foreground"}`}>
        {title}
      </h2>
      <p className={`text-lg leading-8 ${inverted ? "text-white/75" : "text-muted-foreground"}`}>{description}</p>
    </div>
  )
}

function BulletList({ items, inverted = false }: { items: string[]; inverted?: boolean }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li
          key={item}
          className={`flex items-start gap-3 text-sm leading-6 sm:text-base ${inverted ? "text-white/80" : "text-muted-foreground"}`}
        >
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default function InvestPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="relative overflow-hidden border-b border-border bg-[radial-gradient(circle_at_top_left,_rgba(245,158,11,0.14),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(14,165,233,0.12),_transparent_30%),linear-gradient(to_bottom,_rgba(45,80,22,0.05),_transparent_55%)]">
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary/40 to-transparent" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <header className="flex min-h-20 items-center justify-between gap-6 py-5">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-lg font-bold text-primary-foreground">
                G
              </div>
              <div>
                <p className="text-lg font-semibold">Grina.org</p>
                <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Solar Syndicate</p>
              </div>
            </Link>

            <nav className="hidden items-center gap-6 md:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="hidden md:block">
              <Button className="bg-[#F59E0B] text-[#1F2937] hover:bg-[#D97706]" asChild>
                <a href="#book-slot">Book My Slot</a>
              </Button>
            </div>
          </header>

          <div className="grid gap-16 pb-20 pt-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:pb-28 lg:pt-14">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                <SunMedium className="h-4 w-4" />
                Own a share of Nigeria&apos;s energy future
              </div>

              <div className="space-y-6">
                <h1 className="max-w-4xl text-4xl font-bold leading-tight text-balance sm:text-5xl lg:text-6xl">
                  Invest in community solar. Earn for 25+ years.
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
                  Join the Grina Solar Syndicate and own solar panels that power communities while generating
                  passive income for decades.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Button size="lg" className="bg-[#F59E0B] text-[#1F2937] hover:bg-[#D97706]" asChild>
                  <a href="#book-slot">
                    Book My Slot Now
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="#contact">Schedule a Consultation</a>
                </Button>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {heroStats.map((stat) => (
                  <Card key={stat.label} className="gap-3 border-primary/10 bg-background/85 py-5 shadow-sm backdrop-blur">
                    <CardContent className="px-5">
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                      <p className="mt-2 text-2xl font-bold text-foreground">{stat.value}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <Card className="overflow-hidden border-primary/10 bg-card/90 py-0 shadow-xl">
              <CardHeader className="border-b border-border bg-primary text-primary-foreground">
                <CardTitle className="text-2xl">Investment Snapshot</CardTitle>
                <CardDescription className="text-primary-foreground/80">
                  Turnkey solar infrastructure with long-horizon recurring revenue.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 p-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-border bg-muted/50 p-4">
                    <p className="text-sm text-muted-foreground">Estimated monthly profit</p>
                    <p className="mt-2 text-3xl font-bold text-[#F59E0B]">₦60k - ₦120k</p>
                  </div>
                  <div className="rounded-2xl border border-border bg-muted/50 p-4">
                    <p className="text-sm text-muted-foreground">Monthly power allocation</p>
                    <p className="mt-2 text-3xl font-bold">800 kWh</p>
                  </div>
                </div>

                <div className="rounded-2xl border border-border bg-linear-to-br from-primary/5 to-accent/5 p-5">
                  <div className="flex items-start gap-3">
                    <div className="rounded-xl bg-primary/10 p-3">
                      <Zap className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <p className="text-lg font-semibold">What your ₦5M covers</p>
                      <BulletList items={investmentCovers} />
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl bg-[#1F2937] p-5 text-white">
                  <p className="text-sm uppercase tracking-[0.2em] text-white/70">Current availability</p>
                  <div className="mt-4 space-y-3">
                    <div className="flex items-center justify-between rounded-xl bg-white/6 px-4 py-3">
                      <span>Farm #1</span>
                      <span className="font-semibold text-[#F59E0B]">4 slots remaining</span>
                    </div>
                    <div className="flex items-center justify-between rounded-xl bg-white/6 px-4 py-3">
                      <span>Farm #2</span>
                      <span className="font-semibold">10 slots available</span>
                    </div>
                    <div className="flex items-center justify-between rounded-xl bg-white/6 px-4 py-3">
                      <span>Farm #3</span>
                      <span className="font-semibold">Institutional partner</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="opportunity" className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl space-y-12 px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="The Opportunity"
            title="Infrastructure that transforms communities"
            description="Grina is building 500+ panel solar farms with battery storage across Nigeria, beginning in Ilishan-Remo, Ogun State. Investors can co-own these farms and participate in the long-term revenue they generate."
          />

          <div className="grid gap-8 lg:grid-cols-2">
            <Card className="border-primary/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Factory className="h-6 w-6 text-primary" />
                  Farm specifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <BulletList items={farmSpecs} />
              </CardContent>
            </Card>

            <Card className="border-primary/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Leaf className="h-6 w-6 text-primary" />
                  Your impact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <BulletList items={impactItems} />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="terms" className="border-y border-border bg-muted/30 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl space-y-12 px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Investment Terms"
            title="Minimum investment: ₦5,000,000"
            description="A syndicate position gives you direct panel ownership, long-term revenue participation, and full operational management by Grina."
          />

          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <Card className="border-primary/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Wallet className="h-6 w-6 text-primary" />
                  What you get
                </CardTitle>
              </CardHeader>
              <CardContent>
                <BulletList items={investmentBenefits} />
              </CardContent>
            </Card>

            <Card className="border-primary/10 bg-primary text-primary-foreground">
              <CardHeader>
                <CardTitle className="text-2xl">Complete turnkey power solution</CardTitle>
                <CardDescription className="text-primary-foreground/80">
                  Designed so investors own assets without handling installation, operations, or battery replacement.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-white/10 p-4">
                    <p className="text-sm text-primary-foreground/80">Panel ownership</p>
                    <p className="mt-1 text-3xl font-bold">10 panels</p>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-4">
                    <p className="text-sm text-primary-foreground/80">Power value</p>
                    <p className="mt-1 text-3xl font-bold">₦800k/mo</p>
                  </div>
                </div>

                <div className="space-y-4 rounded-2xl border border-white/15 p-5">
                  <div className="flex items-center gap-3">
                    <BatteryCharging className="h-5 w-5" />
                    <p className="font-medium">Battery replacement included</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="h-5 w-5" />
                    <p className="font-medium">Zero maintenance cost to investors</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Gauge className="h-5 w-5" />
                    <p className="font-medium">Live monitoring through Grina app</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl space-y-12 px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Financial Returns"
            title="Three revenue streams, one long-life asset"
            description="Syndicate investors earn from community power usage, battery arbitrage, and surplus energy sales, with estimated monthly profit distributions between ₦60,000 and ₦120,000 per investor."
          />

          <div className="grid gap-6 lg:grid-cols-3">
            {revenueStreams.map((stream) => (
              <Card key={stream.title} className="border-primary/10">
                <CardHeader>
                  <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                    <stream.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{stream.title}</CardTitle>
                  <CardDescription>{stream.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <Card className="border-[#F59E0B]/20 bg-linear-to-r from-[#FFF7E6] to-background">
            <CardContent className="grid gap-8 p-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B45309]">Sample 5-year projection</p>
                <h3 className="text-3xl font-bold">Revenue continues for 25+ years</h3>
                <p className="text-muted-foreground">
                  The early years are only the start. These farms are designed as durable energy infrastructure rather
                  than short-term speculative assets.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-[#F59E0B]/20 bg-background p-5">
                  <p className="text-sm text-muted-foreground">Monthly estimate</p>
                  <p className="mt-2 text-2xl font-bold">₦60k - ₦120k</p>
                </div>
                <div className="rounded-2xl border border-[#F59E0B]/20 bg-background p-5">
                  <p className="text-sm text-muted-foreground">Annualized range</p>
                  <p className="mt-2 text-2xl font-bold">₦720k - ₦1.44M</p>
                </div>
                <div className="rounded-2xl border border-[#F59E0B]/20 bg-background p-5">
                  <p className="text-sm text-muted-foreground">Asset life</p>
                  <p className="mt-2 text-2xl font-bold">25-30 years</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="border-y border-border bg-[#10220B] py-20 text-white sm:py-24">
        <div className="mx-auto max-w-7xl space-y-12 px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why This Works In Nigeria"
            title="Communities save millions. You earn from those savings."
            description="Nigerian homes and businesses already spend heavily every month just to keep the lights on. Community solar farms replace volatile, fuel-based power with predictable energy infrastructure."
            inverted
          />

          <div className="grid gap-8 lg:grid-cols-2">
            <Card className="border-white/10 bg-white/5 text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Banknote className="h-6 w-6 text-[#F59E0B]" />
                  The problem
                </CardTitle>
                <CardDescription className="text-white/70">
                  Households and businesses spend ₦200,000 to ₦800,000 monthly on power-related costs.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <BulletList items={nigeriaProblem} inverted />
                <div className="rounded-2xl bg-white/6 p-5">
                  <p className="text-sm text-white/70">Annual spend just to keep the lights on</p>
                  <p className="mt-2 text-3xl font-bold text-[#F59E0B]">₦2.4M - ₦9.6M</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-white/10 bg-white text-foreground">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <SunMedium className="h-6 w-6 text-primary" />
                  The solution
                </CardTitle>
              </CardHeader>
              <CardContent>
                <BulletList items={solutionPoints} />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl space-y-12 px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="How It Works"
            title="From booking to long-term monthly earnings"
            description="The syndicate model is designed to be simple for investors and operationally handled by Grina from start to finish."
          />

          <div className="grid gap-6 lg:grid-cols-5">
            {howItWorks.map((step, index) => (
              <Card key={step.title} className="border-primary/10">
                <CardHeader>
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {index + 1}
                  </div>
                  <CardTitle className="text-xl capitalize">{step.title}</CardTitle>
                  <CardDescription>{step.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-muted/30 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl space-y-12 px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Investor Benefits"
            title="Built for returns, simplicity, and measurable impact"
            description="The offer combines infrastructure ownership, full operational support, and community-level outcomes in one investment model."
          />

          <div className="grid gap-6 lg:grid-cols-3">
            {benefitColumns.map((column) => (
              <Card key={column.title} className="border-primary/10">
                <CardHeader>
                  <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                    <column.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{column.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <BulletList items={column.items} />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl space-y-12 px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Current Projects"
            title="Three farms in the Ilishan-Remo pipeline"
            description="More farms are expected to launch across Nigeria through 2026 and 2027, beginning with the current Ogun State rollout."
          />

          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <Card key={project.name} className="border-primary/10">
                <CardHeader>
                  <div className="mb-3 inline-flex w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                    {project.status}
                  </div>
                  <CardTitle className="text-2xl">{project.name}</CardTitle>
                  <CardDescription>{project.extra}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 text-sm text-muted-foreground">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Zap className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{project.capacity}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <BriefcaseBusiness className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{project.slots}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Building2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{project.completion}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-muted/30 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl space-y-12 px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Investor Protection"
            title="Structured ownership with layered risk mitigation"
            description="The offering is presented as ownership in physical solar infrastructure, with protections across asset registration, insurance, monitoring, warranties, and operating agreements."
          />

          <div className="grid gap-8 lg:grid-cols-2">
            <Card className="border-primary/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <ShieldCheck className="h-6 w-6 text-primary" />
                  Legal structure and security measures
                </CardTitle>
              </CardHeader>
              <CardContent>
                <BulletList items={protectionItems} />
              </CardContent>
            </Card>

            <Card className="border-primary/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <LineChart className="h-6 w-6 text-primary" />
                  Risk mitigation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <BulletList items={riskMitigation} />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl space-y-12 px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="About Grina"
            title="AI-powered energy trading meets real-world solar infrastructure"
            description="Grina positions itself as a renewable energy platform that combines solar generation, battery trading, and automated settlement tooling."
          />

          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <Card className="border-primary/10">
              <CardHeader>
                <CardTitle className="text-2xl">Track record</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-8 md:grid-cols-2">
                <div className="space-y-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Estonia operations</p>
                  <BulletList items={trackRecord.estonia} />
                </div>
                <div className="space-y-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Nigeria expansion</p>
                  <BulletList items={trackRecord.nigeria} />
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/10 bg-linear-to-br from-primary/5 to-accent/5">
              <CardHeader>
                <CardTitle className="text-2xl">Grina AI + GrinaPay</CardTitle>
                <CardDescription>
                  The technology layer is positioned as the engine for optimization, visibility, and automated settlement.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <BulletList items={techStack} />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="faq" className="border-y border-border bg-muted/30 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl space-y-12 px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Frequently Asked Questions"
            title="Key investor questions, answered"
            description="This section translates the supplied writeup into a quick reference for prospective syndicate members."
          />

          <div className="grid gap-6 lg:grid-cols-2">
            {faqs.map((faq) => (
              <Card key={faq.question} className="border-primary/10">
                <CardHeader>
                  <CardTitle className="text-xl">{faq.question}</CardTitle>
                  <CardDescription className="text-base leading-7">{faq.answer}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="book-slot" className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Card className="overflow-hidden border-primary/10 bg-[#10220B] py-0 text-white">
            <CardContent className="grid gap-10 p-8 lg:grid-cols-[1.1fr_0.9fr] lg:p-12">
              <div className="space-y-6">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#F59E0B]">How to Invest</p>
                <h2 className="text-3xl font-bold sm:text-4xl">Take action now</h2>
                <p className="max-w-2xl text-lg leading-8 text-white/75">
                  Limited slots are available on a first-come, first-served basis. Book your slot, review the
                  agreement, complete payment, track construction, and start earning once the farm goes live.
                </p>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl bg-white/6 p-5">
                    <p className="text-sm text-white/70">Booking payment</p>
                    <p className="mt-2 text-3xl font-bold text-[#F59E0B]">₦500,000</p>
                    <p className="mt-2 text-sm text-white/70">Applied as part of your investment for an ongoing project.</p>
                  </div>
                  <div className="rounded-2xl bg-white/6 p-5">
                    <p className="text-sm text-white/70">Full syndicate allocation</p>
                    <p className="mt-2 text-3xl font-bold">₦5,000,000</p>
                    <p className="mt-2 text-sm text-white/70">Minimum investment for 10 panels.</p>
                  </div>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row">
                  <Button size="lg" className="bg-[#F59E0B] text-[#1F2937] hover:bg-[#D97706]" asChild>
                    <a href="#">Book My Slot Now →</a>
                  </Button>
                  <Button size="lg" variant="outline" className="border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white" asChild>
                    <a href="#">Invest Now - ₦5,000,000 →</a>
                  </Button>
                </div>
              </div>

              <div className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-6">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#F59E0B]">Payment options</p>
                  <div className="mt-4 space-y-3">
                    {paymentOptions.map((option) => (
                      <div key={option} className="rounded-xl bg-white/6 px-4 py-3 text-sm text-white/80">
                        {option}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#F59E0B]">Process</p>
                  <div className="space-y-3">
                    {[
                      "Book your slot",
                      "Review investment agreement",
                      "Complete payment into escrow-protected account",
                      "Track construction with updates and photos",
                      "Receive monthly distributions after go-live",
                    ].map((step) => (
                      <div key={step} className="flex items-start gap-3 text-sm text-white/80">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#F59E0B]" />
                        <span>{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contact" className="border-t border-border bg-muted/30 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl space-y-12 px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Contact"
            title="Speak with the Grina Energy Nigeria team"
            description="Use the details below for investment inquiries, project questions, and consultation scheduling."
          />

          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <Card className="border-primary/10">
              <CardHeader>
                <CardTitle className="text-2xl">Investment inquiries</CardTitle>
              </CardHeader>
              <CardContent className="space-y-5 text-base text-muted-foreground">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <a href="mailto:invest@grina.org" className="transition-colors hover:text-foreground">
                    invest@grina.org
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <a href="tel:+12404576689" className="transition-colors hover:text-foreground">
                    +12404576689
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 text-primary" />
                  <span>Behind Sugar Land, Ilishan-Remo, Ogun State, Nigeria</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/10">
              <CardHeader>
                <CardTitle className="text-2xl">Legal disclaimer</CardTitle>
                <CardDescription className="text-base leading-7">
                  This is an investment opportunity in physical solar infrastructure. Past performance does not
                  guarantee future results. All projections are estimates based on current market conditions. Please
                  read the full investment agreement before committing funds. Grina Energy is registered in Nigeria and
                  operated by Grinapay Technologies LTD. All investments are subject to terms and conditions.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
