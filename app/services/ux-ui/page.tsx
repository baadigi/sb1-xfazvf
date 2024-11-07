"use client";

import { ServiceHero } from "@/components/services/service-hero";
import { FeatureSection } from "@/components/services/feature-section";
import { ProcessSection } from "@/components/services/process-section";
import { Code2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "User Research",
    description: "In-depth research to understand user needs and behaviors."
  },
  {
    title: "UX Strategy",
    description: "Strategic planning for optimal user experiences."
  },
  {
    title: "UI Design",
    description: "Beautiful, intuitive interface designs that convert."
  },
  {
    title: "Usability Testing",
    description: "Comprehensive testing to ensure optimal user experience."
  },
  {
    title: "Interaction Design",
    description: "Engaging interactions that enhance user engagement."
  },
  {
    title: "Design Systems",
    description: "Scalable design systems for consistent experiences."
  }
];

const processes = [
  {
    step: 1,
    title: "Research",
    description: "Understand user needs and business requirements."
  },
  {
    step: 2,
    title: "Design",
    description: "Create user-centered designs and prototypes."
  },
  {
    step: 3,
    title: "Testing",
    description: "Validate designs through user testing."
  },
  {
    step: 4,
    title: "Iteration",
    description: "Refine and optimize based on feedback."
  }
];

export default function UXUIPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <ServiceHero
        icon={Code2}
        title="UX/UI Design"
        description="Create seamless user experiences that drive engagement and conversions"
      />

      <FeatureSection
        title="UX/UI Design Services"
        description="User-centered design solutions for digital success"
        features={features}
      />

      <ProcessSection processes={processes} />

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Improve Your User Experience?</h2>
          <p className="text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Let's discuss how we can create better experiences for your users.
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            className="bg-white text-primary hover:bg-white/90"
          >
            Start Your UX/UI Project
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </div>
  );
}