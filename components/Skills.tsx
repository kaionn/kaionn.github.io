interface SkillCategory {
  readonly label: string;
  readonly color: "accent" | "teal" | "neutral";
  readonly items: readonly string[];
}

const SKILLS: readonly SkillCategory[] = [
  { label: "Backend", color: "teal", items: ["Rails", "Go", "gRPC"] },
  { label: "Frontend", color: "accent", items: ["TypeScript", "React", "Next.js"] },
  { label: "Infra", color: "neutral", items: ["AWS", "Terraform", "GitHub Actions"] },
];

const TAG_STYLES = {
  accent: "bg-accent/15 text-accent-light",
  teal: "bg-teal/15 text-teal-light",
  neutral: "bg-white/8 text-text",
} as const;

export default function Skills() {
  return (
    <section id="skills">
      <h2 className="section-heading"><span>03</span> Skills</h2>
      <div className="flex flex-col gap-[18px]">
        {SKILLS.map((category) => (
          <div
            key={category.label}
            className="flex flex-col gap-2 md:flex-row md:items-baseline md:gap-5"
          >
            <div className="shrink-0 text-[13px] text-muted md:w-[100px]">
              {category.label}
            </div>
            <div className="flex flex-wrap gap-2.5">
              {category.items.map((item) => (
                <span
                  key={item}
                  className={`rounded border border-white/10 px-[14px] py-2 text-sm ${TAG_STYLES[category.color]}`}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
