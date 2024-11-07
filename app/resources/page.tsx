"use client";

import { ResourceCard } from "@/components/resources/resource-card";
import { SectionHeader } from "@/components/resources/section-header";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  FileText, 
  Wrench, 
  Video, 
  Download,
  ArrowRight 
} from "lucide-react";

const resources = {
  guides: [
    {
      title: "The Complete SEO Guide for Small Businesses",
      description: "Learn the fundamentals of SEO and how to improve your website's visibility.",
      category: "SEO",
      readTime: "15 min read",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      href: "/resources/seo-guide"
    },
    {
      title: "Social Media Marketing Playbook",
      description: "Master social media marketing with our comprehensive strategy guide.",
      category: "Social Media",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
      href: "/resources/social-media-playbook"
    }
  ],
  whitepapers: [
    {
      title: "Digital Marketing Trends 2024",
      description: "In-depth analysis of emerging digital marketing trends and strategies.",
      category: "Marketing Strategy",
      format: "PDF",
      pages: 25,
      image: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=800&q=80",
      href: "/resources/marketing-trends-2024"
    },
    {
      title: "E-commerce Optimization Guide",
      description: "Comprehensive guide to improving your online store's performance.",
      category: "E-commerce",
      format: "PDF",
      pages: 32,
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
      href: "/resources/ecommerce-guide"
    }
  ],
  tools: [
    {
      title: "ROI Calculator",
      description: "Calculate the potential return on investment for your marketing campaigns.",
      category: "Analytics",
      href: "/resources/tools/roi-calculator"
    },
    {
      title: "Keyword Research Tool",
      description: "Find the best keywords for your SEO and content strategy.",
      category: "SEO",
      href: "/resources/tools/keyword-research"
    }
  ],
  videos: [
    {
      title: "Digital Marketing Masterclass",
      description: "A comprehensive overview of digital marketing strategies.",
      category: "Marketing Strategy",
      duration: "45 min",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
      href: "/resources/videos/marketing-masterclass"
    },
    {
      title: "PPC Campaign Setup Guide",
      description: "Step-by-step guide to setting up successful PPC campaigns.",
      category: "PPC",
      duration: "30 min",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      href: "/resources/videos/ppc-guide"
    }
  ]
};

export default function ResourcesPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 via-primary/5 to-background py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight mb-4">Resources</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Free guides, tools, and resources to help grow your business
            </p>
          </div>
        </div>
      </section>

      {/* Guides Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Marketing Guides"
            description="In-depth guides to master digital marketing"
            icon={BookOpen}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resources.guides.map((guide, index) => (
              <ResourceCard
                key={index}
                {...guide}
                metadata={{ readTime: guide.readTime }}
                action={{ text: "Read Guide" }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Whitepapers Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Whitepapers"
            description="Research and insights to inform your strategy"
            icon={FileText}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resources.whitepapers.map((whitepaper, index) => (
              <ResourceCard
                key={index}
                {...whitepaper}
                metadata={{ pages: whitepaper.pages, format: whitepaper.format }}
                action={{ text: "Download", icon: <Download className="ml-2 h-4 w-4" /> }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Marketing Tools"
            description="Free tools to help optimize your marketing"
            icon={Wrench}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resources.tools.map((tool, index) => (
              <ResourceCard
                key={index}
                {...tool}
                action={{ text: "Try Tool" }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Video Tutorials"
            description="Learn from our marketing experts"
            icon={Video}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resources.videos.map((video, index) => (
              <ResourceCard
                key={index}
                {...video}
                metadata={{ duration: video.duration }}
                action={{ text: "Watch Video" }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Personalized Guidance?</h2>
          <p className="text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Our team of experts is ready to help you create a custom marketing strategy for your business.
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