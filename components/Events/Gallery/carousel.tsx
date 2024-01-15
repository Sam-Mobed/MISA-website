"use client"
import '../../shared/style.css';

import { Photo } from "@/types/Photo";
import {BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill} from 'react-icons/bs';
import Image from "next/image";
import { useState } from "react";


/*
export type Photo = {
    _id: string;
    _createdAt: Date;
    name_en: string;
    name_fa: string;
    date: string;
    location:string;
    image: string;
};
*/


type Props = {
    photos: Photo[];
    locale: string;
}

const imgStyle = {
    height:'auto',
    width:'50rem'
}

export default function Carousel(
    {
        photos,
        locale,
    }:Props
){
    const [currSlide, setSlide] = useState(0);

    const prev = () => 
        setSlide((currSlide) => (currSlide===0 ? photos.length-1 : currSlide-1));

    const next = () => 
        setSlide((currSlide) => (currSlide===photos.length-1 ? 0 : currSlide+1));


    return (
        <div className="overflow-hidden carousel lg:text-[1.3vmax] md:text-[1.5vmax] pb-5">
            <div className="flex pb-5 transition-transform ease-out duration-1000" style={{transform: `translateX(-${currSlide*100}%)`}}>
                {photos.map((photo)=>(
                    <div className="flex-shrink-0 w-[80vw] lg:h-[45vmax] md:h-[45vmax] h-[80vmax]" style={{backgroundColor:'white'}} key={photo.name_en}>
                        <div className="flex h-[100%] w-[100%] flex-col">
                            <div className="flex-2 h-[90%] bg-black flex justify-center items-center overflow-hidden">
                                <a href={photo.image} target="_blank" rel="noopener noreferrer" className='w-[100%] hover:cursor-pointer flex justify-center'>
                                    <Image
                                    src={photo.image}
                                    alt='img'
                                    height='100'
                                    width='100'
                                    style={imgStyle}
                                    unoptimized={true}
                                    />
                                </a>
                            </div>
                            <div className="flex-1">
                                <div className='flex flex-col p-2 h-[100%] justify-between'>
                                    <div>
                                        <div>
                                            <h2 className='text-center font-bold'>
                                                {locale==='en'?
                                                photo.name_en
                                                :photo.name_fa}
                                            </h2>
                                        </div>
                                        <div className='flex flex-col'>
                                            <div className='pl-1 pr-1 flex flex-row justify-between'>
                                                <div>{photo.date_en}</div>
                                                <div>{photo.date_fa}</div>
                                            </div>
                                            <div className='pl-1 pr-1 flex flex-row justify-between'>
                                                <div>{photo.location_en}</div>
                                                <div>{photo.location_fa}</div>
                                            </div>
                                        </div>
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
                        {currSlide+1}/{photos.length}
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