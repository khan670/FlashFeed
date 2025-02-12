"use client"
import React, { useEffect, useState } from 'react'
import Model from './Model'
import { FaWandMagicSparkles } from 'react-icons/fa6'
import { query } from '@/api-functions/summarization'
import { FaPlayCircle } from 'react-icons/fa'
import { textSpeech } from '@/api-functions/textSpeech'
import SmallLoader from './SmallLoader'

const ArticleModel = ({data,open,setOpen}:{
 data:{ content:string;
  title:string;
  description:string;
  publishedAt:string;
  author:string;
  url:string;};
  open:boolean;
  setOpen:any;
}) => {
    const [sumerizeContent,setSummerizecontent]=useState("");
    const [isLoading,setIsLoading]=useState(false);
    const [voiceLoading,setvoiceLoading]=useState(false);
    const [isPlay,setIsPlay]=useState(false)
   async function getSumerizeContent({text}){
    setIsLoading(true)
    const response = await query({
          "inputs":
            text,
        })
        setSummerizecontent(response[0]?.summary_text)
        setIsLoading(false)
   }
   async function getSpeechToText(){
    setvoiceLoading(true)
    const response=await textSpeech({inputs:sumerizeContent})
    const audioUrl =await URL.createObjectURL(response);
    const audio =await new Audio(audioUrl);
    audio.play();
    setvoiceLoading(false)
   }
  return (
    <Model isOpen={open} onClose={()=>{
      setOpen()
      setSummerizecontent("")
      }}>
      <h1 className='font-semibold text-xl text-light-black leading-[1.3]'>{data.title} </h1>
     <p className='text-sm mt-2 text-gray-700 leading-[1.3] mb-2'>{data.content} <a href={data.url} target='_blank' className='text-sm text-blue-500 hover:underline transition-all duration-300 hover:text-blue-600'>see more</a></p> 
{isLoading?<SmallLoader />:sumerizeContent&&<p className='my-2 flex items-center gap-2 border-l-2 border-l-light-black p-2 text-sm bg-slate-100 '>
{sumerizeContent}
{voiceLoading&&<SmallLoader />}
<button onClick={()=>
{
    getSpeechToText()
    setIsPlay(prev=>!prev)
    }}> 
<FaPlayCircle className='text-light-black' size={25} />
</button>
</p>}
<hr />
<div className='flex justify-end items-center gap-3 mt-2'>
  <button className='px-2 py-1 text-sm bg-gray-100 rounded' onClick={()=>{
    setOpen()
    setSummerizecontent("")}}>Close</button>
  <button className='px-2 py-1 text-sm bg-light-black text-gray-100  flex items-center gap-1 rounded' onClick={()=>getSumerizeContent({text:data.content})}><FaWandMagicSparkles />  Summarize News</button>
</div>
    </Model>
  )
}

export default ArticleModel