'use client';

import * as React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-[#050505]">
      {/* Premium Dark Gradient Background & Glowing Ambient Accents */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c0c0d] via-black to-[#050505] opacity-95" />
        
        {/* Subtle blurred Accent 1: Gold */}
        <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] md:w-[45rem] md:h-[45rem] rounded-full bg-[#FFB703]/6 blur-[120px] md:blur-[160px]" />
        
        {/* Subtle blurred Accent 2: Orange */}
        <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[35rem] h-[35rem] md:w-[50rem] md:h-[50rem] rounded-full bg-[#FB8500]/4 blur-[140px] md:blur-[180px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 leading-[1.1] text-white"
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
            className="text-lg md:text-2xl text-stone-300 mb-12 max-w-3xl mx-auto font-light leading-relaxed"
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
              className="group flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white/10 hover:border-white/20 transition-all duration-300 w-full sm:w-auto justify-center"
            >
              Play Showreel
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-black group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Play className="w-4 h-4 ml-0.5" />
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
