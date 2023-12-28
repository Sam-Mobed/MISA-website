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
    event_done:string;
    no_waitlist:string;
    yes_waitlist:string;
    links:string;
}

const imgStyle = {
    height:'auto',
    width:'80%'
}

export default function Carousel(
    {
        events,
        locale,
        event_done,
        no_waitlist,
        yes_waitlist,
        links
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
        <div className="overflow-hidden carousel lg:text-[1.3vmax] md:text-[1.5vmax] pb-5">
            <div className="flex pb-5 transition-transform ease-out duration-1000" style={{transform: `translateX(-${currSlide*100}%)`}}>
                {events.map((event)=>(
                    <div className="flex-shrink-0 w-[80vw] lg:h-[45vmax] md:h-[45vmax] h-[80vmax]" style={{backgroundColor:'white'}} key={event.name_en}>
                        <div className="flex h-[100%] w-[100%] lg:flex-row md:flex-row flex-col">
                            <div className="flex-2 lg:w-[57vw] md:w-[50vw] bg-black flex justify-center items-center">
                                <Image
                                src={event.image}
                                alt='img'
                                height='100'
                                width='100'
                                style={imgStyle}
                                unoptimized={true}
                                />
                            </div>
                            <div className="flex-1">
                                <div className='flex flex-col p-2 h-[100%] justify-between'>
                                    <div className='border-b-2 border-black'>
                                        <div>
                                            <h2 className='text-center font-bold'>
                                                {locale==='en'?
                                                event.name_en
                                                :event.name_fa}
                                            </h2>
                                        </div>
                                        <div className='pl-1 pr-1'>
                                            {event.datetime}
                                        </div>
                                        <div className='pl-1 pr-1'>
                                            {checkDate(event.datetime)?
                                                <div className='text-orange-500 pb-1 text-center'>{event_done}</div>
                                            :
                                                (!event.is_there_space_left?
                                                    (!event.is_there_waitlist?
                                                    <p className='pb-1 text-red-500'>{no_waitlist}</p>
                                                    :
                                                    <div className='pb-1 text-orange-500 text-center'>
                                                        <p>{yes_waitlist} {' '} </p> 
                                                        <a href={event.waitlist_link} className='underline'>
                                                            Waitlist
                                                        </a>
                                                    </div>
                                                    )
                                                :
                                                    <div className='pb-1'>
                                                        <p>{event.location}</p>
                                                        <p>{event.cost}</p>
                                                    </div>
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
                                            <div>
                                                <p className='font-bold'>{links}</p>
                                                {event.links.map((l,i)=>(
                                                    <li key={l}>
                                                        <a href={l} className='underline'>
                                                            {event.links_slug[i]}
                                                        </a>
                                                    </li>
                                                ))}
                                            </div>
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