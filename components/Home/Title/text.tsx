"use client"

import { motion } from 'framer-motion';

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
                transition = {{ duration: 0.5, delay: index * 0.1}}
            >
                <h1>{word}{' '}</h1>
            </motion.span>
        ))}
    </motion.div>
    );
}