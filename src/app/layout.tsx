import type { Metadata, Viewport } from "next";
import "@fontsource-variable/fraunces";
import "@fontsource-variable/instrument-sans";
import "./globals.css";
import { siteUrl } from "@/lib/site";

const title = "Vallamdas Akhil | AI Engineer & Software Developer";
const description =
  "Portfolio of Vallamdas Akhil, a Computer Science student from Bhongir, Telangana, India building LLM agents, AI-powered cybersecurity tools, Python backends, and full-stack web applications.";

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title,
  description,
  alternates: siteUrl ? { canonical: siteUrl } : undefined,
  openGraph: { title, description, type: "website", siteName: "Vallamdas Akhil", locale: "en_IN" },
  twitter: { card: "summary_large_image", title, description },
};

export const viewport: Viewport = { themeColor: "#F7F4ED", colorScheme: "light" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
