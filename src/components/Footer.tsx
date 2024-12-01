import { Cpu } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-zinc-900 border-t border-zinc-800">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <Cpu className="h-8 w-8 text-primary" />
            <div className="ml-3">
              <h3 className="text-xl font-bold">O'Neil's Garage Customs</h3>
              <p className="text-primary">Electrical & Performance Specialist</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-zinc-800 mt-8 pt-8 text-center text-sm text-zinc-500">
          <p>&copy; {new Date().getFullYear()} O'Neil's Garage Customs. Specializing in Custom Automotive Electronics.</p>
        </div>
      </div>
    </footer>
  );
}