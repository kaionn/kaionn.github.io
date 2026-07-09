import { z } from "zod";
import { LIVE_STATUS_CACHE_TTL_MS } from "@/lib/config";
import { getCachedOrFetch } from "@/lib/localStorageCache";

const GITHUB_API_BASE = "https://api.github.com";

async function fetchGithubJson(path: string): Promise<unknown> {
  const response = await fetch(`${GITHUB_API_BASE}${path}`, {
    headers: { Accept: "application/vnd.github+json" },
  });

  if (!response.ok) {
    throw new Error(`GitHub API request failed: ${response.status}`);
  }

  return response.json() as Promise<unknown>;
}

const commitListSchema = z
  .array(
    z.object({
      commit: z.object({
        committer: z.object({
          date: z.string(),
        }),
      }),
    }),
  )
  .min(1);

/**
 * リポジトリの最新コミット日時を取得する。
 * `commits?per_page=1` の先頭要素の committer.date を返す。
 * キャッシュは JSON 経由のため Date ではなく ISO 文字列で保存し、取り出し後に Date 化する。
 */
export async function fetchLatestCommitDate(
  owner: string,
  repo: string,
): Promise<Date> {
  const isoDate = await getCachedOrFetch(
    `github-latest-commit:${owner}/${repo}`,
    LIVE_STATUS_CACHE_TTL_MS,
    async () => {
      const raw = await fetchGithubJson(
        `/repos/${owner}/${repo}/commits?per_page=1`,
      );
      const commits = commitListSchema.parse(raw);
      return commits[0].commit.committer.date;
    },
  );
  return new Date(isoDate);
}

const contentsEntrySchema = z.object({
  type: z.string(),
  name: z.string(),
});
const contentsListSchema = z.array(contentsEntrySchema);

/**
 * signal-lab の experiments ディレクトリを走査し、
 * `_` で始まらないディレクトリの数 (= 検証中の Probe 数) を返す。
 */
export async function fetchSignalLabProbeCount(): Promise<number> {
  return getCachedOrFetch(
    "github-signal-lab-probe-count",
    LIVE_STATUS_CACHE_TTL_MS,
    async () => {
      const raw = await fetchGithubJson(
        "/repos/kaionn/signal-lab/contents/experiments",
      );
      const entries = contentsListSchema.parse(raw);
      return entries.filter(
        (entry) => entry.type === "dir" && !entry.name.startsWith("_"),
      ).length;
    },
  );
}
