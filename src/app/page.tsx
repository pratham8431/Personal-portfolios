import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Challenge from "@/components/Challenge";
import Process from "@/components/Process";
import Work from "@/components/Work";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <StatsBar />
      <Challenge />
      <Process />
      <Work />
      <Skills />
      <About />
      <Contact />
    </main>
  );
}
