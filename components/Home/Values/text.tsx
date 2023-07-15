"use client"

import {motion} from 'framer-motion';

type Props = {
    paragraph: string;
}

export default function Text({paragraph}:Props){
    return (
        <div className='box1 text-center text-paragraph'>
            {paragraph.split(' ').map((word, index)=>
                <motion.span
                key={index}
                initial = {{ opacity: 0}}
                whileInView = {{ opacity: 1}}
                transition = {{ duration: 0.8, delay: index * 0.17}}
                viewport={{ once: true }}
                >
                    <span>
                        {word}{' '}
                    </span>
                </motion.span>
            )}
        </div>
    );
}