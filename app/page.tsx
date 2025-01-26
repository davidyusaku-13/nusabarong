import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center">
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Find Your Perfect Pre-Owned Vehicle at Nusa Barong Motor
              </h1>
              <p className="text-xl mb-8">
                Discover a wide range of quality second-hand cars at unbeatable
                prices. Serving you since 2009.
              </p>
              <div className="space-x-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
                >
                  <Link href="/galleries">View Our Cars</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <Image
                src="/placeholder.svg"
                alt="Featured Car"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Why Choose Nusa Barong Motor?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4 text-primary">
                Quality Assurance
              </h3>
              <p>
                All our vehicles undergo rigorous inspections to ensure top
                quality.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4 text-primary">
                Competitive Pricing
              </h3>
              <p>
                We offer the best prices in the market for pre-owned vehicles.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4 text-primary">
                Excellent Customer Service
              </h3>
              <p>
                Our team is dedicated to providing you with the best car buying
                experience since 2009.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
