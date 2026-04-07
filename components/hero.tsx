'use client';

import * as React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-muted/20">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />

      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 leading-[1.1] text-foreground"
          >
            We Craft Stories <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              That Move.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto font-light"
          >
            Cinematic video editing that transforms raw footage into powerful visual stories.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link
              href="#work"
              className="group flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-medium hover:bg-accent transition-all duration-300 w-full sm:w-auto justify-center"
            >
              View Our Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#showreel"
              className="group flex items-center gap-3 bg-background border border-border text-foreground px-8 py-4 rounded-full text-lg font-medium hover:bg-muted transition-all duration-300 w-full sm:w-auto justify-center"
            >
              Play Showreel
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-foreground text-background group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Play className="w-4 h-4 ml-0.5" />
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
