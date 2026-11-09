import Image from "next/image";
import { Badge } from "@astryxdesign/core/Badge";
import { Button } from "@astryxdesign/core/Button";
import { Heading } from "@astryxdesign/core/Heading";
import { HStack } from "@astryxdesign/core/HStack";
import { Link } from "@astryxdesign/core/Link";
import { Text } from "@astryxdesign/core/Text";
import { CONTACT_EMAIL, GITHUB_USERNAME } from "@/lib/config";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="profile-name">
      <div className="hero-heading">
        <HStack className="hero-intro"><Image src="/avatar.jpg" alt="kaionn のアバター" width={64} height={64} className="profile-avatar" priority /><Text as="p" type="inherit" display="block" color="secondary">Full-stack Engineer</Text></HStack>
        <Heading level={1} type="display-1" id="profile-name">kaionn<span>.</span></Heading>
        <Text as="p" type="inherit" display="block" className="profile-role">フルスタックエンジニア</Text>
      </div>
      <div className="hero-description">
        <Text as="p" type="inherit" display="block" className="profile-copy">アイデアを最速でかたちに。フロントエンドからインフラまで、ぜんぶ楽しくやるタイプです。</Text>
        <Badge className="mt-6" variant="teal" label="副業・業務委託 受付中" />
        <HStack className="hero-actions">
          <Button href="#hobby-projects" variant="primary" size="lg" label="プロジェクトを見る">プロジェクトを見る <span aria-hidden="true">↗</span></Button>
          <Link className="consult-link" href={`mailto:${CONTACT_EMAIL}`} type="inherit" color="secondary">お仕事のご相談 →</Link>
        </HStack>
        <HStack className="profile-links">
          <Link href={`https://github.com/${GITHUB_USERNAME}`} target="_blank" rel="noreferrer" type="inherit" color="secondary">GitHub ↗</Link>
          <Link href="https://x.com" target="_blank" rel="noreferrer" type="inherit" color="secondary">X ↗</Link>
          <Link href={`mailto:${CONTACT_EMAIL}`} type="inherit" color="secondary">Email ↗</Link>
        </HStack>
      </div>
      <span className="dot-accent" aria-hidden="true" />
    </section>
  );
}
