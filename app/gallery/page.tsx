"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MessageCircle, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const PROJECTS_PER_PAGE = 6;

export default function GalleryClientPage() {
  const [currentPage, setCurrentPage] = useState(1)

  const projects = [
    {
      id: 1,
      title: "Solar Water Pumping System",
      location: "Machakos",
      date: "2024",
      category: "Water Pumping",
      image: "/solar-water-pump-installation.png",
      description: "Complete solar-powered water pumping system for agricultural irrigation.",
      capacity: "5HP Solar Pump",
      beneficiaries: "200+ farmers",
    },
    {
      id: 2,
      title: "Elevated Tank Tower",
      location: "Kitui",
      date: "2024",
      category: "Tank Tower",
      image: "/elevated-tank-tower.png",
      description: "50,000L elevated water storage tank with solar pumping system.",
      capacity: "50,000L Tank",
      beneficiaries: "500+ residents",
    },
    {
      id: 3,
      title: "Solar CCTV Security System",
      location: "Wote",
      date: "2024",
      category: "CCTV",
      image: "/solar-cctv-system.png",
      description: "24/7 solar-powered security surveillance system.",
      capacity: "8 Camera System",
      beneficiaries: "Commercial facility",
    },
    {
      id: 4,
      title: "Solar Street Lighting",
      location: "Kiboko",
      date: "2024",
      category: "Lighting",
      image: "/solar-street-lighting-night.png",
      description: "Energy-efficient LED street lighting powered by solar panels.",
      capacity: "20 LED Lights",
      beneficiaries: "1000+ residents",
    },
    {
      id: 5,
      title: "Agricultural Irrigation System",
      location: "Malindi",
      date: "2024",
      category: "Water Pumping",
      image: "/solar-irrigation-vineyard.png",
      description: "Drip irrigation system powered by solar energy for crop farming.",
      capacity: "3HP Solar Pump",
      beneficiaries: "150+ farmers",
    },
    {
      id: 6,
      title: "Community Water Project",
      location: "Baringo",
      date: "2024",
      category: "Water Pumping",
      image: "/municipal-solar-water-pump.png",
      description: "Large-scale solar water pumping for community water supply.",
      capacity: "10HP Solar Pump",
      beneficiaries: "2000+ residents",
    },
    {
      id: 7,
      title: "Solar Monitoring System",
      location: "Kisumu",
      date: "2024",
      category: "CCTV",
      image: "/remote-solar-monitoring.png",
      description: "Remote monitoring system for solar installations.",
      capacity: "IoT Monitoring",
      beneficiaries: "Multiple sites",
    },
    {
      id: 8,
      title: "Residential Solar Lighting",
      location: "Nanyuki",
      date: "2024",
      category: "Lighting",
      image: "/placeholder-uoy9b.png",
      description: "Home solar lighting system with battery backup.",
      capacity: "5kW System",
      beneficiaries: "50+ homes",
    },
    {
      id: 9,
      title: "School Water System",
      location: "Naromoru",
      date: "2024",
      category: "Water Pumping",
      image: "/placeholder-mtdrl.png",
      description: "Solar water pumping system for educational institution.",
      capacity: "7HP Solar Pump",
      beneficiaries: "800+ students",
    },
    {
      id: 10,
      title: "Market Solar Lighting",
      location: "Machakos",
      date: "2024",
      category: "Lighting",
      image: "/placeholder-uua1x.png",
      description: "Solar-powered lighting for local market operations.",
      capacity: "15 LED Lights",
      beneficiaries: "300+ vendors",
    },
    {
      id: 11,
      title: "Hospital Backup System",
      location: "Kitui",
      date: "2024",
      category: "CCTV",
      image: "/placeholder-px7go.png",
      description: "Solar backup power and security system for healthcare facility.",
      capacity: "12 Camera System",
      beneficiaries: "Healthcare facility",
    },
    {
      id: 12,
      title: "Farm Irrigation Network",
      location: "Wote",
      date: "2024",
      category: "Water Pumping",
      image: "/placeholder-cwh01.png",
      description: "Comprehensive solar irrigation network for large-scale farming.",
      capacity: "15HP Solar Pump",
      beneficiaries: "500+ farmers",
    },
    {
      id: 13,
      title: "Industrial Security System",
      location: "Kiboko",
      date: "2024",
      category: "CCTV",
      image: "/placeholder-khxow.png",
      description: "High-security solar CCTV system for industrial complex.",
      capacity: "16 Camera System",
      beneficiaries: "Industrial facility",
    },
    {
      id: 14,
      title: "Village Water Tower",
      location: "Malindi",
      date: "2024",
      category: "Tank Tower",
      image: "/placeholder-bo195.png",
      description: "Community water tower with solar pumping system.",
      capacity: "75,000L Tank",
      beneficiaries: "1500+ residents",
    },
    {
      id: 15,
      title: "Sports Complex Lighting",
      location: "Baringo",
      date: "2024",
      category: "Lighting",
      image: "/placeholder-ixkkq.png",
      description: "Solar-powered lighting for community sports facility.",
      capacity: "25 LED Floodlights",
      beneficiaries: "Community sports",
    },
    {
      id: 16,
      title: "Remote Area Water Supply",
      location: "Kisumu",
      date: "2024",
      category: "Water Pumping",
      image: "/placeholder-bhpy6.png",
      description: "Solar water pumping for remote community access.",
      capacity: "8HP Solar Pump",
      beneficiaries: "800+ residents",
    },
    {
      id: 17,
      title: "Church Solar System",
      location: "Nanyuki",
      date: "2024",
      category: "Lighting",
      image: "/placeholder-vfe0o.png",
      description: "Complete solar lighting and power system for worship center.",
      capacity: "8kW System",
      beneficiaries: "Religious community",
    },
    {
      id: 18,
      title: "Agricultural Processing Plant",
      location: "Naromoru",
      date: "2024",
      category: "Water Pumping",
      image: "/placeholder-1cizg.png",
      description: "Solar-powered water system for crop processing facility.",
      capacity: "12HP Solar Pump",
      beneficiaries: "Processing facility",
    },
  ];

  const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE)
  const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE
  const endIndex = startIndex + PROJECTS_PER_PAGE
  const currentProjects = projects.slice(startIndex, endIndex)

  const whatsappMessage = encodeURIComponent("Hello, I would like to inquire about your services")
  const whatsappUrl = `https://wa.me/+254733370370?text=${whatsappMessage}`

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4">Project Gallery</Badge>
            <h1 className="font-sans font-bold text-4xl md:text-6xl text-foreground mb-6">
              Our Solar
              <span className="text-primary block">Success Stories</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our portfolio of completed solar projects across the nation. From residential water pumping to
              large-scale commercial installations.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <p className="text-muted-foreground">
              Showing {startIndex + 1}-{Math.min(endIndex, projects.length)} of {projects.length} projects
            </p>
            <p className="text-muted-foreground">
              Page {currentPage} of {totalPages}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentProjects.map((project, index) => (
              <Card key={startIndex + index} className="group overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary">{project.category}</Badge>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <Button
                      size="sm"
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      variant="secondary"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Details
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-sans font-semibold text-xl mb-2">{project.title}</h3>
                  <p className="text-primary text-sm mb-2">{project.location}</p>
                  <p className="text-muted-foreground text-sm">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-4 mt-12">
              <Button
                variant="outline"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="flex items-center gap-2"
              >
                <ChevronLeft className="h-4 w-4" />
                Previous
              </Button>

              <div className="flex gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <Button
                    key={page}
                    variant={currentPage === page ? "default" : "outline"}
                    onClick={() => setCurrentPage(page)}
                    className="w-10 h-10"
                  >
                    {page}
                  </Button>
                ))}
              </div>

              <Button
                variant="outline"
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="flex items-center gap-2"
              >
                Next
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-sans font-bold text-3xl md:text-4xl mb-4">Project Statistics</h2>
            <p className="text-xl text-muted-foreground">Numbers that speak to our experience and expertise</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">600+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">20+</div>
              <div className="text-muted-foreground">Cities Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">25MW</div>
              <div className="text-muted-foreground">Solar Capacity Installed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">99%</div>
              <div className="text-muted-foreground">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-sans font-bold text-3xl md:text-4xl mb-4">Ready for Your Solar Project?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join our growing list of satisfied customers. Get a free consultation and quote today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25d366] hover:bg-[#20b858] text-white"
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
              <a href="tel:+254733370370" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Call Now: +254733370370
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
