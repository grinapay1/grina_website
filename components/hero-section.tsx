"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ArrowRight, TrendingUp } from "lucide-react"

export function HeroSection() {
  const [displayAmount, setDisplayAmount] = useState(0)

  useEffect(() => {
    const target = 2500
    const duration = 2000
    const steps = 60
    const increment = target / steps
    let current = 0
    
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setDisplayAmount(target)
        clearInterval(timer)
      } else {
        setDisplayAmount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-background -z-10" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              Launching March 15, 2026
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Your Home Should Pay You{" "}
              <span className="text-[#F59E0B]">{"€"}2,500</span>{" "}
              Every Year
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Energy-intelligent prefab homes in Estonia & Lithuania. Built in 8 weeks. 
              No solar panels needed. Passive income from day one.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-[#F59E0B] hover:bg-[#D97706] text-[#1F2937] text-base h-12 px-6"
                asChild
              >
                <Link href="#reserve">
                  Reserve Your Spot - {"€"}5K Early Bird Discount
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-base h-12 px-6"
                asChild
              >
                <Link href="#consultation">Book Free Consultation</Link>
              </Button>
            </div>

            {/* Trust Signals */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>5 Pre-Orders Secured</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>Launching March 15, 2026</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>First 10 Get {"€"}5K Discount</span>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Visual */}
          <div className="relative">
            {/* Modern prefab home illustration */}
            <div className="relative rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 p-8 border border-border">
              <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center overflow-hidden relative">
                {/* Stylized home illustration */}
                <svg viewBox="0 0 400 300" className="w-full h-full p-4">
                  {/* Sky */}
                  <rect x="0" y="0" width="400" height="150" fill="#E0F2FE" />
                  {/* Ground */}
                  <rect x="0" y="150" width="400" height="150" fill="#ECFDF5" />
                  
                  {/* Modern Prefab Home */}
                  <g transform="translate(80, 80)">
                    {/* Main structure */}
                    <rect x="0" y="50" width="240" height="100" fill="#1F2937" rx="4" />
                    {/* Roof accent */}
                    <rect x="0" y="40" width="240" height="15" fill="#2D5016" rx="2" />
                    {/* Large window */}
                    <rect x="20" y="70" width="80" height="60" fill="#0EA5E9" opacity="0.6" rx="2" />
                    <rect x="25" y="75" width="70" height="50" fill="#BFDBFE" rx="1" />
                    {/* Door */}
                    <rect x="130" y="80" width="40" height="70" fill="#374151" rx="2" />
                    <circle cx="160" cy="115" r="3" fill="#F59E0B" />
                    {/* Small windows */}
                    <rect x="190" y="70" width="35" height="35" fill="#0EA5E9" opacity="0.6" rx="2" />
                    <rect x="193" y="73" width="29" height="29" fill="#BFDBFE" rx="1" />
                    {/* Battery unit on side */}
                    <rect x="245" y="90" width="25" height="60" fill="#2D5016" rx="2" />
                    <rect x="250" y="100" width="15" height="8" fill="#22C55E" rx="1" />
                    <rect x="250" y="112" width="15" height="8" fill="#22C55E" rx="1" />
                    <rect x="250" y="124" width="15" height="8" fill="#22C55E" rx="1" />
                  </g>
                  
                  {/* Sun */}
                  <circle cx="350" cy="50" r="30" fill="#F59E0B" />
                  
                  {/* Trees */}
                  <g transform="translate(30, 120)">
                    <rect x="15" y="40" width="10" height="30" fill="#8B5A2B" />
                    <polygon points="20,0 0,45 40,45" fill="#2D5016" />
                  </g>
                  <g transform="translate(340, 130)">
                    <rect x="15" y="40" width="10" height="25" fill="#8B5A2B" />
                    <polygon points="20,0 0,40 40,40" fill="#2D5016" />
                  </g>
                </svg>
              </div>
              
              {/* Animated earnings overlay */}
              <div className="absolute top-4 right-4 bg-background rounded-xl shadow-lg p-4 border border-border">
                <div className="flex items-center gap-2">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Annual Earnings</p>
                    <p className="text-2xl font-bold text-[#F59E0B]">
                      {"€"}{displayAmount.toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
