import { FileText, Download, ExternalLink, ArrowRight } from 'lucide-react';

const resources = [
  {
    title: "Wiring Diagram Guide",
    description: "Comprehensive guide to reading and understanding vintage automotive wiring diagrams.",
    type: "PDF Guide",
    icon: FileText
  },
  {
    title: "Troubleshooting Checklist",
    description: "Step-by-step electrical system diagnostic checklist for classic vehicles.",
    type: "Download",
    icon: Download
  },
  {
    title: "Component Database",
    description: "Searchable database of vintage electrical components and modern equivalents.",
    type: "Online Tool",
    icon: ExternalLink
  }
];

export function TechnicalResources() {
  return (
    <section id="resources" className="py-20 bg-dark-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl font-bold mb-4">Technical Resources</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Free resources to help you understand and maintain your classic vehicle's electrical system.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="bg-dark p-6 rounded-lg group hover:bg-zinc-800 transition-colors animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <resource.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">{resource.title}</h3>
              <p className="text-zinc-400 mb-4">{resource.description}</p>
              <div className="flex items-center text-primary">
                <span className="text-sm font-semibold">{resource.type}</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 bg-dark rounded-lg animate-fade-up">
          <h3 className="text-2xl font-bold mb-4">Need Custom Documentation?</h3>
          <p className="text-zinc-400 mb-6">
            We provide detailed documentation for all electrical modifications and installations. 
            This includes complete wiring diagrams, component specifications, and maintenance guides.
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center text-primary hover:text-primary-dark transition-colors"
          >
            Contact us for details
            <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
}