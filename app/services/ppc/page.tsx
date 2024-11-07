"use client";

import { ServiceHero } from "@/components/services/service-hero";
import { FeatureSection } from "@/components/services/feature-section";
import { ProcessSection } from "@/components/services/process-section";
import { BarChart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "Google Ads Management",
    description: "Expert management of search, display, and shopping campaigns to maximize ROI."
  },
  {
    title: "Social Media Advertising",
    description: "Targeted ads on Facebook, Instagram, LinkedIn, and other platforms."
  },
  {
    title: "Remarketing Campaigns",
    description: "Re-engage potential customers who have shown interest in your business."
  },
  {
    title: "Landing Page Optimization",
    description: "Create high-converting landing pages for your PPC campaigns."
  },
  {
    title: "Budget Management",
    description: "Optimize your ad spend for maximum return on investment."
  },
  {
    title: "Performance Analytics",
    description: "Detailed reporting and insights to continuously improve campaign performance."
  }
];

const processes = [
  {
    step: 1,
    title: "Account Analysis",
    description: "Review current PPC performance and identify optimization opportunities."
  },
  {
    step: 2,
    title: "Campaign Strategy",
    description: "Develop targeted campaigns based on your goals and audience."
  },
  {
    step: 3,
    title: "Launch & Monitor",
    description: "Launch optimized campaigns and monitor performance in real-time."
  },
  {
    step: 4,
    title: "Optimize & Scale",
    description: "Continuously refine campaigns and scale successful strategies."
  }
];

export default function PPCPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <ServiceHero
        icon={BarChart}
        title="Pay-Per-Click Advertising"
        description="Drive targeted traffic and generate leads with strategic PPC campaigns"
      />

      <FeatureSection
        title="PPC Management Services"
        description="Maximize your advertising ROI with data-driven PPC campaigns"
        features={features}
      />

      <ProcessSection processes={processes} />

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Generate More Leads?</h2>
          <p className="text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Let's discuss how our PPC services can help your business reach its target audience effectively.
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            className="bg-white text-primary hover:bg-white/90"
          >
            Get Your Free PPC Analysis
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </div>
  );
}