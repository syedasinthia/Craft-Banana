'use client';

import * as React from 'react';
import { motion } from 'motion/react';
import { Play } from 'lucide-react';
import Image from 'next/image';

export function Showreel() {
  const [isPlaying, setIsPlaying] = React.useState(false);

  return (
    <section id="showreel" className="py-32 md:py-48 bg-foreground text-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/texture/1920/1080')] bg-cover bg-center mix-blend-overlay grayscale" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6"
          >
            Our Showreel
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl md:text-2xl text-muted max-w-3xl font-light"
          >
            A showcase of our editing style, creative vision, and storytelling approach.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative aspect-video max-w-6xl mx-auto rounded-2xl overflow-hidden group cursor-pointer shadow-2xl bg-black"
          onClick={() => { if (!isPlaying) setIsPlaying(true); }}
        >
          {isPlaying ? (
            <iframe
              src="https://www.youtube.com/embed/d9TSrlgiWsY?autoplay=1"
              title="Craft Banana Showreel"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 w-full h-full border-0"
            />
          ) : (
            <>
              <Image
                src="https://img.youtube.com/vi/d9TSrlgiWsY/maxresdefault.jpg"
                alt="Showreel Thumbnail"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105 grayscale group-hover:grayscale-0"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-colors duration-500" />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-20" />
                  <div className="relative w-24 h-24 md:w-32 md:h-32 bg-primary text-primary-foreground rounded-full flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                    <Play className="w-10 h-10 md:w-14 md:h-14 ml-2" />
                  </div>
                </div>
              </div>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}
