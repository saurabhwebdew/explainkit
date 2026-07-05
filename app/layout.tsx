import type { Metadata } from "next";
import "./globals.css";

// Font: using the system stack (-apple-system, Segoe UI, Inter fallback) defined in
// tailwind.config.ts. This build environment can't reach Google Fonts, so next/font/google
// wasn't used here — swap in `next/font/google` Inter locally if you want the exact
// webfont; the system stack already reads close to Linear/Vercel's real-world look.

export const metadata: Metadata = {
  title: "ExplainKit — Turn Complex Products Into Stories People Remember",
  description:
    "ExplainKit helps SaaS companies explain complex products through explainer videos, product demos, motion graphics, and AI-powered marketing content — in days, not weeks.",
  metadataBase: new URL("https://explainkit.com"),
  openGraph: {
    title: "ExplainKit — Turn Complex Products Into Stories People Remember",
    description:
      "Explainer videos, product demos, and motion graphics for SaaS teams, built in days instead of weeks.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ExplainKit — Turn Complex Products Into Stories People Remember",
    description:
      "Explainer videos, product demos, and motion graphics for SaaS teams, built in days instead of weeks.",
  },
};

const themeInitScript = `
(function() {
  try {
    var stored = localStorage.getItem('theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var isDark = stored ? stored === 'dark' : prefersDark;
    if (isDark) document.documentElement.classList.add('dark');
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="font-sans antialiased bg-canvas text-ink">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-accent focus:text-white focus:px-4 focus:py-2 focus:rounded-full"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
