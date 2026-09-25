import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Contact = () => {
  const ref = useRef(null);

  // React Form State tracking
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    permission: false
  });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Parallax translation for the big background text
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "20%"]);

  // Handle input changes dynamically
  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: type === 'checkbox' ? checked : value
    }));
  };

  // Handle form submission logic
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.permission) {
      alert("Please accept the contact permission checkbox.");
      return;
    }

    console.log("Form Data Submitted Successfully:", formData);
    alert(`Thanks ${formData.firstName}! Message captured successfully.`);

    setFormData({ firstName: '', lastName: '', email: '', message: '', permission: false });
  };

  return (
    <section ref={ref} id="contact" className="bg-[#0b0b0b] w-full min-h-screen relative overflow-hidden flex items-end pt-24 sm:pt-32 pb-0 border-t border-white/10 select-none">

      {/* Background Cinematic Red Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.04] rounded-full blur-[160px] pointer-events-none z-0"></div>

      {/* Huge Background Parallax Netflix Watermark Text */}
      <motion.div
        style={{ y }}
        className="absolute top-0 left-0 w-full h-full flex flex-col justify-start items-center overflow-hidden pointer-events-none z-0 pt-16 md:pt-12 opacity-10"
      >
        <h1
          className="text-[18vw] sm:text-[25vw] leading-[0.75] font-black text-[#FFFFFF] uppercase tracking-tighter select-none scale-y-[1.6] origin-top"
          style={{ fontFamily: "'Bebas Neue', 'Impact', sans-serif" }}
        >
          CONTACT
        </h1>
      </motion.div>

      {/* Form Card Overlay */}
      <div className="relative z-10 w-full flex justify-end items-end">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-[#141414]/95 backdrop-blur-2xl border-t border-l border-white/15 w-full md:w-[90%] lg:w-[82%] p-5 sm:p-8 md:p-16 text-white flex flex-col justify-between rounded-tl-2xl sm:rounded-tl-[3rem] shadow-[0_-25px_60px_rgba(0,0,0,0.9)] relative overflow-hidden"
        >
          {/* Subtle internal top crimson highlight glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-gradient-to-r from-transparent via-gray-400 to-transparent opacity-60"></div>

          <div className="flex items-center justify-between mb-8 sm:mb-12 md:mb-16">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded bg-[#181818]/10 border border-[#181818]/30 text-[10px] sm:text-xs font-mono uppercase tracking-widest text-[#FFFFFF]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFFFFF] animate-ping"></span>
              <span>GET IN TOUCH</span>
            </div>
            <span className="text-xs font-mono text-white/40 tracking-wider hidden md:block">
              // LET'S BUILD SOMETHING GREAT
            </span>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-8 sm:gap-12 md:gap-16 w-full">
            <div className="flex flex-col md:flex-row gap-8 sm:gap-12 md:gap-20 w-full">

              {/* Left Column */}
              <div className="flex-1 flex flex-col gap-6 sm:gap-10">
                <div className="relative">
                  <input
                    type="text"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    required
                    className="w-full bg-transparent border-b border-white/20 pb-2 sm:pb-3 text-base sm:text-lg focus:outline-none focus:border-[#181818] transition-colors placeholder-white/40 font-medium rounded-none text-white"
                  />
                </div>
                <div className="relative">
                  <input
                    type="text"
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    required
                    className="w-full bg-transparent border-b border-white/20 pb-2 sm:pb-3 text-base sm:text-lg focus:outline-none focus:border-[#181818] transition-colors placeholder-white/40 font-medium rounded-none text-white"
                  />
                </div>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    required
                    className="w-full bg-transparent border-b border-white/20 pb-2 sm:pb-3 text-base sm:text-lg focus:outline-none focus:border-[#181818] transition-colors placeholder-white/40 font-medium rounded-none text-white"
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className="flex-1 flex flex-col">
                <div className="relative h-full flex flex-col">
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Type your message here..."
                    required
                    className="w-full h-full min-h-[120px] sm:min-h-[140px] bg-transparent border-b border-white/20 pb-2 sm:pb-3 text-base sm:text-lg focus:outline-none focus:border-[#181818] transition-colors placeholder-white/40 font-medium resize-none rounded-none text-white"
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="flex flex-col md:flex-row gap-8 sm:gap-12 mt-4 pt-4 sm:pt-6 border-t border-white/10">
              {/* Left text */}
              <div className="flex-1 flex items-start gap-3 sm:gap-4 text-xs sm:text-sm font-light text-white/70">
                <input
                  type="checkbox"
                  id="permission"
                  checked={formData.permission}
                  onChange={handleChange}
                  className="mt-1 w-4 h-4 rounded-sm border-white/30 bg-transparent text-[#FFFFFF] focus:ring-0 focus:ring-offset-0 cursor-pointer"
                  style={{ accentColor: "#181818" }}
                />
                <label htmlFor="permission" className="cursor-pointer max-w-[280px] leading-snug">
                  I give permission to contact me at this email address.
                </label>
              </div>

              {/* Right text & button */}
              <div className="flex-1 flex flex-col gap-8 text-xs text-white/50 font-light">
                <p className="leading-relaxed max-w-[400px]">
                  This site is protected by security protocols and industry-standard privacy guidelines.
                </p>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-6">
                  <div className="max-w-[250px] leading-relaxed flex flex-col gap-1">
                    <p>Ready to start a project or collaboration? Send a direct signal.</p>
                    <p className="font-bold text-white/70 mt-2">+91 7704999192</p>
                    <p className="font-bold text-white/70 mt-2 text-xs sm:text-sm break-all">working.vaibhavgupta@gmail.com</p>
                  </div>

                  <button
                    type="submit"
                    className="px-6 sm:px-8 py-3 sm:py-3.5 rounded bg-gradient-to-r from-white to-gray-200 text-black font-bold uppercase tracking-widest text-[10px] sm:text-xs flex items-center justify-center gap-2 sm:gap-3 hover:from-gray-200 hover:to-white transition-all duration-300 group whitespace-nowrap shadow-[0_0_12px_rgba(255,255,255,0.2)] hover:scale-105 w-full sm:w-auto"
                  >
                    Send Message
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </form>

        </motion.div>
      </div>
    </section>
  );
};

export default Contact;