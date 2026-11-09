import { Heading } from "@astryxdesign/core/Heading";
import ProjectSignalLab from "@/components/ProjectSignalLab";
import ProjectTechNewsDaily from "@/components/ProjectTechNewsDaily";
import ProjectTechLearningDaily from "@/components/ProjectTechLearningDaily";

export default function Projects() {
  return (
    <section id="hobby-projects">
      <Heading level={2} className="section-heading"><span>01</span> Hobby Projects</Heading>
      <div className="project-grid">
        <ProjectSignalLab />
        <ProjectTechNewsDaily />
        <ProjectTechLearningDaily />
      </div>
    </section>
  );
}
