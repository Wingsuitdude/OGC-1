import { Cpu } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 bg-zinc-900/95 backdrop-blur-sm border-b border-zinc-800">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <Cpu className="h-8 w-8 text-primary animate-glow" />
            <div>
              <h1 className="text-xl font-bold">O'Neil's Garage Customs</h1>
              <p className="text-primary text-sm">Electrical & Performance Specialist</p>
            </div>
          </div>

          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}