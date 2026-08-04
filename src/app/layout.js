import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  title: "Ian Cong — Software. Redefined.",
  description:
    "Ian Cong — Full-stack software engineer. Personal portfolio, work, and contact.",
};

const themeInitScript = `
(function() {
  try {
    var stored = localStorage.getItem('theme');
    var preferred = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    var theme = stored || preferred;
    if (theme === 'light') document.documentElement.classList.add('light');
  } catch (e) {}
})();
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        {/* Hint browsers to fetch hero assets ASAP, so the video (or poster)
            appears without the black/white gap on first load. */}
        <link
          rel="preload"
          as="image"
          href="/videos/hero-poster.jpg"
          fetchPriority="high"
        />
        <link
          rel="preload"
          as="video"
          href="/videos/hero-background.mp4"
          type="video/mp4"
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
