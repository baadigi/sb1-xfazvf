"use client";

import { ServiceHero } from "@/components/services/service-hero";
import { FeatureSection } from "@/components/services/feature-section";
import { ProcessSection } from "@/components/services/process-section";
import { Palette, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "Brand Strategy",
    description: "Develop a compelling brand strategy that resonates with your audience."
  },
  {
    title: "Visual Identity",
    description: "Create a distinctive visual identity that reflects your brand values."
  },
  {
    title: "Brand Guidelines",
    description: "Comprehensive guidelines to ensure brand consistency across all channels."
  },
  {
    title: "Brand Messaging",
    description: "Craft compelling brand messaging that connects with your audience."
  },
  {
    title: "Brand Experience",
    description: "Design cohesive brand experiences across all touchpoints."
  },
  {
    title: "Brand Evolution",
    description: "Guide your brand's growth and adaptation in changing markets."
  }
];

const processes = [
  {
    step: 1,
    title: "Discovery",
    description: "Deep dive into your brand's values, goals, and audience."
  },
  {
    step: 2,
    title: "Strategy",
    description: "Develop comprehensive brand strategy and positioning."
  },
  {
    step: 3,
    title: "Creation",
    description: "Design and develop brand identity and assets."
  },
  {
    step: 4,
    title: "Implementation",
    description: "Roll out brand across all channels and touchpoints."
  }
];

export default function BrandingPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <ServiceHero
        icon={Palette}
        title="Branding Services"
        description="Build a powerful brand that connects with your audience and drives business growth"
      />

      <FeatureSection
        title="Brand Development Services"
        description="Comprehensive branding solutions to help your business stand out"
        features={features}
      />

      <ProcessSection processes={processes} />

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Build a Stronger Brand?</h2>
          <p className="text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Let's discuss how we can help develop and strengthen your brand identity.
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            className="bg-white text-primary hover:bg-white/90"
          >
            Schedule a Brand Strategy Session
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </div>
  );
}