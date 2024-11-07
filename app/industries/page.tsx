"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Home,
  Building2,
  Store,
  HardHat,
  Briefcase,
  ShoppingCart,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

const industries = [
  {
    icon: <Home className="h-12 w-12" />,
    title: "Home Services",
    description: "Digital marketing solutions for plumbing, HVAC, roofing, and other home service businesses.",
    features: ["Local SEO", "Service Area Targeting", "Lead Generation", "Review Management"],
    href: "/industries/home-services"
  },
  {
    icon: <Store className="h-12 w-12" />,
    title: "Small Businesses",
    description: "Affordable and effective digital marketing strategies for small business growth.",
    features: ["Local Presence", "Brand Building", "Customer Acquisition", "ROI Focus"],
    href: "/industries/small-business"
  },
  {
    icon: <Building2 className="h-12 w-12" />,
    title: "Local Retail",
    description: "Drive foot traffic and online sales with targeted local marketing campaigns.",
    features: ["Local Search", "Social Promotion", "Inventory Ads", "Customer Loyalty"],
    href: "/industries/local-retail"
  },
  {
    icon: <HardHat className="h-12 w-12" />,
    title: "Construction",
    description: "Generate quality leads and showcase your construction projects effectively.",
    features: ["Project Showcases", "Lead Generation", "Brand Authority", "Local Targeting"],
    href: "/industries/construction"
  },
  {
    icon: <Briefcase className="h-12 w-12" />,
    title: "Professional Services",
    description: "Build authority and attract high-value clients in your professional field.",
    features: ["Authority Building", "Lead Nurturing", "Content Strategy", "Professional Branding"],
    href: "/industries/professional-services"
  },
  {
    icon: <ShoppingCart className="h-12 w-12" />,
    title: "E-commerce",
    description: "Drive online sales and grow your e-commerce business with data-driven strategies.",
    features: ["Shopping Campaigns", "Cart Optimization", "Product Strategy", "Customer Journey"],
    href: "/industries/ecommerce"
  }
];

export default function IndustriesPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 via-primary/5 to-background py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight mb-4">Industries We Serve</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Specialized digital marketing solutions for your industry
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="text-primary mb-6">{industry.icon}</div>
                <h2 className="text-2xl font-semibold mb-4">{industry.title}</h2>
                <p className="text-muted-foreground mb-6">{industry.description}</p>
                <ul className="space-y-2 mb-6">
                  {industry.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href={industry.href}>
                  <Button className="w-full">Learn More</Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}