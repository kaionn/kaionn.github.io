import PipelineDiagram from "@/components/PipelineDiagram";
import { SIGNAL_LAB_GITHUB_URL, SIGNAL_LAB_LIVE_URL } from "@/lib/config";

const DECISIONS: readonly string[] = [
  "撤退基準は設定ファイル(verdict-rules.yaml)に固定し、週次で機械的に判定。思い入れで延命しない",
  "Probe は「動くマイクロツール」と「LP + 待機リスト」の 2 型に分け、案の規模で使い分ける",
  "GitHub Actions を状態機械として使い、Issue / PR / デプロイをつないだ",
];

export default function ProjectSignalLab() {
  return (
    <article className="rounded-[18px] border border-accent/30 bg-gradient-to-br from-accent/[0.18] to-[#6C5CE7]/[0.06] p-7 sm:p-8">
      <div className="text-xs font-bold tracking-[0.14em] text-accent-light">
        FEATURED
      </div>
      <h3 className="mt-2 text-xl font-bold">
        signal-lab — 検証ファースト開発の実験機構
      </h3>

      <div className="mt-4 space-y-4 text-sm leading-relaxed text-text/75">
        <p>
          以前の仕組みはアイデアから MVP を自動生成するものでしたが、84
          案を作って公開までいけたのは 1
          本だけでした。判断をデータに任せて、実験 1 回のコストを PR 1
          本分まで下げています。
        </p>
        <PipelineDiagram />
        <ul className="list-disc space-y-1 pl-5 text-text/65">
          {DECISIONS.map((d) => (
            <li key={d}>{d}</li>
          ))}
        </ul>
      </div>

      <div className="mt-5 flex gap-4 font-mono text-sm">
        <a
          href={SIGNAL_LAB_GITHUB_URL}
          target="_blank"
          rel="noreferrer"
          className="text-accent-light hover:underline underline-offset-4"
        >
          GitHub →
        </a>
        <a
          href={SIGNAL_LAB_LIVE_URL}
          target="_blank"
          rel="noreferrer"
          className="text-accent-light hover:underline underline-offset-4"
        >
          公開URL →
        </a>
      </div>
    </article>
  );
}
