"use client"

import '../../shared/style.css';
import './staggerb.css';

import { motion } from 'framer-motion';

type Props = {
    val1:string;
    val2:string;
    val3:string;
    val1txt:string;
    val2txt:string;
    val3txt:string;
}

export default function StaggerBox(
{
val1,
val2,
val3,
val1txt,
val2txt,
val3txt
}:Props
){
    return (
        <div className="flex-container">
            <div className="flex-item">
                <h3 className='text-3xl md:text-3xl lg:text-4xl mb-3'>
                    {val1}
                </h3>
                <div className='text-center text-paragraph item1'>
                    {val1txt.split(' ').map((word, index)=>
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
            <div className="flex-item">
                <h3 className='text-3xl md:text-3xl lg:text-4xl mb-3'>
                    {val2}
                </h3>
                <div className='text-center text-paragraph item2'>
                    {val2txt.split(' ').map((word, index)=>
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
            <div className="flex-item">
                <h3 className='text-3xl md:text-3xl lg:text-4xl mb-3'>
                    {val3}
                </h3>
                <div className='text-center text-paragraph item3'>
                    {val3txt.split(' ').map((word, index)=>
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
<div className="flex-container">
            <div className="flex-item">getMessagesOrError (webpack-internal:///(sc_server)/./node_modules/use-intl/dist/src/core/createBaseTranslator.js:65:27)</div>
            <div className="flex-item">getMessagesOrError (webpack-internal:///(sc_server)/./node_modules/use-intl/dist/src/core/createBaseTranslator.js:65:27)</div>
            <div className="flex-item">getMessagesOrError (webpack-internal:///(sc_server)/./node_modules/use-intl/dist/src/core/createBaseTranslator.js:65:27)</div>
        </div>
----------------
<div className='flex flex-wrap justify-between justify-center'>
            <div className='w-1/2 md:w-1/4 lg:w-1/6 p-4 flex flex-col items-center'>
                <h3 className='text-3xl md:text-3xl lg:text-4xl'>
                    {val1}
                </h3>
                <div className='text-center text-paragraph'>
                    {val1txt.split(' ').map((word, index)=>
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

            <div className='w-1/2 md:w-1/4 lg:w-1/6 p-4 flex flex-col items-center'>
                <h3 className='text-3xl md:text-3xl lg:text-4xl'>
                    {val2}
                </h3>
                <div className='text-center text-paragraph'>
                    {val2txt.split(' ').map((word, index)=>
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

            <div className='w-1/2 md:w-1/4 lg:w-1/6 p-4 flex flex-col items-center'>
                <h3 className='text-3xl md:text-3xl lg:text-4xl'>
                    {val3}
                </h3>
                <div className='text-center text-paragraph'>
                    {val3txt.split(' ').map((word, index)=>
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

*/