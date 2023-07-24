"use client"

import '../../shared/style.css';

import {motion} from 'framer-motion';

type Props = {
    paragraph: string;
}

const boxStyle = {
    width: '80vw',
    height: 'auto',
    padding: '10px'
}

export default function Text({paragraph}:Props){
    return (
        <div className='text-center text-paragraph' style={boxStyle}>
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