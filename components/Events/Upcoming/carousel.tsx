"use client"
import '../../shared/style.css';

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
    height:'80%',
    width:'auto'
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

    const currentDate = new Date();
    function checkDate(date:string){
        const targetDate = new Date(date);
        return targetDate < currentDate;
    }

    return (
        <div className="overflow-hidden">
            <div className="flex pb-5 transition-transform ease-out duration-1000" style={{transform: `translateX(-${currSlide*100}%)`}}>
                {events.map((event)=>(
                    <div className="flex-shrink-0 w-[80vw] h-[40vmax]" style={{backgroundColor:'white'}}>
                        <div className="flex h-[100%] w-[100%] lg:flex-row md:flex-row flex-col">
                            <div className="flex-1 border-2 border-black flex justify-center items-center">
                                <Image
                                src={event.image}
                                alt='img'
                                height='100'
                                width='100'
                                style={imgStyle}
                                />
                            </div>
                            <div className="flex-2 border-r-2 border-t-2 border-b-2 border-black">
                                <div className='flex lg:flex-col md:flex-col flex-row'>
                                    <div>
                                        <div>
                                            {locale==='en'?
                                            event.name_en
                                            :event.name_fa}
                                        </div>
                                        <div>
                                            {event.datetime}
                                        </div>
                                        <div>
                                            {checkDate(event.datetime)?
                                                <div>sorry event has past</div>
                                            :
                                                (!event.is_there_space_left?
                                                    (!event.is_there_waitlist?
                                                    <p>there is no place, and unfortunately we cannot offer waitlise</p>
                                                    :
                                                    <p>there is no place, but please sign up to the waitlist</p>
                                                    )
                                                :
                                                    <p>{event.cost} | {event.location} </p>
                                                )
                                            }
                                        </div>
                                    </div>
                                    <div>
                                        {locale==='en'?
                                        event.content_en
                                        :event.content_fa}
                                    </div>
                                    <div>
                                        {event.links.length!==0?
                                            <p>links</p>
                                        :
                                        <></>
                                        }
                                    </div>
                                </div>
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