import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import { 
  SiCplusplus, SiJavascript, 
  SiReact, SiRedux, SiTailwindcss, SiFastapi, 
  SiNodedotjs, SiExpress, SiMongodb, 
  SiSocketdotio, SiDocker, SiGithubactions, 
  SiVercel, SiGreensock, SiFramer, SiGithub, SiTypescript,
  SiOpencv
} from 'react-icons/si';

import { 
  FaCode, FaBrain, FaKey, FaServer, FaGitAlt, FaUsers, FaRobot
} from 'react-icons/fa6';

const projectsData = [
  {
    title: "TruthLens AI",
    category: "AI / Full-Stack",
    description: "Architected a full-stack multi-modal fact-checking platform verifying text, voice, and image memes using Llama-3 and Tavily search. Implemented explainable AI verdicts with trust scores and optimized deepfake forensics via OpenCV and SciPy.",
    tags: [
      { name: "FastAPI", icon: SiFastapi },
      { name: "React 18", icon: SiReact },
      { name: "Redux", icon: SiRedux },
      { name: "Llama-3", icon: FaRobot }
    ],
    match: "99%",
    episode: "S01 E01",
    link: "https://frontend-hazel-three-30.vercel.app/"
  },
  {
    title: "Food Delivery Platform",
    category: "Full-Stack Web App",
    description: "Built a comprehensive food delivery platform featuring 3 role-based dashboards (User, Shopkeeper, Delivery Partner) with live delivery tracking via Socket.io. Engineered seamless data flow and an adaptive UI.",
    tags: [
      { name: "React.js", icon: SiReact },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Socket.io", icon: SiSocketdotio }
    ],
    match: "98%",
    episode: "S01 E02",
    link: "https://foodyfly-app.vercel.app/"
  },
  {
    title: "Blog Management System",
    category: "Full-Stack Web App",
    description: "Delivered a feature-rich blog platform featuring secure JWT-based authentication and category-wise blog management. Enabled complete CRUD functionality with Cloudinary uploads, refining RESTful APIs to elevate user experience.",
    tags: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "Express.js", icon: SiExpress },
      { name: "React.js", icon: SiReact },
      { name: "JWT", icon: FaKey }
    ],
    match: "97%",
    episode: "S01 E03"
  },
  {
    title: "Algorithmic Problem Solver",
    category: "Competitive Programming",
    description: "Solved 250+ LeetCode problems and achieved 3-Star max rating (1614) on CodeChef. Mastered DP, Graphs, and Trees.",
    tags: [
      { name: "Data Structures", icon: FaCode },
      { name: "Algorithms", icon: FaBrain },
      { name: "C++", icon: SiCplusplus },
      { name: "JavaScript", icon: SiJavascript }
    ],
    match: "99%",
    episode: "S01 E04"
  },
  {
    title: "Cloud CI/CD Pipeline",
    category: "DevOps & Infrastructure",
    description: "Automated deployment workflows using GitHub Actions and containerized Docker environments for multiple web applications.",
    tags: [
      { name: "Docker", icon: SiDocker },
      { name: "GitHub Actions", icon: SiGithubactions },
      { name: "CI/CD", icon: FaServer },
      { name: "Vercel", icon: SiVercel }
    ],
    match: "98%",
    episode: "S01 E05"
  },
  {
    title: "Portfolio Cinematics v2.6",
    category: "UI/UX & Animation",
    description: "Award-winning dark studio interactive portfolio featuring GSAP physics and responsive cinematic layouts.",
    tags: [
      { name: "React", icon: SiReact },
      { name: "GSAP", icon: SiGreensock },
      { name: "Tailwind", icon: SiTailwindcss },
      { name: "Framer", icon: SiFramer }
    ],
    match: "100%",
    episode: "S01 E06"
  },
  {
    title: "Hacktoberfest 2025",
    category: "Open Source Contribution",
    description: "Supercontributor — merged PRs across 7+ open-source repositories. Earned Hacktoberfest 2025 badge for consistent community contributions.",
    tags: [
      { name: "Open Source", icon: FaGitAlt },
      { name: "GitHub", icon: SiGithub },
      { name: "Git", icon: FaGitAlt },
      { name: "Community", icon: FaUsers }
    ],
    match: "100%",
    episode: "S01 E07"
  },
  {
    title: "Lead Developer Intern",
    category: "Professional Experience",
    description: "Developed 6+ React.js + TypeScript pages at Sangillence Pvt Ltd. Shipped a Gen-AI travel feature using GPT-4 API in Agile/Scrum team.",
    tags: [
      { name: "React.js", icon: SiReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "GPT-4", icon: FaRobot },
      { name: "Agile", icon: FaUsers }
    ],
    match: "100%",
    episode: "S01 E08"
  }
];

