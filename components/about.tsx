'use client';

import * as React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';

export function About() {
  return (
    <section id="about" className="py-32 md:py-48">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-muted"
          >
            <Image
              src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&h=1000&q=80"
              alt="Our Cinema Post-Production Studio"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <div className="flex flex-col justify-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-bold tracking-tighter mb-10 leading-[1.1]"
            >
              We don&apos;t just cut clips.<br/>
              <span className="text-primary">We sculpt time.</span>
            </motion.h2>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-8 text-xl text-muted-foreground font-light leading-relaxed"
            >
              <p>
                We are Craft Banana. A post-production studio built on the belief that editing is the final rewrite.
              </p>
              <p>
                We don&apos;t just assemble footage; we manipulate emotion, find the invisible rhythm, and engineer narratives that resonate. Born from a passion for cinematic storytelling, we partner with visionaries to bring their raw concepts to life.
              </p>
              <p>
                Whether it&apos;s a high-octane commercial or an intimate documentary, our approach blends technical precision with raw creative intuition.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
