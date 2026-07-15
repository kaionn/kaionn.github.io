import { CONTACT_EMAIL, GITHUB_USERNAME } from "@/lib/config";

export default function Sidebar() {
  return (
    <aside className="top-0 flex flex-col gap-6 border-b border-white/8 bg-white/[0.03] p-8 lg:sticky lg:h-screen lg:overflow-y-auto lg:border-b-0 lg:border-r lg:px-10 lg:py-12">
      {/* アバター: 1 カラム時(〜lg)は全幅だと横長クロップになるため幅を制限する */}
      <div className="relative max-w-[360px] shrink-0 lg:max-w-none">
        <div className="absolute -inset-3.5 rounded-[28px] bg-gradient-to-br from-accent/40 to-teal/25 blur-[24px]" />
        <img
          src="/avatar.jpg"
          alt="kaionn"
          className="relative block h-[200px] w-full rounded-3xl border border-white/15 object-cover lg:h-[280px]"
        />
      </div>

      {/* 名前・タイトル */}
      <div>
        <div className="text-[32px] font-black">
          kaionn<span className="text-accent">.</span>
        </div>
        <div className="mt-1 text-[15px] font-bold text-accent-light">
          フルスタックエンジニア
        </div>
      </div>

      {/* 受付中バッジ */}
      <div className="inline-flex w-fit items-center gap-2 self-start rounded-full border border-teal/30 bg-teal/12 px-4 py-2 text-[13px] font-bold text-teal-light">
        <span className="h-2 w-2 rounded-full bg-teal" />
        副業・業務委託 受付中
      </div>

      {/* キャッチコピー */}
      <p className="text-sm leading-8 text-text/70">
        アイデアを最速でかたちに。フロントエンドからインフラまで、ぜんぶ楽しくやるタイプです。
      </p>

      {/* ナビゲーション */}
      <nav className="mt-2 hidden flex-col gap-1 text-sm lg:flex">
        <a
          href="#about"
          className="rounded-xl px-4 py-2.5 text-text/75 transition-colors hover:bg-accent/12 hover:text-accent-light"
        >
          About
        </a>
        <a
          href="#skills"
          className="rounded-xl px-4 py-2.5 text-text/75 transition-colors hover:bg-accent/12 hover:text-accent-light"
        >
          Skills
        </a>
        <a
          href="#hobby-projects"
          className="rounded-xl px-4 py-2.5 text-text/75 transition-colors hover:bg-accent/12 hover:text-accent-light"
        >
          Hobby Projects
        </a>
        <a
          href="#career"
          className="rounded-xl px-4 py-2.5 text-text/75 transition-colors hover:bg-accent/12 hover:text-accent-light"
        >
          Career
        </a>
      </nav>

      {/* CTA */}
      <div className="mt-auto flex shrink-0 flex-col gap-2.5 text-sm">
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="rounded-full bg-gradient-to-r from-accent to-[#6C5CE7] px-6 py-3 text-center font-bold text-white shadow-[0_8px_30px_rgba(139,124,246,0.35)]"
        >
          お仕事のご相談
        </a>
        <div className="flex gap-2.5">
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noreferrer"
            className="flex-1 rounded-full border border-text/25 py-2.5 text-center transition-colors hover:border-accent/50 hover:text-accent-light"
          >
            GitHub
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noreferrer"
            className="flex-1 rounded-full border border-text/25 py-2.5 text-center transition-colors hover:border-accent/50 hover:text-accent-light"
          >
            X
          </a>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="flex-1 rounded-full border border-text/25 py-2.5 text-center transition-colors hover:border-accent/50 hover:text-accent-light"
          >
            Email
          </a>
        </div>
        <div className="mt-1.5 text-center text-[11px] text-text/35">
          © 2026 kaionn — kaionn.github.io
        </div>
      </div>
    </aside>
  );
}
