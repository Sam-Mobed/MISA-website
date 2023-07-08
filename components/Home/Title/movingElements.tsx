"use client"

import Image from 'next/image';
import { motion, useScroll,useTransform } from 'framer-motion';

import Beast from '../../images/corner-beast.png';
import Sun from '../../images/sun.png';
import Simurgh from '../../images/simurgh-hunting.png';
import moving_hill_right from '../../images/moving-hill-right.png';
import moving_plants_right from '../../images/moving-plants-right.png';
import moving_plants_left from '../../images/moving-plants-left.png';

const plantStyle = {
    width: '22vw',
    height: 'auto',
}

const cornerStyle = {
    width: '27vw',
    height: 'auto',
}

const sunStyle = {
    width: 'auto',
    height: 'calc(45%)',
}

/*
const sunStyle = {
    width: 'calc(20%)',
    height: 'calc(20%)',
}
*/

const simurghStyle = {
    width: '35vw',
    height: 'auto',
}

const cornerHillStyle = {
    width: '30vw',
    height: 'auto',
    right: '0%',
    bottom: '0%'
}

// these need to be floating elements.
export default function DynamicElements(){
    const {scrollY} = useScroll();

    const sun_Y = useTransform(scrollY, [400,1000],[0,120]);

    const left_plant_Y = useTransform(scrollY, [400,1000],[-100,0]);
    const left_plant_X = useTransform(scrollY, [400,1000],[-300,0]);

    const right_plant_Y = useTransform(scrollY, [400,1000],[100,0]);
    const right_plant_X = useTransform(scrollY, [400,1000],[300,0]);

    return (
        <div>
            <div className='absolute top-0 w-screen flex flex-row justify-between'>
                <motion.div
                style={{
                    y:left_plant_Y,
                    x:left_plant_X
                }}
                >
                    <Image 
                    src={moving_plants_left}
                    style={plantStyle}
                    alt="moving_plants_left"
                    className='object-contain'
                    />
                    
                </motion.div>

                <motion.div
                style={{
                    y:sun_Y,
                    rotate:0
                }}
                >   
                    <Image 
                    src={Sun}
                    style={sunStyle}
                    alt="sun"
                    />
                </motion.div>

                <motion.div
                style={{
                    y:right_plant_Y,
                    x:right_plant_X
                }}
                >
                    <Image 
                    src={moving_plants_right}
                    style={plantStyle}
                    alt="moving_plants_right"
                    />
                    
                </motion.div>
            </div>
            <div className='absolute right-0' style={{top:'30%',right:'10%'}}>
                <Image 
                src={Simurgh}
                style={simurghStyle}
                alt="simurgh"
                />
            </div>
            <div className='absolute bottom-0 w-screen flex flex-row justify-between'>
                <Image 
                src={Beast}
                style={cornerStyle}
                alt="Beast"
                className='inline-block'
                />
                <Image 
                src={moving_hill_right}
                style={cornerHillStyle}
                alt="moving_hill_right"
                className='inline-block'
                />
            </div>
        </div>
    );
}

/*

<div className='flex flex-col absolute top-0 w-screen'>
            <div className='top bg-red-400'>
                hi
            </div>
            <div className='middle bg-green-400'>
                hi
            </div>
            <div className='bottom bg-blue-400'>
                hi
            </div>
        </div>


*/