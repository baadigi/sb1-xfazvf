"use client";

import { ServiceHero } from "@/components/services/service-hero";
import { FeatureSection } from "@/components/services/feature-section";
import { ProcessSection } from "@/components/services/process-section";
import { LineChart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "Conversion Audit",
    description: "Comprehensive analysis of your conversion funnel."
  },
  {
    title: "A/B Testing",
    description: "Data-driven testing to optimize conversion rates."
  },
  {
    title: "User Journey Analysis",
    description: "Identify and remove conversion obstacles."
  },
  {
    title: "Landing Page Optimization",
    description: "Optimize landing pages for better conversions."
  },
  {
    title: "Form Optimization",
    description: "Improve form completion and submission rates."
  },
  {
    title: "Analytics Integration",
    description: "Track and measure conversion improvements."
  }
];

const processes = [
  {
    step: 1,
    title: "Analysis",
    description: "Identify conversion bottlenecks and opportunities."
  },
  {
    step: 2,
    title: "Strategy",
    description: "Develop testing and optimization plan."
  },
  {
    step: 3,
    title: "Testing",
    description: "Implement and monitor optimization tests."
  },
  {
    step: 4,
    title: "Optimization",
    description: "Apply winning changes and continue improvement."
  }
];

export default function CROPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <ServiceHero
        icon={LineChart}
        title="Conversion Rate Optimization"
        description="Turn more visitors into customers with data-driven CRO strategies"
      />

      <FeatureSection
        title="CRO Services"
        description="Scientific approach to improving your conversion rates"
        features={features}
      />

      <ProcessSection processes={processes} />

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Increase Your Conversions?</h2>
          <p className="text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Let's discuss how we can optimize your conversion rates and grow your business.
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            className="bg-white text-primary hover:bg-white/90"
          >
            Get Your Free CRO Audit
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </div>
  );
}