'use client';

import * as React from 'react';
import { motion } from 'motion/react';
import { Film, Sparkles, Share2, MonitorPlay } from 'lucide-react';

const services = [
  {
    title: 'Cinematic Editing',
    description: 'We shape raw footage into compelling narratives. Every cut is intentional, driving the story forward with rhythm and purpose.',
    icon: Film,
  },
  {
    title: 'Motion Graphics',
    description: 'Elevating visuals through bespoke 2D and 3D animation. We design motion that integrates seamlessly with live-action.',
    icon: Sparkles,
  },
  {
    title: 'Social Content',
    description: 'High-retention, dynamic edits engineered for the modern feed. We capture attention in the first frame and hold it.',
    icon: Share2,
  },
  {
    title: 'Ads & Commercials',
    description: 'Brand storytelling that converts. We combine striking visuals with strategic pacing to deliver your message with impact.',
    icon: MonitorPlay,
  },
];

export function Services() {
  return (
    <section id="services" className="py-32 md:py-48">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter mb-6"
          >
            Our Expertise
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-8 md:p-10 rounded-3xl bg-muted/20 border border-border/80 overflow-hidden hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/2 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/5 transition-colors duration-500" />
              
              <div className="relative z-10 flex flex-col h-full">
                {/* Small minimal icon */}
                <div className="w-10 h-10 rounded-xl bg-background border border-border flex items-center justify-center text-muted-foreground group-hover:text-primary group-hover:border-primary/50 transition-all duration-300">
                  <service.icon className="w-5 h-5" />
                </div>

                {/* Thin divider line */}
                <div className="w-full h-[1px] bg-border/60 my-5 group-hover:bg-primary/10 transition-colors duration-300" />

                <h3 className="text-2xl font-bold mb-3 tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed font-light">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
