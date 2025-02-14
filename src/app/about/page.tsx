// import { query } from "@/api-functions/summarization";
import { AboutData, Commitment } from "@/data/AboutData";
import { Metadata } from "next";
import React from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";
export const metadata: Metadata = {
  title: "About Us | Headlinr",
  description:
    "Learn more about Headlinr, your trusted news source for accurate, unbiased, and timely reporting.",
  keywords: "about, news, journalism, global news, Headlinr",
  openGraph: {
    title: "About Us | Headlinr",
    description:
      "Discover Headlinr’s mission, editorial standards, and commitment to delivering quality news.",
    url: "http://localhost:3000/about",
    siteName: "Headlinr",
    images: [
      {
        url: "/about-banner.jpg",
        width: 1200,
        height: 630,
        alt: "About Headlinr",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Headlinr",
    description:
      "Learn more about Headlinr’s commitment to quality journalism.",
    images: ["/about-banner.jpg"],
  },
};

const AboutPage = async () => {
  return (
    <>
      <section className="sm:w-[60%] w-full sm:mx-auto px-3 mt-5">
        {/* Main Heading */}
        <h1 className="text-xl text-center font-extrabold">
          About Headlinr – AI-Powered News Summarization
        </h1>

        {/* Introduction */}
        <div className="bg-white p-5 rounded-md mt-5 border border-gray-200">
          <h2 className="text-lg font-semibold">
            Your AI-Driven News Companion
          </h2>
          <p className="text-xs text-gray-400 mt-2">
            Welcome to <strong>Headlinr</strong>, the future of digital news
            consumption. Powered by advanced AI models, we provide{" "}
            <strong>real-time news summarization</strong> and
            <strong>text-to-voice conversion</strong>, ensuring you get the
            latest news in the most accessible way possible. Whether you prefer
            reading concise summaries or listening on the go,
            <strong>Headlinr adapts to your needs.</strong>
          </p>
        </div>

        {/* Our Features */}
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-5 mt-5">
          <div className="bg-white p-5 border-gray-200 border rounded-md">
            <h2 className="text-lg font-semibold">AI-Powered Summarization</h2>
            <p className="text-xs text-gray-400 mt-2">
              Our AI-based summarization tool condenses lengthy news articles
              into short, precise summaries, allowing you to stay updated in
              seconds.
            </p>
            <ul className="flex gap-3 flex-col mt-3 text-sm text-light-black">
              {AboutData.map((value) => (
                <li key={value} className="flex gap-2 items-center">
                  <IoIosCheckmarkCircle />
                  {value}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-5 border border-gray-200 rounded-md">
            <h2 className="text-lg font-semibold">Text-to-Voice Conversion</h2>
            <p className="text-xs text-gray-400 mt-2">
              Our AI voice technology converts text into natural-sounding
              speech, allowing you to listen to news articles on the go.
            </p>
            <ul className="flex gap-3 flex-col mt-3 text-sm text-light-black">
              {Commitment.map((value) => {
                const Icon = value.icon;
                return (
                  <li key={value.text} className="flex gap-2 items-center">
                    <Icon />
                    {value.text}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Editorial Standards */}
        <div className="p-5 mt-5 bg-white border border-gray-200 rounded-md">
          <h2 className="text-lg font-semibold">
            Reliable & Transparent Journalism
          </h2>
          <p className="text-xs text-gray-400 mt-2">
            Our AI models are trained on trusted sources, ensuring accuracy,
            credibility, and transparency. Every piece of news is reviewed and
            refined for authenticity.
          </p>
        </div>

        {/* Call-to-Action */}
        <div className="p-5 mt-5 mb-10 text-center border border-gray-200 bg-gray-300 rounded-md">
          <h2 className="text-lg text-black text-center font-semibold">
            Join the AI-Powered News Revolution
          </h2>
          <p className="text-xs text-light-black mt-2 text-center">
            Stay ahead with AI-generated news summaries and voice-based updates.
            Subscribe now and experience the future of news consumption.
          </p>
          <button className="text-sm text-white bg-black px-2 py-2 mt-3 rounded">
            Subscribe to Our Newsletter
          </button>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
