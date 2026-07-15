import { CONTACT_EMAIL, GITHUB_USERNAME } from "@/lib/config";

export default function Contact() {
  return (
    <section className="rounded-3xl border border-accent/30 bg-gradient-to-br from-accent/20 to-teal/12 p-7 text-center sm:p-12 md:p-14">
      <h2 className="text-[22px] font-black sm:text-[28px]">いっしょに何かつくりましょう</h2>
      <p className="mt-3 text-[15px] text-text/70">
        副業・業務委託のご相談も、技術の雑談も大歓迎です。
      </p>
      <div className="mt-7 flex flex-wrap justify-center gap-3.5 text-[15px]">
        <a
          href={`https://github.com/${GITHUB_USERNAME}`}
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-white px-7 py-3 font-bold text-bg"
        >
          GitHub
        </a>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="rounded-full border border-text/30 px-7 py-3 transition-colors hover:border-accent/50 hover:text-accent-light"
        >
          Email
        </a>
      </div>
    </section>
  );
}
