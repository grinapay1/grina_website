import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Shield, RotateCcw, CalendarCheck, ArrowRight, Download } from "lucide-react"

export function FinalCTASection() {
  return (
    <section id="consultation" className="py-16 md:py-24 bg-[#1F2937]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-balance">
            Ready to Own a Home That Pays You?
          </h2>
          <p className="text-lg text-gray-300 mb-10">
            Join the energy revolution. First 10 customers save {"€"}5,000.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Button 
              size="lg" 
              className="bg-[#F59E0B] hover:bg-[#D97706] text-[#1F2937] h-14 text-lg px-8"
              asChild
            >
              <Link href="https://buy.stripe.com/3cIdR9bO19dc1m19NP0sU01" target="_blank">
                Reserve Your GrinaHome - {"€"}1K Deposit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="h-14 text-lg px-8 bg-transparent border-white text-white hover:bg-white hover:text-[#1F2937]"
              asChild
            >
              <Link href="mailto:info@grinapay.com" >
                <CalendarCheck className="mr-2 h-5 w-5" />
                Book Free Consultation
              </Link>
            </Button>
          </div>

          {/* Tertiary CTA */}
          <div className="mb-12">
            <Button variant="ghost" className="text-gray-400 hover:text-white hover:bg-transparent" asChild>
              <Link href="#brochure">
                <Download className="mr-2 h-4 w-4" />
                Download Our Brochure
              </Link>
            </Button>
          </div>

          {/* Trust Signals */}
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex items-center gap-2 text-gray-400">
              <Shield className="h-5 w-5" />
              <span className="text-sm">Secure Payment</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <RotateCcw className="h-5 w-5" />
              <span className="text-sm">100% Refundable Deposit</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <CalendarCheck className="h-5 w-5" />
              <span className="text-sm">No Obligation Consultation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
