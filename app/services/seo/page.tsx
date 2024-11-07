"use client";

import { ServiceHero } from "@/components/services/service-hero";
import { FeatureSection } from "@/components/services/feature-section";
import { ProcessSection } from "@/components/services/process-section";
import { Search, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "Technical SEO",
    description: "Optimize your website's structure, speed, and technical elements for better search engine visibility."
  },
  {
    title: "On-Page SEO",
    description: "Enhance your content, meta tags, and internal linking for improved search rankings."
  },
  {
    title: "Off-Page SEO",
    description: "Build high-quality backlinks and establish your website's authority in your industry."
  },
  {
    title: "Local SEO",
    description: "Dominate local search results and attract more customers from your target area."
  },
  {
    title: "Content Strategy",
    description: "Create engaging, SEO-optimized content that ranks well and converts visitors."
  },
  {
    title: "Performance Tracking",
    description: "Monitor your SEO progress with detailed analytics and regular reporting."
  }
];

const processes = [
  {
    step: 1,
    title: "SEO Audit",
    description: "Comprehensive analysis of your current SEO performance and opportunities."
  },
  {
    step: 2,
    title: "Strategy Development",
    description: "Custom SEO strategy tailored to your business goals and target audience."
  },
  {
    step: 3,
    title: "Implementation",
    description: "Execute optimization techniques and content strategies for better rankings."
  },
  {
    step: 4,
    title: "Monitor & Optimize",
    description: "Track performance and continuously refine strategies for optimal results."
  }
];

export default function SEOPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <ServiceHero
        icon={Search}
        title="Search Engine Optimization"
        description="Drive organic traffic and increase your online visibility with data-driven SEO strategies"
      />

      <FeatureSection
        title="Comprehensive SEO Services"
        description="Everything you need to rank higher and attract more qualified leads"
        features={features}
      />

      <ProcessSection processes={processes} />

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Improve Your Search Rankings?</h2>
          <p className="text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Let's discuss how our SEO services can help your business reach more customers online.
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            className="bg-white text-primary hover:bg-white/90"
          >
            Get Your Free SEO Audit
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </div>
  );
}