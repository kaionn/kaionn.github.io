import Image from "next/image";
import { Card } from "@astryxdesign/core/Card";
import { Heading } from "@astryxdesign/core/Heading";
import { HStack } from "@astryxdesign/core/HStack";
import { Link } from "@astryxdesign/core/Link";
import { Text } from "@astryxdesign/core/Text";
import type { Work } from "@/lib/works";

interface WorkCardProps {
  readonly work: Work;
  readonly featured?: boolean;
}

export default function WorkCard({ work, featured = false }: WorkCardProps) {
  return (
    <article>
      <Card className={`project-card${featured ? " project-card-featured" : ""}`} height="100%">
        <div className={`work-thumb-wrap${work.imageHeight === 630 ? " is-og" : ""}`}>
          <Image
            src={work.imageSrc}
            alt={work.imageAlt}
            width={work.imageWidth ?? 1200}
            height={work.imageHeight ?? 750}
            className="work-thumb"
          />
        </div>
        <ul className="work-tags" aria-label="タグ">
          {work.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <Heading level={4} className="text-xl font-bold">
          <span className="project-name">{work.name}</span>
        </Heading>
        <Text as="p" type="inherit" display="block" className="work-summary">
          {work.summary}
        </Text>
        <HStack gap={4} className="mt-5 font-mono text-sm">
          <Link
            href={work.liveUrl}
            target="_blank"
            rel="noreferrer"
            type="inherit"
            color="accent"
          >
            {work.liveLabel} →
          </Link>
          {work.githubUrl ? (
            <Link
              href={work.githubUrl}
              target="_blank"
              rel="noreferrer"
              type="inherit"
              color="accent"
            >
              GitHub →
            </Link>
          ) : null}
        </HStack>
      </Card>
    </article>
  );
}
