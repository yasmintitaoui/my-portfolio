// src/components/Footer.jsx
import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import logo from "../assets/logo.png";

const Footer = () => {
  const quickLinks = ["About", "Experience", "Projects", "Technologies", "Contact"];

  return (
    <footer className="relative bg-black text-white py-20 px-6 border-t border-white/10">
      {/* Subtle glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-[600px] h-[600px] bg-white/4 rounded-full blur-[150px]" style={{ left: "50%", top: "0%", transform: "translate(-50%, -50%)" }} />
      </div>

      <div className="max-w-5xl mx-auto relative z-10"> {/* Reduced max-width to make footer less wide */}
        {/* Top: Logo left + Quick Links right */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-20 mb-16">
          {/* Logo + Name */}
          <div className="flex flex-col items-start gap-6">
            <div className="relative group cursor-pointer">
              <img
                src={logo}
                alt="Yasmin Logo"
                className="h-20 w-auto object-contain transition-all duration-500 group-hover:brightness-125"
              />
              <span className="absolute -inset-4 bg-white/5 rounded-full blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-light tracking-wide">
                Yasmin Titaoui
              </h3>
              <p className="text-white/60 mt-2">Full Stack Web Developer</p>
            </div>
          </div>

          {/* Quick Links – horizontal with label above */}
          <div className="flex flex-col items-start lg:items-end gap-4">
            <p className="text-sm text-white/50 uppercase tracking-widest">
              Quick Links
            </p>
            <nav className="flex flex-wrap gap-x-8 gap-y-2">
              {quickLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-white/60 hover:text-[#991b1b] transition-colors duration-300 font-light"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom: Socials + Copyright + Back to top */}
        <div className="pt-12 border-t border-white/10 flex flex-col items-center gap-8">
          {/* Social Icons */}
          <div className="flex gap-6">
            <a
              href="mailto:yasmintitaoui@gmail.com"
              className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#991b1b]/10 hover:border-[#991b1b]/40 transition-all duration-500"
            >
              <Mail className="w-5 h-5 text-white/70 hover:text-[#991b1b] transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/YasminTitaoui"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#991b1b]/10 hover:border-[#991b1b]/40 transition-all duration-500"
            >
              <Linkedin className="w-5 h-5 text-white/70 hover:text-[#991b1b] transition-colors" />
            </a>
            <a
              href="https://github.com/yasmintitaoui"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#991b1b]/10 hover:border-[#991b1b]/40 transition-all duration-500"
            >
              <Github className="w-5 h-5 text-white/70 hover:text-[#991b1b] transition-colors" />
            </a>
          </div>

          {/* Copyright + Back to top */}
          <div className="flex flex-col items-center gap-4">
            <p className="text-white/40 text-sm">
              © {new Date().getFullYear()} Yasmin Titaoui.
            </p>
            <a
              href="#"
              className="text-white/40 hover:text-[#991b1b] text-sm tracking-wider transition-colors duration-300"
            >
              Back to top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;