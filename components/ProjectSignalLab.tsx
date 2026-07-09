import PipelineDiagram from "@/components/PipelineDiagram";
import { SIGNAL_LAB_GITHUB_URL, SIGNAL_LAB_LIVE_URL } from "@/lib/config";

const DECISIONS: readonly string[] = [
  "撤退基準は設定ファイル(verdict-rules.yaml)に固定し、週次で機械的に判定。思い入れで延命しない",
  "Probe は「動くマイクロツール」と「LP + 待機リスト」の 2 型に分け、案の規模で使い分ける",
  "GitHub Actions を状態機械として使い、Issue / PR / デプロイをつないだ",
];

export default function ProjectSignalLab() {
  return (
    <article>
      <h3 className="mb-1 font-heading text-xl font-bold text-text">
        signal-lab — 検証ファースト開発の実験機構
      </h3>

      <div className="mt-4 space-y-4 text-base leading-relaxed text-text/80">
        <div>
          <p className="mb-1 font-mono text-xs uppercase tracking-wide text-muted">
            課題
          </p>
          <p>
            以前の仕組みはアイデアから MVP を自動生成するものでしたが、84
            案を作って公開までいけたのは 1
            本だけでした。作る前に人間の判断を挟みすぎて、1
            回の実験が重すぎたのが敗因です。
          </p>
        </div>

        <div>
          <p className="mb-1 font-mono text-xs uppercase tracking-wide text-muted">
            仕組み
          </p>
          <p className="mb-4">
            続ける・やめるの判断をデータに任せて、実験 1 回のコストを PR 1
            本分まで下げています。人間がやるのは Issue を立てることと merge
            することだけです。
          </p>
          <PipelineDiagram />
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
          href={SIGNAL_LAB_GITHUB_URL}
          target="_blank"
          rel="noreferrer"
          className="text-signal underline-offset-4 hover:underline"
        >
          GitHub
        </a>
        <a
          href={SIGNAL_LAB_LIVE_URL}
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
