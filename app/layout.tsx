import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Zen_Kaku_Gothic_New } from "next/font/google";
import type { ReactNode } from "react";
import { SITE_DESCRIPTION, SITE_TITLE } from "@/lib/config";
import "./globals.css";

const zenKakuGothicNew = Zen_Kaku_Gothic_New({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-zen-kaku-gothic-new",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
};

export const viewport: Viewport = {
  themeColor: "#0F1020",
};

interface RootLayoutProps {
  readonly children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ja">
      <body
        className={`${zenKakuGothicNew.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
