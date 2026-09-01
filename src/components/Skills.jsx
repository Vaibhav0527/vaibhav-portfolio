import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import { 
  SiCplusplus, SiC, SiPython, SiJavascript, 
  SiReact, SiRedux, SiTailwindcss, SiFastapi, 
  SiNodedotjs, SiExpress, SiGraphql, 
  SiHuggingface, SiMongodb, SiPostgresql, SiRedis, SiMysql,
  SiDocker, SiGithubactions, SiVercel, SiRender
} from 'react-icons/si';

import { 
  FaDatabase, FaCode, FaBrain, FaKey, FaNetworkWired, FaGitAlt, FaCube, FaRobot,
  FaLightbulb, FaComments, FaClock, FaUsers, FaServer
} from 'react-icons/fa6';

const skillCategories = [
  {
    title: 'Languages',
    desc: 'Proficient in multiple programming languages for varied development and scripting needs.',
    tag: 'CORE',
    skills: [
      { name: 'C++', icon: SiCplusplus },
      { name: 'C', icon: SiC },
      { name: 'Python', icon: SiPython },
      { name: 'SQL', icon: FaDatabase },
      { name: 'JavaScript', icon: SiJavascript }
    ]
  },
  {
    title: 'Frontend Engineering',
    desc: 'Crafting responsive, interactive, and accessible user interfaces with modern web technologies.',
    tag: 'UI / INTERACTION',
    skills: [
      { name: 'React.js', icon: SiReact },
      { name: 'Redux Toolkit', icon: SiRedux },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'shadcn/ui', icon: FaCube },
      { name: 'Context API', icon: SiReact }
    ]
  },
  {
    title: 'Backend & APIs',
    desc: 'Building secure APIs, real-time services, and scalable server-side applications.',
    tag: 'ARCHITECTURE',
    skills: [
      { name: 'FastAPI', icon: SiFastapi },
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'Express.js', icon: SiExpress },
      { name: 'GraphQL', icon: SiGraphql },
      { name: 'WebSockets', icon: FaNetworkWired },
      { name: 'JWT', icon: FaKey }
    ]
  },
  {
    title: 'AI/ML & GenAI',
    desc: 'Integrating powerful AI models and building retrieval-augmented generation (RAG) pipelines.',
    tag: 'INTELLIGENCE',
    skills: [
      { name: 'OpenAI API', icon: FaRobot },
      { name: 'LangChain', icon: FaCode },
      { name: 'Hugging Face', icon: SiHuggingface },
      { name: 'RAG', icon: FaBrain },
      { name: 'Prompt Eng', icon: FaCode }
    ]
  },
  {
    title: 'Databases & Vectors',
    desc: 'Managing structured and unstructured data alongside high-performance vector search databases.',
    tag: 'DATA',
    skills: [
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'Redis', icon: SiRedis },
      { name: 'Pinecone', icon: FaDatabase },
      { name: 'MySQL', icon: SiMysql }
    ]
  },
  {
    title: 'Cloud & DevOps',
    desc: 'Automating deployments and managing infrastructure for production-grade web applications.',
    tag: 'INFRASTRUCTURE',
    skills: [
      { name: 'Docker', icon: SiDocker },
      { name: 'GitHub Actions', icon: SiGithubactions },
      { name: 'Vercel', icon: SiVercel },
      { name: 'Render', icon: SiRender },
      { name: 'Git', icon: FaGitAlt }
    ]
  },
  {
    title: 'CS Fundamentals',
    desc: 'Strong foundation in core computer science principles driving optimal software architecture.',
    tag: 'THEORY',
    skills: [
      { name: 'Data Structures', icon: FaCode },
      { name: 'Algorithms', icon: FaBrain },
      { name: 'DBMS', icon: FaDatabase },
      { name: 'OS', icon: FaServer },
      { name: 'Networks', icon: FaNetworkWired }
    ]
  },
  {
    title: 'Soft Skills',
    desc: 'Collaborative problem-solver with effective communication and agile team leadership abilities.',
    tag: 'PROFESSIONAL',
    skills: [
      { name: 'Problem Solving', icon: FaLightbulb },
      { name: 'Communication', icon: FaComments },
      { name: 'Leadership', icon: FaUsers },
      { name: 'Agile', icon: FaUsers },
      { name: 'Time Mgmt', icon: FaClock }
    ]
  }
];

