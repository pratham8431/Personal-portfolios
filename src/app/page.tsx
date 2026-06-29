import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Challenge from "@/components/Challenge";
import Process from "@/components/Process";
import Work from "@/components/Work";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Contact from "@/components/Contact";
import FixedPhoto from "@/components/FixedPhoto";

export default function Home() {
  return (
    <main>
      <Navbar />
      {/* Fixed photo stays in background — sections scroll over it */}
      <FixedPhoto />

      {/* Hero has no background — photo shows through */}
      <Hero />

      <div style={{ position: "relative", zIndex: 10 }}>
        <StatsBar />
        <Challenge />
        <Process />
        <Work />
        <Skills />
        <About />
        <Contact />
      </div>
    </main>
  );
}
