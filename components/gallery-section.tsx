'use client';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useRouter } from "next/navigation";

const galleryItems = [
  {
    title: "Solar Water Pumping Installation",
    description: "Complete borehole pump system with solar panels",
    image: "/solar-water-pump-installation.png",
  },
  {
    title: "Tank Tower Construction",
    description: "Professional water storage tower installation",
    image: "/placeholder-1fycv.png",
  },
  {
    title: "Solar CCTV System",
    description: "Wireless security camera with solar power",
    image: "/placeholder-r6u04.png",
  },
  {
    title: "Solar Lighting Project",
    description: "LED street lighting powered by solar energy",
    image: "/placeholder-p0fnm.png",
  },
  {
    title: "Residential Solar Installation",
    description: "Home solar panel and inverter system",
    image: "/residential-solar-installation.png",
  },
  {
    title: "Commercial Solar Project",
    description: "Large-scale solar installation for business",
    image: "/commercial-building-solar.png",
  },
]

export function GallerySection() {
  const router = useRouter();
  return (
    <section id="gallery" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-sans font-bold text-3xl md:text-4xl text-foreground mb-4">Our Recent Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our portfolio of successful solar installations across various sectors, showcasing our expertise and
            commitment to quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-64">
                <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="font-sans font-semibold text-lg text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" onClick={()=> router.push('/gallery')}>
            View Complete Gallery
          </Button>
        </div>
      </div>
    </section>
  )
}
