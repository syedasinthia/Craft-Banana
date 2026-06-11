'use client';

import * as React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function Footer() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [status, setStatus] = React.useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('https://formspree.io/f/xykadeoq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setStatus('success');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

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
              href="https://mail.google.com/mail/?view=cm&fs=1&to=contact.craftbanana@gmail.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-3xl md:text-4xl font-medium hover:text-primary transition-colors border-b-2 border-background/20 hover:border-primary pb-2 break-all"
            >
              contact.craftbanana@gmail.com
              <ArrowUpRight className="w-8 h-8 flex-shrink-0" />
            </a>
          </div>

          <div className="bg-background/5 p-8 md:p-12 rounded-3xl border border-background/10">
            <h3 className="text-2xl font-bold mb-8">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input 
                  type="text" 
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Name" 
                  className="w-full bg-transparent border-b border-background/20 py-4 text-lg focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground"
                  required
                />
              </div>
              <div>
                <input 
                  type="email" 
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address" 
                  className="w-full bg-transparent border-b border-background/20 py-4 text-lg focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground"
                  required
                />
              </div>
              <div>
                <textarea 
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about your project..." 
                  rows={4} 
                  className="w-full bg-transparent border-b border-background/20 py-4 text-lg focus:outline-none focus:border-primary transition-colors resize-none placeholder:text-muted-foreground"
                  required
                />
              </div>

              {status === 'success' && (
                <div id="form-success-msg" className="text-emerald-400 text-sm font-mono mt-2">
                  ✓ Message sent successfully! We&apos;ll get back to you soon.
                </div>
              )}

              {status === 'error' && (
                <div id="form-error-msg" className="text-rose-400 text-sm font-mono mt-2">
                  ✗ Failed to send message. Please check your connection or contact us directly at contact.craftbanana@gmail.com
                </div>
              )}

              <button 
                type="submit"
                disabled={status === 'submitting'}
                className="w-full bg-primary text-primary-foreground px-8 py-5 rounded-full text-lg font-bold hover:bg-accent transition-colors mt-4 disabled:opacity-50"
              >
                {status === 'submitting' ? 'Sending...' : 'Send Inquiry'}
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center pt-8 border-t border-background/10 text-muted-foreground text-sm text-center">
          <p>&copy; 2026 Craft Banana. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
