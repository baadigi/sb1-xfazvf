"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Target, 
  Users, 
  Shield, 
  Globe, 
  Monitor, 
  ArrowRight,
  Award,
  Handshake
} from "lucide-react";

const values = [
  {
    icon: <Target className="h-8 w-8 mb-4" />,
    title: "Mission-Driven",
    description: "Democratizing digital marketing for small businesses through innovative, accessible strategies."
  },
  {
    icon: <Shield className="h-8 w-8 mb-4" />,
    title: "Exclusivity",
    description: "One practice per market, ensuring dedicated focus and competitive advantage."
  },
  {
    icon: <Monitor className="h-8 w-8 mb-4" />,
    title: "Custom Solutions",
    description: "100% custom websites and strategies built in California, never outsourced."
  },
  {
    icon: <Globe className="h-8 w-8 mb-4" />,
    title: "Pro-Active Approach",
    description: "Constant monitoring and adaptation to digital marketing trends."
  },
  {
    icon: <Handshake className="h-8 w-8 mb-4" />,
    title: "Symbiotic Growth",
    description: "Building strong partnerships where client success drives our success."
  },
  {
    icon: <Users className="h-8 w-8 mb-4" />,
    title: "Personal Touch",
    description: "Maintaining optimal client-to-staff ratios for intimate working relationships."
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 via-primary/5 to-background py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight mb-4">About BaaDigi</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Where small business marketing meets big ideas
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg dark:prose-invert mx-auto">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="mb-6">
              BaaDigi's inception is a tale of evolution, vision, and the relentless pursuit of excellence in the digital marketing realm, spearheaded by Ryan R. Goering. Ryan's entrepreneurial journey began in 2015 with the founding of Creactive Inc. This digital marketing firm carved a niche in elevating home service businesses such as plumbers, roofers, painters, and remodelers. This venture was built on Ryan's deep-seated belief in the transformative power of targeted digital marketing strategies for small businesses.
            </p>
            <p className="mb-6">
              The foundation for Ryan's unique approach to digital marketing was laid during his commendable service in the Marine Corps, which took him to over 25 countries and instilled in him a global perspective and a penchant for strategic thinking. These experiences, combined with his passion for the boating industry and success in boat sales and servicing, shaped Ryan's understanding of business and marketing—a blend of discipline, innovation, and customer-centric focus.
            </p>
            <p>
              In 2024, Ryan embarked on a new venture, BaaDigi, a boutique digital marketing agency. BaaDigi represents the culmination of Ryan's extensive experience and insights into the needs of small businesses across various sectors. Unlike its predecessor, BaaDigi is not limited to home service providers. It extends its comprehensive digital marketing services to all small businesses, aiming to foster growth, visibility, and success in the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg dark:prose-invert mx-auto">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="mb-6">
              BaaDigi is driven by a mission to democratize digital marketing for small businesses. We believe in creating bespoke digital strategies that are innovative and accessible, allowing our clients to compete effectively in their respective markets. Under Ryan's visionary leadership, BaaDigi leverages the latest in digital marketing techniques to ensure our clients achieve and surpass their growth objectives.
            </p>
            <p>
              With a foundation built on the principles of dedication, adaptability, and unparalleled customer service, BaaDigi is poised to lead small businesses through the evolving digital landscape. Whether you're looking to enhance your online presence, drive targeted traffic, or convert leads into loyal customers, BaaDigi guides you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our commitment to excellence and client success sets us apart
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="text-primary">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Award className="h-12 w-12 mx-auto mb-6 text-primary" />
          <h2 className="text-3xl font-bold mb-4">Located in Huntington Beach, CA</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Serving businesses nationwide with custom digital marketing strategies that drive growth
          </p>
          <Button size="lg">
            Get in Touch
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </div>
  );
}