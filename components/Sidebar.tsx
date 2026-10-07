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
      <div className="profile-identity">
        <Image src="/avatar.jpg" alt="kaionn のアバター" width={88} height={88} className="profile-avatar" priority />
      </div>
      <div>
        <h1 className="profile-name">kaionn<span>.</span></h1>
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
