import { TECH_NEWS_DAILY_GITHUB_URL, TECH_NEWS_DAILY_LIVE_URL } from "@/lib/config";

const DECISIONS: readonly string[] = [
  "配信基盤を持たず、静的 HTML + GitHub Pages に寄せて運用コストをほぼゼロにした",
  "アーカイブ退避まで仕組みに含めて、履歴が壊れない構造にした",
];

export default function ProjectTechNewsDaily() {
  return (
    <article className="rounded-[18px] border border-white/8 bg-white/[0.04] p-7 sm:p-8">
      <h3 className="text-xl font-bold">
        tech-news-daily — 毎朝届く自動生成ニュースダイジェスト
      </h3>

      <div className="mt-4 space-y-4 text-sm leading-relaxed text-text/75">
        <p>
          毎朝、Claude Code のルーチンがニュースを集めて HTML を組み、GitHub
          Pages へ自動デプロイします。前日分はアーカイブに退避するので、公開から履歴管理まで人の手はかかりません。
        </p>
        <ul className="list-disc space-y-1 pl-5 text-text/65">
          {DECISIONS.map((d) => (
            <li key={d}>{d}</li>
          ))}
        </ul>
      </div>

      <div className="mt-5 flex gap-4 font-mono text-sm">
        <a
          href={TECH_NEWS_DAILY_GITHUB_URL}
          target="_blank"
          rel="noreferrer"
          className="text-teal-light hover:underline underline-offset-4"
        >
          GitHub →
        </a>
        <a
          href={TECH_NEWS_DAILY_LIVE_URL}
          target="_blank"
          rel="noreferrer"
          className="text-teal-light hover:underline underline-offset-4"
        >
          公開URL →
        </a>
      </div>
    </article>
  );
}
