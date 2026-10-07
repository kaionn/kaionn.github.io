const PIPELINE_STEPS: readonly string[] = [
  "Issue 起票",
  "LP 生成 PR",
  "merge で公開",
  "Discord 通知",
  "週次 KILL/WATCH/GRADUATE 判定",
];

/**
 * signal-lab の全工程を番号付きの縦一覧で表示する。
 * 小さい画面でも横スクロールなしで工程の流れを読み取れる。
 */
export default function PipelineDiagram() {
  return (
    <div
      className="pipeline-diagram rounded-lg border border-white/8 bg-bg/40 p-4"
      role="region"
      aria-label={`パイプライン: ${PIPELINE_STEPS.join(" → ")}`}
    >
      <ol className="pipeline-steps">
        {PIPELINE_STEPS.map((step) => (
          <li key={step} className="pipeline-step">
            <span className="pipeline-label">
              {step}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}
