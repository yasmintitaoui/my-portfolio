import React, { useState, useEffect, useRef } from "react";
import { Code2, Sparkles, Zap, Heart } from "lucide-react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const values = [
    { icon: Code2, title: "Code that speaks", desc: "Clean, maintainable, and built to last" },
    { icon: Sparkles, title: "Design that feels", desc: "Beautiful interfaces people love to use" },
    { icon: Zap, title: "Performance that shows", desc: "Fast, optimized, no compromises" },
    { icon: Heart, title: "Details that matter", desc: "Every pixel, every interaction counts" },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative bg-black text-white py-32 px-6 overflow-hidden"
    >
      {/* Matching Hero background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[600px] h-[600px] bg-white/6 rounded-full blur-[150px]" style={{ left: "50%", top: "50%", transform: "translate(-50%, -50%)" }} />
        <div className="absolute top-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-white/4 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Section label + Bold statement */}
        <div className="text-center mb-24">
          {/* Small premium label */}
          <div
            className={`inline-block px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs tracking-widest uppercase text-white/50 mb-12 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Get to know me
          </div>

          <h2
            className={`text-5xl md:text-6xl lg:text-7xl font-light tracking-tight mb-8 transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
            }`}
          >
            <span className="text-white/40">I don't just</span>
            <br />
            <span className="text-white hover:text-[#991b1b] transition-colors duration-500 cursor-default">
              build websites
            </span>
          </h2>
          <p
            className={`text-2xl md:text-3xl text-white/60 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
            }`}
          >
            I create experiences that <span className="text-[#991b1b]">stick</span>
          </p>
        </div>

        {/* Description + Stats */}
        <div className="max-w-5xl mx-auto mb-24">
          <div
            className={`grid md:grid-cols-3 gap-12 transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
            }`}
          >
            <div className="md:col-span-2 space-y-6 text-lg text-white/60 leading-relaxed">
              <p>
                I'm <span className="text-white font-medium">Yasmin</span>—a full-stack developer who believes the best work happens when design and code are treated as one.
              </p>
              <p>
                I don't follow trends. I set standards. Whether it's a sleek landing page or a complex full-stack application, my focus is on creating something that feels right, works flawlessly, and leaves an impression.
              </p>
              <p className="text-white/40 text-base">
                The web is oversaturated with forgettable experiences. I'm here to build ones that matter.
              </p>
            </div>

{/* Stats Card – dark luxury glass */}
<div className="bg-black/60 backdrop-blur-2xl rounded-3xl p-8 flex flex-col items-center justify-center transition-all duration-500 hover:bg-black/70 hover:shadow-[0_0_40px_rgba(81,4,4,0.45)]">
  <div className="text-5xl font-light text-white mb-2">4+</div>
  <div className="text-sm text-white/50 mb-4">Years building the web</div>
  <div className="h-px w-full bg-white/10 mb-4" />
  <div className="text-xs text-white/40 text-center">
    Every project is a chance to push boundaries
  </div>
</div>
</div>
</div>

{/* Value Cards – dark glass + blood red hover */}
<div
  className={`grid md:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-1000 delay-700 ${
    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
  }`}
>
  {values.map((value, i) => (
    <div
      key={i}
      onMouseEnter={() => setActiveCard(i)}
      onMouseLeave={() => setActiveCard(null)}
      className="
        group
        bg-black/60
        backdrop-blur-2xl
        rounded-3xl
        p-8
        text-center
        transition-all
        duration-500
        hover:bg-black/70
        hover:shadow-[0_0_40px_rgba(81,4,4,0.45)]
      "
    >
      <div
        className="
          w-16 h-16 mx-auto rounded-2xl
          bg-white/5
          flex items-center justify-center
          mb-6
          transition-all duration-500
          group-hover:bg-[#510404]/25
        "
      >
        <value.icon
          className="
            w-8 h-8
            text-white/70
            transition-colors duration-500
            group-hover:text-[#510404]
          "
        />
      </div>

      <h3 className="text-xl font-medium text-white mb-3">
        {value.title}
      </h3>

      <p className="text-sm text-white/60 group-hover:text-white/80 transition-colors duration-500">
        {value.desc}
      </p>
    </div>
  ))}
</div>

{/* Bottom statement – bordered dark glass */}
<div
  className={`mt-24 text-center transition-all duration-1000 delay-1000 ${
    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
  }`}
>
  <div
    className="
      inline-block
      px-8 py-4
      rounded-full
      bg-black/60
      backdrop-blur-2xl
      border border-white/15
      transition-all duration-500
      hover:bg-black/70
      hover:border-[#510404]/50
      hover:shadow-[0_0_35px_rgba(81,4,4,0.4)]
    "
  >
    <p className="text-lg text-white/80">
      Ready to build something{" "}
      <span className="text-[#991b1b] font-medium">
        unforgettable?
      </span>
    </p>
  </div>
</div>


      </div>
    </section>
  );
};

export default About;