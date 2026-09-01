import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import myimg05 from '../assets/Portfolio/myimg05.png';

const Hero = () => {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);
  const glareRef = useRef(null);
  const spotlightRef = useRef(null);
  const cursorDotRef = useRef(null);
  const cursorRingRef = useRef(null);
  const contentRef = useRef(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isTouchDevice = typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0);

  const developerRoles = [
    'FULL-STACK ARCHITECT',
    'AI & ML SPECIALIST',
    'DISTRIBUTED SYSTEMS ENGINEER',
    'ALGORITHMIC PROBLEM SOLVER'
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const card = cardRef.current;
    const content = contentRef.current;
    if (!section || !card || !content) return;

    // --- GSAP CINEMATIC ENTRANCE ANIMATION ---
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    tl.fromTo(
      section.querySelector('header'),
      { y: -60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 }
    )
      .fromTo(
        content.querySelectorAll('.hero-anim-item'),
        { y: 50, opacity: 0, filter: "blur(10px)" },
        { y: 0, opacity: 1, filter: "blur(0px)", duration: 1.1, stagger: 0.12 },
        "-=0.7"
      )
      .fromTo(
        card,
        { scale: 0.85, opacity: 0, y: 30, rotationX: 0, rotationY: 0, rotationZ: 0 },
        { scale: 1, opacity: 1, y: 0, duration: 1.2, ease: "back.out(1.2)" },
        "-=0.9"
      );

    // --- MOUSE PHYSICS & SPOTLIGHT TRACKING ---
    gsap.set([cursorDotRef.current, cursorRingRef.current], {
      scale: 0.5,
      opacity: 0,
      transformOrigin: "50% 50%"
    });

    const xToDot = gsap.quickTo(cursorDotRef.current, "x", { duration: 0.05, ease: "power2.out" });
    const yToDot = gsap.quickTo(cursorDotRef.current, "y", { duration: 0.05, ease: "power2.out" });

    const xToRing = gsap.quickTo(cursorRingRef.current, "x", { duration: 0.15, ease: "power3.out" });
    const yToRing = gsap.quickTo(cursorRingRef.current, "y", { duration: 0.15, ease: "power3.out" });



    const handleMouseMove = (e) => {
      const rect = section.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const dotSize = 12;
      const ringSize = 48;

      // Update Spotlight position instantly via inline style
      if (spotlightRef.current) {
        spotlightRef.current.style.transform = `translate3d(${x - 300}px, ${y - 300}px, 0)`;
      }

      // Update Custom Cursor coordinates
      xToDot(x - dotSize / 2);
      yToDot(y - dotSize / 2);
      xToRing(x - ringSize / 2);
      yToRing(y - ringSize / 2);


    };

    const handleMouseEnter = () => {
      gsap.to([cursorDotRef.current, cursorRingRef.current], {
        opacity: 1,
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      });
      if (spotlightRef.current) gsap.to(spotlightRef.current, { opacity: 1, duration: 0.3 });
    };

    const handleMouseLeave = () => {
      gsap.to([cursorDotRef.current, cursorRingRef.current], {
        opacity: 0,
        scale: 0.5,
        duration: 0.3,
        ease: "power2.inOut"
      });
      if (spotlightRef.current) gsap.to(spotlightRef.current, { opacity: 0, duration: 0.3 });

    };

    section.addEventListener("mousemove", handleMouseMove);
    section.addEventListener("mouseenter", handleMouseEnter);
    section.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      section.removeEventListener("mousemove", handleMouseMove);
      section.removeEventListener("mouseenter", handleMouseEnter);
      section.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`relative w-full min-h-svh bg-[#050505] overflow-hidden flex flex-col justify-between select-none ${isTouchDevice ? 'cursor-auto' : 'cursor-none'}`}
    >
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 35s linear infinite;
        }
      `}</style>

      {/* 1. Cinematic Background Gradient & Marquee */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/90 to-[#050505] z-0">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden opacity-10">
          <div className="flex whitespace-nowrap animate-marquee">
            {[...developerRoles, ...developerRoles].map((role, idx) => (
              <span key={idx} className="text-[14vw] font-black text-white/60 mx-8 uppercase tracking-tighter">
                {role} &bull;
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* 2. Direct Mouse Tracking Spotlight Beam (Glows wherever you move) */}
      <div
        ref={spotlightRef}
        className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none z-10 opacity-0 blur-[90px] transition-opacity duration-300"
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 40%, transparent 70%)'
        }}
      ></div>

      {/* 3. Main Content Layer */}
      <div ref={contentRef} className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 h-full flex flex-col justify-between pt-20 sm:pt-24 pb-8 sm:pb-12">

        {/* Top Status Badge */}
        <div className="hero-anim-item flex items-center justify-between w-full">
          <div className="inline-flex items-center gap-1.5 sm:gap-2.5 px-2.5 sm:px-4 py-1 sm:py-1.5 rounded bg-black/80 backdrop-blur-2xl border border-[#181818]/40 text-[10px] sm:text-xs font-mono uppercase tracking-widest text-white shadow-2xl">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#FFFFFF] animate-ping"></span>
            <span className="text-[#FFFFFF] font-bold tracking-wider">AVAILABLE FOR HIRE</span>
            <span className="text-white/40 hidden sm:inline">|</span>
            <span className="text-white/80 hidden sm:inline">B.Tech ECE · IIIT Bhagalpur</span>
          </div>
          <div className="hidden md:flex items-center gap-2 text-xs font-mono text-white/50 tracking-wider">
            <span className="px-2 py-0.5 border border-white/20 rounded bg-black/40">FULL-STACK</span>
            <span className="px-2 py-0.5 border border-white/20 rounded bg-black/40">AI / ML</span>
          </div>
        </div>

        {/* Main Center Cinematic Stage Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-6 sm:gap-8 my-auto">

          {/* Left Side: Developer Story & Description */}
          <div className="lg:col-span-5 flex flex-col items-start space-y-3 sm:space-y-5 text-left">

            <div className="hero-anim-item">
              <span className="text-white/80 text-[10px] sm:text-xs font-mono tracking-widest uppercase">Software Engineer & Problem Solver</span>
            </div>

            <h1 className="hero-anim-item text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter text-white leading-[0.95] drop-shadow-[0_10px_20px_rgba(0,0,0,0.7)]">
              VAIBHAV <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-white to-gray-400">
                GUPTA
              </span>
            </h1>

            <div className="hero-anim-item flex items-center gap-2 sm:gap-3 text-[10px] sm:text-xs font-mono text-[#FFFFFF] font-bold flex-wrap">
              <span className="px-2 py-0.5 bg-[#181818]/10 border border-[#181818]/30 rounded text-[#FFFFFF]">99.9% Uptime</span>
              <span className="text-white/40">•</span>
              <span>React • FastAPI • Node.js</span>
              <span className="text-white/40 hidden sm:inline">•</span>
              <span className="text-white/70 hidden sm:inline">Docker & Cloud</span>
            </div>

            <p className="hero-anim-item text-xs sm:text-sm md:text-base text-white/80 font-light leading-relaxed max-w-md drop-shadow">
              Architecting robust full-stack systems, building scalable multi-tenant SaaS platforms, and engineering cutting-edge AI integrations.
            </p>

            {/* Action Button Set */}
            <div className="hero-anim-item flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
              <a
                href="#projects"
                className="px-5 sm:px-8 py-3 sm:py-3.5 bg-gradient-to-r from-white to-gray-200 text-black font-bold text-[10px] sm:text-xs uppercase tracking-widest rounded hover:from-gray-200 hover:to-white transition-all duration-300 shadow-[0_6px_20px_rgba(255,255,255,0.15)] flex items-center gap-2 hover:scale-105 active:scale-95"
              >
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                View Projects
              </a>
              <a
                href="#contact"
                className="px-5 sm:px-8 py-3 sm:py-3.5 bg-neutral-900/80 text-white border border-white/20 font-bold text-[10px] sm:text-xs uppercase tracking-widest rounded hover:bg-neutral-800 transition-all duration-300 shadow-xl backdrop-blur-md flex items-center gap-2 hover:scale-105 active:scale-95"
              >
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                Contact Me
              </a>
            </div>
          </div>

          {/* Center: Interactive 3D Holographic Tilt Developer Poster Frame */}
          <div className="hidden sm:flex lg:col-span-4 justify-center">
            <div
              ref={cardRef}
              className="relative group"
            >
              {/* Cinematic Red Neon Back Glow */}
              <div className="absolute -inset-3 bg-gradient-to-r from-gray-700/30 via-white/15 to-gray-700/10 rounded-3xl blur-3xl opacity-60 group-hover:opacity-80 duration-1000"></div>

              {/* Poster Card with Glossy Sheen */}
              <div className="relative w-[220px] sm:w-[280px] md:w-[320px] p-3 sm:p-3.5 bg-[#141414]/90 backdrop-blur-2xl rounded-2xl border border-[#181818]/40 shadow-[0_40px_80px_rgba(0,0,0,0.95)] overflow-hidden">



                {/* Profile Tag */}
                <div className="absolute top-6 left-6 z-30 px-3 py-1 bg-gradient-to-r from-white to-gray-300 text-black font-mono text-[10px] font-bold tracking-widest rounded shadow-lg">
                  VAIBHAV GUPTA
                </div>

                <img
                  src={myimg05}
                  alt="Developer Portrait"
                  className="w-full h-[260px] sm:h-[330px] md:h-[390px] object-cover rounded-xl filter contrast-125 brightness-105 group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Right Side: Technical Specs & Stack */}
          <div className="hero-anim-item lg:col-span-3 flex flex-col items-start lg:items-end space-y-4 text-left lg:text-right hidden lg:flex">
            <div className="p-4 sm:p-5 bg-black/80 backdrop-blur-2xl border border-white/15 rounded-xl shadow-2xl max-w-xs">
              <h3 className="text-xs font-mono uppercase tracking-widest text-[#FFFFFF] font-bold mb-2">Core Stack & Awards</h3>
              <p className="text-xs text-white/80 leading-relaxed font-light">
                Flipkart GRiD 8.0 Semi-Finalist, ServiceNow CAD & CSA Certified, LeetCode (250+), CodeChef 3-Star.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Ticker */}
        <div className="hero-anim-item flex items-center justify-between text-[9px] sm:text-xs font-mono text-white/50 tracking-wider sm:tracking-widest uppercase">
          <span>ENGINEERED FOR SCALABILITY</span>
          <span className="hidden sm:inline">[ CGPA 8.07 · IIIT BHAGALPUR ]</span>
        </div>
      </div>

      {/* 4. Ultra Pro Max Custom Precision Cursor Suite */}
      <div
        ref={cursorDotRef}
        className="absolute top-0 left-0 z-50 pointer-events-none w-3 h-3 bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.5)]"
      ></div>

      <div
        ref={cursorRingRef}
        className="absolute top-0 left-0 z-50 pointer-events-none w-12 h-12 border border-[#181818]/60 rounded-full flex items-center justify-center backdrop-blur-[1px]"
      ></div>

      {/* --- NAVBAR --- */}
      <header className="absolute top-0 left-0 z-50 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-4 sm:py-6 flex items-center justify-between pointer-events-auto">
        <div className="text-xl sm:text-2xl font-black text-white tracking-tighter flex items-center gap-2 drop-shadow-[0_2px_8px_rgba(255,255,255,0.3)]">
          VAIBHAV<span className="w-1.5 h-1.5 rounded-full bg-white inline-block"></span>
        </div>
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-xs font-mono uppercase tracking-widest text-white/80">
          <a href="#home" className="hover:text-[#FFFFFF] transition-colors">Home</a>
          <a href="#about" className="hover:text-[#FFFFFF] transition-colors">About</a>
          <a href="#expertise" className="hover:text-[#FFFFFF] transition-colors">Expertise</a>
          <a href="#skills" className="hover:text-[#FFFFFF] transition-colors">Skills</a>
          <a href="#projects" className="hover:text-[#FFFFFF] transition-colors">Projects</a>
          <a href="#contact" className="hover:text-[#FFFFFF] transition-colors">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden sm:inline-flex px-4 sm:px-5 py-2 rounded bg-gradient-to-r from-white to-gray-200 hover:from-gray-200 hover:to-white text-black font-bold text-[10px] sm:text-xs uppercase tracking-widest transition-all duration-300 shadow-[0_0_10px_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95"
          >
            Hire Me
          </a>
          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </header>
      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 z-50 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 py-6 px-6 flex flex-col gap-4 pointer-events-auto animate-[fadeIn_0.2s_ease-out]">
          {['Home', 'About', 'Expertise', 'Skills', 'Projects', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-mono uppercase tracking-widest text-white/80 hover:text-white transition-colors py-2 border-b border-white/5"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </section>
  );
};

export default Hero;