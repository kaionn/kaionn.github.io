import { Card } from "@astryxdesign/core/Card";
import { Heading } from "@astryxdesign/core/Heading";
import { HStack } from "@astryxdesign/core/HStack";
import { Link } from "@astryxdesign/core/Link";
import { List, ListItem } from "@astryxdesign/core/List";
import { Text } from "@astryxdesign/core/Text";
import {
  TECH_LEARNING_DAILY_GITHUB_URL,
  TECH_LEARNING_DAILY_LIVE_URL,
} from "@/lib/config";

const DECISIONS: readonly string[] = [
  "ネタ帳への 1 行追記だけで調査から公開まで自動で回る導線にした",
  "tech-news-daily とパイプラインを同型に揃え、運用の知見を横展開できるようにした",
];

export default function ProjectTechLearningDaily() {
  return (
    <article>
      <Card className="project-card" height="100%">
        <Heading level={3} className="text-xl font-bold">
          <span className="project-name">tech-learning-daily</span>
          <span className="project-subtitle">毎朝届く技術基礎の解説サイト</span>
        </Heading>

        <div className="mt-4 space-y-4 text-sm leading-relaxed text-text/85">
          <Text as="p" type="inherit" display="block">
            毎朝、GitHub Actions が topics.md のネタ帳から 1
            トピックを取り出し、初学者向けの解説記事を生成して Cloudflare
            Pages へ自動公開します。tech-news-daily
            の姉妹サイトで、パイプライン構成は同型です。
          </Text>
          <List listStyle="disc" density="compact" edge="flush" className="project-decisions">
            {DECISIONS.map((d) => (
              <ListItem key={d} label={<Text type="inherit" className="decision-text">{d}</Text>} />
            ))}
          </List>
        </div>

        <HStack gap={4} className="mt-5 font-mono text-sm">
          <Link
            href={TECH_LEARNING_DAILY_GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            type="inherit"
            color="accent"
          >
            GitHub →
          </Link>
          <Link
            href={TECH_LEARNING_DAILY_LIVE_URL}
            target="_blank"
            rel="noreferrer"
            type="inherit"
            color="accent"
          >
            公開URL →
          </Link>
        </HStack>
      </Card>
    </article>
  );
}
