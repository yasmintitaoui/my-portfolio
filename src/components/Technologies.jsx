import React, { useState, useEffect, useRef } from "react";
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
  SiFigma,
  SiVite,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc"; // Official VS Code icon from Codicons

const Technologies = () => {
  const [visibleCategories, setVisibleCategories] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleCategories((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const categories = sectionRef.current?.querySelectorAll(".tech-category");
    categories?.forEach((cat) => observer.observe(cat));

    return () => observer.disconnect();
  }, []);

  const techStack = [
    {
      category: "Frontend",
      description: "Building interfaces that users love",
      technologies: [
        { name: "React", Icon: SiReact },
        { name: "JavaScript", Icon: SiJavascript },
        { name: "TypeScript", Icon: SiTypescript },
        { name: "Tailwind CSS", Icon: SiTailwindcss },
        { name: "HTML5", Icon: SiHtml5 },
        { name: "CSS3", Icon: SiCss3 },
      ],
    },
    {
      category: "Backend",
      description: "Powering applications with robust architecture",
      technologies: [
        { name: "Node.js", Icon: SiNodedotjs },
        { name: "Express", Icon: SiExpress },
        { name: "MongoDB", Icon: SiMongodb },
        { name: "REST APIs", Icon: SiNodedotjs }, // Placeholder
        { name: "Authentication", Icon: SiNodedotjs }, // Placeholder
      ],
    },
    {
      category: "Tools & Design",
      description: "Creating seamless workflows",
      technologies: [
        { name: "Git", Icon: SiGit },
        { name: "GitHub", Icon: SiGithub },
        { name: "Figma", Icon: SiFigma },
        { name: "VS Code", Icon: VscCode }, // Fixed: Official VS Code icon
        { name: "Vite", Icon: SiVite },
      ],
    },
  ];

  return (
    <section
      id="technologies"
      ref={sectionRef}
      className="relative bg-black text-white py-32 px-6 overflow-hidden"
    >
      {/* Subtle glows matching previous sections */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[600px] h-[600px] bg-white/6 rounded-full blur-[150px]" style={{ left: "50%", top: "50%", transform: "translate(-50%, -50%)" }} />
        <div className="absolute top-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-white/4 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="mb-24 text-center">
          <div className="inline-block px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs tracking-widest uppercase text-white/50 mb-12">
            Tech Stack
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight mb-8">
            Technologies
          </h2>
          <p className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto leading-relaxed">
            The arsenal I use to bring ideas to life
          </p>
        </div>

        {/* Tech categories */}
        <div className="grid lg:grid-cols-3 gap-8">
          {techStack.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              data-index={categoryIndex}
              className={`tech-category transition-all duration-1000 ${
                visibleCategories.includes(categoryIndex)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20"
              }`}
              style={{ transitionDelay: `${categoryIndex * 200}ms` }}
            >
              <div className="relative h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-[#991b1b]/40 hover:shadow-[0_0_40px_rgba(153,27,27,0.25)] transition-all duration-700 group">
                <div className="mb-8">
                  <h3 className="text-3xl md:text-4xl font-light mb-3 group-hover:text-[#991b1b] transition-colors duration-500">
                    {category.category}
                  </h3>
                  <p className="text-white/60">{category.description}</p>
                </div>

                {/* Technologies grid – clean icons only */}
                <div className="grid grid-cols-2 gap-6">
                  {category.technologies.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="flex flex-col items-center gap-3 p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-[#991b1b]/10 hover:border-[#991b1b]/40 transition-all duration-500 group/tech"
                    >
                      <tech.Icon className="w-12 h-12 text-white/70 group-hover/tech:text-[#991b1b] transition-colors duration-500" />
                      <span className="text-white/80 text-center font-medium">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Subtle hover glow */}
                <div className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 rounded-3xl bg-[#991b1b]/5 blur-3xl" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom statement */}
        <div className="mt-32 text-center">
          <div className="inline-block px-8 py-4 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 hover:border-[#991b1b]/50 hover:shadow-[0_0_30px_rgba(153,27,27,0.2)] transition-all duration-500">
            <p className="text-white/80 text-lg">
              Always learning. Always evolving.{" "}
              <span className="text-[#991b1b] font-medium">Always improving.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;