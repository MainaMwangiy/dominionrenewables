import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, Award, Clock, Shield, Phone, MessageCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Dominion Renewables | Solar Energy Experts",
  description:
    "Learn about Dominion Renewables - your trusted partner for solar water pumping systems, tank towers, and renewable energy solutions. 6+ years of experience serving customers nationwide.",
  keywords:
    "about Dominion Renewables, solar energy company, renewable energy experts, solar installation team, solar water pumping specialists",
}

export default function AboutPage() {
  const message = encodeURIComponent("Hello, I would like to inquire about your services");
  const whatsappUrl = `https://wa.me/+254733370370?text=${message}`;
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4">About Dominion Renewables</Badge>
            <h1 className="font-sans font-bold text-4xl md:text-6xl text-foreground mb-6">
              Powering the Future with
              <span className="text-primary block">Solar Innovation</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              For over 6 years, we've been leading the solar revolution, providing sustainable water pumping and energy
              solutions across the nation.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-sans font-bold text-3xl md:text-4xl mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Founded in 2019, Dominion Renewables began with a simple mission: to make clean, renewable energy
                accessible to everyone. What started as a small team of passionate engineers has grown into a nationwide
                leader in solar water pumping and energy systems.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                We've successfully completed over 450 installations, from residential water pumping systems to
                large-scale commercial solar projects. Our commitment to quality, innovation, and customer satisfaction
                has made us the trusted choice for solar solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <MessageCircle className="h-5 w-5" />
                    Get Free Consultation
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="tel:++254733370370" className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    Call Us Today
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/solar-panel-installation.png"
                alt="Dominion Renewables team installing solar panels"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">400+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">6+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">300+</div>
              <div className="text-muted-foreground">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-sans font-bold text-3xl md:text-4xl mb-4">Why Choose Dominion Renewables?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We combine cutting-edge technology with unmatched expertise to deliver solar solutions that exceed
              expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <Award className="h-12 w-12 text-primary mb-4" />
                <h3 className="font-sans font-semibold text-xl mb-3">Certified Experts</h3>
                <p className="text-muted-foreground">
                  Our team consists of certified solar professionals with extensive training and experience in renewable
                  energy systems.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Shield className="h-12 w-12 text-primary mb-4" />
                <h3 className="font-sans font-semibold text-xl mb-3">5-Year Warranty</h3>
                <p className="text-muted-foreground">
                  We stand behind our work with comprehensive warranties and ongoing support for all installations.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Clock className="h-12 w-12 text-primary mb-4" />
                <h3 className="font-sans font-semibold text-xl mb-3">24/7 Support</h3>
                <p className="text-muted-foreground">
                  Round-the-clock technical support and emergency services to keep your systems running smoothly.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-primary mb-4" />
                <h3 className="font-sans font-semibold text-xl mb-3">Customer-Focused</h3>
                <p className="text-muted-foreground">
                  Every project is tailored to meet your specific needs and budget requirements.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <CheckCircle className="h-12 w-12 text-primary mb-4" />
                <h3 className="font-sans font-semibold text-xl mb-3">Quality Guaranteed</h3>
                <p className="text-muted-foreground">
                  We use only premium components and follow strict quality control processes.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Shield className="h-12 w-12 text-primary mb-4" />
                <h3 className="font-sans font-semibold text-xl mb-3">Licensed & Insured</h3>
                <p className="text-muted-foreground">
                  Fully licensed, bonded, and insured for your peace of mind and protection.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-sans font-bold text-3xl md:text-4xl mb-4">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our experienced professionals are dedicated to delivering exceptional solar solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <img
                  src="/CEO.png"
                  alt="Dominic Muthama - CEO"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-sans font-semibold text-xl mb-2">Dominic Muthama</h3>
                <p className="text-primary mb-2">CEO & Founder</p>
                <p className="text-muted-foreground text-sm">
                  6+ years in renewable energy with expertise in large-scale solar installations.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <img
                  src="/CTO.png"
                  alt="Maina Mwangi - CTO"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-sans font-semibold text-xl mb-2">Maina Mwangi</h3>
                <p className="text-primary mb-2">Chief Technology Officer</p>
                <p className="text-muted-foreground text-sm">
                  Solar engineering specialist with focus on water pumping system optimization.
                </p>
              </CardContent>
            </Card>

            {/* <Card>
              <CardContent className="p-6 text-center">
                <img
                  src="/technician-headshot.png"
                  alt="Mike Davis - Lead Technician"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-sans font-semibold text-xl mb-2">Mike Davis</h3>
                <p className="text-primary mb-2">Lead Installation Technician</p>
                <p className="text-muted-foreground text-sm">
                  Certified installer with 300+ successful solar system installations.
                </p>
              </CardContent>
            </Card> */}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-sans font-bold text-3xl md:text-4xl mb-4">Ready to Go Solar?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join hundreds of satisfied customers who have made the switch to clean, renewable solar energy.
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
              <a href="tel:++254733370370" className="flex items-center gap-2">
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
