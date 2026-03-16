"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, Clock, ArrowRight } from "lucide-react"

export function EarlyBirdSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    // Target date: April 30, 2026
    const targetDate = new Date("2026-04-30T23:59:59").getTime()

    const updateTimer = () => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        })
      }
    }

    updateTimer()
    const timer = setInterval(updateTimer, 1000)

    return () => clearInterval(timer)
  }, [])

  const benefits = [
    "Save €5,000 on your GrinaHome",
    "Priority build slot (summer 2026 delivery)",
    "First-year platform fee FREE (€1,000 value)",
    "Extended 12-year warranty",
    "Only 10 spots available (5 already claimed!)",
  ]

  return (
    <section id="reserve" className="py-16 md:py-24 bg-gradient-to-br from-[#F59E0B]/10 via-[#F59E0B]/5 to-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-[#F59E0B] font-medium mb-4">
              <Clock className="h-5 w-5" />
              <span>Limited Time Offer</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
              {"€"}5,000 Early Bird Discount
            </h2>
            <p className="text-lg text-muted-foreground">
              Offer expires April 30, 2026
            </p>
          </div>

          {/* Countdown Timer */}
          <div className="flex justify-center gap-4 mb-12">
            {[
              { value: timeLeft.days, label: "Days" },
              { value: timeLeft.hours, label: "Hours" },
              { value: timeLeft.minutes, label: "Minutes" },
              { value: timeLeft.seconds, label: "Seconds" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-card border border-border rounded-lg px-4 py-3 min-w-[70px]">
                  <p className="text-2xl sm:text-3xl font-bold text-foreground">
                    {item.value.toString().padStart(2, "0")}
                  </p>
                </div>
                <p className="text-xs text-muted-foreground mt-2">{item.label}</p>
              </div>
            ))}
          </div>

          {/* Benefits Box */}
          <div className="bg-card border-2 border-[#F59E0B]/30 rounded-xl p-6 mb-8">
            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-[#F59E0B] shrink-0 mt-0.5" />
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-[#F59E0B] hover:bg-[#D97706] text-[#1F2937] h-14 text-lg px-8"
              asChild
            >
              <Link href="https://buy.stripe.com/3cIdR9bO19dc1m19NP0sU01" target="_blank">
                Reserve with {"€"}1K Deposit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="h-14 text-lg px-8"
              asChild
            >
              <Link href="mailto:info@grinapay.com">I need more info first</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
