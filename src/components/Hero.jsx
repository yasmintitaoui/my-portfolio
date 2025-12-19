import React, { useState, useEffect, useRef } from "react";
import { Download, Github, Linkedin, Mail, ArrowRight } from "lucide-react";

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);

  // Mouse tracking for subtle radial glow
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Particle background 
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    class Particle {
      constructor() { this.reset(); }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 2 + 1;
        this.opacity = Math.random() * 0.5 + 0.2;
      }
      update() {
        this.x += this.vx; this.y += this.vy;
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${this.opacity})`;
        ctx.fill();
      }
    }

    for (let i = 0; i < 100; i++) particlesRef.current.push(new Particle());

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesRef.current.forEach((p, i) => {
        p.update(); p.draw();
        particlesRef.current.slice(i + 1).forEach((o) => {
          const dx = p.x - o.x, dy = p.y - o.y, d = Math.sqrt(dx*dx + dy*dy);
          if (d < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255,255,255,${0.15*(1-d/120)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p.x,p.y); ctx.lineTo(o.x,o.y);
            ctx.stroke();
          }
        });
      });
      requestAnimationFrame(animate);
    };
    animate();

    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <section className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center px-6 py-32">
      {/* Particle background */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />

      {/* Glow blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[600px] h-[600px] bg-white/6 rounded-full blur-[150px]" style={{ left: "50%", top: "50%", transform: "translate(-50%, -50%)" }} />
        <div className="absolute top-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-white/4 rounded-full blur-[120px]" />
      </div>

      {/* Subtle mouse-following dark radial glow */}
      <div
        className="absolute inset-0 pointer-events-none z-20 opacity-30 transition-all duration-1000"
        style={{
          background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(75, 75, 75, 0.22) 0%, transparent 50%)`,
        }}
      />

      {/* Content (name hover to red) */}
      <div className="relative z-10 max-w-5xl w-full text-center space-y-8">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-light tracking-tight">
          <span className="text-white/40">Hi, I'm</span><br/>
          <span className="text-white hover:text-red-500 transition-colors duration-500 cursor-default">
            Yasmin
          </span>
        </h1>

        <p className="text-xl text-white/60">Full Stack Developer</p>
        <p className="text-lg text-white/50 max-w-2xl mx-auto">Turning ideas into elegant, high-performance web experiences.</p>

{/* Buttons */}
<div className="flex justify-center gap-4 pt-4 flex-wrap">
  <a href="#projects" className="px-8 py-4 bg-white text-black rounded-full flex items-center gap-2 hover:scale-105 transition">
    View My Work <ArrowRight className="w-5 h-5" />
  </a>

  {/* Download Resume */}
  <a
    href="/Yasmin_Full-Stack_Developer.pdf"
    download
    className="px-8 py-4 bg-white/5 text-white rounded-full flex items-center gap-2 hover:bg-white/10 transition"
  >
    <Download className="w-5 h-5" />
    Resume
  </a>
</div>

        {/* Social links */}
        <div className="flex justify-center gap-4 pt-4 flex-wrap">
          <a href="https://github.com/yasmintitaoui" target="_blank" className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center">
            <Github className="w-6 h-6 text-white" />
          </a>
          <a href="https://www.linkedin.com/in/YasminTitaoui" target="_blank" className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center">
            <Linkedin className="w-6 h-6 text-white" />
          </a>
          <a href="mailto:yasmintitaoui@gmail.com" className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center">
            <Mail className="w-6 h-6 text-white" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;