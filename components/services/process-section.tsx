"use client";

import { Card } from "@/components/ui/card";

interface Process {
  step: number;
  title: string;
  description: string;
}

interface ProcessSectionProps {
  processes: Process[];
}

export function ProcessSection({ processes }: ProcessSectionProps) {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Process</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            How we deliver exceptional results for your business
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processes.map((process) => (
            <Card key={process.step} className="p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-primary mb-4">
                {process.step.toString().padStart(2, '0')}
              </div>
              <h3 className="text-xl font-semibold mb-2">{process.title}</h3>
              <p className="text-muted-foreground">{process.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}