import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Droplets, Building, Shield, Lightbulb, Wrench, Zap, CheckCircle } from "lucide-react";

const services = [
  {
    icon: Droplets,
    title: "Solar Water Pumping Systems",
    description: "Complete borehole pump wiring and automatic water pumping solutions powered by solar energy.",
    features: ["Borehole pump installation", "Automatic controls", "Energy-efficient operation", "Remote monitoring"],
  },
  {
    icon: Building,
    title: "Tank Tower Installation",
    description: "Professional planning and erection of water storage tank towers with structural integrity.",
    features: ["Site assessment", "Foundation work", "Tower construction", "Safety compliance"],
  },
  {
    icon: Shield,
    title: "Solar CCTV Systems",
    description: "Advanced solar-powered security camera systems for remote monitoring and surveillance.",
    features: ["Wireless connectivity", "Night vision", "Motion detection", "Cloud storage"],
  },
  {
    icon: Lightbulb,
    title: "Solar Lighting Solutions",
    description: "Comprehensive outdoor and indoor lighting systems powered by renewable solar energy.",
    features: ["LED technology", "Motion sensors", "Weather resistant", "Long battery life"],
  },
  {
    icon: Zap,
    title: "Solar Panel & Inverter Installation",
    description: "Professional installation of solar panels and inverter systems for residential and commercial use.",
    features: ["System design", "Grid-tie options", "Battery backup", "Performance monitoring"],
  },
  {
    icon: Wrench,
    title: "Repair & Maintenance",
    description: "Nationwide repair and maintenance services for all solar-powered systems and equipment.",
    features: ["Emergency repairs", "Preventive maintenance", "System upgrades", "Performance optimization"],
  },
]

export function ServicesSection() {
  const message = encodeURIComponent("Hello, I would like to inquire about your services.");
  const whatsappUrl = `https://wa.me/+254704286409?text=${message}`;
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-sans font-bold text-3xl md:text-4xl text-foreground mb-4">Our Solar Solutions</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive solar-powered systems designed to meet your water, security, and energy needs with
            professional installation and ongoing support.
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
