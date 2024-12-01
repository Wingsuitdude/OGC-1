import { format } from 'date-fns';
import { BookOpen, ArrowRight } from 'lucide-react';

const posts = [
  {
    title: "Understanding Classic Car Electrical Systems",
    excerpt: "A comprehensive guide to diagnosing and maintaining vintage automotive electrical components.",
    date: new Date('2024-03-01'),
    category: "Technical Guide"
  },
  {
    title: "Modern ECU Integration in Classic Cars",
    excerpt: "How to successfully upgrade your classic vehicle with modern engine management.",
    date: new Date('2024-02-15'),
    category: "Upgrades"
  },
  {
    title: "LED Conversion Guide",
    excerpt: "Step-by-step process for upgrading classic car lighting to modern LED systems.",
    date: new Date('2024-02-01'),
    category: "DIY"
  }
];

export function Blog() {
  return (
    <section id="blog" className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl font-bold mb-4">Technical Blog</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Expert insights and guides for classic car electrical systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article
              key={index}
              className="bg-dark rounded-lg overflow-hidden group animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <BookOpen className="w-5 h-5 text-primary mr-2" />
                  <span className="text-sm text-primary">{post.category}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-zinc-400 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <time className="text-sm text-zinc-500">
                    {format(post.date, 'MMMM d, yyyy')}
                  </time>
                  <button className="text-primary flex items-center group-hover:translate-x-1 transition-transform">
                    Read More <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}