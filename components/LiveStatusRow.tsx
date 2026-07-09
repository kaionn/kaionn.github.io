"use client";

import { useEffect, useState } from "react";

type LoadState =
  | { readonly status: "loading" }
  | { readonly status: "error" }
  | { readonly status: "ready"; readonly message: string };

interface LiveStatusRowProps {
  readonly load: () => Promise<string>;
}

/**
 * GitHub API から取得した1行分のライブステータスを表示する。
 * 取得中はスケルトン、失敗時は何もレンダリングしない(レイアウトを壊さない)。
 */
export default function LiveStatusRow({ load }: LiveStatusRowProps) {
  const [state, setState] = useState<LoadState>({ status: "loading" });

  useEffect(() => {
    let isMounted = true;

    load()
      .then((message) => {
        if (isMounted) {
          setState({ status: "ready", message });
        }
      })
      .catch(() => {
        if (isMounted) {
          setState({ status: "error" });
        }
      });

    return () => {
      isMounted = false;
    };
  }, [load]);

  if (state.status === "error") {
    return null;
  }

  if (state.status === "loading") {
    return (
      <li className="flex items-center gap-2 font-mono text-sm text-muted">
        <span className="h-2 w-2 rounded-full bg-line" aria-hidden="true" />
        <span className="h-4 w-48 animate-pulse rounded bg-line/60 motion-reduce:animate-none" />
      </li>
    );
  }

  return (
    <li className="flex items-center gap-2 font-mono text-sm text-text">
      <span
        className="h-2 w-2 shrink-0 rounded-full bg-status shadow-[0_0_8px_2px_rgba(251,191,36,0.45)] animate-status-pulse motion-reduce:animate-none"
        aria-hidden="true"
      />
      <span>{state.message}</span>
    </li>
  );
}
