import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import hacktoberfestImg from '../assets/Portfolio/hacktoberfest.jpg';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // --- Cinematic Stagger Entrance on Scroll ---
    gsap.fromTo(
      cardRefs.current,
      { y: 80, opacity: 0, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // --- Interactive Magnetic Mouse Spotlight per Bento Card ---
    const cards = cardRefs.current;
    const handleMouseMove = (e, card) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    };

    cards.forEach((card) => {
      if (!card) return;
      const listener = (e) => handleMouseMove(e, card);
      card.addEventListener('mousemove', listener);
      return () => card.removeEventListener('mousemove', listener);
    });

  }, []);

  const addToRefs = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full min-h-screen bg-[#050505] text-white py-20 sm:py-32 px-4 sm:px-6 md:px-12 flex flex-col justify-center select-none overflow-hidden"
    >
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-white/[0.03] rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-gray-500/[0.04] rounded-full blur-[160px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto w-full space-y-10 sm:space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col items-start space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded bg-black/80 backdrop-blur-2xl border border-[#181818]/40 text-[10px] sm:text-xs font-mono uppercase tracking-widest text-white shadow-2xl">
            <span className="w-2 h-2 rounded-full bg-[#FFFFFF] animate-ping"></span>
            <span className="text-[#FFFFFF] font-bold">ABOUT</span>
            <span className="text-white/40">|</span>
            <span>THE ENGINEER</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tighter text-white">
            WHO I AM <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 via-white to-gray-500">
              ORIGIN & VISION.
            </span>
          </h2>
        </div>

        {/* Bento Grid Layout with Interactive Mouse Light Tracking */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6">
          
          {/* Card 1: Bio & Academic Core (Span 7) */}
          <div
            ref={addToRefs}
            className="md:col-span-7 p-6 sm:p-8 md:p-12 bg-gradient-to-br from-[#141414]/90 to-[#0e0e0e]/90 backdrop-blur-2xl border border-white/10 rounded-2xl sm:rounded-[2.5rem] shadow-2xl flex flex-col justify-between relative group hover:border-white/30 transition-all duration-500 overflow-hidden"
          >
            {/* Real-time mouse hover spotlight highlight */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: 'radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.15), transparent 70%)'
              }}
            ></div>

            <div className="absolute top-0 right-0 p-8 text-white/5 font-mono text-7xl font-black pointer-events-none">
              01
            </div>
            
            <div className="space-y-5 relative z-10">
              <h3 className="text-xs font-mono uppercase tracking-widest text-[#FFFFFF] font-bold">Cast & Background</h3>
              <p className="text-base sm:text-lg md:text-xl font-medium text-white/90 leading-relaxed">
                I am <span className="text-white font-bold drop-shadow">Vaibhav Gupta</span>, a B.Tech student in Electronics and Communication Engineering at Indian Institute of Information Technology, Bhagalpur.
              </p>
              <p className="text-sm md:text-base text-white/60 font-light leading-relaxed">
                My technical narrative bridges rigorous algorithmic problem-solving with full-stack software architecture, translating complex backend logic into seamless, high-performance interfaces.
              </p>
            </div>
            
            <div className="pt-8 flex flex-wrap gap-2 relative z-10">
              <span className="px-3.5 py-1.5 rounded bg-white/5 border border-white/10 text-xs font-mono text-white/80">AI & ML</span>
              <span className="px-3.5 py-1.5 rounded bg-white/5 border border-white/10 text-xs font-mono text-white/80">Full-Stack Development</span>
              <span className="px-3.5 py-1.5 rounded bg-white/5 border border-white/10 text-xs font-mono text-white/80">System Architecture</span>
            </div>
          </div>

          {/* Card 2: Fellowships & Achievements (Span 5) */}
          <div
            ref={addToRefs}
            className="md:col-span-5 p-6 sm:p-8 md:p-12 bg-gradient-to-br from-[#161616]/90 to-[#0f0f0f]/90 backdrop-blur-2xl border border-white/10 rounded-2xl sm:rounded-[2.5rem] shadow-2xl flex flex-col justify-between relative group hover:border-white/30 transition-all duration-500 overflow-hidden"
          >
            {/* Real-time mouse hover spotlight highlight */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: 'radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.15), transparent 70%)'
              }}
            ></div>

            <div className="absolute top-0 right-0 p-8 text-white/5 font-mono text-7xl font-black pointer-events-none">
              02
            </div>
            
            <div className="space-y-5 relative z-10">
              <h3 className="text-xs font-mono uppercase tracking-widest text-[#FFFFFF] font-bold">Milestones & Accolades</h3>
              <ul className="space-y-3.5 text-sm text-white/80 font-light">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#FFFFFF] font-bold">&#8250;</span>
                  <span>National Semi-Finalist in <strong className="text-white">Flipkart GRiD 8.0 (SDE Track)</strong> competition.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#FFFFFF] font-bold">&#8250;</span>
                  <span>Hacktoberfest 2025 <strong className="text-white">Supercontributor</strong> for 7+ open-source projects.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#FFFFFF] font-bold">&#8250;</span>
                  <span>Certified <strong className="text-white">ServiceNow CSA</strong> & <strong className="text-white">CAD</strong>.</span>
                </li>
              </ul>
            </div>
            
            <div className="pt-6 font-mono text-xs text-white/40 relative z-10">
              // ACHIEVEMENTS
            </div>
          </div>

          {/* Card 3: Hacktoberfest Image Card (Span 5) */}
          <div
            ref={addToRefs}
            className="md:col-span-5 p-0 bg-gradient-to-br from-[#141414]/90 to-[#0d0d0d]/90 backdrop-blur-2xl border border-white/10 rounded-2xl sm:rounded-[2.5rem] shadow-2xl relative group hover:border-white/30 transition-all duration-500 overflow-hidden min-h-[200px] sm:min-h-[250px]"
          >
            <img 
              src={hacktoberfestImg} 
              alt="Hacktoberfest" 
              className="w-full h-full object-cover opacity-70 group-hover:scale-105 group-hover:opacity-90 transition-all duration-500 absolute inset-0" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex flex-col justify-end p-8 md:p-10">
              <h3 className="text-xs font-mono uppercase tracking-widest text-[#FFFFFF] font-bold">Hacktoberfest 2025</h3>
              <p className="text-lg font-bold text-white mt-1">Supercontributor</p>
              <p className="text-xs text-white/70 mt-2 line-clamp-2">Merged PRs across 7+ open-source repositories.</p>
            </div>
          </div>

          {/* Card 4: Technical Ecosystem (Span 7) */}
          <div
            ref={addToRefs}
            className="md:col-span-7 p-6 sm:p-8 md:p-12 bg-gradient-to-br from-[#141414]/90 to-[#0e0e0e]/90 backdrop-blur-2xl border border-white/10 rounded-2xl sm:rounded-[2.5rem] shadow-2xl flex flex-col justify-center gap-4 sm:gap-6 hover:border-white/30 transition-all duration-500 overflow-hidden relative group"
          >
            {/* Real-time mouse hover spotlight highlight */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: 'radial-gradient(500px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.15), transparent 70%)'
              }}
            ></div>

            <div className="space-y-2 text-left relative z-10">
              <h3 className="text-xs font-mono uppercase tracking-widest text-[#FFFFFF] font-bold">Production Tech Stack</h3>
              <p className="text-base md:text-lg font-semibold text-white">Equipped with industry-grade instruments for robust scaling.</p>
            </div>
            
            <div className="flex flex-wrap items-center gap-3 relative z-10">
              {['React', 'Node.js', 'FastAPI', 'PostgreSQL', 'MongoDB', 'Docker', 'JavaScript'].map((tech, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 rounded bg-white/[0.04] border border-white/10 text-xs font-mono uppercase tracking-wider text-white shadow-inner hover:bg-[#FFFFFF]/20 hover:border-[#FFFFFF]/40 hover:scale-105 transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;