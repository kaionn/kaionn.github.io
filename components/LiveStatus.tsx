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
    <ul className="flex flex-col gap-2">
      <LiveStatusRow load={loadTechNewsDailyMessage} />
      <LiveStatusRow load={loadSignalLabMessage} />
    </ul>
  );
}
