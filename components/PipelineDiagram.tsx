const PIPELINE_STEPS: readonly string[] = [
  "Issue 起票",
  "LP 生成 PR",
  "merge で公開",
  "Discord 通知",
  "週次 KILL/WATCH/GRADUATE 判定",
];

/**
 * signal-lab のパイプラインを横フロー図として表示する。
 * ページ本体を横スクロールさせないよう、図のコンテナ内だけで overflow-x させる。
 */
export default function PipelineDiagram() {
  return (
    <div
      className="overflow-x-auto rounded-xl border border-white/8 bg-bg/40 p-4"
      role="img"
      aria-label={`パイプライン: ${PIPELINE_STEPS.join(" → ")}`}
    >
      <ol className="flex w-max items-center gap-2 font-mono text-xs sm:text-sm">
        {PIPELINE_STEPS.map((step, index) => (
          <li key={step} className="flex items-center gap-2">
            <span className="whitespace-nowrap rounded border border-white/8 bg-bg px-3 py-2 text-text">
              {step}
            </span>
            {index < PIPELINE_STEPS.length - 1 ? (
              <span aria-hidden="true" className="text-accent-light">
                →
              </span>
            ) : null}
          </li>
        ))}
      </ol>
    </div>
  );
}
