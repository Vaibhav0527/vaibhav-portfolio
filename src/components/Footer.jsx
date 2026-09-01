import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#050505] text-white py-16 px-6 md:px-12 border-t border-white/10 select-none relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col space-y-12">

        {/* Top Section: Brand & Quick Links */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-12 border-b border-white/10">
          <div className="space-y-2">
            <div className="text-2xl font-black text-white tracking-tighter flex items-center gap-2 drop-shadow-[0_2px_8px_rgba(255,255,255,0.3)]">
              VAIBHAV<span className="w-1.5 h-1.5 rounded-full bg-white inline-block"></span>
            </div>
            <p className="text-xs font-mono text-white/50 tracking-widest uppercase">
              // FULL-STACK DEVELOPER &bull; PORTFOLIO 2026
            </p>
          </div>

          {/* Quick Navigation Links */}
          <nav className="flex flex-wrap gap-6 md:gap-8 text-xs font-mono uppercase tracking-widest text-white/70">
            <a href="#home" className="hover:text-[#FFFFFF] transition-colors">Home</a>
            <a href="#about" className="hover:text-[#FFFFFF] transition-colors">About</a>
            <a href="#expertise" className="hover:text-[#FFFFFF] transition-colors">Expertise</a>
            <a href="#skills" className="hover:text-[#FFFFFF] transition-colors">Skills</a>
            <a href="#projects" className="hover:text-[#FFFFFF] transition-colors">Projects</a>
            <a href="#contact" className="hover:text-[#FFFFFF] transition-colors">Contact</a>
          </nav>
        </div>

        {/* Middle Section: Socials & External Profiles */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-xs font-mono text-white/60">
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/Vaibhav0527"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FFFFFF] transition-colors uppercase tracking-wider"
            >
              GitHub //
            </a>
            <a
              href="https://www.linkedin.com/in/vaibhav-gupta-170a0b288/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FFFFFF] transition-colors uppercase tracking-wider"
            >
              LinkedIn //
            </a>
            <a
              href="https://leetcode.com/vaibhav0527"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FFFFFF] transition-colors uppercase tracking-wider"
            >
              LeetCode //
            </a>
          </div>

          <div className="text-white/40 tracking-widest uppercase">
            LOCATION: BHAGALPUR, IN
          </div>
        </div>

        {/* Bottom Copyright & Cinematic Tagline */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 border-t border-white/5 text-[11px] font-mono text-white/40 uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} Vaibhav Gupta. All Rights Reserved.</p>
          <p className="text-[#FFFFFF]/80">DESIGNED & DEVELOPED &bull; BUILT WITH REACT & GSAP</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;