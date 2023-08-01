"use client"

import { Event } from "@/types/Event";
import {BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill} from 'react-icons/bs';
import Image from "next/image";
import { useState } from "react";

/*
type Props = {
    name:string;
    datetime:string;
    location:string;
    cost:string;
    image:string;
    content:string;
    links:string[];
    links_slugs:string[];
    space_left:boolean;
    waitlist:boolean;
    waitlist_link:string;
}
*/

type Props = {
    events: Event[];
    locale: string;
}


const mainContainer = {
    width:'80vw',
    height:'40vmax',
    backgroundColor:'white'
}

const imgStyle = {
    width:'w-screen',
    height:'w-screen'
}

export default function Carousel(
    {
        events,
        locale
    }:Props
){
    
    const [currSlide, setSlide] = useState(0);

    const prev = () => 
        setSlide((currSlide) => (currSlide===0 ? events.length-1 : currSlide-1));

    const next = () => 
        setSlide((currSlide) => (currSlide===events.length-1 ? 0 : currSlide+1));

    return (
        <div className="overflow-hidden">
            <div className="flex pb-5 transition-transform ease-out duration-500" style={{transform: `translateX(-${currSlide*100}%)`}}>
                {events.map((event)=>(
                    <div className="flex-shrink-0 w-[80vw] h-[40vmax]" style={{backgroundColor:'white'}}>
                        <div className="flex h-[100%] w-[100%] lg:flex-row md:flex-row flex-col">
                            <div className="flex-1" style={{backgroundColor:'black'}}>
                                hi
                            </div>
                            <div className="flex-2">
                                byeasasfafas
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='flex flex-row justify-between items-center'>
                    <button onClick={prev}>
                        <BsFillArrowLeftCircleFill className="lg:text-5xl md:text-5xl text-3xl cursor-pointer hover:text-blue-600" />
                    </button>
                    <div>
                        {currSlide+1}/{events.length}
                    </div>
                    <button onClick={next}>
                        <BsFillArrowRightCircleFill className="lg:text-5xl md:text-5xl text-3xl cursor-pointer hover:text-blue-600" />   
                    </button>
            </div>
        </div>
    );
}

/*

<div>
            <div className="flex">
                {events.map((event)=>(
                    <div className='w-[80vw]'>
                        <Image
                        src={event.image}
                        height='1'
                        width='1'
                        style={imgStyle}
                        alt='img'
                        />
                    </div>
                ))}
            </div>
            <div className='flex flex-row justify-between items-center'>
                    <button>
                        <BsFillArrowLeftCircleFill className="lg:text-5xl md:text-5xl text-3xl cursor-pointer hover:text-blue-600" />
                    </button>
                    <button>
                        <BsFillArrowRightCircleFill className="lg:text-5xl md:text-5xl text-3xl cursor-pointer hover:text-blue-600" />   
                    </button>
            </div>
        </div>



<div className="flex lg:flex-row md:lg:flex-row flex-col mb-5" style={mainContainer}>
            <div className="flex-1" style={{backgroundColor:'red'}}>
                hi
            </div>
            <div className="flex-2">
                bye
            </div>
        </div>
*/