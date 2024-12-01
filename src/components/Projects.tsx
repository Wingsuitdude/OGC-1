import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
  {
    title: "RX7 Full Electrical Overhaul",
    description: "Complete rewiring with modern ECU integration and digital dashboard conversion.",
    image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&q=80"
  },
  {
    title: "Custom Race Harness",
    description: "Bespoke wiring solution for a track-focused build with data logging capabilities.",
    image: "https://images.unsplash.com/photo-1600712242805-5f78671b24da?auto=format&fit=crop&q=80"
  },
  {
    title: "Performance ECU Setup",
    description: "Advanced engine management system installation with custom tuning.",
    image: "https://images.unsplash.com/photo-1562426509-5044a121e6b9?auto=format&fit=crop&q=80"
  }
];

export function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Explore our recent electrical and performance modification projects.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full hover:bg-primary/50 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full hover:bg-primary/50 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="relative h-[500px] overflow-hidden rounded-xl">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`absolute w-full h-full transition-all duration-500 ${
                  index === currentIndex ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  transform: `translateX(${(index - currentIndex) * 100}%)`,
                }}
              >
                <div className="relative h-full">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                    <div className="p-8">
                      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                      <p className="text-zinc-300">{project.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}