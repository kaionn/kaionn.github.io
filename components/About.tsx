import Panel from "@/components/Panel";
import Section from "@/components/Section";

export default function About() {
  return (
    <Section id="about" heading="About" index={1}>
      <Panel>
        <div className="space-y-4 text-base leading-relaxed text-text/80">
          <p>
            フルスタックエンジニアです。業務では Rails / Go
            でバックエンドを書き、React / Next.js のフロントエンドから、Terraform
            + GitHub Actions による AWS の構築・運用まで担当しています。
          </p>
          <p>
            個人開発では「小さく作って市場に聞く」を方針に、アイデア集めから公開、撤退判定までを自動化した仕組みを回しています。
          </p>
        </div>
      </Panel>
    </Section>
  );
}
