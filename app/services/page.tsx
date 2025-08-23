import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Droplets,
  Zap,
  Shield,
  Sun,
  Settings,
  Wrench,
  Phone,
  MessageCircle,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solar Services - Water Pumping, CCTV & Lighting | Dominion Renewables",
  description:
    "Comprehensive solar services including water pumping systems, tank towers, solar CCTV, lighting solutions, installation, maintenance and repair services nationwide.",
  keywords:
    "solar water pumping, borehole pumps, tank tower installation, solar CCTV systems, solar lighting, solar panel installation, maintenance, repair services",
}

export default function ServicesPage() {
  const services = [
    {
      icon: Droplets,
      title: "Solar Water Pumping Systems",
      description:
        "Complete solar-powered water pumping solutions for residential, agricultural, and commercial applications.",
      features: [
        "Borehole pump installation",
        "Surface water pumping",
        "Irrigation systems",
        "Water storage solutions",
        "Remote monitoring",
      ],
      image: "/placeholder-r3bn1.png",
    },
    {
      icon: Sun,
      title: "Tank Tower Construction",
      description: "Professional tank tower design and installation for elevated water storage systems.",
      features: ["Custom tower design", "Foundation work", "Tank installation", "Piping systems", "Safety compliance"],
      image: "/water-tank-tower-construction.png",
    },
    {
      icon: Shield,
      title: "Solar CCTV Systems",
      description: "Solar-powered security camera systems for remote monitoring and surveillance.",
      features: [
        "Wireless camera systems",
        "Night vision capability",
        "Remote access",
        "Motion detection",
        "Cloud storage",
      ],
      image: "/placeholder-6jz6q.png",
    },
    {
      icon: Zap,
      title: "Solar Lighting Solutions",
      description: "Energy-efficient solar lighting systems for outdoor and indoor applications.",
      features: ["Street lighting", "Garden lighting", "Security lighting", "Indoor solar systems", "Smart controls"],
      image: "/solar-street-lighting-installation.png",
    },
    {
      icon: Settings,
      title: "System Installation",
      description: "Professional installation services for all types of solar energy systems.",
      features: [
        "Site assessment",
        "System design",
        "Professional installation",
        "Testing & commissioning",
        "Training & handover",
      ],
      image: "/solar-panel-installation.png",
    },
    {
      icon: Wrench,
      title: "Maintenance & Repair",
      description: "Comprehensive maintenance and repair services to keep your systems running optimally.",
      features: [
        "Preventive maintenance",
        "Emergency repairs",
        "Component replacement",
        "Performance optimization",
        "24/7 support",
      ],
      image: "/placeholder-dfam0.png",
    },
  ]
  const message = encodeURIComponent("Hello, I would like to inquire about your services");
  const whatsappUrl = `https://wa.me/+254704286409?text=${message}`;
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4">Our Services</Badge>
            <h1 className="font-sans font-bold text-4xl md:text-6xl text-foreground mb-6">
              Complete Solar
              <span className="text-primary block">Energy Solutions</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From water pumping systems to security solutions, we provide comprehensive solar services tailored to your
              needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <service.icon className="h-8 w-8 text-primary" />
                    <Badge variant="secondary">{`0${index + 1}`}</Badge>
                  </div>
                  <h2 className="font-sans font-bold text-3xl md:text-4xl mb-4">{service.title}</h2>
                  <p className="text-lg text-muted-foreground mb-6">{service.description}</p>

                  <div className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" asChild>
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <MessageCircle className="h-5 w-5" />
                        Get Quote
                      </a>
                    </Button>
                    <Button variant="outline" size="lg" asChild>
                      <a href="tel:++254704286409" className="flex items-center gap-2">
                        <Phone className="h-5 w-5" />
                        Call Now
                      </a>
                    </Button>
                  </div>
                </div>

                <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="rounded-lg shadow-lg w-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-sans font-bold text-3xl md:text-4xl mb-4">Our Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We follow a proven process to ensure your solar project is completed on time and within budget.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="font-sans font-semibold text-xl mb-3">Consultation</h3>
              <p className="text-muted-foreground">Free site assessment and system design consultation.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="font-sans font-semibold text-xl mb-3">Design</h3>
              <p className="text-muted-foreground">Custom system design tailored to your specific needs.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="font-sans font-semibold text-xl mb-3">Installation</h3>
              <p className="text-muted-foreground">Professional installation by certified technicians.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="font-sans font-semibold text-xl mb-3">Support</h3>
              <p className="text-muted-foreground">Ongoing maintenance and 24/7 technical support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-sans font-bold text-3xl md:text-4xl mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Contact us today for a free consultation and custom quote for your solar project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <a
                href="https://wa.me/+254704286409"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageCircle className="h-5 w-5" />
                Get Free Quote on WhatsApp
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              asChild
            >
              <a href="/contact" className="flex items-center gap-2">
                <ArrowRight className="h-5 w-5" />
                Contact Us
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
