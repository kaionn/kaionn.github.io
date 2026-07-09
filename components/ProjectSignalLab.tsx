import PipelineDiagram from "@/components/PipelineDiagram";
import { SIGNAL_LAB_GITHUB_URL, SIGNAL_LAB_LIVE_URL } from "@/lib/config";

const DECISIONS: readonly string[] = [
  "撤退基準(verdict-rules.yaml)を人間の感覚ではなく設定ファイルに固定し、週次で機械的に判定させた",
  "Probe を「動くマイクロツール」と「LP + 待機リスト」の2型に分け、案の規模で使い分けた",
  "GitHub Actions を状態機械として使い、Issue / PR / デプロイを接続した",
];

export default function ProjectSignalLab() {
  return (
    <article>
      <h3 className="mb-1 font-heading text-xl font-bold text-ink">
        signal-lab — 検証ファースト開発の実験機構
      </h3>

      <div className="mt-4 space-y-4 text-base leading-relaxed text-ink/80">
        <div>
          <p className="mb-1 font-mono text-xs uppercase tracking-wide text-status">
            課題
          </p>
          <p>
            旧機構ではアイデアから MVP を自動生成していたが、84案を生成して公開に至ったのは1本のみ。原因は「人間の判断がデータの前に置かれ、実験単価が高すぎた」こと。
          </p>
        </div>

        <div>
          <p className="mb-1 font-mono text-xs uppercase tracking-wide text-status">
            仕組み
          </p>
          <p className="mb-4">
            判断コストを人間からデータに移し、実験単価を「PR 1本分」まで下げた。
          </p>
          <PipelineDiagram />
        </div>

        <div>
          <p className="mb-1 font-mono text-xs uppercase tracking-wide text-status">
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
