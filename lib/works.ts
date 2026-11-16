export type WorkGroupId = "play" | "daily";

export interface Work {
  readonly id: string;
  readonly group: WorkGroupId;
  readonly name: string;
  readonly summary: string;
  readonly liveUrl: string;
  readonly liveLabel: string;
  readonly githubUrl?: string;
  readonly imageSrc: string;
  readonly imageAlt: string;
  readonly imageWidth?: number;
  readonly imageHeight?: number;
  readonly tags: readonly string[];
}

export interface WorkGroup {
  readonly id: WorkGroupId;
  readonly title: string;
  readonly intro?: string;
}

export const WORK_GROUPS: readonly WorkGroup[] = [
  { id: "play", title: "今すぐ遊べる" },
  {
    id: "daily",
    title: "毎日動いている",
    intro: "毎朝、人の手を介さずに更新されます。",
  },
];

export const WORKS: readonly Work[] = [
  {
    id: "gravity-shodo",
    group: "play",
    name: "重力に従わない書道教室",
    summary:
      "書いた線が、時間とともに空へ昇っていく書道です。ブラウザで遊べます。",
    liveUrl: "https://gravity-shodo.kaion-lab.com/",
    liveLabel: "遊ぶ",
    imageSrc: "/works/gravity-shodo.jpg",
    imageAlt: "重力に従わない書道教室の画面。お題と書き枠が表示されている",
    tags: ["ゲーム", "ブラウザ"],
  },
  {
    id: "uragiri-reversi",
    group: "play",
    name: "裏切りリバーシ",
    summary: "寝返った石が、しゃべる。ブラウザで遊べます。",
    liveUrl: "https://uragiri-reversi.kaion-engin.workers.dev/",
    liveLabel: "遊ぶ",
    imageSrc: "/works/uragiri-reversi.png",
    imageAlt: "裏切りリバーシの題字と『寝返った石が、しゃべる。』の副題、石が吹き出しでしゃべる盤面",
    imageWidth: 1200,
    imageHeight: 630,
    tags: ["ゲーム", "ブラウザ", "AI 対戦"],
  },
  {
    id: "tech-news-daily",
    group: "daily",
    name: "Tech News Daily",
    summary: "毎朝更新する、テックニュースのダイジェストです。",
    liveUrl: "https://tech-news.kaion-lab.com/",
    liveLabel: "読む",
    githubUrl: "https://github.com/kaionn/tech-news-daily",
    imageSrc: "/works/tech-news-daily.png",
    imageAlt: "Tech News Daily の題字と「今朝のテックを、ひと目で。」",
    tags: ["自動更新", "ニュース", "コード公開"],
  },
  {
    id: "tech-learning-daily",
    group: "daily",
    name: "Tech Learning Daily",
    summary: "毎朝更新する、技術の基礎解説です。",
    liveUrl: "https://tech-learn.kaion-lab.com/",
    liveLabel: "読む",
    githubUrl: "https://github.com/kaionn/tech-learning-daily",
    imageSrc: "/works/tech-learning-daily.png",
    imageAlt: "Tech Learning Daily の題字と「なぜ？が解ける、毎朝の基礎解説。」",
    tags: ["自動更新", "技術解説", "コード公開"],
  },
];
