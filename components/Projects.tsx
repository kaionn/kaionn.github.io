import ProjectSignalLab from "@/components/ProjectSignalLab";
import ProjectTechNewsDaily from "@/components/ProjectTechNewsDaily";
import Section from "@/components/Section";

export default function Projects() {
  return (
    <Section id="projects" heading="Projects">
      <div className="space-y-12">
        <ProjectSignalLab />
        <div className="border-t border-line" />
        <ProjectTechNewsDaily />
      </div>
    </Section>
  );
}
