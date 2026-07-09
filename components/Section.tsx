import type { ReactNode } from "react";

interface SectionProps {
  readonly id?: string;
  readonly heading: string;
  readonly index: number;
  readonly children: ReactNode;
}

/**
 * 各セクション共通のラッパー。計器盤のパネルヘッダーラベル
 * (例: 01 / ABOUT) を先頭に置き、以降のパネル(children)を並べる。
 */
export default function Section({ id, heading, index, children }: SectionProps) {
  return (
    <section id={id}>
      <div className="mb-4 flex items-center gap-3">
        <p className="shrink-0 font-mono text-xs uppercase tracking-widest text-muted">
          <span className="text-signal">{String(index).padStart(2, "0")}</span>
          {" / "}
          {heading.toUpperCase()}
        </p>
        <span aria-hidden="true" className="h-px flex-1 bg-line" />
      </div>
      {children}
    </section>
  );
}
