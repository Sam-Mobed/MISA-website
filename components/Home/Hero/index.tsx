"use client"

import { motion, useScroll,useTransform } from 'framer-motion';
import './styles.css';

import Image from 'next/image';
import hafez from '../../images/hafez.png';
import hill from '../../images/hill.png';
import mountain from '../../images/mountain.png';

const imageStyle = {
    height: 'auto',
    width: '100%'
}

export default function Hero() {
    const {scrollY} = useScroll();

    const y1 = useTransform(scrollY, [0,300],[0,200]);
    const y2 = useTransform(scrollY, [0,300],[0,-100]);
    //const y1 = useTransform(scrollY, [0,300],[0,200]);
    return(
        <div className='w-full h-screen relative overflow-hidden'>
            <Image 
            src={hafez}
            style={imageStyle}
            alt="hafez-parallax"
            className='absolute top-0'
            />
            <Image 
            src={hill}
            style={imageStyle}
            alt="hill-parallax"
            className='absolute bottom-0'
            /> 
            <Image
            src={mountain}
            style={imageStyle}
            alt="mountain-parallax"
            className='absolute bottom-0'
            />

            

            <motion.div
            className='mountain-container absolute bottom-0'
            style={{y:y1,x:50}}
            >

            <Image
            src={mountain}
            style={imageStyle}
            alt="mountain-parallax"
            className='absolute bottom-0'
            />

            </motion.div>
            
        </div>
    );
}


/* this was the code before i added framer motion

import Image from 'next/image';
import hafez from '../../images/hafez.png';
import hill from '../../images/hill.png';
import mountain from '../../images/mountain.png';

const imageStyle = {
    height: 'auto',
    width: '100%'
}

export default function Hero() {
    return(
        <div className='w-full h-screen relative overflow-hidden'>
            <Image 
            src={hafez}
            style={imageStyle}
            alt="hafez-parallax"
            className='absolute top-0'
            />
            <Image 
            src={hill}
            style={imageStyle}
            alt="hill-parallax"
            className='absolute bottom-0'
            /> 
            <Image
            src={mountain}
            style={imageStyle}
            alt="mountain-parallax"
            className='absolute bottom-0'
            />
        </div>
    );
}





*/