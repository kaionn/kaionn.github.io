import { Badge } from "@astryxdesign/core/Badge";
import { Card } from "@astryxdesign/core/Card";
import { Heading } from "@astryxdesign/core/Heading";
import { HStack } from "@astryxdesign/core/HStack";
import { Link } from "@astryxdesign/core/Link";
import { List, ListItem } from "@astryxdesign/core/List";
import { Text } from "@astryxdesign/core/Text";
import PipelineDiagram from "@/components/PipelineDiagram";
import { SIGNAL_LAB_GITHUB_URL, SIGNAL_LAB_LIVE_URL } from "@/lib/config";

const DECISIONS: readonly string[] = [
  "撤退基準は設定ファイル(verdict-rules.yaml)に固定し、週次で機械的に判定。思い入れで延命しない",
  "Probe は「動くマイクロツール」と「LP + 待機リスト」の 2 型に分け、案の規模で使い分ける",
  "GitHub Actions を状態機械として使い、Issue / PR / デプロイをつないだ",
];

export default function ProjectSignalLab() {
  return (
    <article>
      <Card className="project-card" height="100%">
        <Badge variant="teal" label="FEATURED" />
        <Heading level={3} className="mt-2 text-xl font-bold">
          <span className="project-name">signal-lab</span>
          <span className="project-subtitle">検証ファースト開発の実験機構</span>
        </Heading>

        <div className="mt-4 space-y-4 text-sm leading-relaxed text-text/85">
          <Text as="p" type="inherit" display="block">
            以前の仕組みはアイデアから MVP を自動生成するものでしたが、84
            案を作って公開までいけたのは 1
            本だけでした。判断をデータに任せて、実験 1 回のコストを PR 1
            本分まで下げています。
          </Text>
          <PipelineDiagram />
          <List listStyle="disc" density="compact" edge="flush" className="project-decisions">
            {DECISIONS.map((d) => (
              <ListItem key={d} label={<Text type="inherit" className="decision-text">{d}</Text>} />
            ))}
          </List>
        </div>

        <HStack gap={4} className="mt-5 font-mono text-sm">
          <Link
            href={SIGNAL_LAB_GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            type="inherit"
            color="accent"
          >
            GitHub →
          </Link>
          <Link
            href={SIGNAL_LAB_LIVE_URL}
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
