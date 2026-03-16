import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CalendarCheck, Ruler, Factory, Wrench, KeyRound, CheckCircle2 } from "lucide-react"

const timelineSteps = [
  {
    icon: CalendarCheck,
    week: "Week 0",
    title: "Reserve",
    description: "€1,000 refundable deposit secures your spot + early bird discount",
  },
  {
    icon: Ruler,
    week: "Week 1-2",
    title: "Design",
    description: "Consultation, site survey, finalize specifications",
  },
  {
    icon: Factory,
    week: "Week 3-6",
    title: "Factory Build",
    description: "Your home constructed in climate-controlled facility",
  },
  {
    icon: Wrench,
    week: "Week 7-8",
    title: "On-Site Assembly",
    description: "Foundation prepared, modules assembled, systems integrated",
  },
  {
    icon: KeyRound,
    week: "Week 8",
    title: "Move In",
    description: "Final inspection, handover, battery activated, start earning!",
  },
]

export function TimelineSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            From Reservation to Move-In: 8 Weeks
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A streamlined process that gets you into your new home fast
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          {/* Connector Line */}
          <div className="absolute top-10 left-0 right-0 h-0.5 bg-border" />
          
          <div className="grid grid-cols-5 gap-4">
            {timelineSteps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Circle */}
                <div className="flex justify-center mb-6">
                  <div className="relative z-10 h-20 w-20 rounded-full bg-primary/10 border-4 border-background flex items-center justify-center">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                
                <div className="text-center">
                  <p className="text-sm font-medium text-[#0EA5E9] mb-1">
                    {step.week}
                  </p>
                  <h3 className="font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Completion indicator for last step */}
                {index === timelineSteps.length - 1 && (
                  <div className="absolute -top-1 -right-1">
                    <CheckCircle2 className="h-6 w-6 text-[#F59E0B]" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-8">
          {timelineSteps.map((step, index) => (
            <div key={index} className="flex gap-4">
              <div className="relative flex flex-col items-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <step.icon className="h-6 w-6 text-primary" />
                </div>
                {index < timelineSteps.length - 1 && (
                  <div className="w-0.5 h-full bg-border mt-2" />
                )}
              </div>
              <div className="pb-8">
                <p className="text-sm font-medium text-[#0EA5E9] mb-1">
                  {step.week}
                </p>
                <h3 className="font-semibold text-foreground mb-1">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" asChild>
            <Link href="#consultation">Start Your Journey - Book Consultation</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