const Projects = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const bgRefs = useRef([]);
  const textRefs = useRef([]);

  const handleScroll = (e) => {
    if (window.innerWidth >= 769) return;
    const container = e.target;
    const center = container.scrollLeft + container.offsetWidth / 2;

    let activeIdx = 0;
    let minDiff = Infinity;

    cardsRef.current.forEach((card, i) => {
      if (!card) return;
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const diff = Math.abs(cardCenter - center);
      if (diff < minDiff) {
        minDiff = diff;
        activeIdx = i;
      }
    });

    cardsRef.current.forEach((card, i) => {
      if (card) {
        gsap.to(card, { scale: i === activeIdx ? 1 : 0.9, duration: 0.4, ease: "power2.out", overwrite: "auto" });
      }
    });

    bgRefs.current.forEach((bg, i) => {
      if (bg) gsap.to(bg, { opacity: i === activeIdx ? 1 : 0, duration: 0.4, overwrite: "auto" });
    });

    textRefs.current.forEach((txt, i) => {
      if (txt) gsap.to(txt, { opacity: i === activeIdx ? 1 : 0, duration: 0.4, overwrite: "auto" });
    });
  };

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let mm = gsap.matchMedia();

      mm.add("(min-width: 769px)", () => {
        const updateCards = (p) => {
          cardsRef.current.forEach((card, i) => {
            if (!card) return;
            const offset = i - p;

            const radius = 1800;
            const angleSpread = 18;

            const angle = offset * angleSpread;
            const rad = angle * Math.PI / 180;

            const x = Math.sin(rad) * radius;
            const y = radius - (Math.cos(rad) * radius);
            const z = -Math.abs(offset) * 50;

            const scale = Math.max(0.4, 1 - Math.abs(offset) * 0.15);
            const rotateZ = angle;

            const opacity = Math.max(0.1, 1 - Math.abs(offset) * 0.3);
            const zIndex = Math.round(100 - Math.abs(offset) * 10);

            gsap.set(card, {
              x: x,
              y: y,
              z: z,
              scale: scale,
              rotationZ: rotateZ,
              rotationY: 0,
              opacity: opacity,
              zIndex: zIndex,
            });
          });

          bgRefs.current.forEach((bg, i) => {
            if (!bg) return;
            const itemOpacity = Math.max(0, 1 - Math.abs(i - p));
            gsap.set(bg, { opacity: itemOpacity });

            if (textRefs.current[i]) {
              gsap.set(textRefs.current[i], { opacity: itemOpacity });
            }
          });
        };

        updateCards(0);

        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top top",
          end: "+=500%",
          pin: true,
          scrub: 1,
          onUpdate: (self) => {
            const p = self.progress * (projectsData.length - 1);
            updateCards(p);
          }
        });
      });

      mm.add("(max-width: 768px)", () => {
        cardsRef.current.forEach((card, i) => {
          if (card) {
            gsap.set(card, { clearProps: "x,y,z,rotation,scale,opacity,position" });
            gsap.set(card, { scale: i === 0 ? 1 : 0.9 });
          }
        });

        bgRefs.current.forEach((bg, i) => {
          if (bg) gsap.set(bg, { clearProps: "all", opacity: i === 0 ? 1 : 0 });
        });

        textRefs.current.forEach((txt, i) => {
          if (txt) gsap.set(txt, { clearProps: "all", opacity: i === 0 ? 1 : 0 });
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative w-full min-h-svh md:h-screen bg-[#0b0b0b] text-white overflow-hidden flex items-center justify-center md:[perspective:1000px] select-none"
    >
      {/* Dynamic Dark Background Vignettes */}
      {projectsData.map((_, i) => (
        <div
          key={i}
          ref={el => bgRefs.current[i] = el}
          className="absolute inset-0 z-0 pointer-events-none opacity-0 bg-gradient-to-tr from-black via-[#140203] to-black"
        />
      ))}

      {/* Massive Background Typography */}
      <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
        {projectsData.map((_, i) => (
          <h1 
            key={`txt-${i}`} 
            ref={el => textRefs.current[i] = el} 
            className="absolute text-[30vw] sm:text-[25vw] md:text-[20vw] font-black text-white/[0.025] opacity-0 transition-opacity duration-500 select-none tracking-tighter leading-none whitespace-nowrap"
          >
            PROJECTS
          </h1>
        ))}
      </div>

      {/* Carousel Container */}
      <div
        className="relative w-full h-full flex md:items-center md:justify-center z-10 md:[transform-style:preserve-3d] overflow-x-auto overflow-y-hidden md:overflow-visible snap-x snap-mandatory scrollbar-hide [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] items-center px-[8vw] sm:px-[10vw] md:px-0 gap-3 sm:gap-4 md:gap-0 touch-pan-x py-8 md:py-0"
        onScroll={handleScroll}
      >
        {projectsData.map((project, i) => (
          <div
            key={i}
            ref={el => cardsRef.current[i] = el}
            className={`md:absolute relative shrink-0 snap-center w-[75vw] sm:w-[360px] md:w-[440px] h-[380px] sm:h-[460px] md:h-[540px] rounded-2xl sm:rounded-[32px] p-6 sm:p-8 md:p-10 bg-[#141414]/95 backdrop-blur-2xl border border-white/15 flex flex-col justify-between overflow-hidden group shadow-[0_30px_60px_rgba(0,0,0,0.9)] hover:border-[#FFFFFF]/80 transition-colors duration-500 ${project.link ? 'hover:scale-[1.02] hover:-translate-y-2' : ''}`}
          >
            {/* Invisible Native Link Overlay for full-card clickability (Bypasses popup blockers) */}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-20 cursor-pointer block"
                aria-label={`Open ${project.title}`}
              >
                <span className="sr-only">Open {project.title}</span>
              </a>
            )}

            {/* Inner Glossy Reflection */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#181818]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />

            {/* Top Card Metadata */}
            <div className="flex items-center justify-between relative z-10 pointer-events-none">
              <span className="text-[10px] font-mono font-bold tracking-widest uppercase bg-[#FFFFFF]/15 text-[#FFFFFF] px-2.5 py-1 rounded-md border border-[#FFFFFF]/25">
                {project.episode}
              </span>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono text-[#FFFFFF] font-bold">{project.match} Match</span>
                <span className="text-[10px] font-mono border border-white/25 px-1 py-0.5 text-white/60 rounded-sm">HD</span>
              </div>
            </div>

            {/* Middle Title & Description */}
            <div className="space-y-4 relative z-10 my-auto pointer-events-none">
              <p className="text-[10px] font-mono uppercase tracking-widest text-white/40 font-medium">
                {project.category}
              </p>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight group-hover:text-[#FFFFFF] transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-sm md:text-base text-white/70 font-light leading-relaxed line-clamp-4">
                {project.description}
              </p>
            </div>

            {/* Tags & Live Link */}
            <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-white/10 relative z-30">
              {project.tags.map((tag, tIdx) => {
                const Icon = tag.icon;
                return (
                  <div
                    key={tIdx}
                    className="group/tag flex items-center gap-1.5 px-2 py-1 rounded bg-white/[0.04] border border-white/[0.08] text-[9px] font-mono text-white/70 hover:bg-white/10 hover:border-[#FFFFFF]/50 hover:text-white transition-all cursor-default"
                  >
                    {Icon && <Icon className="text-xs group-hover/tag:scale-110 transition-transform" />}
                    <span>{tag.name}</span>
                  </div>
                );
              })}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto text-[10px] font-mono font-bold uppercase tracking-widest text-black bg-gradient-to-r from-white to-gray-300 px-3 py-1.5 rounded flex items-center gap-1.5 hover:from-gray-200 hover:to-white transition-all hover:scale-105"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                  LIVE
                </a>
              )}
            </div>

            {/* Bottom Glow Accent */}
            <div className="absolute bottom-4 right-4 w-2 h-2 rounded-full bg-[#FFFFFF] group-hover:shadow-[0_0_15px_#FFFFFF] transition-all pointer-events-none" />
          </div>
        ))}
      </div>

    </section>
  );
};

export default Projects;
