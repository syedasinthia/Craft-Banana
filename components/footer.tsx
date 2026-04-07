'use client';

import * as React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function Footer() {
  return (
    <footer id="contact" className="bg-foreground text-background pt-32 pb-12 rounded-t-[3rem] mt-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32">
          <div>
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8">
              Let&apos;s create<br/>
              <span className="text-primary">something epic.</span>
            </h2>
            <p className="text-2xl text-muted max-w-md mb-12 font-light">
              Ready to elevate your visual content? Drop us a line and we&apos;ll get back to you shortly.
            </p>
            <a 
              href="mailto:contact.craftbanana@gmail.com" 
              className="inline-flex items-center gap-3 text-3xl md:text-4xl font-medium hover:text-primary transition-colors border-b-2 border-background/20 hover:border-primary pb-2 break-all"
            >
              contact.craftbanana@gmail.com
              <ArrowUpRight className="w-8 h-8 flex-shrink-0" />
            </a>
          </div>

          <div className="bg-background/5 p-8 md:p-12 rounded-3xl border border-background/10">
            <h3 className="text-2xl font-bold mb-8">Send a Message</h3>
            <form className="space-y-6">
              <div>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full bg-transparent border-b border-background/20 py-4 text-lg focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground"
                  required
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full bg-transparent border-b border-background/20 py-4 text-lg focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground"
                  required
                />
              </div>
              <div>
                <textarea 
                  placeholder="Tell us about your project..." 
                  rows={4} 
                  className="w-full bg-transparent border-b border-background/20 py-4 text-lg focus:outline-none focus:border-primary transition-colors resize-none placeholder:text-muted-foreground"
                  required
                />
              </div>
              <button 
                type="button"
                className="w-full bg-primary text-primary-foreground px-8 py-5 rounded-full text-lg font-bold hover:bg-accent transition-colors mt-4"
              >
                Send Inquiry
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-background/10 text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} Craft Banana. All rights reserved.</p>
          <div className="flex gap-8 mt-6 md:mt-0">
            {['Instagram', 'YouTube', 'LinkedIn'].map((social) => (
              <a key={social} href="#" className="hover:text-primary transition-colors uppercase tracking-wider font-mono text-xs">
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
