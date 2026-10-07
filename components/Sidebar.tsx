import { CONTACT_EMAIL, GITHUB_USERNAME } from "@/lib/config";
import Image from "next/image";

const NAV_ITEMS = [
  ["01", "About", "about"],
  ["02", "Skills", "skills"],
  ["03", "Hobby Projects", "hobby-projects"],
  ["04", "Career", "career"],
  ["05", "Contact", "contact"],
] as const;

export default function Sidebar() {
  return (
    <aside className="profile-sidebar">
      <div className="profile-terminal" aria-hidden="true">kaionn@portfolio <span>~</span></div>
      <div className="profile-identity">
        <Image src="/avatar.jpg" alt="kaionn のアバター" width={88} height={88} className="profile-avatar" priority />
        <svg className="terminal-bot" aria-hidden="true" viewBox="0 0 32 32" fill="none">
          <path d="M16 3v5M13 3h6M6 10h20v17H6zM2 15h4M26 15h4M10 27v3M22 27v3" stroke="currentColor" strokeWidth="2" />
          <path d="M10 15h3v3h-3zM19 15h3v3h-3zM12 22h8" stroke="currentColor" strokeWidth="2" />
        </svg>
      </div>
      <div>
        <h1 className="profile-name">kaionn<span>.</span><svg className="dot-word" viewBox="0 0 32 7" aria-hidden="true"><defs><pattern id="letter-dots" width="2" height="2" patternUnits="userSpaceOnUse"><circle cx="0.7" cy="0.7" r="0.65" fill="currentColor" /></pattern></defs><path d="M0 0h5v1H1v2h3v1H1v2h4v1H0zM7 0h1l3 5V0h1v7h-1L8 2v5H7zM14 0h5v1h-4v5h3V4h-2V3h3v4h-5z" fill="url(#letter-dots)" /></svg></h1>
        <p className="profile-role">フルスタックエンジニア</p>
        <p className="profile-english">Full-stack Engineer</p>
      </div>
      <p className="profile-copy">アイデアを最速でかたちに。フロントエンドからインフラまで、ぜんぶ楽しくやるタイプです。</p>
      <div className="availability"><span aria-hidden="true" />副業・業務委託 受付中</div>
      <a href="#hobby-projects" className="primary-link">プロジェクトを見る <span aria-hidden="true">↗</span></a>
      <nav className="section-nav" aria-label="セクションナビゲーション">
        {NAV_ITEMS.map(([number, label, id]) => (
          <a key={id} href={`#${id}`}><span>{number}</span><i aria-hidden="true" />{label}</a>
        ))}
      </nav>
      <div className="profile-links">
        <a href={`https://github.com/${GITHUB_USERNAME}`} target="_blank" rel="noreferrer">GitHub ↗</a>
        <a href="https://x.com" target="_blank" rel="noreferrer">X ↗</a>
        <a href={`mailto:${CONTACT_EMAIL}`}>Email ↗</a>
      </div>
      <a className="consult-link" href={`mailto:${CONTACT_EMAIL}`}>お仕事のご相談 →</a>
    </aside>
  );
}
