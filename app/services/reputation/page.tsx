"use client";

import { ServiceHero } from "@/components/services/service-hero";
import { FeatureSection } from "@/components/services/feature-section";
import { ProcessSection } from "@/components/services/process-section";
import { Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "Review Management",
    description: "Monitor and manage online reviews across all major platforms."
  },
  {
    title: "Brand Monitoring",
    description: "Track and analyze brand mentions and sentiment across the web."
  },
  {
    title: "Crisis Management",
    description: "Rapid response and strategic handling of reputation challenges."
  },
  {
    title: "Competitor Analysis",
    description: "Monitor competitor reputation and identify opportunities."
  },
  {
    title: "Review Generation",
    description: "Strategic campaigns to generate positive customer reviews."
  },
  {
    title: "Reputation Reporting",
    description: "Detailed analytics and insights on your brand's reputation."
  }
];

const processes = [
  {
    step: 1,
    title: "Audit",
    description: "Comprehensive analysis of your current online reputation."
  },
  {
    step: 2,
    title: "Strategy",
    description: "Develop a customized reputation management plan."
  },
  {
    step: 3,
    title: "Implementation",
    description: "Execute reputation building and monitoring strategies."
  },
  {
    step: 4,
    title: "Maintenance",
    description: "Ongoing monitoring and proactive reputation management."
  }
];

export default function ReputationPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <ServiceHero
        icon={Shield}
        title="Reputation Management"
        description="Build and maintain a strong, positive online reputation that drives trust and growth"
      />

      <FeatureSection
        title="Reputation Services"
        description="Comprehensive reputation management solutions for your brand"
        features={features}
      />

      <ProcessSection processes={processes} />

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Build a Strong Reputation?</h2>
          <p className="text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Let's discuss how we can help protect and enhance your brand's reputation.
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            className="bg-white text-primary hover:bg-white/90"
          >
            Get Your Free Reputation Audit
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </div>
  );
}