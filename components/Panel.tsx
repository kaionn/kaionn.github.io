import type { ReactNode } from "react";

interface PanelProps {
  readonly className?: string;
  readonly children: ReactNode;
}

/**
 * 計器盤ダークテーマの基本単位「パネル」。
 * 枠付きカードでコンテンツを収める共通の見た目だけを提供する。
 */
export default function Panel({ className, children }: PanelProps) {
  return (
    <div
      className={`rounded-lg border border-line bg-gradient-to-b from-panel to-panel-deep p-6 shadow-[inset_0_1px_0_0_rgba(230,234,242,0.05),0_12px_28px_-16px_rgba(0,0,0,0.75)] sm:p-8 ${className ?? ""}`}
    >
      {children}
    </div>
  );
}
