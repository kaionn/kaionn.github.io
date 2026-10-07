import ProjectSignalLab from "@/components/ProjectSignalLab";
import ProjectTechNewsDaily from "@/components/ProjectTechNewsDaily";
import ProjectTechLearningDaily from "@/components/ProjectTechLearningDaily";

export default function Projects() {
  return (
    <section id="hobby-projects">
      <h2 className="section-heading"><span>03</span> ~/projects</h2>
      <div className="flex flex-col gap-4">
        <ProjectSignalLab />
        <ProjectTechNewsDaily />
        <ProjectTechLearningDaily />
      </div>
    </section>
  );
}
