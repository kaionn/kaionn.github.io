/**
 * サイト全体の設定定数。
 * 職務経歴書 PDF が用意できたら RESUME_URL に URL 文字列を設定する。
 * null の間は Career セクションのリンクを非表示にする。
 */
export const RESUME_URL: string | null = null;

export const SITE_URL = "https://kaionn.github.io";
export const GITHUB_USERNAME = "kaionn";

/** Hero は GitHub の現在のアイコンを参照する。s は表示幅の 2〜3 倍。 */
export const GITHUB_AVATAR_URL =
  "https://avatars.githubusercontent.com/u/93774871?v=4&s=256";
export const CONTACT_EMAIL = "kaion.engin@gmail.com";
export const X_URL = "https://x.com/kai0nnn";

export const SITE_TITLE = "kaionn — 遊べるゲームと、小さなウェブアプリ";
export const SITE_DESCRIPTION =
  "書いた線が空へ昇っていく書道、石が寝返るリバーシ、毎朝更新する技術ニュースと基礎解説。ブラウザで遊べる作品と、小さなウェブアプリを作っています。";

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
