"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface ResourceCardProps {
  title: string;
  description: string;
  category: string;
  image?: string;
  metadata?: {
    readTime?: string;
    format?: string;
    pages?: number;
    duration?: string;
  };
  href: string;
  action: {
    text: string;
    icon?: React.ReactNode;
  };
}

export function ResourceCard({
  title,
  description,
  category,
  image,
  metadata,
  href,
  action
}: ResourceCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      {image && (
        <div className="aspect-video relative">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src={image} 
            alt={title}
            className="object-cover w-full h-full"
          />
        </div>
      )}
      <div className="p-6">
        <Badge variant="secondary" className="mb-4">{category}</Badge>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex items-center justify-between">
          {metadata && (
            <span className="text-sm text-muted-foreground">
              {metadata.readTime || metadata.duration || (metadata.pages && `${metadata.pages} pages • ${metadata.format}`)}
            </span>
          )}
          <Link href={href}>
            <Button variant={image ? "outline" : "default"}>
              {action.text}
              {action.icon || <ArrowRight className="ml-2 h-4 w-4" />}
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
}