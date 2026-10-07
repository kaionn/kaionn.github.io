export default function About() {
  return (
    <section id="about">
      <h2 className="section-heading"><span>02</span> About</h2>
      <h3 className="about-title mb-5 text-[24px] font-bold leading-[1.5] md:text-[30px]">
        つくって、回して、
        <span className="whitespace-nowrap text-accent-light">
          放っておく。
        </span>
      </h3>
      <div className="max-w-[640px] space-y-4 text-base leading-[1.95] text-text/85">
        <p>
          フルスタックエンジニアです。業務では Rails / Go
          でバックエンドを書き、React / Next.js のフロントエンドから、Terraform
          + GitHub Actions による AWS の構築・運用まで担当しています。
        </p>
        <p>
          個人開発では「小さく作って市場に聞く」を方針に、アイデア集めから公開、撤退判定までを自動化した仕組みを回しています。
        </p>
      </div>
    </section>
  );
}
