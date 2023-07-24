"use client"

import {motion} from 'framer-motion';
import '../../shared/style.css';

type Props = {
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
}

const boxStyle = {
    width: '80vw',
    height: 'auto',
    padding: '10px'
}

export default function AnimatedText({paragraph1, paragraph2, paragraph3}: Props){
    return (
        <div className='inline-flex flex-col items-center' style={{top:'20vw'}}>
            <div>
                <div className='text-center text-paragraph' style={boxStyle}>
                    {paragraph1.split(' ').map((word, index)=>
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
            </div>
            <div>
                <div className='text-center text-paragraph' style={boxStyle}>
                    {paragraph2.split(' ').map((word, index)=>
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
            </div>
            <div>
                <div className='text-center text-paragraph' style={boxStyle}>
                    {paragraph3.split(' ').map((word, index)=>
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
            </div>
        </div>
    );
}

/*
<div className="flex flex flex-row" style={{height:'100vw',width:'100vh'}}>
            <div style={firstStyle}>
                <div>
                    {paragraph1.split(' ').map((word, index)=>
                    <motion.span
                    key={index}
                    initial = {{ opacity: 0}}
                    whileInView = {{ opacity: 1}}
                    transition = {{ duration: 0.8, delay: index * 0.17}}
                    viewport={{ once: true }}
                    className='text-paragraph'
                    >
                        <span>
                            {word}{' '}
                        </span>
                    </motion.span>
                    )}
                </div>
            </div>
            <div style={secondStyle}>
                {paragraph2.split(' ').map((word, index)=>
                <motion.span
                key={index}
                initial = {{ opacity: 0}}
                whileInView = {{ opacity: 1}}
                transition = {{ duration: 0.8, delay: index * 0.17}}
                viewport={{ once: true }}
                className='text-paragraph'
                >
                    <span>
                        {word}{' '}
                    </span>
                </motion.span>
                )}
            </div>
            <div style={thirdStyle}>
                {paragraph3.split(' ').map((word, index)=>
                <motion.span
                key={index}
                initial = {{ opacity: 0}}
                whileInView = {{ opacity: 1}}
                transition = {{ duration: 0.8, delay: index * 0.17}}
                viewport={{ once: true }}
                className='text-paragraph'
                >
                    <span>
                        {word}{' '}
                    </span>
                </motion.span>
                )}
            </div>
        </div>
*/