const Skills = () => {
  const containerRef = useRef(null);
  const folderBackRef = useRef(null);
  const folderFrontRef = useRef(null);
  const cardsRef = useRef([]);
  const mobileCardsRef = useRef([]);
  const mobileCarouselRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.set([folderBackRef.current, folderFrontRef.current], {
        xPercent: -50,
        yPercent: -50
      });
      gsap.set(folderFrontRef.current, { transformOrigin: "bottom center" });

      // 3x3 grid layout — 8 cards, center (row1,col1) = folder
      const layout = [
        { row: 0, col: 0 }, { row: 0, col: 1 }, { row: 0, col: 2 },
        { row: 1, col: 0 },                      { row: 1, col: 2 },
        { row: 2, col: 0 }, { row: 2, col: 1 }, { row: 2, col: 2 },
      ];
      const getGridPos = (i) => layout[i] || { row: 2, col: 2 };

      cardsRef.current.forEach((card) => {
        if (!card) return;
        gsap.set(card, {
          xPercent: -50,
          yPercent: -50,
          rotation: gsap.utils.random(-6, 6),
          scale: 0.85,
          x: 0,
          y: 0,
        });
      });

      let mm = gsap.matchMedia();
      mm.add(
        { isDesktop: "(min-width: 768px)", isMobile: "(max-width: 767px)" },
        (context) => {
          let { isDesktop, isMobile } = context.conditions;

          if (isDesktop) {
            let floatTween;
            const tl = gsap.timeline({
              scrollTrigger: {
                trigger: containerRef.current,
                start: "top 50%",
                end: "bottom 50%",
                toggleActions: "play reverse play reverse",
                onEnter: () => { if (floatTween) floatTween.kill(); },
                onEnterBack: () => { if (floatTween) floatTween.kill(); },
                onLeave: () => { if (floatTween) floatTween.kill(); },
                onLeaveBack: () => { if (floatTween) floatTween.kill(); }
              },
              onComplete: () => {
                floatTween = gsap.to(cardsRef.current, {
                  y: "+=12",
                  rotation: "+=1",
                  duration: 3.5,
                  yoyo: true,
                  repeat: -1,
                  ease: "sine.inOut",
                  stagger: { amount: 1.5, from: "random" }
                });
              }
            });

            tl.to(folderFrontRef.current, {
              rotationX: -130,
              duration: 1.2,
              ease: "power3.inOut"
            });

            tl.to(cardsRef.current, {
              y: -140,
              scale: 0.9,
              zIndex: 70,
              duration: 0.6,
              stagger: 0.04,
              ease: "back.out(1.2)"
            }, "-=0.6");

            tl.to(cardsRef.current, {
              x: (i) => {
                const w = Math.max(...cardsRef.current.map(c => c?.offsetWidth || 0)) || 360;
                const gap = 40;
                const { col } = getGridPos(i);
                return (col - 1) * (w + gap);
              },
              y: (i) => {
                const h = Math.max(...cardsRef.current.map(c => c?.offsetHeight || 0)) || 240;
                const gap = 40;
                const { row } = getGridPos(i);
                return (row - 1) * (h + gap);
              },
              rotation: () => gsap.utils.random(-3, 3),
              scale: 1,
              duration: 1.4,
              stagger: { amount: 0.4, from: "center" },
              ease: "expo.out"
            }, "-=0.2");
          }

          if (isMobile) {
            const cardW = window.innerWidth * 0.8;
            const gap = 20;
            mobileCardsRef.current.forEach((card, i) => {
              if (!card) return;
              gsap.set(card, {
                x: -(i * (cardW + gap)),
                y: 0,
                scale: 0.4,
                opacity: 0,
                rotation: gsap.utils.random(-15, 15)
              });
            });

            const tl = gsap.timeline({
              scrollTrigger: { trigger: containerRef.current, start: "top 60%" }
            });
            tl.to(folderFrontRef.current, { rotationX: -130, duration: 0.8, ease: "power3.inOut" });
            tl.to(mobileCardsRef.current, { y: -100, opacity: 1, scale: 0.85, duration: 0.6, stagger: 0.05, ease: "back.out(1.2)" }, "-=0.4");
            tl.to(mobileCardsRef.current, {
              x: 0, y: 0, rotation: 0,
              scale: (i) => i === 0 ? 1 : 0.92,
              opacity: (i) => i === 0 ? 1 : 0.5,
              duration: 0.8, stagger: 0.08, ease: "expo.out",
              onComplete: () => {
                if (mobileCarouselRef.current) {
                  mobileCarouselRef.current.style.overflowX = 'auto';
                  mobileCarouselRef.current.style.pointerEvents = 'auto';
                }
              }
            }, "-=0.2");
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // ─── Reusable Card Component ────────────────────────────────────────────────
  const SkillCard = ({ category, index, isMobile = false }) => (
    <div className={`w-full h-full rounded-[20px] overflow-hidden border border-white/[0.08] bg-[#111111] shadow-[0_25px_60px_rgba(0,0,0,0.95)] transition-all duration-500 group relative flex flex-col justify-between ${isMobile ? 'p-5' : 'p-6 hover:scale-[1.03] hover:border-white/30 hover:shadow-[0_30px_70px_rgba(0,0,0,0.9)] hover:-translate-y-1 cursor-pointer'}`}>
      
      {/* Subtle top-edge accent line */}
      <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-[#FFFFFF]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Hover inner glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[20px]"
        style={{ background: 'radial-gradient(ellipse at 50% -10%, rgba(255,255,255,0.10) 0%, transparent 65%)' }}
      />

      {/* ── Header ── */}
      <div className="flex items-center justify-between relative z-10">
        <span className="text-[10px] font-mono font-bold tracking-widest uppercase bg-[#FFFFFF]/15 text-[#FFFFFF] px-2.5 py-1 rounded-md border border-[#FFFFFF]/25">
          {category.tag}
        </span>
        <span className="text-xs font-mono text-white/40">
          [ 0{index + 1} / 08 ]
        </span>
      </div>

      {/* ── Body ── */}
      <div className="space-y-2 mt-4 mb-auto relative z-10">
        <h3 className={`font-black text-white tracking-tight leading-tight group-hover:text-[#FFFFFF] transition-colors duration-300 ${isMobile ? 'text-lg' : 'text-[1.35rem]'}`}>
          {category.title}
        </h3>
        <p className="text-[11px] text-white/55 font-light leading-relaxed line-clamp-3">
          {category.desc}
        </p>
      </div>

      {/* ── Badges ── */}
      <div className="flex flex-wrap items-center gap-1.5 mt-4 pt-3 border-t border-white/[0.07] relative z-10">
        {category.skills.map((skill, sIdx) => {
          const Icon = skill.icon;
          return (
            <div
              key={sIdx}
              className="group/skill flex items-center gap-1.5 px-2 py-1 rounded bg-white/[0.04] border border-white/[0.08] text-[9px] font-mono text-white/70 hover:bg-white/10 hover:border-[#FFFFFF]/50 hover:text-white transition-all cursor-default"
            >
              {Icon && <Icon className="text-xs group-hover/skill:scale-110 transition-transform" />}
              <span>{skill.name}</span>
            </div>
          );
        })}
      </div>

      {/* ── Corner dot ── */}
      <div className="absolute bottom-4 right-4 w-2 h-2 rounded-full bg-[#FFFFFF]/60 group-hover:bg-[#FFFFFF] group-hover:shadow-[0_0_12px_#FFFFFF] transition-all z-10" />
    </div>
  );

  return (
    <section
      id="skills"
      ref={containerRef}
      className="bg-[#0a0a0a] min-h-[100svh] md:min-h-screen relative font-sans overflow-x-clip text-white w-full flex items-center justify-center py-24 md:py-40 select-none"
    >
      <div className="absolute top-10 left-0 w-full flex items-start justify-center pointer-events-none z-0">
        <h1 className="text-[14vw] sm:text-[17vw] md:text-[20vw] font-black text-white/[0.025] tracking-tighter leading-none whitespace-nowrap uppercase">
          SKILLS
        </h1>
      </div>

      {/* Ambient purple glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[55vw] h-[55vw] bg-white/[0.02] rounded-full blur-[200px] pointer-events-none z-0" />

      {/* Main 3D perspective container */}
      <div className="mt-12 relative w-full max-w-7xl h-full flex items-center justify-center perspective-[2000px] z-10">
        <div className="relative w-0 h-0 transform-style-3d">

          {/* ── Folder Back ── */}
          <div
            ref={folderBackRef}
            className="absolute w-[85vw] md:w-[32vw] max-w-[380px] aspect-video bg-[#111111] rounded-[20px] border border-white/[0.07] shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex items-center justify-center"
            style={{ zIndex: 5 }}
          >
            <div className="absolute -top-6 left-6 w-32 h-8 bg-[#191919] rounded-t-xl border-t border-white/[0.06]" />
            <div className="relative z-10 text-[#FFFFFF]/30 font-mono font-black text-xl tracking-widest uppercase">
              SKILLS_ARCHIVE
            </div>
          </div>

          {/* ── Desktop Project Cards ── */}
          {skillCategories.map((category, i) => (
            <div
              key={i}
              ref={el => cardsRef.current[i] = el}
              className="hidden md:block absolute w-[80vw] md:w-[33vw] max-w-[380px] aspect-[16/10] will-change-transform"
              style={{ zIndex: 10 + i }}
            >
              <SkillCard category={category} index={i} />
            </div>
          ))}

          {/* ── Folder Front Flap ── */}
          <div
            ref={folderFrontRef}
            className="absolute w-[85vw] md:w-[32vw] max-w-[380px] aspect-video pointer-events-none will-change-transform"
            style={{ zIndex: 60 }}
          >
            <div className="absolute bottom-0 w-full h-[85%] bg-[#191919] rounded-b-[20px] rounded-t-sm shadow-[0_-5px_20px_rgba(0,0,0,0.9)] flex flex-col justify-end p-6 border-t border-white/[0.07]">
              <div className="w-20 h-1 bg-white/15 rounded-full mx-auto mb-2" />
            </div>
          </div>

        </div>
      </div>

      {/* ── Mobile Swipeable Carousel ── */}
      <div
        ref={mobileCarouselRef}
        className="md:hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen h-auto py-12 flex items-center gap-5 px-[12.5vw] pointer-events-none z-[100] snap-x snap-mandatory overflow-x-hidden hide-scrollbar"
      >
        <style>{`
          .hide-scrollbar::-webkit-scrollbar { display: none; }
          .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        `}</style>
        {skillCategories.map((category, i) => (
          <div
            key={`mob-${i}`}
            ref={el => mobileCardsRef.current[i] = el}
            className="shrink-0 w-[78vw] aspect-[16/11] snap-center will-change-transform relative z-10"
          >
            <SkillCard category={category} index={i} isMobile />
          </div>
        ))}
      </div>

    </section>
  );
};

export default Skills;
