import { Zap, Cpu, Gauge } from 'lucide-react';
import { Video } from './Video';

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center pt-16">
      <Video />
      
      <div className="relative container mx-auto px-4 z-30">
        <div className="max-w-3xl">
          <div className="flex items-center space-x-2 mb-6 animate-text-reveal" style={{ animationDelay: '300ms' }}>
            <Cpu className="h-6 w-6 text-primary animate-glow" />
            <span className="text-primary font-semibold">Electrical Solutions Specialist</span>
          </div>
          
          <h2 className="text-5xl font-bold mb-6">
            <span className="block animate-text-reveal" style={{ animationDelay: '400ms' }}>Advanced Automotive</span>
            <span className="block text-primary animate-text-reveal" style={{ animationDelay: '600ms' }}>Electrical Engineering</span>
          </h2>
          
          <p className="text-xl text-zinc-300 mb-8 animate-text-reveal" style={{ animationDelay: '800ms' }}>
            Specializing in custom wiring harnesses, modern dashboard integrations, and performance-focused electrical solutions for automotive enthusiasts.
          </p>
          
          <div className="flex flex-wrap gap-4 animate-text-reveal" style={{ animationDelay: '1000ms' }}>
            <a 
              href="https://www.facebook.com/profile.php?id=100010824213964"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary-dark text-black px-8 py-3 rounded-md font-semibold transition-colors flex items-center group"
            >
              <Zap className="mr-2 h-5 w-5 group-hover:animate-pulse" />
              Get Started
            </a>
            <a 
              href="#services" 
              className="border-2 border-zinc-700 hover:border-primary px-8 py-3 rounded-md font-semibold transition-colors flex items-center group"
            >
              <Gauge className="mr-2 h-5 w-5 group-hover:animate-pulse" />
              Our Services
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}