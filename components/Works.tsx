import { Heading } from "@astryxdesign/core/Heading";
import { Text } from "@astryxdesign/core/Text";
import WorkCard from "@/components/WorkCard";
import { WORK_GROUPS, WORKS } from "@/lib/works";

export default function Works() {
  return (
    <section id="works">
      <span id="hobby-projects" hidden />
      <Heading level={2} className="section-heading">
        <span>01</span> Works
      </Heading>
      {WORK_GROUPS.map((group) => {
        const works = WORKS.filter((work) => work.group === group.id);
        const featured = group.id === "play";
        return (
          <div key={group.id} className="work-group">
            <h3 className="work-group-title">{group.title}</h3>
            {group.intro ? (
              <Text as="p" type="inherit" display="block" className="work-group-intro">
                {group.intro}
              </Text>
            ) : null}
            <div className="project-grid">
              {works.map((work) => (
                <WorkCard key={work.id} work={work} featured={featured} />
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
}
