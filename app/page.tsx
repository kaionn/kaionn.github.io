import Sidebar from "@/components/Sidebar";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Career from "@/components/Career";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">本文へスキップ</a>
      <div className="portfolio-layout">
        <Sidebar />
        <main id="main-content" tabIndex={-1} className="portfolio-main">
          <About />
          <Skills />
          <Projects />
          <Career />
          <Contact />
          <footer className="site-footer">© 2026 kaionn · kaionn.github.io</footer>
        </main>
      </div>
    </div>
  );
}
