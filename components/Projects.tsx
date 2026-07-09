import Panel from "@/components/Panel";
import ProjectSignalLab from "@/components/ProjectSignalLab";
import ProjectTechNewsDaily from "@/components/ProjectTechNewsDaily";
import Section from "@/components/Section";

export default function Projects() {
  return (
    <Section id="projects" heading="Projects" index={2}>
      <div className="flex flex-col gap-6">
        <Panel>
          <ProjectSignalLab />
        </Panel>
        <Panel>
          <ProjectTechNewsDaily />
        </Panel>
      </div>
    </Section>
  );
}
