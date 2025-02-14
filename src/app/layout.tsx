import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import NavigationBar from "@/components/NavigationBar";
import Footer from "@/components/Footer";
import Layout from "@/components/Layout";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});
export const metadata: Metadata = {
  title: "Headlinr | Breaking News & Latest Headlines",
  description:
    "Stay updated with real-time breaking news, trending topics, and in-depth reports on politics, business, technology, sports, health, and entertainment. Get live updates from trusted sources.",
  keywords: [
    "breaking news",
    "latest headlines",
    "top news today",
    "real-time news",
    "world news",
    "trending news",
    "politics updates",
    "business news",
    "tech news",
    "sports updates",
    "entertainment news",
    "health news",
    "science discoveries",
    "global news",
    "live news updates",
    "current affairs",
    "financial news",
    "exclusive reports",
  ].join(", "), // Ensures better SEO & easy modifications
  openGraph: {
    title: "Headlinr | Breaking News & Latest Headlines",
    description:
      "Get the latest breaking news, trending topics, and real-time updates from politics, business, technology, sports, health, and more.",
    url: "https://headlinr-rayan-khans-projects.vercel.app/", // Use actual production URL instead of localhost
    siteName: "Headlinr",
    images: [
      {
        url: "/news-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Breaking News Banner - Stay Updated",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Headlinr | Breaking News & Latest Headlines",
    description:
      "Stay informed with real-time updates and trending news. Get expert insights on politics, business, technology, sports, and entertainment.",
    images: ["/news-banner.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${roboto.variable} bg-gray-50 overflow-x-hidden  antialiased`}>
        <Layout>
          <NavigationBar />
          {children}
          <Footer />
        </Layout>
      </body>
    </html>
  );
}
