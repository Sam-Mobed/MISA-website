"use client"

import { motion } from 'framer-motion';
import '../../shared/style.css';

type Props = {
    title: string;
};

export default function TitleText({title}: Props){
    
    return (
    <motion.div>
        {title.split(' ').map((word, index) => (
            <motion.span
                key={index}
                initial = {{ opacity: 0}}
                whileInView = {{ opacity: 1}}
                transition = {{ duration: 0.8, delay: index * 0.3}}
                viewport={{ once: true }}
                className="title"
            >
                <h1 className='word'>
                    {word}
                </h1>
            </motion.span>
        ))}
    </motion.div>
    );
}