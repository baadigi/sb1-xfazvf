"use client";

import { LucideIcon } from "lucide-react";

interface ServiceHeroProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export function ServiceHero({ title, description, icon: Icon }: ServiceHeroProps) {
  return (
    <section className="bg-gradient-to-r from-primary/10 via-primary/5 to-background py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Icon className="h-16 w-16 mx-auto mb-6 text-primary" />
          <h1 className="text-4xl font-bold tracking-tight mb-4">{title}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}