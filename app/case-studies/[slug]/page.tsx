import { Metadata } from 'next';
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

// This would typically come from a CMS or database
const caseStudies = {
  "sportgear-pro": {
    title: "500% ROI Increase for E-commerce Client",
    client: "SportGear Pro",
    industry: "E-commerce",
    services: ["SEO", "PPC", "CRO"],
    challenge: "SportGear Pro was struggling with low online visibility and poor conversion rates despite having quality products.",
    solution: "We implemented a comprehensive digital strategy including technical SEO improvements, targeted PPC campaigns, and conversion rate optimization.",
    results: [
      "500% increase in ROI",
      "300% increase in organic traffic",
      "200% increase in conversion rate",
      "45% reduction in cart abandonment",
      "150% increase in average order value"
    ],
    testimonial: {
      quote: "BaaDigi transformed our online presence and significantly improved our bottom line. Their data-driven approach and expertise in e-commerce marketing made all the difference.",
      author: "John Smith",
      position: "CEO, SportGear Pro"
    },
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
  },
  "premier-plumbing": {
    title: "Local Service Provider Dominates Market",
    client: "Premier Plumbing",
    industry: "Home Services",
    services: ["Local SEO", "PPC", "Review Management"],
    challenge: "Premier Plumbing needed to increase their local visibility and generate more qualified leads in a competitive market.",
    solution: "We developed a local SEO and PPC strategy focused on service areas, implemented a review management system, and optimized their Google Business Profile.",
    results: [
      "250% increase in leads",
      "400% increase in Google reviews",
      "Top 3 rankings for all target keywords",
      "35% increase in customer lifetime value",
      "60% reduction in cost per lead"
    ],
    testimonial: {
      quote: "The results speak for themselves. BaaDigi helped us become the go-to plumbing service in our area through their strategic marketing approach.",
      author: "Mike Johnson",
      position: "Owner, Premier Plumbing"
    },
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80"
  }
};

export function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({
    slug: slug,
  }));
}

interface CaseStudyPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const study = caseStudies[params.slug as keyof typeof caseStudies];

  if (!study) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${study.title} | BaaDigi Case Studies`,
    description: study.challenge,
  };
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const study = caseStudies[params.slug as keyof typeof caseStudies];

  if (!study) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 via-primary/5 to-background py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex gap-2 justify-center mb-4">
              <Badge variant="secondary">{study.industry}</Badge>
              {study.services.map((service) => (
                <Badge key={service} variant="outline">{service}</Badge>
              ))}
            </div>
            <h1 className="text-4xl font-bold tracking-tight mb-4">{study.title}</h1>
            <p className="text-xl text-muted-foreground">Client: {study.client}</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Image */}
          <div className="aspect-video relative mb-12">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={study.image} 
              alt={study.title}
              className="object-cover w-full h-full rounded-lg"
            />
          </div>

          {/* Challenge */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
            <p className="text-muted-foreground">{study.challenge}</p>
          </div>

          {/* Solution */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Our Solution</h2>
            <p className="text-muted-foreground">{study.solution}</p>
          </div>

          {/* Results */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">The Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {study.results.map((result, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mr-3 mt-0.5" />
                  <span>{result}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg mb-12">
            <blockquote className="text-lg italic mb-4">
              "{study.testimonial.quote}"
            </blockquote>
            <div className="font-semibold">{study.testimonial.author}</div>
            <div className="text-muted-foreground">{study.testimonial.position}</div>
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