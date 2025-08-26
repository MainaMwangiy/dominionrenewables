import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Zap, Droplets, Shield, Sun } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  const message = encodeURIComponent("Hello, I would like to inquire about your services");
  const whatsappUrl = `https://wa.me/+254733370370?text=${message}`;
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-white dark:bg-background">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Hero Badge */}
          <div className="inline-flex items-center gap-2 bg-water/10 dark:bg-water/20 text-sun px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sun className="h-4 w-4" />
            Professional Solar Solutions
          </div>

          {/* Main Headline */}
          <h1 className="font-sans font-bold text-4xl md:text-6xl lg:text-7xl text-gray-900 dark:text-foreground mb-6 leading-tight">
            Solar-Powered
            <span className="text-sun-gradient block">Water Solutions</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-700 dark:text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Expert installation of solar water pumping systems, tank towers, CCTV, and lighting solutions with
            nationwide repair and maintenance services.
          </p>

          {/* Service Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 max-w-4xl mx-auto">
            <div className="flex flex-col items-center p-4 bg-gray-50 dark:bg-card rounded-lg border border-gray-200 dark:border-border">
              <Droplets className="h-8 w-8 text-water mb-2" />
              <span className="text-sm font-medium text-gray-800 dark:text-card-foreground">Water Pumping</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-gray-50 dark:bg-card rounded-lg border border-gray-200 dark:border-border">
              <Zap className="h-8 w-8 text-sun mb-2" />
              <span className="text-sm font-medium text-gray-800 dark:text-card-foreground">Solar Power</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-gray-50 dark:bg-card rounded-lg border border-gray-200 dark:border-border">
              <Shield className="h-8 w-8 text-water mb-2" />
              <span className="text-sm font-medium text-gray-800 dark:text-card-foreground">CCTV Systems</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-gray-50 dark:bg-card rounded-lg border border-gray-200 dark:border-border">
              <Sun className="h-8 w-8 text-sun mb-2" />
              <span className="text-sm font-medium text-gray-800 dark:text-card-foreground">Lighting</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button size="lg" className="text-lg px-8 py-4 bg-sun hover:bg-sun/90 text-white border-0" asChild>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                <MessageCircle className="h-5 w-5" />
                Get Free Quote on WhatsApp
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-4 bg-white/90 dark:bg-background/90 text-water border-water hover:bg-water hover:text-white backdrop-blur-sm"
              asChild
            >
              <a href="tel:++254733370370" className="flex items-center gap-3">
                <Phone className="h-5 w-5" />
                Call Now: +254733370370
              </a>
            </Button>
          </div>

          {/* Learn More Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link
              href="/about"
              className="text-green-700 dark:text-green-400 hover:text-green-600 dark:hover:text-green-300 hover:underline transition-colors"
            >
              Learn More About Us →
            </Link>
            <Link
              href="/services"
              className="text-gray-700 dark:text-muted-foreground hover:text-sun hover:underline transition-colors"
            >
              View All Services →
            </Link>
            <Link
              href="/gallery"
              className="text-gray-700 dark:text-muted-foreground hover:text-sun hover:underline transition-colors"
            >
              See Our Projects →
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 dark:text-muted-foreground mb-4">Trusted by 300+ customers nationwide</p>
            <div className="flex justify-center items-center gap-8 text-sm text-gray-500 dark:text-muted-foreground">
              <span>✓ Licensed & Insured</span>
              <span>✓ 5-Year Warranty</span>
              <span>✓ 24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
