const images = [
  "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80"
];

export function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-zinc-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Work</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Take a look at some of our recent custom projects and transformations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {images.map((image, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg aspect-video">
              <img 
                src={image}
                alt={`Custom car project ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}