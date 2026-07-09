import type { ReactNode } from "react";

interface SectionProps {
  readonly id?: string;
  readonly heading?: string;
  readonly eyebrow?: string;
  readonly withTopDivider?: boolean;
  readonly children: ReactNode;
}

/**
 * 各セクション共通のラッパー。1カラム読み物レイアウトの縦の間隔と
 * セクション間の罫線 (line色) を一元管理する。
 */
export default function Section({
  id,
  heading,
  eyebrow,
  withTopDivider = true,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-12 sm:py-16 ${withTopDivider ? "border-t border-line" : ""}`}
    >
      {eyebrow ? (
        <p className="mb-2 font-mono text-xs tracking-wide text-status uppercase">
          {eyebrow}
        </p>
      ) : null}
      {heading ? (
        <h2 className="mb-6 font-heading text-2xl font-bold text-ink sm:text-3xl">
          {heading}
        </h2>
      ) : null}
      {children}
    </section>
  );
}
