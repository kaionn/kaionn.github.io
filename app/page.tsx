import { Link } from "@astryxdesign/core/Link";
import { Text } from "@astryxdesign/core/Text";
import { VStack } from "@astryxdesign/core/VStack";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Career from "@/components/Career";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="site-shell" id="top">
      <Link className="skip-link" href="#main-content" type="inherit" color="inherit">本文へスキップ</Link>
      <div className="portfolio-layout">
        <Header />
        <VStack as="main" id="main-content" tabIndex={-1} className="portfolio-main">
          <Hero />
          <Projects />
          <About />
          <Skills />
          <Career />
          <Contact />
          <footer className="site-footer"><Text type="inherit" color="inherit">© 2026 kaionn · kaionn.github.io</Text></footer>
        </VStack>
      </div>
    </div>
  );
}
