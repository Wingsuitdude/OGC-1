import { Zap } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Ready to upgrade your vehicle's electrical system or enhance its performance? Contact us for a consultation.
          </p>
        </div>
        
        <div className="max-w-xl mx-auto">
          <form className="space-y-6 bg-dark-light p-8 rounded-lg animate-fade-up">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 bg-zinc-900 border border-zinc-700 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent text-white"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 bg-zinc-900 border border-zinc-700 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent text-white"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 bg-zinc-900 border border-zinc-700 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent text-white"
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary-dark text-black py-3 px-6 rounded-md font-semibold transition-colors flex items-center justify-center group"
            >
              <Zap className="mr-2 h-5 w-5 group-hover:animate-pulse" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}