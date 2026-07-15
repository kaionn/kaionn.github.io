import Sidebar from "@/components/Sidebar";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Career from "@/components/Career";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* 装飾グラデーション光球 */}
      <div className="pointer-events-none fixed -right-[120px] -top-[160px] h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,rgba(139,124,246,0.25),transparent_70%)]" />
      <div className="pointer-events-none fixed -bottom-[180px] left-[200px] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(78,205,196,0.12),transparent_70%)]" />

      {/* 2 カラム化は lg から。md(768px) では 400px サイドバーがメイン幅を圧迫するため 1 カラムを維持する */}
      <div className="relative grid lg:grid-cols-[400px_1fr]">
        <Sidebar />
        {/* min-w-0: PipelineDiagram の w-max が min-content として伝播し grid 列を押し広げるのを防ぐ */}
        <main className="flex min-w-0 flex-col gap-12 px-6 py-12 sm:px-10 lg:max-w-[860px] lg:gap-[72px] lg:px-[72px] lg:py-[72px]">
          <About />
          <Skills />
          <Projects />
          <Career />
          <Contact />
        </main>
      </div>
    </div>
  );
}
