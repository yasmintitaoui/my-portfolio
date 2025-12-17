import React, { useState, useEffect, useRef } from "react";
import { experiences } from "../data/data"; // Adjust path if needed

const Experience = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      const start = sectionTop - windowHeight / 2;
      const end = sectionTop + sectionHeight - windowHeight;
      const progress = Math.max(0, Math.min(1, (scrollY - start) / (end - start)));

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative bg-black text-white py-32 px-6 overflow-hidden"
    >
      {/* Matching subtle glows from previous sections */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[600px] h-[600px] bg-white/6 rounded-full blur-[150px]" style={{ left: "50%", top: "50%", transform: "translate(-50%, -50%)" }} />
        <div className="absolute top-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-white/4 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header – unchanged */}
        <div className="mb-24 text-center">
          <div className="inline-block px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs tracking-widest uppercase text-white/50 mb-12">
            My Journey
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight mb-8">
            Experience & Studies
          </h2>
          <p className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto leading-relaxed">
            Design-focused full-stack developer | Diploma 2021–2023 · Bachelor 2024 · Master’s in Cybersecurity 2025
          </p>
          <p className="text-white/40 mt-4 text-lg">
            Skills philosophy: Build elegant, functional, and secure web solutions
          </p>
        </div>

        {/* Timeline – layout 100% preserved */}
        <div className="relative">
          {/* Single solid red glowing line that grows on scroll */}
          <div
            className="absolute left-8 top-0 w-1 bg-[#991b1b] rounded-full shadow-[0_0_30px_rgba(153,27,27,0.8)] transition-all duration-500"
            style={{ height: `${scrollProgress * 100}%` }}
          />

          <div className="space-y-16 md:space-y-20 pl-16">
            {experiences.map((exp, index) => {
              const itemProgress = scrollProgress * experiences.length;
              const isActive = itemProgress >= index;
              const isCurrent = itemProgress >= index && itemProgress < index + 1;

              return (
                <div
                  key={index}
                  className={`relative transition-all duration-700 ${
                    isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >

                  {/* Content */}
                  <div className="space-y-4">
                    <h3
                      className={`text-3xl md:text-4xl font-light transition-colors duration-500 ${
                        isActive ? "text-white" : "text-white/30"
                      }`}
                    >
                      {exp.title}
                    </h3>

                    <div
                      className={`inline-block px-4 py-2 rounded-full border transition-all duration-500 ${
                        isCurrent
                          ? "bg-[#991b1b]/20 border-[#991b1b]/60 text-[#991b1b]"
                          : isActive
                          ? "bg-white/5 border-white/20 text-white/70"
                          : "bg-transparent border-white/10 text-white/30"
                      }`}
                    >
                      <span className="font-medium">{exp.company}</span>
                    </div>

                    <div
                      className={`text-2xl font-light tracking-widest transition-colors duration-500 ${
                        isActive ? "text-white/60" : "text-white/20"
                      }`}
                    >
                      {exp.year}
                    </div>

                    <p
                      className={`text-lg leading-relaxed transition-colors duration-500 ${
                        isActive ? "text-white/60" : "text-white/20"
                      }`}
                    >
                      {exp.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Internship mention – unchanged */}
          <div className="mt-20 text-center text-white/40 text-lg italic">
            Industry exposure through internship experience in Casablanca
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        .animate-ping {
          animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </section>
  );
};

export default Experience;