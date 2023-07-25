"use client"

import '../../shared/style.css';

import Image from "next/image";
import Link from "next/link";
import { motion } from 'framer-motion';
import Text from './animated';

import Astrolab from '../../images/astrolab.png';
import Woman from '../../images/Woman.png';

type Props = {
    title:string;
    text:string;
    about:string;
    events:string;
    involve:string;
    contact:string;
}

const astroStyle = {
    width:'15vw',
    height:'auto'
}

const womanStyle = {
    height: '15vh',
    width: 'auto',
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
        <div className='w-screen inline flex justify-center items-center'>
            <div className="flex flex-col" style={{width:'80vw'}}>
                <div className='flex flex-row justify-between'>
                    <h2 className='section-title text-3xl md:text-4xl lg:text-6xl'>
                        {title.split(' ').map((word)=>
                            <div>{word}</div>
                        )}
                    </h2>
                    
                    <Image
                    src={Woman}
                    style={womanStyle}
                    alt="astrolab"
                    />
                </div>

                <Text 
                text={text}
                />

                <div className='flex flex-row justify-between items-center'>
                    <div className='flex flex-col space-y-20 items-center'>
                        <Link href="/about">
                            {about}
                        </Link>
                        <Link href="/about#contact" >
                            {contact}
                        </Link>
                    </div>

                    <div className='justify-center center-items flex items-center'>
                        <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration:20, repeat: Infinity }}
                        >
                            <Image
                            src={Astrolab}
                            style={astroStyle}
                            alt="astrolab"
                            />
                        </motion.div>
                    </div>
                    
                    <div className='flex flex-col space-y-20 items-center'>
                        <Link href="/events">
                            {events}
                        </Link>
                        <Link href="/about#apply">
                            {involve}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

/*
<motion.div
animate={{ y: [-10, 10, -10], transition: { repeat: Infinity, duration: 5 } }}
>
    <Link href="/about">
        {about}
    </Link>
</motion.div>

<div className="flex flex-row justify-center items-center text-paragraph">
                    
                    <Link href="/events" className='flex-1 flex justify-end'>
                        {events}
                    </Link>
                    
                    <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration:20, repeat: Infinity }}
                    
                    >
                        <Image
                        src={Astrolab}
                        style={astroStyle}
                        alt="astrolab"
                        />
                    </motion.div>
    
                    <Link href="/about#apply" className='flex-1 flex justify-start'>
                        {involve}
                    </Link>
                    
                </div>

                <div className="flex flex-row justify-center items-center text-paragraph m-3">
                    
                        <Link href="/about#contact">
                            {contact}
                        </Link>
                    
                </div>
*/