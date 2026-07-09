import {
  TECH_NEWS_DAILY_GITHUB_URL,
  TECH_NEWS_DAILY_LIVE_URL,
} from "@/lib/config";

const DECISIONS: readonly string[] = [
  "配信基盤を持たず、静的 HTML + GitHub Pages に寄せて運用コストをほぼゼロにした",
  "アーカイブ退避まで仕組みに含めて、履歴が壊れない構造にした",
];

export default function ProjectTechNewsDaily() {
  return (
    <article>
      <h3 className="mb-1 font-heading text-xl font-bold text-text">
        tech-news-daily — 毎朝届く自動生成ニュースダイジェスト
      </h3>

      <div className="mt-4 space-y-4 text-base leading-relaxed text-text/80">
        <div>
          <p className="mb-1 font-mono text-xs uppercase tracking-wide text-muted">
            課題
          </p>
          <p>
            技術ニュースのチェックは毎日のことなのに、既存のサービスは量が多すぎたり興味とずれたりしていました。それなら自分専用の配信を作ってしまおう、というのが出発点です。
          </p>
        </div>

        <div>
          <p className="mb-1 font-mono text-xs uppercase tracking-wide text-muted">
            仕組み
          </p>
          <p>
            毎朝、Claude Code のルーチンがニュースを集めて HTML を組み、GitHub
            Pages
            へ自動デプロイします。前日分はアーカイブに退避するので、公開から履歴管理まで人の手はかかりません。冒頭の
            LIVE
            に出ている配信時刻は、このリポジトリの最新コミットとつながっています。
          </p>
        </div>

        <div>
          <p className="mb-1 font-mono text-xs uppercase tracking-wide text-muted">
            技術的な判断
          </p>
          <ul className="list-disc space-y-1 pl-5">
            {DECISIONS.map((decision) => (
              <li key={decision}>{decision}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-5 flex gap-4 font-mono text-sm">
        <a
          href={TECH_NEWS_DAILY_GITHUB_URL}
          target="_blank"
          rel="noreferrer"
          className="text-signal underline-offset-4 hover:underline"
        >
          GitHub
        </a>
        <a
          href={TECH_NEWS_DAILY_LIVE_URL}
          target="_blank"
          rel="noreferrer"
          className="text-signal underline-offset-4 hover:underline"
        >
          公開URL
        </a>
      </div>
    </article>
  );
}
