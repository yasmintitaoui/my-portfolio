// src/components/Header.jsx
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

// Fixed: added missing comma after "Technologies"
const navItems = ["Home", "About", "Experience", "Projects", "Technologies", "Contact"];

export default function Header() {
  const [active, setActive] = useState("Home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll to toggle subtle glass intensity
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (item) => {
    setActive(item);
    setMobileMenuOpen(false);
    const sectionId = item.toLowerCase() === "home" ? "" : item.toLowerCase();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else if (sectionId === "") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled ? "bg-black/40 backdrop-blur-2xl" : "bg-black/20 backdrop-blur-xl"
        }`}
        style={{ height: "72px" }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-full">
          {/* Logo */}
          <div
            className="cursor-pointer relative group"
            onClick={() => handleNavClick("Home")}
          >
            <img
              src={logo}
              alt="Yasmin Logo"
              className="h-16 w-auto object-contain transition-all duration-500 group-hover:brightness-125"
            />
            {/* subtle glow */}
            <span className="absolute -inset-2 bg-white/5 rounded-full blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className="relative text-white/70 hover:text-white font-light tracking-wider transition-all duration-300"
              >
                {item}
                <span
                  className={`absolute left-0 -bottom-1 h-px bg-white rounded-full transition-all duration-500 ${
                    active === item
                      ? "w-full opacity-100"
                      : "w-0 opacity-0 group-hover:w-full group-hover:opacity-50"
                  }`}
                />
              </button>
            ))}
          </nav>

          {/* Mobile Nav Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white rounded-md hover:bg-white/10 transition-all"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/90 backdrop-blur-3xl flex flex-col items-center justify-center lg:hidden">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => handleNavClick(item)}
              className={`text-5xl font-extralight my-4 transition-all duration-300 ${
                active === item ? "text-white" : "text-white/50 hover:text-white"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </>
  );
}