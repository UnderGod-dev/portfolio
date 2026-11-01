import localFont from "next/font/local";
import "./globals.css";
import { activeLogoId } from "@/data/brand";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  metadataBase: new URL(
    process.env.SITE_URL ||
      (process.env.VERCEL_PROJECT_PRODUCTION_URL
        ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
        : process.env.VERCEL_URL
          ? `https://${process.env.VERCEL_URL}`
          : "https://adekunle.cloud"),
  ),
  title: "Adekunle — Cloud, DevOps & Observability",
  description:
    "Cloud engineering, DevOps consulting, infrastructure as code, CI/CD automation, monitoring, and observability. Work with Adekunle to build resilient cloud platforms and a clearer path to production.",
  applicationName: "Adekunle",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Adekunle — Good ideas. Solid foundations.",
    description:
      "Cloud architecture, DevOps, observability, and agentic AI. Practical blueprints for dependable infrastructure.",
    url: "/",
    siteName: "Adekunle | adekunle.cloud",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adekunle — Cloud, DevOps & Observability",
    description:
      "Resilient cloud platforms. Repeatable delivery. Systems you can understand.",
  },
  icons: {
    icon: `/favicon.svg?v=${activeLogoId}`,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem('portfolio-theme');var t=s==='dark'||s==='light'?s:matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';document.documentElement.dataset.theme=t;document.documentElement.classList.toggle('dark',t==='dark')}catch(e){document.documentElement.dataset.theme='light'}})();`,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
