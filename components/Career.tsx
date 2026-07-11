import { RESUME_URL } from "@/lib/config";

interface CareerEntry {
  readonly period: string;
  readonly company: string;
  readonly role: string;
  readonly focus: string;
  readonly current?: boolean;
}

const CAREER_ENTRIES: readonly CareerEntry[] = [
  {
    period: "2021/12 – 現在",
    company: "freee",
    role: "フルスタックエンジニア",
    focus:
      "会計プロダクトの共通ワークフロー基盤（申請・承認）。承認経路エンジン（Go / gRPC）から申請基盤（Rails API）・埋め込みウィジェット（React / TypeScript）まで横断で担当",
    current: true,
  },
  {
    period: "2020/09 – 2021/11",
    company: "イノカ",
    role: "研究開発エンジニア",
    focus:
      "水槽 IoT システムを 1 人で 0 から設計・構築・運用（RaspberryPi / Arduino + Rails / AWS）",
  },
  {
    period: "2018/04 – 2020/08",
    company: "ヤフー",
    role: "広告システムエンジニア",
    focus:
      "インターネット広告の入稿システム。ターゲット属性の新規追加や SpringBoot メジャーバージョンアップ（Java / k8s）",
  },
];

export default function Career() {
  return (
    <section id="career">
      <div className="mb-6 text-sm font-bold tracking-[0.14em] text-accent-light">
        CAREER
      </div>
      <div className="ml-1.5 flex flex-col border-l-2 border-accent/30">
        {CAREER_ENTRIES.map((entry, i) => (
          <div
            key={entry.period}
            className={`relative pl-7 ${i < CAREER_ENTRIES.length - 1 ? "pb-8" : "pb-2"}`}
          >
            <span
              className={`absolute -left-[7px] top-1.5 h-3 w-3 rounded-full ${entry.current ? "bg-accent" : "bg-accent/45"}`}
            />
            <div className="text-[13px] text-accent-light">{entry.period}</div>
            <div className="mt-1 text-[17px] font-bold">
              {entry.company} / {entry.role}
            </div>
            <div className="mt-1.5 text-sm leading-relaxed text-text/60">
              {entry.focus}
            </div>
          </div>
        ))}
      </div>
      {RESUME_URL !== null && (
        <a
          href={RESUME_URL}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-block font-mono text-sm text-accent-light underline-offset-4 hover:underline"
        >
          職務経歴書(PDF)
        </a>
      )}
    </section>
  );
}
