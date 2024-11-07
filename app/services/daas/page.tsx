"use client";

import { ServiceHero } from "@/components/services/service-hero";
import { FeatureSection } from "@/components/services/feature-section";
import { ProcessSection } from "@/components/services/process-section";
import { Database, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "Data Collection & Analysis",
    description: "Comprehensive data gathering and analysis from multiple sources to drive informed decisions."
  },
  {
    title: "Custom Reporting",
    description: "Tailored reports and dashboards that provide actionable insights for your business."
  },
  {
    title: "Predictive Analytics",
    description: "Advanced analytics to forecast trends and identify opportunities for growth."
  },
  {
    title: "Data Integration",
    description: "Seamless integration of data from various platforms and sources."
  },
  {
    title: "Real-time Monitoring",
    description: "Live monitoring of key metrics and performance indicators."
  },
  {
    title: "Data Security",
    description: "Enterprise-grade security measures to protect your valuable data."
  }
];

const processes = [
  {
    step: 1,
    title: "Data Assessment",
    description: "Evaluate your current data sources and identify opportunities."
  },
  {
    step: 2,
    title: "Strategy Development",
    description: "Create a customized data strategy aligned with your business goals."
  },
  {
    step: 3,
    title: "Implementation",
    description: "Set up data collection and analysis systems."
  },
  {
    step: 4,
    title: "Optimization",
    description: "Continuously refine and improve data processes for better results."
  }
];

export default function DaaSPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <ServiceHero
        icon={Database}
        title="Data as a Service (DaaS)"
        description="Transform your business decisions with data-driven insights and analytics"
      />

      <FeatureSection
        title="Data Services"
        description="Comprehensive data solutions to power your marketing decisions"
        features={features}
      />

      <ProcessSection processes={processes} />

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Harness the Power of Data?</h2>
          <p className="text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Let's discuss how our data services can transform your business decision-making.
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            className="bg-white text-primary hover:bg-white/90"
          >
            Schedule a Data Strategy Session
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </div>
  );
}