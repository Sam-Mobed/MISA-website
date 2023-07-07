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
    width: '20vw',
    height: 'auto',
}

const sunStyle = {
    width: 'auto',
    height: '15vh',
}

// these need to be floating elements.
export default function DynamicElements(){
    const {scrollY} = useScroll();

    const hafez_y = useTransform(scrollY, [50,1000],[0,500]);
    const mountain_y = useTransform(scrollY, [0,500],[7,300]);
    const hill_y = useTransform(scrollY, [50,500],[0,100]);

    return (
        <div>
            <div className='absolute top-0 w-screen flex flex-row justify-between'>
                <Image 
                src={moving_plants_left}
                style={plantStyle}
                alt="moving_plants_left"
                />
                <Image 
                src={Sun}
                style={sunStyle}
                alt="sun"
                />
                <Image 
                src={moving_plants_right}
                style={plantStyle}
                alt="moving_plants_right"
                />
            </div>
            <div className='absolute right-0' style={{top:'40%'}}>
                <Image 
                src={Simurgh}
                style={plantStyle}
                alt="simurgh"
                />
            </div>
            <div className='absolute bottom-0 w-screen flex flex-row justify-between'>
                <Image 
                src={Beast}
                style={plantStyle}
                alt="Beast"
                />
                <Image 
                src={moving_hill_right}
                style={sunStyle}
                alt="moving_hill_right"
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