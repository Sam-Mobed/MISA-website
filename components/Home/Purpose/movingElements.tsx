"use client"

import Image from 'next/image';
import { motion, useScroll,useTransform } from 'framer-motion';

import MenOnDrums from '../../images/men-drums.png';
import Riders from '../../images/riders.png';
import Men from '../../images/StandingMen.png';
import GiftBringers from '../../images/men-gifts.png';

const imgStyle = {
    width:'18vh',
    height:'auto'
}

export default function MovingElements(){

    const {scrollY} = useScroll();

    const drums_Y = useTransform(scrollY, [750,1050],[100,0]);
    const drums_X = useTransform(scrollY, [750,1050],[100,-70]);

    const riders_Y = useTransform(scrollY, [750,1050],[100,0]);
    const riders_X = useTransform(scrollY, [750,1050],[100,-168]);

    const men_Y = useTransform(scrollY, [750,1050],[100,0]);
    const men_X = useTransform(scrollY, [750,1050],[100,0]);

    return (
    <div className='flex flex-row relative overflow-hidden' style={{height:'100%'}}>
        
        <motion.div
        className='absolute right-0'
        style={{
            y:riders_Y,
            x:riders_X,
        }}
        >
            <Image 
            src={Riders}
            style={imgStyle}
            alt="men-playing-drums"
            />
            
        </motion.div>
        <motion.div
        className='absolute right-0'
        style={{
            y:drums_Y,
            x:drums_X,
        }}
        >
            <Image 
            src={MenOnDrums}
            style={imgStyle}
            alt="men-playing-drums"
            />
            
        </motion.div>
        <motion.div
        className='absolute right-0'
        style={{
            y:men_Y,
            x:men_X,
        }}
        >
            <Image 
            src={Men}
            style={imgStyle}
            alt="men-playing-drums"
            />
            
        </motion.div>
        <motion.div>
            <Image 
            src={GiftBringers}
            style={imgStyle}
            alt="men-playing-drums"
            />
        </motion.div>
    </div>);
}


/*
<div className='flex flex-row justify-between relative' style={{height:'100%'}}>
        <div>
            <motion.div
            >
                <Image 
                src={MenOnRug}
                style={imgLeftStyle}
                alt="men-sitting-on-rug"
                className=''
                />
            </motion.div>
            <motion.div>
                <Image 
                src={MenWithGifts}
                style={imgLeftStyle}
                alt="men-bringing-gifts"
                className='absolute bottom-0'
                />
            </motion.div>
        </div>

        <div>
            <motion.div
            >
                <Image 
                src={MenOnDrums}
                style={imgRightStyle}
                alt="men-playing-drums"
                className=''
                />
            </motion.div>
        </div>

    </div>


*/