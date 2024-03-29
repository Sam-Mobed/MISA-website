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

    const sun_Y = useTransform(scrollY, [250,750],[-50,20]);
    const sun_rotate = useTransform(scrollY, [250,750],[-20,30]);

    //before, the input range was [0,1000]
    const left_plant_Y = useTransform(scrollY, [0,650],[-100,0]);
    const left_plant_X = useTransform(scrollY, [0,650],[-100,0]);

    const right_plant_Y = useTransform(scrollY, [0,650],[-100,0]);
    const right_plant_X = useTransform(scrollY, [0,650],[100,0]);

    const simurgh_Y = useTransform(scrollY, [250,650],[120,0]);
    const simurgh_X = useTransform(scrollY, [250,650],[150,10]);

    const beast_Y = useTransform(scrollY, [300,650],[70,0]);
    const beast_X = useTransform(scrollY, [300,650],[-70,0]);

    const hill_Y = useTransform(scrollY, [300,650],[70,0]);
    const hill_X = useTransform(scrollY, [300,650],[70,0]);

    return (
        <div>
            <div className='absolute top-0 w-screen flex flex-row justify-between overflow-hidden'>
                <motion.div
                style={{
                    y:left_plant_Y,
                    x:left_plant_X,
                }}
                className='transform-gpu'
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
                    
                    y:sun_Y,
                    rotate:sun_rotate,
                    width: 'calc(20%)',
                    height: 'calc(20%)',
                }}
                className='transform-gpu'
                >   
                    <Image 
                    src={Sun}
                    alt="sun"
                    className='transform-gpu'
                    />
                </motion.div>

                <motion.div
                style={{
                    y:right_plant_Y,
                    x:right_plant_X
                }}
                className='transform-gpu'
                >
                    <Image 
                    src={moving_plants_right}
                    style={plantStyle}
                    alt="moving_plants_right"
                    className='transform-gpu'
                    />
                    
                </motion.div>
            </div>
            <div className='absolute right-0 overflow-hidden' style={{top:'33%',width:'40vw',height:'60vw'}}>
                <motion.div
                    style={{
                        y:simurgh_Y,
                        x:simurgh_X,
                    }}
                    className='transform-gpu'
                >
                    <Image 
                    src={Simurgh}
                    style={simurghStyle}
                    alt="simurgh"
                    className='transform-gpu'
                    />
                </motion.div>

            </div>
            <div className='absolute bottom-0 w-screen flex flex-row justify-between overflow-hidden'>
                <motion.div
                    style={{
                        y:beast_Y,
                        x:beast_X,
                    }}
                    className='transform-gpu'
                >
                    <Image 
                    src={Beast}
                    style={cornerStyle}
                    alt="Beast"
                    className='inline-block transform-gpu'
                    />
                </motion.div>
                
                <motion.div
                    style={{
                        y:hill_Y,
                        x:hill_X,
                    }}
                    className='transform-gpu'
                >
                    <Image 
                    src={moving_hill_right}
                    style={cornerHillStyle}
                    alt="moving_hill_right"
                    className='inline-block transform-gpu'
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