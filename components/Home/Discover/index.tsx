//"use client"

import '../../shared/style.css';

import Image from "next/image";
import Link from "next/link";

import Astrolab from '../../images/astrolab.png';

type Props = {
    title:string;
    text:string;
    about:string;
    events:string;
    involve:string;
    contact:string;
}

const imgStyle = {
    width:'20vw',
    height:'auto'
}

export default function Discover(
    {
        title,
        text,
        about,
        events,
        involve,
        contact,
    }:Props
){
    return (
        <div className="flex flex-col w-screen inline">
            <div>
                <h2 className='section-title text-3xl md:text-4xl lg:text-6xl'>
                    {title.split(' ').map((word)=>
                        <div>{word}</div>
                    )}
                </h2>
            </div>

            <div>
                {text}
            </div>
            
            <div className="flex flex-row justify-center items-center">
                <Link href="/about">
                    {about}
                </Link>
            </div>

            <div className="flex flex-row justify-between justify-center items-center">
                <Link href="/events">
                    {events}
                </Link>
                <div>
                    <Image
                    src={Astrolab}
                    style={imgStyle}
                    alt="astrolab"
                    />
                </div>
                <Link href="/about#apply">
                    {involve}
                </Link>
            </div>

            <div className="flex flex-row justify-center items-center">
                <Link href="/about#contact">
                    {contact}
                </Link>
            </div>
        </div>
    );
}