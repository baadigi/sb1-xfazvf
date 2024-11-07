"use client";

import { ServiceHero } from "@/components/services/service-hero";
import { FeatureSection } from "@/components/services/feature-section";
import { ProcessSection } from "@/components/services/process-section";
import { ShoppingCart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "Platform Optimization",
    description: "Optimize your e-commerce platform for maximum performance and conversions."
  },
  {
    title: "Product Strategy",
    description: "Strategic product positioning and optimization for better sales."
  },
  {
    title: "Shopping Ads",
    description: "Targeted shopping campaigns across Google and social platforms."
  },
  {
    title: "Cart Optimization",
    description: "Reduce cart abandonment and improve checkout conversion rates."
  },
  {
    title: "Customer Journey",
    description: "Optimize the entire customer journey from discovery to purchase."
  },
  {
    title: "Analytics & Insights",
    description: "Detailed e-commerce analytics to drive data-based decisions."
  }
];

const processes = [
  {
    step: 1,
    title: "Analysis",
    description: "Evaluate current performance and identify opportunities."
  },
  {
    step: 2,
    title: "Strategy",
    description: "Develop comprehensive e-commerce marketing plan."
  },
  {
    step: 3,
    title: "Implementation",
    description: "Execute optimizations and marketing campaigns."
  },
  {
    step: 4,
    title: "Growth",
    description: "Scale successful strategies and expand market reach."
  }
];

export default function EcommercePage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <ServiceHero
        icon={ShoppingCart}
        title="E-commerce Solutions"
        description="Drive online sales and grow your e-commerce business with data-driven marketing strategies"
      />

      <FeatureSection
        title="E-commerce Marketing Services"
        description="Comprehensive solutions to boost your online store's performance"
        features={features}
      />

      <ProcessSection processes={processes} />

      {/* Success Metrics Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Drive E-commerce Success</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Key metrics we help improve for your online store
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-primary mb-2">45%</div>
              <p className="text-muted-foreground">Average Conversion Rate Increase</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-primary mb-2">3x</div>
              <p className="text-muted-foreground">Return on Ad Spend</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-primary mb-2">-25%</div>
              <p className="text-muted-foreground">Cart Abandonment Reduction</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-primary mb-2">67%</div>
              <p className="text-muted-foreground">Increase in Repeat Customers</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Grow Your Online Store?</h2>
          <p className="text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Let's discuss how we can help increase your e-commerce sales and revenue.
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            className="bg-white text-primary hover:bg-white/90"
          >
            Get Your Free E-commerce Audit
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </div>
  );
}