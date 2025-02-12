"use client"
import React, { useState } from 'react'

const ToogleButton = ({btnData,setBtn}:{
    btnData:{name:string,value:string}[],
    setBtn?:React.Dispatch<React.SetStateAction<string>>
}) => {
    const [active,setActive]=useState<string>(btnData[0].name)
  return (
    <>
    {btnData.map((value:{name:string,value:string},index:number)=><button onClick={()=>{
      setActive(value.name)
      if(setBtn) setBtn(value.value)
    }} className={`text-sm text-white ${
        active === value.name
          ? "bg-light-black"
          : "border border-light-black bg-white !text-light-black"
      } py-1 px-3 rounded transition-all duration-500`} key={index+489}>{value.name}</button>)}</>
  )
}

export default ToogleButton