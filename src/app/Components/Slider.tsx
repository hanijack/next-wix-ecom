"use client"

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    title: "Summer Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/",
    bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
  },
  {
    id: 2,
    title: "Winter Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/",
    bg: "bg-gradient-to-r from-pink-50 to-blue-50",
  },
  {
    id: 3,
    title: "Spring Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/",
    bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
  },
];

const Slider = () => {
    const [current, setCurrent] = useState(2);



    // useEffect(() => {
    //   const interval = setTimeout(() => { 
    //     if(current < slides.length -1){
    //       setCurrent(prev => prev+1)
    //     }else{
    //       setCurrent(0)
    //     }
    //    }, 4000)
    
    //   return () => {
    //     clearInterval(interval)
    //   }
    // }, [current])
    
  return <div className="flex h-[calc(100vh-80px)] overflow-hidden">

    <div className="w-max h-full flex transition-all ease-in-out duration-1000"
        style={{ transform: `translateX(-${current * 100}vw)` }}>
        {slides.map(slide => (
            <div key={slide.id} className={`w-screen flex flex-col lg:flex-row ${slide.bg}`}>
                <div className=" h-1/2 lg:w-1/2 lg:h-full flex flex-col items-center justify-center gap-4 text-center">
                    <h2 className="font-semibold text-xl lg:text-2xl">{slide.description}</h2>
                    <h1 className="font-bold text-2xl lg:text-4xl">{slide.title}</h1>
                    <Link href={slide.url}><button className="rounded-md bg-black text-white py-3 px-4">Shop now</button></Link>
                </div>
                <div className="relative h-1/2 lg:w-1/2 lg:h-full   ">
                    <Image src={slide.img} alt="" fill sizes="100%" className="object-cover "/>
                </div>
            </div>
        ))}
    </div>
        <div className="absolute left-1/2 bottom-8 flex gap-4 items-center justify-center">
        {
            slides.map((slide , index)=>(
                <div key={slide.id}
                onClick={()=> setCurrent(index)}
                className={`w-3 h-3 rounded-full ring-1 ring-gray-600  flex justify-center items-center cursor-pointer ${current === index ? "scale-150" : "" }`}>
                  {current === index && ( 
                    <div className="w-[6px] h-[6px] bg-gray-600 rounded-full"></div>
                  )}
                </div>
            ))
        }
        </div>

  </div>;
};

export default Slider;
