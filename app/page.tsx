import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Search, 
  BarChart3, 
  MessageSquare, 
  Code2, 
  Database,
  Palette,
  Lightbulb,
  LineChart,
  Layout,
  Shield,
  Briefcase,
  FileText,
  ArrowRight
} from "lucide-react";

const services = [
  {
    icon: <Search className="h-8 w-8 mb-4" />,
    title: "SEO",
    description: "Boost your online visibility with data-driven SEO strategies.",
    href: "/services/seo"
  },
  {
    icon: <BarChart3 className="h-8 w-8 mb-4" />,
    title: "PPC Advertising",
    description: "Drive targeted traffic and maximize ROI with expertly managed paid campaigns.",
    href: "/services/ppc"
  },
  {
    icon: <MessageSquare className="h-8 w-8 mb-4" />,
    title: "Social Media Marketing",
    description: "Build brand awareness and engage your audience across social platforms.",
    href: "/services/smm"
  },
  {
    icon: <Layout className="h-8 w-8 mb-4" />,
    title: "Custom Web Design",
    description: "Create stunning, conversion-focused websites that drive growth.",
    href: "/services/web-design"
  },
  {
    icon: <Shield className="h-8 w-8 mb-4" />,
    title: "Reputation Management",
    description: "Build and maintain a strong online reputation for your brand.",
    href: "/services/reputation"
  },
  {
    icon: <Palette className="h-8 w-8 mb-4" />,
    title: "Branding",
    description: "Develop a compelling brand identity that resonates with your audience.",
    href: "/services/branding"
  },
  {
    icon: <Lightbulb className="h-8 w-8 mb-4" />,
    title: "Creative Services",
    description: "Stand out with professional creative design and content.",
    href: "/services/creative"
  },
  {
    icon: <Briefcase className="h-8 w-8 mb-4" />,
    title: "Consulting Services",
    description: "Expert guidance to optimize your marketing strategy.",
    href: "/services/consulting"
  },
  {
    icon: <Code2 className="h-8 w-8 mb-4" />,
    title: "UX/UI Design",
    description: "Create seamless user experiences that convert.",
    href: "/services/ux-ui"
  },
  {
    icon: <Database className="h-8 w-8 mb-4" />,
    title: "Data Driven Marketing",
    description: "Leverage data insights to make informed marketing decisions.",
    href: "/services/daas"
  },
  {
    icon: <LineChart className="h-8 w-8 mb-4" />,
    title: "CRO",
    description: "Optimize your conversion rates for better results.",
    href: "/services/cro"
  },
  {
    icon: <FileText className="h-8 w-8 mb-4" />,
    title: "Content Marketing",
    description: "Engage your audience with valuable, strategic content.",
    href: "/services/content"
  }
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="gradient-brand text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h1 className="text-5xl font-bold tracking-tight">
              Transform Your Digital Presence
            </h1>
            <p className="text-xl text-brand-light/90 max-w-2xl mx-auto">
              BaaDigi delivers data-driven digital marketing solutions that drive real business growth. From SEO to social media, we've got you covered.
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" variant="secondary" className="bg-brand-light text-brand-dark hover:bg-brand-light/90">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="border-brand-light text-brand-light hover:bg-brand-light/10">
                View Our Work
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-brand-dark">Our Services</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Comprehensive digital marketing solutions tailored to your needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-brand-light/20">
                <div className="text-brand-blue">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-brand-dark">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <Link href={service.href} className="group inline-flex items-center text-brand-blue hover:text-brand-navy">
                  Learn More 
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Grow Your Business?</h2>
          <p className="text-lg mb-8 text-brand-light">
            Schedule a free consultation to discover how we can help you achieve your digital marketing goals.
          </p>
          <Button size="lg" variant="secondary" className="bg-brand-light text-brand-dark hover:bg-brand-light/90">
            Schedule Consultation
          </Button>
        </div>
      </section>
    </>
  );
}