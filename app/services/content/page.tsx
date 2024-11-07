"use client";

import { ServiceHero } from "@/components/services/service-hero";
import { FeatureSection } from "@/components/services/feature-section";
import { ProcessSection } from "@/components/services/process-section";
import { FileText, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "Content Strategy",
    description: "Strategic content planning aligned with your marketing goals."
  },
  {
    title: "Blog Writing",
    description: "SEO-optimized blog posts that engage and inform."
  },
  {
    title: "Copywriting",
    description: "Compelling copy that drives action and conversions."
  },
  {
    title: "Content Marketing",
    description: "Distribution strategies to reach your target audience."
  },
  {
    title: "Email Content",
    description: "Engaging email campaigns that nurture leads."
  },
  {
    title: "Social Content",
    description: "Platform-specific content that builds engagement."
  }
];

const processes = [
  {
    step: 1,
    title: "Strategy",
    description: "Develop content strategy and editorial calendar."
  },
  {
    step: 2,
    title: "Creation",
    description: "Produce high-quality, targeted content."
  },
  {
    step: 3,
    title: "Distribution",
    description: "Share content across relevant channels."
  },
  {
    step: 4,
    title: "Analysis",
    description: "Track performance and optimize content strategy."
  }
];

export default function ContentPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <ServiceHero
        icon={FileText}
        title="Content Marketing"
        description="Engage your audience with valuable, strategic content that drives results"
      />

      <FeatureSection
        title="Content Services"
        description="Comprehensive content marketing solutions for your business"
        features={features}
      />

      <ProcessSection processes={processes} />

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Create Great Content?</h2>
          <p className="text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Let's discuss how our content marketing services can help grow your business.
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            className="bg-white text-primary hover:bg-white/90"
          >
            Start Your Content Strategy
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </div>
  );
}