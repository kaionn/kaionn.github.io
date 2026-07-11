import ProjectSignalLab from "@/components/ProjectSignalLab";
import ProjectTechNewsDaily from "@/components/ProjectTechNewsDaily";

export default function Projects() {
  return (
    <section id="hobby-projects">
      <div className="mb-5 text-sm font-bold tracking-[0.14em] text-accent-light">
        HOBBY PROJECTS
      </div>
      <div className="flex flex-col gap-4">
        <ProjectSignalLab />
        <ProjectTechNewsDaily />
      </div>
    </section>
  );
}
