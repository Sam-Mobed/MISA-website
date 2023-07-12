"use client"

import Image from 'next/image';
import { motion, useScroll,useTransform } from 'framer-motion';

import CelebratingMen from '../../images/men-celebrating.png';
import MenOnDrums from '../../images/men-drums.png';
import MenWithGifts from '../../images/men-gifts.png';
import MenOnRug from '../../images/men-on-rug.png';

export default function MovingElements(){


    return (
    <div className='flex flex-row space-between'>
        <div className='bg-red'>

        </div>

        <div className='bg-blue'>
            
        </div>

        <div className='bg-green'>
            
        </div>

    </div>);
}