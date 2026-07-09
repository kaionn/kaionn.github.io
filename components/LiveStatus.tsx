"use client";

import LiveStatusRow from "@/components/LiveStatusRow";
import { formatJstTimestamp } from "@/lib/format";
import { fetchLatestCommitDate, fetchSignalLabProbeCount } from "@/lib/github";

async function loadTechNewsDailyMessage(): Promise<string> {
  const date = await fetchLatestCommitDate("kaionn", "tech-news-daily");
  return `tech-news-daily — ${formatJstTimestamp(date)} に自動配信済み`;
}

async function loadSignalLabMessage(): Promise<string> {
  const count = await fetchSignalLabProbeCount();
  return `signal-lab — 現在 ${count} 本の Probe が検証中`;
}

/**
 * ヒーロー直下のシグネチャ要素: GitHub API から取得した「動いている証拠」。
 * 各行は独立して fetch し、失敗した行は個別に非表示になる。
 */
export default function LiveStatus() {
  return (
    <div className="rounded-lg border border-line bg-gradient-to-b from-panel to-panel-deep p-4 shadow-[inset_0_1px_0_0_rgba(230,234,242,0.05),0_12px_28px_-16px_rgba(0,0,0,0.75)] sm:p-5">
      <div className="mb-3 flex items-center gap-2">
        <span
          className="h-2 w-2 shrink-0 rounded-full bg-status shadow-[0_0_8px_2px_rgba(251,191,36,0.45)] animate-status-pulse motion-reduce:animate-none"
          aria-hidden="true"
        />
        <p className="font-mono text-xs uppercase tracking-widest text-muted">
          LIVE
        </p>
      </div>
      <ul className="flex flex-col gap-2">
        <LiveStatusRow load={loadTechNewsDailyMessage} />
        <LiveStatusRow load={loadSignalLabMessage} />
      </ul>
    </div>
  );
}
