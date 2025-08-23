import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Users, MapPin, Clock } from "lucide-react";

const stats = [
  {
    icon: Users,
    number: "300+",
    label: "Happy Customers",
    description: "Satisfied clients across the nation",
  },
  {
    icon: Award,
    number: "10+",
    label: "Years Experience",
    description: "Proven expertise in solar solutions",
  },
  {
    icon: MapPin,
    number: "20+",
    label: "Cities Served",
    description: "Nationwide service coverage",
  },
  {
    icon: Clock,
    number: "24/7",
    label: "Support Available",
    description: "Round-the-clock assistance",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="font-sans font-bold text-3xl md:text-4xl text-foreground mb-6">
              Leading Solar Energy Solutions Provider
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed mb-8">
              <p>
                At Dominion Renewables, we specialize in delivering comprehensive solar-powered systems that transform
                how you access water, security, and energy. Our mission is to provide reliable, sustainable solutions
                that reduce costs and environmental impact.
              </p>
              <p>
                With over a decade of experience and a growing clientele of 300+ satisfied customers, we've established
                ourselves as the trusted partner for solar water pumping systems, tank tower installations, security
                systems, and lighting solutions across the nation.
              </p>
              <p>
                Our team of certified professionals ensures every installation meets the highest standards of quality
                and safety, backed by comprehensive warranties and ongoing support services.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-blue-500 hover:from-orange-600 hover:to-blue-600 text-white"
                asChild
              >
                <a href="/about">Learn More About Us</a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-orange-500 text-white border-0 hover:from-blue-600 hover:to-orange-600"
                asChild
              >
                <a href="/gallery">View Our Projects</a>
              </Button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <Card key={index} className="text-center p-6">
                  <CardContent className="p-0">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-primary/10 rounded-full">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <div className="font-sans font-bold text-3xl text-foreground mb-2">{stat.number}</div>
                    <div className="font-medium text-foreground mb-1">{stat.label}</div>
                    <div className="text-sm text-muted-foreground">{stat.description}</div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
