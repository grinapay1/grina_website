"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ArrowRight, TrendingUp } from "lucide-react"
import Image from "next/image"

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
      <div className="absolute inset-0 bg-linear-to-b from-muted/50 to-background -z-10" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            {/* <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              Launching March 15, 2026
            </div> */}

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
              {/* <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>Launching March 15, 2026</span>
              </div> */}
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
           
              <Image src={`/GrinaHome.jpeg`} width={500} height={500} alt="Grina Prefab" />
              
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
