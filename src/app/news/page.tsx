import React from "react";

export const metadata: Metadata = {
  title: "Breaking News, Top Headlines & Latest Updates - Stay Informed",
  description:
    "Stay ahead with real-time breaking news, trending headlines, and in-depth analysis on politics, business, technology, sports, health, science, and entertainment. Get expert insights, exclusive reports, and 24/7 live updates from trusted sources.",
  keywords: [
    "breaking news",
    "latest headlines",
    "top news today",
    "real-time news",
    "world news",
    "trending news",
    "business news",
    "tech news",
    "sports updates",
    "entertainment news",
    "health news",
    "science discoveries",
    "political news",
    "live news updates",
    "exclusive reports",
    "current affairs",
    "global news",
    "daily news digest",
    "AI news",
    "finance updates",
  ],
  openGraph: {
    title: "Breaking News, Top Headlines & Latest Updates - Stay Informed",
    description:
      "Get the latest breaking news, trending stories, and in-depth reports on politics, business, technology, health, and more. Stay updated with real-time coverage from trusted sources.",
    url: "http://localhost:3000/news",
    images: ["/news-banner.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Breaking News, Top Headlines & Latest Updates - Stay Informed",
    description:
      "Stay ahead with breaking news, trending headlines, and live updates on politics, business, sports, health, science, and entertainment from trusted sources.",
    images: ["/news-banner.jpg"],
  },
};

import NewsClient from "./NewsClient";
import { Metadata } from "next";
// news page to show the results according to the search and the category
const News = () => {
  return <NewsClient />;
};

export default News;
