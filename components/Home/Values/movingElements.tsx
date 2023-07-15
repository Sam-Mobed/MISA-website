"use client"

import Angel from '../../images/Angel.png';
import Dragon from '../../images/dragon.png';
import cloud from '../../images/cloud.png';

import Image from 'next/image';
import {motion,useTransform,useScroll} from 'framer-motion';

const cherubStyle = {
    width:'18vh',
    height:'auto'
}

const dragonStyle = {
    width:'30vh',
    height:'auto'
}

export default function MovingElements(){
    const {scrollY} = useScroll();

    const cloud_Y = useTransform(scrollY, [1400,1600],[-100,0]);
    const cloud_X = useTransform(scrollY, [1400,1600],[100,0]);

    const cherub_Y = useTransform(scrollY, [1400,1600],[-100,20]);
    const cherub_X = useTransform(scrollY, [1400,1600],[100,-10]);

    const dragon_Y = useTransform(scrollY, [1500,1700],[100,0]);
    const dragon_X = useTransform(scrollY, [1500,1700],[-100,0]);

    return (
        <div className='flex flex-row relative overflow-hidden' style={{height:'100%'}}>
            <motion.div
            style={{
                x:cherub_X,
                y:cherub_Y
            }}
            className='absolute right-0'
            >
                <Image 
                    src={Angel}
                    alt="cherub"
                    style={cherubStyle}
                />   
            </motion.div>
            
            <motion.div
            style={{
                x:cloud_X,
                y:cloud_Y
            }}
            className='absolute right-0'
            >
                <Image 
                    src={cloud}
                    alt="cloud"
                    style={cherubStyle}
                />
            </motion.div>

            <motion.div
            style={{
                x:dragon_X,
                y:dragon_Y
            }}
            className='absolute left-0 bottom-0'
            >
                <Image 
                    src={Dragon}
                    alt="dragon"
                    style={dragonStyle}
                />
            </motion.div>
        </div>
    );
}