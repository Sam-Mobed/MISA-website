"use client"

import { motion } from 'framer-motion';
import '../../shared/style.css';

type Props = {
    title: string;
};

export default function TitleText({title}: Props){
    
    return (
    <motion.div className='pt-[24vmin] pl-[2vmax]'>
        {title.split(' ').map((word, index) => (
            <motion.span
                key={index}
                initial = {{ opacity: 0}}
                whileInView = {{ opacity: 1}}
                transition = {{ duration: 0.75, delay: index * 0.3}}
                viewport={{ once: true }}
                className='title-events'
            >
                <h1>
                    {word}
                </h1>
            </motion.span>
        ))}
    </motion.div>
    );
}