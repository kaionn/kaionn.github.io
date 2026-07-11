export default function About() {
  return (
    <section id="about">
      <div className="mb-4 text-sm font-bold tracking-[0.14em] text-accent-light">
        ABOUT
      </div>
      <h2 className="mb-5 text-[34px] font-black leading-snug">
        アイデアを、
        <span className="bg-gradient-to-r from-accent-light to-teal bg-clip-text text-transparent">
          最速でかたちに。
        </span>
      </h2>
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
