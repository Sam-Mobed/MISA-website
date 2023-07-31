"use client"
import { useState } from "react";
import {motion} from 'framer-motion';
import './card.css';
import '../../../shared/style.css';

import Image from "next/image";

const imgStyle = {
    width: 'auto',
    height: '20vmax'
}

const personStyle = {
    width: '100%',
    height: 'auto'
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
        <div className="flip-card flex center-items">
            <motion.div
                className="flip-card-inner flex center-items"
                onClick={() => setIsActive(!isActive)}
                animate={{
                rotateY: isActive ? 180 : 0
                }}
                transition={{ duration: 0.6 }}
            >
                <Image 
                src={card_image}
                width='100'
                height='100'
                style={imgStyle}
                alt="member-front"
                className="rounded-lg3"
                />
                <div className="back rounded-lg3 flex flex-col overflow-hidden">
                    <div className="flex-1" style={{width:'100%', height:'100%'}}>
                        <Image 
                        src={person_image}
                        width='50'
                        height='50'
                        style={personStyle}
                        alt="member-back"
                        className="border-b-2 border-black"
                        />
                    </div>
                    <div className="flex-1 flex flex-col text-paragraph justify-center items-center whitespace-normal break-words text-center">
                        <div className="name leading-[1]">
                            {name}
                        </div>
                        <div className="info">
                            {degreemajor}
                        </div>
                        <div className="info">
                            {startfinish}
                        </div>
                        <div className="info">
                            {role}
                        </div>
                    </div>
                </div>
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
