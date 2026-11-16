import type { ReactNode } from "react";

interface SkillCategory {
  readonly label: string;
  readonly color: "accent" | "teal" | "neutral";
  readonly icon: ReactNode;
  readonly items: readonly string[];
}

const SKILLS: readonly SkillCategory[] = [
  {
    label: "Backend",
    color: "teal",
    icon: (
      <>
        <rect x="3" y="4" width="18" height="6" rx="1.5" />
        <rect x="3" y="14" width="18" height="6" rx="1.5" />
        <path d="M7 7h.01M7 17h.01" />
      </>
    ),
    items: ["Rails", "Go", "gRPC"],
  },
  {
    label: "Frontend",
    color: "accent",
    icon: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="1.5" />
        <path d="M3 9h18M9 9v11" />
      </>
    ),
    items: ["TypeScript", "React", "Next.js"],
  },
  {
    label: "Infra",
    color: "neutral",
    icon: <path d="M7 18a4 4 0 0 1-.6-7.95A6 6 0 0 1 18 9a4.5 4.5 0 0 1-.5 9H7Z" />,
    items: ["AWS", "Terraform", "GitHub Actions", "Cloudflare"],
  },
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
            <div className="skill-label shrink-0 text-[13px] text-muted md:w-[100px]">
              <svg
                viewBox="0 0 24 24"
                width="14"
                height="14"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                {category.icon}
              </svg>
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
