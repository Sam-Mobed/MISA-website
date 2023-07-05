"use client"

import { motion } from 'framer-motion';
import './style.css';

type Props = {
    title: string;
};

export default function TitleText({title}: Props){
    
    return (
    <motion.div
        initial= {{ opacity: 0 }}
        animate= {{ opacity: 1 }}
    >
        {title.split(' ').map((word, index) => (
            <motion.span
                key={index}
                initial = {{ opacity: 0 , translateX: -50}}
                animate = {{ opacity: 1 , translateX: 0}}
                transition = {{ duration: 0.7, delay: index * 0.2}}
                className={`word_${index} title `}
            >
                <h1 className='word'>
                    {word}
                </h1>
            </motion.span>
        ))}
    </motion.div>
    );
}