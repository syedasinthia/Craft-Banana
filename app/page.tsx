import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { Services } from '@/components/services';
import { Portfolio } from '@/components/portfolio';
import { Showreel } from '@/components/showreel';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Showreel />
      <Footer />
    </main>
  );
}
