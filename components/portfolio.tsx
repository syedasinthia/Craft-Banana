'use client';

import * as React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { Play } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Change',
    category: 'Music Video',
    image: 'https://img.youtube.com/vi/1fzTGiNSfNA/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/1fzTGiNSfNA',
  },
  {
    id: 2,
    title: 'Apéro Label',
    category: 'Commercial',
    image: 'https://img.youtube.com/vi/NUgqHK-dG3w/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/NUgqHK-dG3w',
  },
  {
    id: 3,
    title: 'London',
    category: 'Documentary',
    image: 'https://img.youtube.com/vi/PXDArVNjIhs/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/PXDArVNjIhs',
  },
  {
    id: 4,
    title: 'Fabinho Squash',
    category: 'Social Content',
    image: 'https://img.youtube.com/vi/u4lJLZshDwk/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/u4lJLZshDwk',
  },
  {
    id: 5,
    title: 'Still',
    category: 'Short Film',
    image: 'https://img.youtube.com/vi/SDoa-ukKTVQ/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/SDoa-ukKTVQ',
  },
];

export function Portfolio() {
  const [activeVideoId, setActiveVideoId] = React.useState<number | null>(null);

  return (
    <section id="work" className="py-32 md:py-48">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter"
          >
            Featured Projects
          </motion.h2>
        </div>

        <div className="flex flex-col gap-32">
          {projects.map((project, index) => {
            const isPlaying = activeVideoId === project.id;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-16 items-center group`}
              >
                <div 
                  className="w-full md:w-2/3 relative aspect-[16/9] overflow-hidden rounded-xl cursor-pointer bg-black"
                  onClick={() => { if (!isPlaying) setActiveVideoId(project.id); }}
                >
                  {isPlaying ? (
                    <iframe
                      src={`${project.videoUrl}?autoplay=1`}
                      title={project.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full border-0"
                    />
                  ) : (
                    <>
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="w-20 h-20 rounded-full bg-primary/90 text-primary-foreground flex items-center justify-center backdrop-blur-sm transform scale-90 group-hover:scale-100 transition-transform duration-500">
                          <Play className="w-8 h-8 ml-1" />
                        </div>
                      </div>
                    </>
                  )}
                </div>
                
                <div className="w-full md:w-1/3 flex flex-col justify-center">
                  <p className="text-primary font-mono text-sm mb-4 uppercase tracking-widest">{project.category}</p>
                  <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">{project.title}</h3>
                  <div className="w-12 h-[1px] bg-border group-hover:w-24 group-hover:bg-primary transition-all duration-500" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
