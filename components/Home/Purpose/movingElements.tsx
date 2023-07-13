"use client"

import Image from 'next/image';
import { motion, useScroll,useTransform } from 'framer-motion';

import MenOnDrums from '../../images/men-drums.png';
import Riders from '../../images/riders.png';
import Men from '../../images/StandingMen.png';
import GiftBringers from '../../images/men-gifts.png';
import Family from '../../images/lookup.png';

const imgStyle = {
    width:'18vh',
    height:'auto'
}

const famStyle = {
    width:'30vh',
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

    const family_Y = useTransform(scrollY, [800,1100],[200,150]);
    const family_X = useTransform(scrollY, [800,1100],[-100,-25]);

    const gifts_Y = useTransform(scrollY, [800,1100],[100,0]);
    const gifts_X = useTransform(scrollY, [800,1100],[-100,-50]);

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
            alt="men-on-horses"
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
            alt="men"
            />
            
        </motion.div>
        <motion.div
        className='absolute bottom-0'
        style={{
            y:gifts_Y,
            x:gifts_X,
        }}>
            <Image 
            src={GiftBringers}
            style={imgStyle}
            alt="men-bringing gifts"
            />
        </motion.div>
        <motion.div
        style={{
            y:family_Y,
            x:family_X,
        }}
        className='absolute bottom-0'>
            <Image 
            src={Family}
            style={famStyle}
            alt="Family"
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