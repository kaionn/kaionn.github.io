import Section from "@/components/Section";
import { RESUME_URL } from "@/lib/config";

interface CareerEntry {
  readonly period: string;
  readonly role: string;
  readonly focus: string;
}

/**
 * 職務経歴書の completion 待ちのプレースホルダ。
 * 内容が確定したらここを実データに差し替える。
 */
const PLACEHOLDER_ENTRIES: readonly CareerEntry[] = [
  { period: "____ – ____", role: "____", focus: "____" },
  { period: "____ – ____", role: "____", focus: "____" },
  { period: "____ – ____", role: "____", focus: "____" },
];

export default function Career() {
  return (
    <Section id="career" heading="Career">
      <div className="space-y-3">
        <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,2fr)] gap-x-4 border-b border-line pb-2 font-mono text-xs uppercase tracking-wide text-ink/40">
          <span>期間</span>
          <span>役割</span>
          <span>担当領域</span>
        </div>
        {PLACEHOLDER_ENTRIES.map((entry, index) => (
          <div
            key={index}
            className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,2fr)] gap-x-4 font-mono text-sm text-ink/30"
          >
            <span>{entry.period}</span>
            <span>{entry.role}</span>
            <span>{entry.focus}</span>
          </div>
        ))}
      </div>

      {RESUME_URL !== null ? (
        <a
          href={RESUME_URL}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-block font-mono text-sm text-signal underline-offset-4 hover:underline"
        >
          職務経歴書(PDF)
        </a>
      ) : null}
    </Section>
  );
}
