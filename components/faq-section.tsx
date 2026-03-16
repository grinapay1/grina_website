import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Do I need solar panels to earn €2,500/year?",
    answer: "No! GrinaHomes earn money through battery arbitrage and grid services alone. Solar is an optional €10K upgrade that increases earnings to €3,500/year.",
  },
  {
    question: "How does the battery make money?",
    answer: "It charges when electricity is cheap (night), powers your home and sells to grid when expensive (evening). Plus utilities pay €3-5K/year just for your battery being available for grid balancing.",
  },
  {
    question: "Is this legal/approved?",
    answer: "Yes! Energy trading on Nord Pool market is fully regulated and legal. We handle all licensing and grid operator agreements.",
  },
  {
    question: "What if the battery breaks?",
    answer: "10-year warranty covers replacement. Maintenance included in €1K/year platform fee.",
  },
  {
    question: "Can I live anywhere in Estonia/Lithuania?",
    answer: "Yes, as long as there's grid connection. We operate nationwide in both countries.",
  },
  {
    question: "What's included in the €130K price?",
    answer: "Complete 50m² prefab home, battery system, AI platform (Year 1 free), heat pump, underfloor heating, installation, 10-year warranty. Only land excluded (Tier 1).",
  },
  {
    question: "How long until I break even?",
    answer: "With €2,500/year earnings, battery investment recovers in ~5 years. But you're building equity in a home from day 1, not renting.",
  },
  {
    question: "Can I see a demo before buying?",
    answer: "Virtual tours available now. Physical showroom opening Q2 2026. Book consultation for personalized walkthrough.",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="py-16 md:py-24 bg-muted/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Common Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about GrinaHomes
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-medium">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
