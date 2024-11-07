"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Search, 
  BarChart3, 
  MessageSquare, 
  Code2, 
  Database,
  ArrowRight 
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: <Search className="h-12 w-12" />,
    title: "SEO & Content",
    description: "Boost your online visibility and drive organic traffic with our comprehensive SEO and content marketing services.",
    features: ["On-Page SEO", "Off-Page SEO", "Content Strategy", "Keyword Research"],
    href: "/services/seo"
  },
  {
    icon: <BarChart3 className="h-12 w-12" />,
    title: "PPC & Ads",
    description: "Maximize your ROI with targeted paid advertising campaigns across multiple platforms.",
    features: ["Google Ads", "Facebook Ads", "Campaign Strategy", "Performance Analytics"],
    href: "/services/ppc"
  },
  {
    icon: <MessageSquare className="h-12 w-12" />,
    title: "Social Media",
    description: "Build and engage your audience with strategic social media management and content creation.",
    features: ["Platform Management", "Content Creation", "Community Engagement", "Analytics"],
    href: "/services/social-media"
  },
  {
    icon: <Code2 className="h-12 w-12" />,
    title: "Web Development",
    description: "Create stunning, conversion-focused websites that drive business growth.",
    features: ["Custom Design", "eCommerce", "Maintenance", "Performance"],
    href: "/services/web-development"
  },
  {
    icon: <Database className="h-12 w-12" />,
    title: "Data as a Service",
    description: "Make data-driven decisions with our comprehensive data collection and analysis services.",
    features: ["Data Collection", "Analytics", "Insights", "Strategy"],
    href: "/services/daas"
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 via-primary/5 to-background py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight mb-4">Our Services</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital marketing solutions tailored to your business needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="text-primary mb-6">{service.icon}</div>
                <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href={service.href}>
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