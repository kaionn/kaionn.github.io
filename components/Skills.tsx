import Section from "@/components/Section";

interface SkillRow {
  readonly category: string;
  readonly description: string;
}

const SKILLS: readonly SkillRow[] = [
  {
    category: "Backend",
    description: "Go(gRPC / errgroup 等の並行処理設計)",
  },
  {
    category: "Frontend",
    description: "React / Next.js / Tailwind CSS / shadcn/ui",
  },
  {
    category: "Infra",
    description: "AWS / Terraform(state 管理・plan 最適化)/ GitHub Actions",
  },
  { category: "Mobile", description: "iOS(Swift / SwiftUI)" },
  { category: "Other", description: "日英バイリンガル" },
];

export default function Skills() {
  return (
    <Section id="skills" heading="Skills">
      <dl className="space-y-3">
        {SKILLS.map((skill) => (
          <div
            key={skill.category}
            className="flex flex-col gap-1 sm:flex-row sm:gap-3"
          >
            <dt className="w-28 shrink-0 font-mono text-sm font-medium text-signal">
              {skill.category}
            </dt>
            <dd className="text-base text-ink/80">{skill.description}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
