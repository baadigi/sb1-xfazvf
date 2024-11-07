"use client";

import { ServiceHero } from "@/components/services/service-hero";
import { FeatureSection } from "@/components/services/feature-section";
import { ProcessSection } from "@/components/services/process-section";
import { Layout, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "Custom Design",
    description: "Unique, brand-aligned websites tailored to your business needs."
  },
  {
    title: "Responsive Development",
    description: "Mobile-first websites that work perfectly on all devices."
  },
  {
    title: "UX Optimization",
    description: "User-friendly interfaces designed for maximum engagement."
  },
  {
    title: "Performance Focus",
    description: "Fast-loading, optimized websites for better user experience."
  },
  {
    title: "SEO Integration",
    description: "Built-in SEO best practices for better search visibility."
  },
  {
    title: "Conversion Optimization",
    description: "Strategic design elements to drive more conversions."
  }
];

const processes = [
  {
    step: 1,
    title: "Discovery",
    description: "Understand your goals, brand, and target audience."
  },
  {
    step: 2,
    title: "Design",
    description: "Create stunning, conversion-focused designs."
  },
  {
    step: 3,
    title: "Development",
    description: "Build your website with cutting-edge technology."
  },
  {
    step: 4,
    title: "Launch & Support",
    description: "Deploy your site and provide ongoing maintenance."
  }
];

export default function WebDesignPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <ServiceHero
        icon={Layout}
        title="Custom Web Design"
        description="Create a stunning, conversion-focused website that drives business growth"
      />

      <FeatureSection
        title="Web Design Services"
        description="Professional web design solutions for your business"
        features={features}
      />

      <ProcessSection processes={processes} />

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for a Website That Converts?</h2>
          <p className="text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Let's discuss how we can create a website that helps your business grow.
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            className="bg-white text-primary hover:bg-white/90"
          >
            Schedule a Design Consultation
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </div>
  );
}