import Panel from "@/components/Panel";
import Section from "@/components/Section";

export default function About() {
  return (
    <Section id="about" heading="About" index={1}>
      <Panel>
        <div className="space-y-4 text-base leading-relaxed text-text/80">
          <p>
            フルスタックエンジニア。業務では Rails / Go
            によるバックエンド開発、React / Next.js のフロントエンド、Terraform +
            GitHub Actions による AWS インフラの構築・運用まで一貫して担当。
          </p>
          <p>
            個人では「小さく作って市場に聞く」検証ファースト開発を実践し、アイデア収集から公開・撤退判定までを自動化した仕組みを運用している。
          </p>
        </div>
      </Panel>
    </Section>
  );
}
