import { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lenis from "lenis";

import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import Services from "@/components/sections/Services";
import Stats from "@/components/sections/Stats";
import Industries from "@/components/sections/Industries";
import Approach from "@/components/sections/Approach";
import Team from "@/components/sections/Team";
import Testimonials from "@/components/sections/Testimonials";
import Blog from "@/components/sections/Blog";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <main
      data-testid="home-page"
      className="min-h-screen bg-[#F9F9F8] text-[#1A1A1A] antialiased selection:bg-[#0047AB] selection:text-white"
    >
      <Navbar />
      <Hero />
      <Marquee />
      <Services />
      <Stats />
      <Industries />
      <Approach />
      <Team />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
