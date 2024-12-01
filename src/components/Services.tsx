import { Cable, CircuitBoard, Wrench } from 'lucide-react';

const services = [
  {
    icon: Cable,
    title: "Custom Wiring Solutions",
    description: "Bespoke wiring harness design and fabrication for any automotive application. Specializing in complete electrical system overhauls and modern component integration."
  },
  {
    icon: CircuitBoard,
    title: "Dashboard Integration",
    description: "Modern dashboard conversions with seamless integration of digital displays. Custom gauge clusters and advanced instrumentation solutions."
  },
  {
    icon: Wrench,
    title: "General Repairs",
    description: "Expert mechanical repairs and maintenance services. Comprehensive diagnostics and precision repairs for all automotive electrical systems."
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl font-bold mb-4">Specialized Services</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Expert electrical and performance solutions for your automotive needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="p-8 bg-dark-light rounded-lg hover:bg-zinc-800 transition-all duration-300 animate-fade-up group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-center mb-6">
                <service.icon className="w-16 h-16 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-center">{service.title}</h3>
              <p className="text-zinc-400 text-center leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}