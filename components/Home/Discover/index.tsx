"use client"

import '../../shared/style.css';

import Image from "next/image";
import Link from "next/link";
import Text from './animated';

import Astrolab from '../../images/astrolab.png';
import Woman from '../../images/Woman.png';

type Props = {
    title:string;
    text:string;
    about:string;
    events:string;
    involve:string;
    contact:string;
}

const astroStyle = {
    width:'15vw',
    height:'auto'
}

const womanStyle = {
    height: '15vh',
    width: 'auto',
}

export default function Discover(
    {
        title,
        text,
        about,
        events,
        involve,
        contact,
    }:Props
){
    return (
        <div className='w-screen inline flex justify-center items-center pb-10'>
            <div className="flex flex-col" style={{width:'80vw'}}>
                <div className='flex flex-row justify-between'>
                    <h2 className='section-title text-3xl md:text-4xl lg:text-6xl'>
                        {title.split(' ').map((word,index)=>
                            <div key={`${index}-${word}`}>{word}</div>
                        )}
                    </h2>
                    
                    <Image
                    src={Woman}
                    style={womanStyle}
                    alt="astrolab"
                    />
                </div>

                <Text 
                text={text}
                />

                <div className='flex flex-row justify-between items-center'>
                    <div className='flex flex-col space-y-20 items-center'>
                        
                        <Link href="/about" style={{boxShadow: '0 10px 10px rgba(0, 0, 0, 0.3)'}} className='index-link border-b-2 border-r-2 border-black transition-transform transform-gpu hover:scale-110'>
                            <p className='m-3'>
                                {about}
                            </p>
                        </Link>
                        
                        <a href="/about#contact" style={{boxShadow: '0 10px 10px rgba(0, 0, 0, 0.3)'}} className='index-link border-t-2 border-r-2 border-black transition-transform transform-gpu hover:scale-110'>
                            <p className='m-3'>
                                {contact}
                            </p>
                        </a>
                    </div>

                    <div className='justify-center center-items flex items-center p-5'>
                        <Image
                        src={Astrolab}
                        style={astroStyle}
                        alt="astrolab"
                        />
                    </div>
                    
                    <div className='flex flex-col space-y-20 items-center'>
                        <Link href="/events" style={{boxShadow: '0 10px 10px rgba(0, 0, 0, 0.3)'}} className='index-link border-b-2 border-l-2 border-black transition-transform transform-gpu hover:scale-110'>
                            <p className='m-3'>
                                {events}
                            </p>
                        </Link>
                        <a href="/events#gallery" style={{boxShadow: '0 10px 10px rgba(0, 0, 0, 0.3)'}} className='index-link border-t-2 border-l-2 border-black transition-transform transform-gpu hover:scale-110'>
                            <p className='m-3'>
                                {involve}
                            </p>
                        </a>
                    </div>
                </div>

                
            </div>
        </div>
    );
}

/* moving compass
<motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration:20, repeat: Infinity }}
                        >
                            <Image
                            src={Astrolab}
                            style={astroStyle}
                            alt="astrolab"
                            />
                        </motion.div>


*/

/*for the moving elements
<div className='flex flex-row overflow-hidden'>
                    <motion.div
                    animate={{ y:['275%','10%','235%'] }}
                    transition={{ duration:22, repeat: Infinity }}
                    >
                        <Image
                        src={LeftSoldiers}
                        style={{width:'20vw',height:'auto'}}
                        alt="Goat"
                        />
                    </motion.div>
                    <motion.div
                    animate={{ y:['255%','10%','225%'] }}
                    transition={{ duration:21.5, repeat: Infinity }}
                    >
                        <Image
                        src={GoldenSoldiers}
                        style={astroStyle}
                        alt="Goat"
                        />
                    </motion.div>
                    <motion.div
                    animate={{ y:['235%','10%','215%'] }}
                    transition={{ duration:21, repeat: Infinity }}
                    >
                        <Image
                        src={King}
                        style={astroStyle}
                        alt="Goat"
                        />
                    </motion.div>
                    <motion.div
                    animate={{ y:['215%','10%','205%'] }}
                    transition={{ duration:20.5, repeat: Infinity }}
                    >
                        <Image
                        src={FlagBearer}
                        style={astroStyle}
                        alt="Goat"
                        />
                    </motion.div>
                    <motion.div
                    animate={{ y:['195%','10%','195%'] }}
                    transition={{ duration:20, repeat: Infinity }}
                    >
                        <Image
                        src={RightSoldiers}
                        style={{width:'20vw',height:'auto'}}
                        alt="Goat"
                        />
                    </motion.div>
                </div>
*/

/*
<motion.div
animate={{ y: [-10, 10, -10], transition: { repeat: Infinity, duration: 5 } }}
>
    <Link href="/about">
        {about}
    </Link>
</motion.div>

<div className="flex flex-row justify-center items-center text-paragraph">
                    
                    <Link href="/events" className='flex-1 flex justify-end'>
                        {events}
                    </Link>
                    
                    <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration:20, repeat: Infinity }}
                    
                    >
                        <Image
                        src={Astrolab}
                        style={astroStyle}
                        alt="astrolab"
                        />
                    </motion.div>
    
                    <Link href="/about#apply" className='flex-1 flex justify-start'>
                        {involve}
                    </Link>
                    
                </div>

                <div className="flex flex-row justify-center items-center text-paragraph m-3">
                    
                        <Link href="/about#contact">
                            {contact}
                        </Link>
                    
                </div>
*/