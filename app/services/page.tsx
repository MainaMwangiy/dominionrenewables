// No 'use client' directive needed
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Droplets,
  Shield,
  Sun,
  Wrench,
  Phone,
  MessageCircle,
  CheckCircle,
  ArrowRight,
  Battery,
  Grid,
  Drill
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import BoreHoleDrillingServices from '../../public/services/borehole-drilling.jpg';
import SolarBackupSystem from '../../public/services/solar-backup-system.jpg';
import OffgridSolarSystems from '../../public/services/off-grid-solar.jpg';
import GridTieSystems from '../../public/services/grid-tie-solar.jpg';
import SolarWaterPumpingSystems from '../../public/services/solar-water-pumping.jpg';
import SolarCCTV from '../../public/services/solar-cctv.jpg';
import BoreholeEquiping from '../../public/services/borehole-equipping.jpg';

export const metadata: Metadata = {
  title: "Solar Services - Water Pumping, CCTV & Backup Systems | Dominion Renewables",
  description:
    "Comprehensive solar services including borehole drilling, water pumping, solar backup, off-grid and grid-tie systems, CCTV installation, and borehole equipping nationwide.",
  keywords:
    "borehole drilling, solar water pumping, solar backup systems, off-grid solar, grid-tie solar, CCTV installation, borehole equipping, solar services",
}

export default function ServicesPage() {
  const services = [
    {
      icon: Drill,
      title: "Borehole Drilling Services",
      description:
        "Professional borehole drilling services for reliable water access in residential and commercial settings.",
      features: [
        "Site assessment",
        "Geological surveys",
        "Drilling operations",
        "Casing installation",
        "Water yield testing",
      ],
      image: BoreHoleDrillingServices,
    },
    {
      icon: Battery,
      title: "Solar Backup Systems",
      description: "Reliable solar-powered backup systems to ensure uninterrupted power supply during outages.",
      features: [
        "Battery storage solutions",
        "Inverter integration",
        "Automatic switchover",
        "Remote monitoring",
        "Scalable capacity",
      ],
      image: SolarBackupSystem,
    },
    {
      icon: Sun,
      title: "Solar Off-Grid Systems",
      description: "Complete off-grid solar solutions for energy independence in remote locations.",
      features: [
        "Solar panel installation",
        "Battery banks",
        "Charge controllers",
        "System monitoring",
        "Custom design",
      ],
      image: OffgridSolarSystems,
    },
    {
      icon: Grid,
      title: "Grid-Tie Systems",
      description: "Efficient grid-tie solar systems to reduce energy costs and integrate with utility grids.",
      features: [
        "Net metering",
        "High-efficiency inverters",
        "System design",
        "Grid synchronization",
        "Performance optimization",
      ],
      image: GridTieSystems,
    },
    {
      icon: Droplets,
      title: "Solar Water Pumping Systems",
      description: "Solar-powered water pumping solutions for agricultural, residential, and commercial use.",
      features: [
        "Borehole pump installation",
        "Surface water pumping",
        "Irrigation systems",
        "Remote monitoring",
        "Energy-efficient operation",
      ],
      image: SolarWaterPumpingSystems,
    },
    {
      icon: Shield,
      title: "CCTV Installation",
      description: "Solar-powered CCTV systems for enhanced security and remote monitoring.",
      features: [
        "Wireless camera systems",
        "Night vision capability",
        "Motion detection",
        "Cloud storage",
        "Remote access",
      ],
      image: SolarCCTV,
    },
    {
      icon: Wrench,
      title: "Borehole Equipping",
      description: "Comprehensive borehole equipping services for efficient water extraction and management.",
      features: [
        "Pump installation",
        "Piping systems",
        "Control systems",
        "Water storage integration",
        "Maintenance services",
      ],
      image: BoreholeEquiping,
    },
  ]
  const message = encodeURIComponent("Hello, I would like to inquire about your services");
  const whatsappUrl = `https://wa.me/+254733370370?text=${message}`;
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4">Our Services</Badge>
            <h1 className="font-sans font-bold text-4xl md:text-6xl text-foreground mb-6">
              Comprehensive Solar
              <span className="text-primary block">Energy Solutions</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From borehole drilling to solar backup and CCTV systems, we provide tailored solar solutions for your needs.
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
                      <a href="tel:+254733370370" className="flex items-center gap-2">
                        <Phone className="h-5 w-5" />
                        Call Now
                      </a>
                    </Button>
                  </div>
                </div>

                <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                <Image
                  src={service.image}
                  alt={service.title}
                  className="rounded-lg shadow-lg w-full h-full md:w-[500px] md:h-[500px]"
                  width={500}
                  height={500}
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
                href="https://wa.me/+254733370370"
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