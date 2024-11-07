"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Search,
  Users,
  Target,
  Star,
  RefreshCw,
  BarChart,
  UserCheck,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

const pillars = [
  {
    icon: <Search className="h-12 w-12" />,
    title: "Visibility",
    description: "Get found easily online through effective SEO and strong online presence, putting you ahead of the competition."
  },
  {
    icon: <Users className="h-12 w-12" />,
    title: "Engagement",
    description: "Keep your audience interested with engaging content that builds relationships and trust."
  },
  {
    icon: <Target className="h-12 w-12" />,
    title: "Conversion",
    description: "Turn visitors into clients with strategic advertising and optimized landing pages."
  },
  {
    icon: <Star className="h-12 w-12" />,
    title: "Reputation",
    description: "Build credibility and trust through positive reviews and effective reputation management."
  },
  {
    icon: <RefreshCw className="h-12 w-12" />,
    title: "Retention",
    description: "Keep existing clients engaged with email marketing and loyalty programs."
  },
  {
    icon: <BarChart className="h-12 w-12" />,
    title: "Analytics & Optimization",
    description: "Make data-driven decisions to continuously improve your marketing performance."
  },
  {
    icon: <UserCheck className="h-12 w-12" />,
    title: "Personalization",
    description: "Create stronger connections through tailored marketing that meets your audience's needs."
  }
];

const packages = [
  {
    name: "Basic Package",
    subtitle: "Foundation for Growth",
    price: "$997",
    description: "Perfect for businesses starting their digital marketing journey",
    features: [
      "Basic SEO & Local SEO setup",
      "Social media branding",
      "Basic Google & Facebook Ads",
      "Review monitoring",
      "Basic email marketing",
      "Monthly performance reports",
      "Basic audience segmentation"
    ]
  },
  {
    name: "Standard Package",
    subtitle: "Accelerated Visibility",
    price: "$1,997",
    description: "Ideal for businesses ready to expand their online presence",
    features: [
      "Advanced SEO (10 pages)",
      "Robust content strategy",
      "Expanded ad campaigns",
      "Active review management",
      "Regular email campaigns",
      "In-depth analytics",
      "Detailed audience targeting"
    ],
    popular: true
  },
  {
    name: "Premium Package",
    subtitle: "Market Leader",
    price: "$3,997",
    description: "Comprehensive solution for market dominance",
    features: [
      "Full-scale SEO optimization",
      "Complete content marketing",
      "Dynamic multi-platform ads",
      "Proactive reputation management",
      "Advanced marketing automation",
      "Comprehensive analytics",
      "Highly personalized campaigns"
    ]
  }
];

export default function SevenPillarsPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 via-primary/5 to-background py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight mb-4">
              The 7 Pillars of Digital Marketing Success
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive approach to growing your business online
            </p>
          </div>
        </div>
      </section>

      {/* Pillars Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="text-primary mb-6">{pillar.icon}</div>
                <h2 className="text-2xl font-semibold mb-4">{pillar.title}</h2>
                <p className="text-muted-foreground">{pillar.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Marketing Packages</h2>
            <p className="text-xl text-muted-foreground">
              Choose the perfect package to strengthen your digital presence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card 
                key={index} 
                className={`p-6 relative ${pkg.popular ? 'border-primary shadow-lg' : ''}`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-white px-4 py-1 rounded-full text-sm">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <p className="text-muted-foreground mb-4">{pkg.subtitle}</p>
                  <div className="text-3xl font-bold text-primary mb-2">
                    {pkg.price}
                    <span className="text-base font-normal text-muted-foreground">/month</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{pkg.description}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full" variant={pkg.popular ? "default" : "outline"}>
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Digital Presence?</h2>
          <p className="text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Let's discuss how our 7-pillar approach can help your business achieve sustainable growth online.
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            className="bg-white text-primary hover:bg-white/90"
          >
            Schedule a Consultation
          </Button>
        </div>
      </section>
    </div>
  );
}