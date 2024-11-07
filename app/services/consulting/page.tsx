"use client";

import { ServiceHero } from "@/components/services/service-hero";
import { FeatureSection } from "@/components/services/feature-section";
import { ProcessSection } from "@/components/services/process-section";
import { Briefcase, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "Strategy Development",
    description: "Custom marketing strategies aligned with your business goals."
  },
  {
    title: "Market Analysis",
    description: "In-depth market research and competitive analysis."
  },
  {
    title: "Growth Planning",
    description: "Actionable plans for sustainable business growth."
  },
  {
    title: "Performance Optimization",
    description: "Identify and improve key performance metrics."
  },
  {
    title: "Team Training",
    description: "Marketing training and skill development for your team."
  },
  {
    title: "ROI Maximization",
    description: "Strategies to improve marketing return on investment."
  }
];

const processes = [
  {
    step: 1,
    title: "Assessment",
    description: "Evaluate current marketing performance and challenges."
  },
  {
    step: 2,
    title: "Planning",
    description: "Develop strategic recommendations and action plans."
  },
  {
    step: 3,
    title: "Implementation",
    description: "Guide and support strategy execution."
  },
  {
    step: 4,
    title: "Evaluation",
    description: "Monitor results and adjust strategies as needed."
  }
];

export default function ConsultingPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <ServiceHero
        icon={Briefcase}
        title="Consulting Services"
        description="Expert guidance to optimize your marketing strategy and drive business growth"
      />

      <FeatureSection
        title="Marketing Consulting"
        description="Strategic consulting services to transform your marketing"
        features={features}
      />

      <ProcessSection processes={processes} />

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Marketing?</h2>
          <p className="text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Let's discuss how our consulting services can help optimize your marketing strategy.
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            className="bg-white text-primary hover:bg-white/90"
          >
            Schedule a Strategy Session
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </div>
  );
}