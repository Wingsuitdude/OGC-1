import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "James Wilson",
    car: "1968 Mustang Fastback",
    content: "The electrical system upgrade completely transformed my Mustang. Modern reliability with classic looks.",
    rating: 5
  },
  {
    name: "Sarah Chen",
    car: "1985 RX7",
    content: "Expert knowledge of rotary electronics. The custom harness and ECU upgrade brought new life to my RX7.",
    rating: 5
  },
  {
    name: "Michael Rodriguez",
    car: "1972 Datsun 240Z",
    content: "Incredible attention to detail. The modern gauge integration looks factory-installed.",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section className="py-20 bg-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl font-bold mb-4">Client Testimonials</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Hear from our satisfied customers about their experience with our electrical solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-dark-light p-8 rounded-lg relative animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-primary" fill="currentColor" />
                ))}
              </div>
              <p className="text-zinc-300 mb-4">{testimonial.content}</p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-primary text-sm">{testimonial.car}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}