import GithubIcon from "@/components/icons/GithubIcon";
import Panel from "@/components/Panel";
import Section from "@/components/Section";
import { CONTACT_EMAIL, GITHUB_USERNAME } from "@/lib/config";

export default function Contact() {
  return (
    <Section id="contact" heading="Contact" index={5}>
      <Panel>
        <ul className="flex flex-col gap-3 text-base text-text/80">
          <li className="flex items-center gap-2">
            <GithubIcon className="h-5 w-5 shrink-0 text-text/60" />
            <a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noreferrer"
              className="text-signal underline-offset-4 hover:underline"
            >
              github.com/{GITHUB_USERNAME}
            </a>
          </li>
          <li className="flex items-center gap-2">
            <span aria-hidden="true" className="w-5 shrink-0 text-center">
              @
            </span>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-signal underline-offset-4 hover:underline"
            >
              {CONTACT_EMAIL}
            </a>
          </li>
        </ul>
      </Panel>
    </Section>
  );
}
