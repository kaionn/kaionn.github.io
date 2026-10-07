export default function About() {
  return (
    <section id="about">
      <h2 className="section-heading"><span>01</span> ~/about</h2>
      <h3 className="mb-5 text-[26px] font-black leading-snug md:text-[34px]">
        つくって、回して、
        <span className="text-accent-light">
          放っておく。
        </span>
      </h3>
      <div className="max-w-[640px] space-y-4 text-base leading-[2.2] text-text/85">
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
