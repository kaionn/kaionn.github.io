"use client";

import LiveStatusRow from "@/components/LiveStatusRow";
import { formatJstTimestamp } from "@/lib/format";
import { fetchLatestCommitDate, fetchSignalLabProbeCount } from "@/lib/github";

async function loadTechNewsDailyMessage(): Promise<string> {
  const date = await fetchLatestCommitDate("kaionn", "tech-news-daily");
  return `tech-news-daily — ${formatJstTimestamp(date)} に自動配信済み`;
}

async function loadTechLearningDailyMessage(): Promise<string> {
  const date = await fetchLatestCommitDate("kaionn", "tech-learning-daily");
  return `tech-learning-daily — ${formatJstTimestamp(date)} に自動配信済み`;
}

async function loadSignalLabMessage(): Promise<string> {
  const count = await fetchSignalLabProbeCount();
  return `signal-lab — 現在 ${count} 本の Probe が検証中`;
}

/**
 * サイドバー内のシグネチャ要素: GitHub API から取得した「動いている証拠」。
 * 各行は独立して fetch し、失敗した行は個別に非表示になる。
 */
export default function LiveStatus() {
  return (
    <div className="rounded-xl border border-white/8 bg-white/[0.04] p-4">
      <div className="mb-2.5 flex items-center gap-2">
        <span
          className="h-2 w-2 shrink-0 rounded-full bg-teal shadow-[0_0_8px_2px_rgba(78,205,196,0.45)] animate-status-pulse motion-reduce:animate-none"
          aria-hidden="true"
        />
        <p className="font-mono text-xs uppercase tracking-widest text-muted">
          LIVE
        </p>
      </div>
      <ul className="flex flex-col gap-2">
        <LiveStatusRow load={loadTechNewsDailyMessage} />
        <LiveStatusRow load={loadTechLearningDailyMessage} />
        <LiveStatusRow load={loadSignalLabMessage} />
      </ul>
    </div>
  );
}
