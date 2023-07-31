"use client"
import { useState } from "react";
import {motion} from 'framer-motion';
import './card.css';

import Image from "next/image";
import members from '../../../images/members.png';

const imgStyle = {
    height: '15vh',
    width: 'auto',
}

type Props = {
    name: string;
    degreemajor: string;
    startfinish: string;
    role: string;
    card_image: string;
    person_image: string;
}

export default function Card(
    {
        name,
        degreemajor,
        startfinish,
        role,
        card_image,
        person_image,
    }:Props
){
    const [isActive, setIsActive] = useState(false);

    return (
        <div className="flip-card">
            <motion.div
                className="flip-card-inner"
                onClick={() => setIsActive(!isActive)}
                animate={{
                rotateY: isActive ? 180 : 0
                }}
                transition={{ duration: 0.6 }}
            >
                <div className="front">
                    <Image 
                    src={card_image}
                    width={100}
                    height={100}
                    
                    alt="historians"
                    className='mr-8'
                    />
                </div>
                <div className="back">B</div>
            </motion.div>
        </div>
    );
}


/*

const id = (0).toString();

    function changeClasses(){
        const card = document.getElementById(id);
        if (card){
            const classNames = card.classList;
            if (classNames.contains('front')){
                card.classList.remove('front');
                card.classList.add('back');
            }else{
                card.classList.remove('back');
                card.classList.add('front');
            }
        }
    }

    return (
        <div onClick={() => changeClasses()} className="front" id={id}>

        </div>
    );

*/
