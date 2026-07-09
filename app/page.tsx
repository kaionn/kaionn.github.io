import About from "@/components/About";
import Career from "@/components/Career";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="mx-auto max-w-[960px] px-6">
      <Hero />
      <div className="flex flex-col gap-10 pb-16 sm:gap-14 sm:pb-24">
        <About />
        <Projects />
        <Skills />
        <Career />
        <Contact />
      </div>
    </main>
  );
}
