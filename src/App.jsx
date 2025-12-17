import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-black text-white min-h-screen font-sans overflow-x-hidden">
      {/* Header */}
      <Header />
      {/* Hero Section */}
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Technologies />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
