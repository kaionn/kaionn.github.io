import type { ReactNode } from "react";
import { CONTACT_EMAIL, GITHUB_USERNAME, X_URL } from "@/lib/config";

interface FooterLink {
  readonly label: string;
  readonly href: string;
  readonly external: boolean;
  readonly icon: ReactNode;
}

const FOOTER_LINKS: readonly FooterLink[] = [
  {
    label: "GitHub",
    href: `https://github.com/${GITHUB_USERNAME}`,
    external: true,
    icon: (
      <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.08 0 4.41-2.69 5.39-5.26 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
    ),
  },
  {
    label: "X",
    href: X_URL,
    external: true,
    icon: (
      <path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.65l-5.21-6.82-5.97 6.82H1.68l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23Zm-1.16 17.52h1.83L7.08 4.13H5.12l11.96 15.64Z" />
    ),
  },
  {
    label: "Email",
    href: `mailto:${CONTACT_EMAIL}`,
    external: false,
    icon: (
      <path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm1 2.4V17h16V7.4l-8 5.6-8-5.6ZM5.6 7 12 11.5 18.4 7H5.6Z" />
    ),
  },
];

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <p>© 2026 kaionn · kaionn.github.io</p>
      <ul className="footer-links">
        {FOOTER_LINKS.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              aria-label={link.label}
              title={link.label}
              {...(link.external ? { target: "_blank", rel: "noreferrer" } : {})}
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                {link.icon}
              </svg>
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}
