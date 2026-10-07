import { CONTACT_EMAIL, GITHUB_USERNAME } from "@/lib/config";

export default function Contact() {
  return (
    <section id="contact" className="contact-panel">
      <h2 className="section-heading"><span>05</span> ~/contact</h2>
      <h3 className="text-[22px] font-black sm:text-[28px]">いっしょに何かつくりましょう</h3>
      <p className="mt-3 text-[15px] text-text/70">
        副業・業務委託のご相談、お気軽にどうぞ。
      </p>
      <div className="mt-7 flex flex-wrap justify-center gap-3.5 text-[15px]">
        <a
          href={`https://github.com/${GITHUB_USERNAME}`}
          target="_blank"
          rel="noreferrer"
          className="rounded border border-accent bg-accent-light px-7 py-3 font-bold text-bg"
        >
          GitHub
        </a>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="rounded border border-text/30 px-7 py-3 transition-colors hover:border-accent/50 hover:text-accent-light"
        >
          Email
        </a>
      </div>
    </section>
  );
}
