import { Card, CardContent } from "@/components/ui/card"
import { Quote, Users } from "lucide-react"

const testimonials = [
  {
    quote: "Finally, a home that makes financial sense. The energy trading alone will cover 40% of my mortgage payment.",
    name: "M.K.",
    location: "Tallinn",
    status: "LOI signed",
  },
  {
    quote: "I was skeptical until I saw the battery specs and platform demo. This is the future of housing.",
    name: "A.S.",
    location: "Vilnius",
    status: "LOI signed",
  },
  {
    quote: "8 weeks from order to move-in? And I'll earn money every year? No-brainer decision.",
    name: "R.L.",
    location: "Kaunas",
    status: "Interest",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            What People Are Saying
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real feedback from our early adopters
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative">
              <CardContent className="pt-8 pb-6">
                <Quote className="absolute top-4 left-4 h-8 w-8 text-primary/20" />
                <blockquote className="text-foreground leading-relaxed mb-6 pl-2">
                  {`"${testimonial.quote}"`}
                </blockquote>
                <div className="flex items-center gap-3 pl-2">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-sm font-bold text-primary">
                      {testimonial.name.split('.')[0]}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">
                      {testimonial.name}, {testimonial.location}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.status}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Social Proof */}
        <div className="mt-12 flex items-center justify-center gap-3 text-muted-foreground">
          <Users className="h-5 w-5 text-primary" />
          <span className="text-sm">Join 5+ families already securing their GrinaHome</span>
        </div>
      </div>
    </section>
  )
}
