/**
 * サイト全体の設定定数。
 * 職務経歴書 PDF が用意できたら RESUME_URL に URL 文字列を設定する。
 * null の間は Career セクションのリンクを非表示にする。
 */
export const RESUME_URL: string | null = null;

export const GITHUB_USERNAME = "kaionn";
export const CONTACT_EMAIL = "kaion.engin@gmail.com";

export const SITE_TITLE = "Kaion — Full-stack Engineer";
export const SITE_DESCRIPTION =
  "作って終わりにしない。設計からインフラ、CI/CD まで、動き続ける仕組みごと届けるフルスタックエンジニア。signal-lab と、毎朝自動配信の tech-news / tech-learn を運用中。";

export const SIGNAL_LAB_GITHUB_URL = "https://github.com/kaionn/signal-lab";
export const SIGNAL_LAB_LIVE_URL = "https://signal-lab-six.vercel.app";

export const TECH_NEWS_DAILY_GITHUB_URL =
  "https://github.com/kaionn/tech-news-daily";
export const TECH_NEWS_DAILY_LIVE_URL = "https://tech-news.kaion-lab.com";

export const TECH_LEARNING_DAILY_GITHUB_URL =
  "https://github.com/kaionn/tech-learning-daily";
export const TECH_LEARNING_DAILY_LIVE_URL = "https://tech-learn.kaion-lab.com";

/** ライブステータス fetch 結果のキャッシュ有効期間 (ミリ秒) */
export const LIVE_STATUS_CACHE_TTL_MS = 10 * 60 * 1000;
