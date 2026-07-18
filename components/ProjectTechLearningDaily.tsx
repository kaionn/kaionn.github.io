import {
  TECH_LEARNING_DAILY_GITHUB_URL,
  TECH_LEARNING_DAILY_LIVE_URL,
} from "@/lib/config";

const DECISIONS: readonly string[] = [
  "ネタ帳への 1 行追記だけで調査から公開まで自動で回る導線にした",
  "tech-news-daily とパイプラインを同型に揃え、運用の知見を横展開できるようにした",
];

export default function ProjectTechLearningDaily() {
  return (
    <article className="rounded-[18px] border border-white/8 bg-white/[0.04] p-7 sm:p-8">
      <h3 className="text-xl font-bold">
        tech-learning-daily — 毎朝届く技術基礎の解説サイト
      </h3>

      <div className="mt-4 space-y-4 text-sm leading-relaxed text-text/75">
        <p>
          毎朝、GitHub Actions が topics.md のネタ帳から 1
          トピックを取り出し、初学者向けの解説記事を生成して Cloudflare
          Pages へ自動公開します。tech-news-daily
          の姉妹サイトで、パイプライン構成は同型です。
        </p>
        <ul className="list-disc space-y-1 pl-5 text-text/65">
          {DECISIONS.map((d) => (
            <li key={d}>{d}</li>
          ))}
        </ul>
      </div>

      <div className="mt-5 flex gap-4 font-mono text-sm">
        <a
          href={TECH_LEARNING_DAILY_GITHUB_URL}
          target="_blank"
          rel="noreferrer"
          className="text-teal-light hover:underline underline-offset-4"
        >
          GitHub →
        </a>
        <a
          href={TECH_LEARNING_DAILY_LIVE_URL}
          target="_blank"
          rel="noreferrer"
          className="text-teal-light hover:underline underline-offset-4"
        >
          公開URL →
        </a>
      </div>
    </article>
  );
}
