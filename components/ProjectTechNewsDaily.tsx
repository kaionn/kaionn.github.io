import { Card } from "@astryxdesign/core/Card";
import { Heading } from "@astryxdesign/core/Heading";
import { HStack } from "@astryxdesign/core/HStack";
import { Link } from "@astryxdesign/core/Link";
import { List, ListItem } from "@astryxdesign/core/List";
import { Text } from "@astryxdesign/core/Text";
import { TECH_NEWS_DAILY_GITHUB_URL, TECH_NEWS_DAILY_LIVE_URL } from "@/lib/config";

const DECISIONS: readonly string[] = [
  "配信基盤を持たず、静的 HTML + Cloudflare Pages に寄せて運用コストをほぼゼロにした",
  "アーカイブ退避まで仕組みに含めて、履歴が壊れない構造にした",
];

export default function ProjectTechNewsDaily() {
  return (
    <article>
      <Card className="project-card" height="100%">
        <Heading level={3} className="text-xl font-bold">
          <span className="project-name">tech-news-daily</span>
          <span className="project-subtitle">毎朝届く自動生成ニュースダイジェスト</span>
        </Heading>

        <div className="mt-4 space-y-4 text-sm leading-relaxed text-text/85">
          <Text as="p" type="inherit" display="block">
            毎朝、Claude Code のルーチンがニュースを集めて HTML を組み、Cloudflare
            Pages へ自動デプロイします。前日分はアーカイブに退避するので、公開から履歴管理まで人の手はかかりません。
          </Text>
          <List listStyle="disc" density="compact" edge="flush" className="project-decisions">
            {DECISIONS.map((d) => (
              <ListItem key={d} label={<Text type="inherit" className="decision-text">{d}</Text>} />
            ))}
          </List>
        </div>

        <HStack gap={4} className="mt-5 font-mono text-sm">
          <Link
            href={TECH_NEWS_DAILY_GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            type="inherit"
            color="accent"
          >
            GitHub →
          </Link>
          <Link
            href={TECH_NEWS_DAILY_LIVE_URL}
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
