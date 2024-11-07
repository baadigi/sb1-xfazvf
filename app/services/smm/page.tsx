"use client";

import { ServiceHero } from "@/components/services/service-hero";
import { FeatureSection } from "@/components/services/feature-section";
import { ProcessSection } from "@/components/services/process-section";
import { MessageSquare, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "Platform Management",
    description: "Expert management of your social media presence across all major platforms."
  },
  {
    title: "Content Creation",
    description: "Engaging, brand-aligned content that resonates with your target audience."
  },
  {
    title: "Community Engagement",
    description: "Active community management and audience interaction to build relationships."
  },
  {
    title: "Social Advertising",
    description: "Strategic paid social campaigns to expand reach and drive conversions."
  },
  {
    title: "Analytics & Reporting",
    description: "Comprehensive performance tracking and ROI measurement."
  },
  {
    title: "Brand Monitoring",
    description: "Real-time monitoring of brand mentions and social sentiment."
  }
];

const processes = [
  {
    step: 1,
    title: "Social Audit",
    description: "Analyze current social presence and identify opportunities."
  },
  {
    step: 2,
    title: "Strategy Creation",
    description: "Develop platform-specific strategies aligned with your goals."
  },
  {
    step: 3,
    title: "Content Planning",
    description: "Create engaging content calendar and posting schedule."
  },
  {
    step: 4,
    title: "Growth & Optimization",
    description: "Monitor performance and optimize for better engagement."
  }
];

export default function SMMPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <ServiceHero
        icon={MessageSquare}
        title="Social Media Marketing"
        description="Build brand awareness and engage your audience with strategic social media management"
      />

      <FeatureSection
        title="Social Media Services"
        description="Comprehensive social media management to grow your brand online"
        features={features}
      />

      <ProcessSection processes={processes} />

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Grow Your Social Presence?</h2>
          <p className="text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Let's discuss how our social media services can help your brand thrive online.
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            className="bg-white text-primary hover:bg-white/90"
          >
            Get Your Free Social Media Audit
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </div>
  );
}