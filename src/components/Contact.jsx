    import React, { useState, useEffect, useRef } from "react";
import { Mail, Linkedin, Github, ArrowRight, Copy, Check } from "lucide-react";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [copied, setCopied] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const email = "yasmintitaoui@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const contactMethods = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect professionally",
      href: "https://www.linkedin.com/in/YasminTitaoui",
      action: "View profile",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "Explore my projects",
      href: "https://github.com/yasmintitaoui",
      action: "View repositories",
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative bg-black text-white py-32 px-6 overflow-hidden"
    >
      {/* Subtle glows matching previous sections */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[600px] h-[600px] bg-white/6 rounded-full blur-[150px]" style={{ left: "50%", top: "50%", transform: "translate(-50%, -50%)" }} />
        <div className="absolute top-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-white/4 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Main heading */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          <div className="inline-block px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs tracking-widest uppercase text-white/50 mb-12">
            Get in Touch
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight mb-8">
            Let's Create<br />
            <span className="text-[#991b1b]">Something Great</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto leading-relaxed">
            Ready to bring your vision to life? I'm available for new projects and collaborations.
          </p>
        </div>

        {/* Email highlight – premium glass card */}
        <div
          className={`mb-20 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          <div className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 hover:border-[#991b1b]/40 hover:shadow-[0_0_40px_rgba(153,27,27,0.25)] transition-all duration-700">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-[#991b1b]/20 border border-[#991b1b]/40 flex items-center justify-center group-hover:bg-[#991b1b]/30 transition-all duration-500">
                  <Mail className="w-8 h-8 text-[#991b1b]" />
                </div>
                <div className="text-center md:text-left">
                  <p className="text-sm text-white/50 mb-1">Direct email</p>
                  <a
                    href={`mailto:${email}`}
                    className="text-2xl md:text-3xl font-light text-white hover:text-[#991b1b] transition-colors duration-500"
                  >
                    {email}
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-3 px-8 py-4 bg-[#991b1b] text-white rounded-full font-medium hover:bg-[#7f1d1d] hover:shadow-[0_0_35px_rgba(153,27,27,0.4)] transition-all duration-300"
              >
                {copied ? (
                  <>
                    <Check className="w-5 h-5" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-5 h-5" />
                    Copy Email
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Other contact methods */}
        <div
          className={`grid md:grid-cols-2 gap-8 mb-20 transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-[#991b1b]/40 hover:shadow-[0_0_30px_rgba(153,27,27,0.2)] transition-all duration-700 flex items-center justify-between"
            >
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-[#991b1b]/10 transition-all duration-500">
                  <method.icon className="w-7 h-7 text-white/70 group-hover:text-[#991b1b] transition-colors duration-500" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-light mb-1 group-hover:text-[#991b1b] transition-colors duration-500">
                    {method.label}
                  </h3>
                  <p className="text-white/60">{method.value}</p>
                </div>
              </div>
              <ArrowRight className="w-6 h-6 text-white/40 group-hover:text-[#991b1b] group-hover:translate-x-2 transition-all duration-500" />
            </a>
          ))}
        </div>

        {/* Availability & Response */}
        <div
          className={`text-center transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          <div className="inline-block px-8 py-4 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 mb-8">
            <p className="text-white/80 text-lg">
              Usually respond within{" "}
              <span className="text-[#991b1b] font-medium">24 hours</span>
            </p>
          </div>

          <div className="flex items-center justify-center gap-3 px-6 py-3 rounded-full border border-white/10 bg-white/5">
            <div className="relative">
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <div className="absolute inset-0 w-3 h-3 rounded-full bg-green-500 animate-ping opacity-75" />
            </div>
            <span className="text-white/70">Available for new projects</span>
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

export default Contact;