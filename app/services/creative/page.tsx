"use client";

import { ServiceHero } from "@/components/services/service-hero";
import { FeatureSection } from "@/components/services/feature-section";
import { ProcessSection } from "@/components/services/process-section";
import { Lightbulb, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "Graphic Design",
    description: "Professional designs that capture attention and communicate your message."
  },
  {
    title: "Video Production",
    description: "Engaging video content that tells your brand's story effectively."
  },
  {
    title: "Motion Graphics",
    description: "Dynamic animations that bring your content to life."
  },
  {
    title: "Digital Assets",
    description: "Custom graphics for social media, web, and marketing materials."
  },
  {
    title: "Photography",
    description: "Professional photography services for your brand and products."
  },
  {
    title: "Creative Strategy",
    description: "Strategic creative direction aligned with your marketing goals."
  }
];

const processes = [
  {
    step: 1,
    title: "Creative Brief",
    description: "Define project goals, requirements, and creative direction."
  },
  {
    step: 2,
    title: "Concept",
    description: "Develop creative concepts and initial designs."
  },
  {
    step: 3,
    title: "Creation",
    description: "Produce high-quality creative assets."
  },
  {
    step: 4,
    title: "Refinement",
    description: "Review, refine, and perfect the final deliverables."
  }
];

export default function CreativePage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <ServiceHero
        icon={Lightbulb}
        title="Creative Services"
        description="Stand out with professional creative design and content that captures attention"
      />

      <FeatureSection
        title="Creative Solutions"
        description="Professional creative services to elevate your brand"
        features={features}
      />

      <ProcessSection processes={processes} />

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Create Something Amazing?</h2>
          <p className="text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Let's discuss how our creative services can help your brand stand out.
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            className="bg-white text-primary hover:bg-white/90"
          >
            Start Your Creative Project
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </div>
  );
}