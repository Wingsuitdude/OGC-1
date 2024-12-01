import { Car, Settings, Zap, Wrench, Cpu, CircuitBoard } from 'lucide-react';

const eras = [
  {
    title: "1960s",
    description: "Specializing in points-based ignition systems and generator-to-alternator conversions.",
    icon: Car
  },
  {
    title: "1970s",
    description: "Expert in electronic ignition retrofits and early fuel injection systems.",
    icon: Settings
  },
  {
    title: "1980s",
    description: "Mastery of early ECU systems and OBD-I diagnostics.",
    icon: Cpu
  },
  {
    title: "1990s",
    description: "Proficient in modern ECU programming and OBD-II integration.",
    icon: CircuitBoard
  }
];

export function Expertise() {
  return (
    <section id="expertise" className="py-20 bg-dark-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl font-bold mb-4">Era Expertise</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Decades of experience working with classic and vintage vehicles across multiple eras.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {eras.map((era, index) => (
            <div
              key={index}
              className="relative p-6 bg-dark rounded-lg overflow-hidden group animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <era.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">{era.title}</h3>
              <p className="text-zinc-400">{era.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-dark p-8 rounded-lg animate-fade-right">
            <Zap className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-4">Electrical Expertise</h3>
            <ul className="space-y-3 text-zinc-400">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                Custom wiring harness fabrication
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                Modern sensor integration
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                Digital gauge conversion
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                LED lighting upgrades
              </li>
            </ul>
          </div>

          <div className="bg-dark p-8 rounded-lg animate-fade-right" style={{ animationDelay: "200ms" }}>
            <Wrench className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-4">Mechanical Knowledge</h3>
            <ul className="space-y-3 text-zinc-400">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                Carburetor tuning and rebuilding
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                Engine timing optimization
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                Fuel system modifications
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                Performance upgrades
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}