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

    const hafez_y = useTransform(scrollY, [50,1000],[0,500]);
    const mountain_y = useTransform(scrollY, [0,500],[7,300]);
    const hill_y = useTransform(scrollY, [50,500],[0,100]);
    
    return(
        <div className='w-full h-screen relative overflow-hidden'>

            <motion.div
            className='mountain-container absolute top-0 transform-gpu'
            style={{y:hafez_y}}
            >       

            <Image 
            src={hafez}
            style={imageStyle}
            alt="hafez-parallax"
            className='absolute top-0 transform-gpu'
            priority={true}
            />

            </motion.div>
            

            <motion.div
            className='mountain-container absolute bottom-0 transform-gpu'
            style={{y:mountain_y}}
            >

            <Image
            src={mountain}
            style={imageStyle}
            alt="mountain-parallax"
            className='absolute bottom-0 transform-gpu'
            />

            </motion.div>

            <motion.div
            className='mountain-container absolute bottom-0 transform-gpu'
            style={{y:hill_y}}
            >
            <Image 
            src={hill}
            style={imageStyle}
            alt="hill-parallax"
            className='absolute bottom-0 transform-gpu'
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