import React, { useState, useEffect, useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { SiReact, SiVite, SiTailwindcss, SiGreensock, SiNodedotjs, SiMongodb, SiExpress, SiFramer } from "react-icons/si";

import nexusImg from "../assets/nexus-sc.png";
import vortexImg from "../assets/vortex-sc.png";
import elanImg from "../assets/elan-sc.png";

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleProjects((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const projectCards = sectionRef.current?.querySelectorAll(".project-card");
    projectCards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      number: "01",
      title: "Vortex",
      subtitle: "VR/AR Platform Landing Page",
      description:
        "Modern landing page featuring dynamic animations and interactive 3D elements. Built with a focus on smooth user experience and cutting-edge design.",
      tech: [
        { name: "React", Icon: SiReact, color: "#61DAFB" },
        { name: "Vite", Icon: SiVite, color: "#646CFF" },
        { name: "Tailwind", Icon: SiTailwindcss, color: "#06B6D4" },
        { name: "GSAP", Icon: SiGreensock, color: "#88CE02" },
      ],
      image: vortexImg,
      liveLink: "https://vortex-landing-page.netlify.app/",
      tags: ["Animation", "3D", "Interactive"],
    },
    {
      number: "02",
      title: "Nexus",
      subtitle: "E-Commerce Platform",
      description:
        "Full-featured online store with product catalog, shopping cart system, secure checkout, and admin dashboard. Complete e-commerce solution built for scalability.",
      tech: [
        { name: "React", Icon: SiReact, color: "#61DAFB" },
        { name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
        { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
        { name: "Express", Icon: SiExpress, color: "#000000" },
      ],
      image: nexusImg,
      liveLink: "https://nexus-store-app.netlify.app/",
      tags: ["Full Stack", "E-Commerce", "Database"],
    },
    {
      number: "03",
      title: "Élan",
      subtitle: "Premium Restaurant Experience",
      description:
        "Elegant restaurant website with menu showcase, reservation system, gallery, and event management. Designed to reflect sophistication and fine dining excellence.",
      tech: [
        { name: "React", Icon: SiReact, color: "#61DAFB" },
        { name: "Tailwind", Icon: SiTailwindcss, color: "#06B6D4" },
        { name: "Framer Motion", Icon: SiFramer, color: "#FF0055" },
      ],
      image: elanImg,
      liveLink: "https://elan-restaurant.vercel.app/",
      tags: ["Design", "Animation", "UX"],
    },
  ];

  return (
    <section
      id="projects"
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
            Featured Work
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight mb-8">
            Featured Projects
          </h2>
          <p className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto leading-relaxed">
            A selection of projects that showcase my expertise in building modern, high-performance web applications.
          </p>
        </div>

        {/* Grid layout: 3 columns on large screens, responsive fallback */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              data-index={index}
              className={`project-card group relative transition-all duration-1000 ${
                visibleProjects.includes(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20"
              }`}
            >
              <div className="relative h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-[#991b1b]/40 hover:shadow-[0_0_40px_rgba(153,27,27,0.25)] transition-all duration-700 flex flex-col">
                {/* Image at top */}
                <div className="relative aspect-video">
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 text-6xl font-light text-white/20">
                    {project.number}
                  </div>
                </div>

                {/* Content below image */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex-grow space-y-6">
                    <div>
                      <h3 className="text-3xl md:text-4xl font-light mb-2 group-hover:text-[#991b1b] transition-colors duration-500">
                        {project.title}
                      </h3>
                      <p className="text-lg text-white/60 mb-4">{project.subtitle}</p>
                      <p className="text-white/60 leading-relaxed text-sm">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-white/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Tech Stack */}
                    <div className="space-y-3">
                      <p className="text-xs text-white/50 uppercase tracking-widest">
                        Tech Stack
                      </p>
                      <div className="flex flex-wrap gap-3">
                        {project.tech.map((tech, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl hover:bg-[#991b1b]/10 hover:border-[#991b1b]/40 transition-all duration-300"
                          >
                            <tech.Icon className="w-5 h-5" style={{ color: tech.color }} />
                            <span className="text-sm text-white/70">{tech.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Links at bottom */}
                  <div className="flex gap-4 mt-8">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      className="flex items-center gap-2 px-6 py-3 bg-[#991b1b] text-white rounded-full font-medium hover:bg-[#7f1d1d] hover:shadow-[0_0_30px_rgba(153,27,27,0.4)] transition-all duration-300 flex-1 justify-center"
                    >
                      <ExternalLink className="w-5 h-5" />
                      View Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-32 text-center">
          <p className="text-white/60 text-xl mb-8">
            Want to see more of my work?
          </p>
          <a
            href="https://github.com/yasmintitaoui"
            target="_blank"
            className="inline-flex items-center gap-3 px-10 py-4 border border-white/20 text-white rounded-full font-medium hover:border-[#991b1b]/60 hover:bg-[#991b1b]/10 hover:shadow-[0_0_30px_rgba(153,27,27,0.2)] transition-all duration-500"
          >
            <Github className="w-6 h-6" />
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;