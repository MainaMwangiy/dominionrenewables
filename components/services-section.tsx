import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Droplets, Shield, Wrench, CheckCircle, Battery, Sun, Grid, Drill } from "lucide-react";

const services = [
  {
    icon: Drill,
    title: "Borehole Drilling Services",
    description: "Professional borehole drilling for reliable water access in residential and commercial settings.",
    features: ["Site assessment", "Geological surveys", "Drilling operations", "Casing installation", "Water yield testing"],
  },
  {
    icon: Battery,
    title: "Solar Backup Systems",
    description: "Reliable solar-powered backup systems to ensure uninterrupted power during outages.",
    features: ["Battery storage solutions", "Inverter integration", "Automatic switchover", "Remote monitoring", "Scalable capacity"],
  },
  {
    icon: Sun,
    title: "Solar Off-Grid Systems",
    description: "Complete off-grid solar solutions for energy independence in remote locations.",
    features: ["Solar panel installation", "Battery banks", "Charge controllers", "System monitoring", "Custom design"],
  },
  {
    icon: Grid,
    title: "Grid-Tie Systems",
    description: "Efficient grid-tie solar systems to reduce energy costs and integrate with utility grids.",
    features: ["Net metering", "High-efficiency inverters", "System design", "Grid synchronization", "Performance optimization"],
  },
  {
    icon: Droplets,
    title: "Solar Water Pumping Systems",
    description: "Solar-powered water pumping solutions for agricultural, residential, and commercial use.",
    features: ["Borehole pump installation", "Surface water pumping", "Irrigation systems", "Remote monitoring", "Energy-efficient operation"],
  },
  {
    icon: Shield,
    title: "CCTV Installation",
    description: "Advanced solar-powered CCTV systems for remote monitoring and surveillance.",
    features: ["Wireless connectivity", "Night vision", "Motion detection", "Cloud storage", "Remote access"],
  },
  {
    icon: Wrench,
    title: "Borehole Equipping",
    description: "Comprehensive borehole equipping services for efficient water extraction and management.",
    features: ["Pump installation", "Piping systems", "Control systems", "Water storage integration", "Maintenance services"],
  },
]

export function ServicesSection() {
  const message = encodeURIComponent("Hello, I would like to inquire about your services.");
  const whatsappUrl = `https://wa.me/+254733370370?text=${message}`;
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-sans font-bold text-3xl md:text-4xl text-foreground mb-4">Our Solar Solutions</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive solar-powered systems designed to meet your water, security, and energy needs with professional installation and ongoing support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-sans">{service.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    className="w-full bg-gradient-to-r from-orange-500 to-blue-500 text-white border-0 hover:from-orange-600 hover:to-blue-600"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-gradient-to-r from-orange-500 to-blue-500 hover:from-orange-600 hover:to-blue-600 text-white"
            asChild
          >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              Get Custom Quote for Your Project
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}