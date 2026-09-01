import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import internshipImg from '../assets/Portfolio/internship.jpg';

gsap.registerPlugin(ScrollTrigger);

const expertiseData = [
  {
    isImageCard: true,
    image: internshipImg,
    tag: "PROFESSIONAL EXPERIENCE",
    title: "Lead Developer Intern @ Sangillence Pvt Ltd",
    gradient: "from-[#141414] to-[#0a0a0a]"
  },
  {
    number: "01",
    title: "Frontend & API Integration",
    text: "Developed 6+ responsive front-end pages using React.js and TypeScript at Sangillence Pvt Ltd, integrating RESTful APIs and optimizing for speed and scalability.",
    tag: "LEAD DEVELOPER INTERN",
    gradient: "from-[#1f0a0c] via-[#121212] to-[#0a0a0a]"
  },
  {
    number: "02",
    title: "Generative AI Engineering",
    text: "Shipped a Gen-AI travel recommendation feature end-to-end using the OpenAI GPT-4 API and advanced prompt engineering, bridging frontend UI with backend architecture.",
    tag: "LEAD DEVELOPER INTERN",
    gradient: "from-[#1a0809] via-[#111111] to-[#090909]"
  },
  {
    number: "03",
    title: "Agile Leadership",
    text: "Coordinated closely with design, backend, and QA teams in a 5-member Agile/Scrum environment. Owned features from planning through testing and deployment.",
    tag: "LEAD DEVELOPER INTERN",
    gradient: "from-[#220a0d] via-[#131313] to-[#0a0a0a]"
  }
];

const Expertise = () => {
  const containerRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const cards = cardRefs.current;
    if (!cards.length) return;

    cards.forEach((card, index) => {
      if (index === cards.length - 1) return; // Keep the top-most card fully focused

      gsap.to(card, {
        scale: 0.92 - index * 0.025,
        y: -15 - index * 8,
        filter: "blur(6px)",
        opacity: 0.4,
        scrollTrigger: {
          trigger: card,
          start: `top ${90 + index * 20}px`,
          end: "bottom top",
          scrub: true,
        }
      });
    });

    // Magnetic mouse highlight per card
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

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  return (
    <section
      id="expertise"
      ref={containerRef}
      className="relative w-full bg-[#050505] text-white py-16 sm:py-20 px-4 sm:px-6 md:px-12 select-none overflow-hidden"
    >
      {/* Cinematic Red Ambient Glow */}
      <div className="absolute top-1/3 left-1/4 w-[450px] h-[450px] bg-white/[0.03] rounded-full blur-[140px] pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl mx-auto w-full space-y-8 sm:space-y-12">
        
        {/* Compact Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded bg-black/80 backdrop-blur-xl border border-[#181818]/40 text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-white shadow-xl">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFFFFF] animate-ping"></span>
              <span className="text-[#FFFFFF] font-bold">EXPERIENCE</span>
              <span className="text-white/40">|</span>
              <span>PROFESSIONAL WORK</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
              INTERNSHIP <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 via-white to-gray-500">
                LEAD DEVELOPER.
              </span>
            </h2>
          </div>
          <p className="text-white/60 text-xs md:text-sm font-light leading-relaxed max-w-xs">
            Merging full-stack engineering, scalable microservices, and AI integrations into production-ready platforms.
          </p>
        </div>

        {/* Compact 1-on-1 Gradient Stacking Container */}
        <div className="relative flex flex-col gap-6 sm:gap-8 pb-16 sm:pb-20">
          {expertiseData.map((item, index) => (
            <div
              key={index}
              ref={addToRefs}
              className={`sticky w-full ${item.isImageCard ? 'p-0' : 'p-5 sm:p-6 md:p-8'} rounded-xl sm:rounded-2xl bg-gradient-to-br ${item.gradient} backdrop-blur-2xl border border-white/10 shadow-[0_20px_45px_rgba(0,0,0,0.85)] flex flex-col justify-between min-h-[200px] sm:min-h-[230px] md:min-h-[250px] transform-gpu transition-all overflow-hidden group hover:border-[#FFFFFF]/50`}
              style={{
                zIndex: index + 1,
                top: `${70 + index * 12}px`
              }}
            >
              {item.isImageCard ? (
                <>
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover opacity-70 group-hover:scale-105 group-hover:opacity-90 transition-all duration-500 absolute inset-0" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex flex-col justify-end p-6 sm:p-8 md:p-10 z-10">
                    <h3 className="text-xs font-mono uppercase tracking-widest text-[#FFFFFF] font-bold">{item.tag}</h3>
                    <p className="text-xl sm:text-2xl md:text-3xl font-black text-white mt-2">{item.title}</p>
                  </div>
                </>
              ) : (
                <>
                  {/* Dynamic Mouse Spotlight Highlight */}
                  <div 
                    className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
                    style={{
                      background: 'radial-gradient(350px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.18), transparent 70%)'
                    }}
                  ></div>

                  {/* Crimson Accent Stripe */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-[1px] bg-gradient-to-r from-transparent via-gray-400 to-transparent z-10"></div>

                  {/* Card Header Top */}
                  <div className="flex items-center justify-between w-full mb-4 relative z-10">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#FFFFFF] px-2.5 py-0.5 rounded bg-[#181818]/10 border border-[#181818]/25">
                      {item.tag}
                    </span>
                    <span className="text-2xl md:text-3xl font-mono font-black text-white/20">
                      {item.number}
                    </span>
                  </div>

                  {/* Card Body */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center my-auto relative z-10">
                    <div className="lg:col-span-5">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight leading-snug group-hover:text-[#FFFFFF] transition-colors duration-300">
                        {item.title}
                      </h3>
                    </div>
                    <div className="lg:col-span-7">
                      <p className="text-xs md:text-sm text-white/70 font-light leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </div>

                  {/* Subtle Red Corner Dot */}
                  <div className="absolute bottom-4 right-4 w-1.5 h-1.5 rounded-full bg-[#FFFFFF] group-hover:shadow-[0_0_10px_#FFFFFF] z-10 transition-all"></div>
                </>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Expertise;