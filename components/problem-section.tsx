import { Banknote, Clock, Globe } from "lucide-react"

const problems = [
  {
    icon: Banknote,
    title: "High Energy Bills",
    description: "€150-200/month for electricity and heating",
  },
  {
    icon: Clock,
    title: "Long Build Times",
    description: "6-12 months of construction delays",
  },
  {
    icon: Globe,
    title: "Climate Impact",
    description: "Traditional homes take 20+ years to become carbon neutral",
  },
]

export function ProblemSection() {
  return (
    <section className="py-16 md:py-24 bg-[#1F2937]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-balance">
            Traditional Homes Cost You Money Every Month
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-white/5 border border-white/10"
            >
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#F59E0B]/20 mb-4">
                <problem.icon className="h-7 w-7 text-[#F59E0B]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {problem.title}
              </h3>
              <p className="text-gray-400">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-[#0EA5E9] font-medium flex items-center justify-center gap-2">
            {"There's a better way →"}
          </p>
        </div>
      </div>
    </section>
  )
}
