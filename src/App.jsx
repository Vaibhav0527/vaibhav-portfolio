import { useState } from 'react';
import NetflixPreloader from './components/NetflixPreloader';
import CustomCursor from './components/CustomCursor';
import Hero from './components/Hero';
import About from './components/About';
import Expertise from './components/Expertise';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);
  const isTouchDevice = typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0);

  return (
    <main className={`bg-[#050505] min-h-screen text-white relative selection:bg-gray-700 selection:text-white overflow-x-hidden ${isTouchDevice ? 'cursor-auto' : 'cursor-none'}`}>
      {/* Cinematic Preloader */}
      {loading && <NetflixPreloader onComplete={() => setLoading(false)} />}

      {/* Global Mouse Hover Effects & Spotlight across ALL sections — desktop only */}
      {!isTouchDevice && <CustomCursor />}

      {/* Portfolio Sections */}
      <Hero />
      <About />
      <Expertise />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;