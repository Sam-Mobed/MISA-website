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
    height: 'calc(40%)',
}

/*
const sunStyle = {
    width: 'calc(20%)',
    height: 'calc(20%)',
}
*/

const simurghStyle = {
    width: '40vw',
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

    const sun_Y = useTransform(scrollY, [400,900],[-100,20]);

    //before, the input range was [0,1000]
    const left_plant_Y = useTransform(scrollY, [0,800],[-100,0]);
    const left_plant_X = useTransform(scrollY, [0,800],[-100,0]);

    const right_plant_Y = useTransform(scrollY, [0,800],[-100,0]);
    const right_plant_X = useTransform(scrollY, [0,800],[100,0]);

    const simurgh_Y = useTransform(scrollY, [400,800],[120,0]);
    const simurgh_X = useTransform(scrollY, [400,800],[150,10]);

    const beast_Y = useTransform(scrollY, [450,800],[70,0]);
    const beast_X = useTransform(scrollY, [450,800],[-70,0]);

    const hill_Y = useTransform(scrollY, [450,800],[70,0]);
    const hill_X = useTransform(scrollY, [450,800],[70,0]);

    return (
        <div>
            <div className='absolute top-0 w-screen flex flex-row justify-between overflow-hidden'>
                <motion.div
                style={{
                    y:left_plant_Y,
                    x:left_plant_X,
                }}
                >
                    <Image 
                    src={moving_plants_left}
                    style={plantStyle}
                    alt="moving_plants_left"
                    className='justify-center items-center'
                    />
                    
                </motion.div>

                <motion.div
                style={{
                    x:70,
                    y:sun_Y,
                    rotate:0
                }}
                >   
                    <Image 
                    src={Sun}
                    style={sunStyle}
                    alt="sun"
                    className='inline-block'
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
            <div className='absolute right-0 overflow-hidden' style={{top:'33%',width:'40vw',height:'60vw'}}>
                <motion.div
                    style={{
                        y:simurgh_Y,
                        x:simurgh_X,
                    }}
                
                >
                    <Image 
                    src={Simurgh}
                    style={simurghStyle}
                    alt="simurgh"
                    />
                </motion.div>

            </div>
            <div className='absolute bottom-0 w-screen flex flex-row justify-between overflow-hidden'>
                <motion.div
                    style={{
                        y:beast_Y,
                        x:beast_X,
                    }}
                >
                    <Image 
                    src={Beast}
                    style={cornerStyle}
                    alt="Beast"
                    className='inline-block'
                    />
                </motion.div>
                
                <motion.div
                    style={{
                        y:hill_Y,
                        x:hill_X,
                    }}
                >
                    <Image 
                    src={moving_hill_right}
                    style={cornerHillStyle}
                    alt="moving_hill_right"
                    className='inline-block'
                    />
                </motion.div>
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