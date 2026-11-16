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
  },
  {
    id: "uragiri-reversi",
    group: "play",
    name: "裏切りリバーシ",
    summary: "石が寝返り、しゃべり出すリバーシです。ブラウザで遊べます。",
    liveUrl: "https://uragiri-reversi.kaion-engin.workers.dev/",
    liveLabel: "遊ぶ",
    imageSrc: "/works/uragiri-reversi.jpg",
    imageAlt: "裏切りリバーシのタイトル画面。ふたりで対戦と AI と対戦が選べる",
  },
  {
    id: "tech-news-daily",
    group: "daily",
    name: "Tech News Daily",
    summary: "毎朝更新する、テックニュースのダイジェストです。",
    liveUrl: "https://tech-news.kaion-lab.com/",
    liveLabel: "読む",
    githubUrl: "https://github.com/kaionn/tech-news-daily",
    imageSrc: "/works/tech-news-daily.jpg",
    imageAlt: "Tech News Daily の画面。当日のダイジェストと見出しが見える",
  },
  {
    id: "tech-learning-daily",
    group: "daily",
    name: "Tech Learning Daily",
    summary: "毎朝更新する、技術の基礎解説です。",
    liveUrl: "https://tech-learn.kaion-lab.com/",
    liveLabel: "読む",
    githubUrl: "https://github.com/kaionn/tech-learning-daily",
    imageSrc: "/works/tech-learning-daily.jpg",
    imageAlt: "Tech Learning Daily の画面。当日の解説記事が見える",
  },
];
