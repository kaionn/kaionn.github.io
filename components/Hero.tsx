import GithubIcon from "@/components/icons/GithubIcon";
import LiveStatus from "@/components/LiveStatus";
import { GITHUB_USERNAME } from "@/lib/config";

export default function Hero() {
  return (
    <header className="py-16 sm:py-24">
      <p className="mb-3 font-mono text-sm text-signal">Kaion</p>
      <h1 className="mb-6 font-heading text-3xl font-bold text-text sm:text-4xl">
        Full-stack Engineer
      </h1>
      <p className="mb-8 max-w-xl text-base leading-relaxed text-text/80 sm:text-lg">
        作って終わりにしない。
        <br />
        設計からインフラ、CI/CD
        まで、動き続ける仕組みごと届けるエンジニアです。
      </p>

      <LiveStatus />

      <div className="mt-10 flex items-center gap-6">
        <a
          href="#projects"
          className="rounded-md border border-signal px-5 py-2.5 text-sm font-medium text-text transition-all hover:bg-signal/10 hover:shadow-[0_0_20px_-4px_rgba(45,212,191,0.5)]"
        >
          作ったものを見る
        </a>
        <a
          href={`https://github.com/${GITHUB_USERNAME}`}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="text-text/70 transition-colors hover:text-signal"
        >
          <GithubIcon className="h-6 w-6" />
        </a>
      </div>
    </header>
  );
}
