import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Header />
      <main>
        <Hero />
        <Services />
      </main>
      <Footer />
    </div>
  );
}