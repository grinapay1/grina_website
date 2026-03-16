"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Calculator, TrendingUp } from "lucide-react"

export function CalculatorSection() {
  const [dailyUsage, setDailyUsage] = useState(12)
  const [location, setLocation] = useState("estonia")

  // Calculate earnings based on usage and location
  const baseArbitrage = dailyUsage * 30 // Monthly savings from arbitrage
  const locationMultiplier = location === "estonia" ? 1.1 : 1.0
  const fcrIncome = location === "estonia" ? 1500 : 1200 // FCR grid balancing income
  const arbitrageAnnual = Math.round(baseArbitrage * 12 * locationMultiplier)
  const totalAnnual = Math.round(arbitrageAnnual + fcrIncome)
  const tenYearTotal = totalAnnual * 10

  return (
    <section id="calculator" className="py-16 md:py-24 bg-[#0EA5E9]/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Calculate Your Annual Earnings
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how much your GrinaHome can earn you
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="border-2 border-[#0EA5E9]/20">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Inputs */}
                <div className="space-y-8">
                  <div className="space-y-4">
                    <label className="block text-sm font-medium text-foreground">
                      Daily Energy Usage: <span className="text-[#0EA5E9] font-bold">{dailyUsage} kWh</span>
                    </label>
                    <Slider
                      value={[dailyUsage]}
                      onValueChange={(value) => setDailyUsage(value[0])}
                      min={5}
                      max={20}
                      step={1}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>5 kWh</span>
                      <span>20 kWh</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="block text-sm font-medium text-foreground">
                      Location
                    </label>
                    <Select value={location} onValueChange={setLocation}>
                      <SelectTrigger className="w-full">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="estonia">Estonia</SelectItem>
                        <SelectItem value="lithuania">Lithuania</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button 
                    size="lg" 
                    className="w-full bg-[#0EA5E9] hover:bg-[#0284C7] text-white"
                    onClick={() => {}}
                  >
                    <Calculator className="mr-2 h-4 w-4" />
                    Calculate My Earnings
                  </Button>
                </div>

                {/* Results */}
                <div className="bg-muted/50 rounded-xl p-6 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-[#F59E0B]/20 flex items-center justify-center">
                      <TrendingUp className="h-5 w-5 text-[#F59E0B]" />
                    </div>
                    <p className="text-sm font-medium text-muted-foreground">
                      Your Projected Annual Earnings
                    </p>
                  </div>

                  <div className="text-center py-4">
                    <p className="text-5xl font-bold text-[#F59E0B]">
                      {"€"}{totalAnnual.toLocaleString()}
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">per year</p>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-border">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Energy arbitrage</span>
                      <span className="font-medium text-foreground">{"€"}{arbitrageAnnual.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Grid balancing (FCR)</span>
                      <span className="font-medium text-foreground">{"€"}{fcrIncome.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm pt-3 border-t border-border">
                      <span className="font-medium text-foreground">Over 10 years</span>
                      <span className="font-bold text-primary">{"€"}{tenYearTotal.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center mt-8">
                <Button 
                  size="lg" 
                  className="bg-[#F59E0B] hover:bg-[#D97706] text-[#1F2937]"
                  asChild
                >
                  <Link href="#reserve">Lock In These Earnings - Reserve Now</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
