'use client';

import * as React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-[#EDE8DF]">
      {/* Premium Editorial-Style Background */}
      <div className="absolute inset-0 z-0">
        {/* Base subtle warm stone and soft beige gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#ECE7DD] via-[#F4F1EA] to-[#E3DCD2]" />
        
        {/* Soft blurred gradient shapes for organic, premium feel (very low opacity) */}
        {/* Soft Warm/Gold Highlight Accent */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[35rem] h-[35rem] md:w-[50rem] md:h-[50rem] rounded-full bg-[#FFB703]/4 blur-[130px] md:blur-[180px]" />
        
        {/* Soft Warm/Beige Contrast Highlight Accent */}
        <div className="absolute bottom-1/3 right-1/4 translate-x-1/2 translate-y-1/2 w-[40rem] h-[40rem] md:w-[55rem] md:h-[55rem] rounded-full bg-[#FB8500]/3 blur-[140px] md:blur-[200px]" />

        {/* Subtle texture or grain */}
        <div 
          className="absolute inset-0 opacity-[0.14] mix-blend-multiply pointer-events-none" 
          style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` 
          }} 
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 leading-[1.1] text-stone-900"
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
            className="text-lg md:text-2xl text-stone-600 mb-12 max-w-3xl mx-auto font-light leading-relaxed"
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
              className="group flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-medium hover:bg-accent transition-all duration-300 w-full sm:w-auto justify-center shadow-lg shadow-primary/10"
            >
              View Our Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#showreel"
              className="group flex items-center gap-3 bg-black/[0.03] backdrop-blur-md border border-black/10 text-stone-900 px-8 py-4 rounded-full text-lg font-medium hover:bg-black/[0.08] hover:border-black/20 transition-all duration-300 w-full sm:w-auto justify-center"
            >
              Play Showreel
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-stone-900 text-stone-100 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Play className="w-4 h-4 ml-0.5" />
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
