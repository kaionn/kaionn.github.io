import {
  TECH_NEWS_DAILY_GITHUB_URL,
  TECH_NEWS_DAILY_LIVE_URL,
} from "@/lib/config";

const DECISIONS: readonly string[] = [
  "配信基盤を持たず「静的 HTML + Pages」に寄せ、運用コストをゼロに近づけた",
  "アーカイブ退避を仕組みに含め、蓄積が壊れない構造にした",
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
            技術ニュースの収集は毎日発生する定型作業。既存サービスの「量が多すぎる/興味領域と合わない」問題を、自分専用の自動パイプラインで解決した。
          </p>
        </div>

        <div>
          <p className="mb-1 font-mono text-xs uppercase tracking-wide text-muted">
            仕組み
          </p>
          <p>
            毎朝、Claude Code のルーチンが WebSearch でニュースを収集し、HTML
            を生成して GitHub Pages に自動デプロイ。前日分はアーカイブへ退避。人の手を介さず、公開から履歴管理までが毎日完結する。ヒーロー直下のライブステータス行は、このリポジトリの最新コミット日時と連動している。
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
