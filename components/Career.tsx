import Section from "@/components/Section";
import { RESUME_URL } from "@/lib/config";

interface CareerEntry {
  readonly period: string;
  readonly company: string;
  readonly role: string;
  readonly focus: string;
}

const CAREER_ENTRIES: readonly CareerEntry[] = [
  {
    period: "2021/12 – 現在",
    company: "freee",
    role: "フルスタックエンジニア",
    focus:
      "会計プロダクトの共通ワークフロー基盤（申請・承認）。承認経路エンジン（Go / gRPC）から申請基盤（Rails API）・埋め込みウィジェット（React / TypeScript）まで横断で担当",
  },
  {
    period: "2020/09 – 2021/11",
    company: "イノカ",
    role: "研究開発エンジニア",
    focus:
      "水槽 IoT システムを 1 人で 0 から設計・構築・運用（RaspberryPi / Arduino + Rails / AWS）。AWS IoT の PubSub で遠隔操作にも対応",
  },
  {
    period: "2018/04 – 2020/08",
    company: "ヤフー",
    role: "広告システムエンジニア",
    focus:
      "インターネット広告の入稿システム。ターゲット属性の新規追加や SpringBoot メジャーバージョンアップを事故なくリリース（Java / k8s）",
  },
];

export default function Career() {
  return (
    <Section id="career" heading="Career">
      <div className="space-y-3">
        <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,2fr)] gap-x-4 border-b border-line pb-2 font-mono text-xs uppercase tracking-wide text-ink/40">
          <span>期間</span>
          <span>所属 / 役割</span>
          <span>担当領域</span>
        </div>
        {CAREER_ENTRIES.map((entry) => (
          <div
            key={entry.period}
            className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,2fr)] gap-x-4 gap-y-1 pt-1"
          >
            <span className="font-mono text-sm text-ink/60">
              {entry.period}
            </span>
            <span className="text-sm text-ink/80">
              <span className="block font-medium">{entry.company}</span>
              <span className="block text-ink/60">{entry.role}</span>
            </span>
            <span className="text-sm leading-relaxed text-ink/80">
              {entry.focus}
            </span>
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
