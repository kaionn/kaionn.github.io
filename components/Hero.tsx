import Image from "next/image";
import { CONTACT_EMAIL, GITHUB_USERNAME } from "@/lib/config";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="profile-name">
      <div className="hero-heading">
        <div className="hero-intro"><Image src="/avatar.jpg" alt="kaionn のアバター" width={64} height={64} className="profile-avatar" priority /><p>Full-stack Engineer</p></div>
        <h1 id="profile-name">kaionn<span>.</span></h1>
        <p className="profile-role">フルスタックエンジニア</p>
      </div>
      <div className="hero-description">
        <p className="profile-copy">アイデアを最速でかたちに。フロントエンドからインフラまで、ぜんぶ楽しくやるタイプです。</p>
        <p className="availability"><span aria-hidden="true" />副業・業務委託 受付中</p>
        <div className="hero-actions">
          <a href="#hobby-projects" className="primary-link">プロジェクトを見る <span aria-hidden="true">↗</span></a>
          <a className="consult-link" href={`mailto:${CONTACT_EMAIL}`}>お仕事のご相談 →</a>
        </div>
        <div className="profile-links">
          <a href={`https://github.com/${GITHUB_USERNAME}`} target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href="https://x.com" target="_blank" rel="noreferrer">X ↗</a>
          <a href={`mailto:${CONTACT_EMAIL}`}>Email ↗</a>
        </div>
      </div>
      <span className="dot-accent" aria-hidden="true" />
    </section>
  );
}
