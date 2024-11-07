"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const caseStudies = [
  {
    title: "500% ROI Increase for E-commerce Client",
    client: "SportGear Pro",
    industry: "E-commerce",
    services: ["SEO", "PPC", "CRO"],
    results: [
      "500% increase in ROI",
      "300% increase in organic traffic",
      "200% increase in conversion rate"
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    href: "/case-studies/sportgear-pro"
  },
  {
    title: "Local Service Provider Dominates Market",
    client: "Premier Plumbing",
    industry: "Home Services",
    services: ["Local SEO", "PPC", "Review Management"],
    results: [
      "250% increase in leads",
      "400% increase in Google reviews",
      "Top 3 rankings for all target keywords"
    ],
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80",
    href: "/case-studies/premier-plumbing"
  },
  {
    title: "B2B Lead Generation Success Story",
    client: "TechSolutions Inc",
    industry: "Professional Services",
    services: ["Content Marketing", "LinkedIn Ads", "Marketing Automation"],
    results: [
      "400% increase in qualified leads",
      "65% reduction in cost per lead",
      "89% increase in conversion rate"
    ],
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
    href: "/case-studies/techsolutions"
  },
  {
    title: "Social Media Success for Retail Brand",
    client: "Urban Style Co",
    industry: "Retail",
    services: ["Social Media Marketing", "Influencer Marketing", "Paid Social"],
    results: [
      "800% increase in social engagement",
      "300% increase in social sales",
      "150% increase in brand mentions"
    ],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    href: "/case-studies/urban-style"
  }
];

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 via-primary/5 to-background py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight mb-4">Case Studies</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real results we've achieved for our clients
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <div className="flex gap-2 mb-4">
                    <Badge variant="secondary">{study.industry}</Badge>
                    {study.services.map((service) => (
                      <Badge key={service} variant="outline">{service}</Badge>
                    ))}
                  </div>
                  <h2 className="text-2xl font-semibold mb-4">{study.title}</h2>
                  <p className="text-muted-foreground mb-4">Client: {study.client}</p>
                  <div className="mb-6">
                    <h3 className="font-semibold mb-2">Key Results:</h3>
                    <ul className="space-y-2">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link href={study.href}>
                    <Button className="w-full">
                      View Case Study
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Achieve Similar Results?</h2>
          <p className="text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Let's discuss how we can help your business reach its digital marketing goals.
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            className="bg-white text-primary hover:bg-white/90"
          >
            Schedule a Consultation
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </div>
  );
}