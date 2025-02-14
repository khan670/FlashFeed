"use client";
import React, { useEffect, useState } from "react";
import Model from "./Model";
import { FaWandMagicSparkles } from "react-icons/fa6";
import { query } from "@/api-functions/summarization";
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";
import { textSpeech } from "@/api-functions/textSpeech";
import SmallLoader from "./SmallLoader";
import { NewsCardType } from "@/types/newsCardType";

const ArticleModel = ({
  data,
  open,
  setOpen,
}: {
  /* eslint-disable */
  data: NewsCardType | any;
  open: boolean;
  setOpen: () => void;
}) => {
  const [sumerizeContent, setSummerizecontent] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>();
  const [voiceLoading, setvoiceLoading] = useState<boolean>(false);
  async function getSumerizeContent({ text }: { text: string }) {
    setIsLoading(true);
    const response = await query({
      inputs: text,
    });
    setSummerizecontent(response[0]?.summary_text);
    setIsLoading(false);
  }
  async function getSpeechToText() {
    setvoiceLoading(true);
    if (audio) {
      audio.pause();
      audio.currentTime = 0; // Reset to start
      setIsPlaying(false);
    }
    const response = await textSpeech({ inputs: sumerizeContent });
    const audioUrl = URL.createObjectURL(response);
    const audios = new Audio(audioUrl);
    audios.onended = () => setIsPlaying(false);
    setAudio(audios);
    setIsPlaying(true);
    setvoiceLoading(false);
    audios.play();
  }
  function handleVoicePlaying() {
    if (!audio) return;
    if (audio) {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(true);
      } else {
        audio.play();
        setIsPlaying(false);
      }
      setIsPlaying(!isPlaying);
    }
  }
  useEffect(() => {
    if (audio) {
      audio.play();
    }
  }, [audio]);
  return (
    <Model
      isOpen={open}
      onClose={() => {
        if (audio) {
          audio.pause();
          setIsPlaying(false);
        }
        setAudio(null);
        setOpen();
        setSummerizecontent("");
        setvoiceLoading(false);
      }}>
      <h1 className="font-semibold text-xl text-light-black leading-[1.3]">
        {data?.title}
      </h1>
      <p className="text-sm mt-2 text-gray-700 leading-[1.3] mb-2">
        {data?.description}
        <a
          href={data.url}
          target="_blank"
          className="text-sm text-blue-500 hover:underline transition-all duration-300 hover:text-blue-600">
          see more
        </a>
      </p>
      {isLoading ? (
        <SmallLoader />
      ) : (
        sumerizeContent && (
          <p className="my-2 flex items-center gap-2 border-l-2 border-l-light-black p-2 text-sm bg-slate-100 ">
            {sumerizeContent}
            {voiceLoading && <SmallLoader />}
            <button
              disabled={voiceLoading}
              onClick={() => {
                if (!audio) {
                  getSpeechToText();
                } else {
                  handleVoicePlaying();
                }
              }}>
              {isPlaying ? (
                <FaPauseCircle className="text-light-black" size={25} />
              ) : (
                <FaPlayCircle className="text-light-black" size={25} />
              )}
            </button>
          </p>
        )
      )}
      <hr />
      <div className="flex justify-end items-center gap-3 mt-2">
        <button
          className="px-2 py-1 text-sm bg-gray-100 rounded"
          onClick={() => {
            setOpen();
            setSummerizecontent("");
            setvoiceLoading(false);
            setAudio(null);
          }}>
          Close
        </button>
        <button
          className="px-2 py-1 text-sm bg-light-black text-gray-100  flex items-center gap-1 rounded"
          onClick={() => {
            if (data.content) getSumerizeContent({ text: data.content });
          }}>
          <FaWandMagicSparkles /> Summarize News
        </button>
      </div>
    </Model>
  );
};

export default ArticleModel;
