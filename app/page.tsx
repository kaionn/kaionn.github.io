import About from "@/components/About";
import Career from "@/components/Career";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="mx-auto max-w-[720px] px-6">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Career />
      <Contact />
    </main>
  );
}
