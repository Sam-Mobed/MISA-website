import '../../shared/style.css';

import Image from "next/image";
import Link from "next/link";

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
        <div className='w-screen inline flex justify-center items-center'>
            <div className="flex flex-col" style={{width:'80vw'}}>
                <div className='flex flex-row justify-between'>
                    <h2 className='section-title text-3xl md:text-4xl lg:text-6xl'>
                        {title.split(' ').map((word)=>
                            <div>{word}</div>
                        )}
                    </h2>
                    
                    <Image
                    src={Woman}
                    style={womanStyle}
                    alt="astrolab"
                    />
                </div>

                <div className='text-center text-paragraph'>
                    {text}
                </div>
                
                <div className="flex flex-row justify-center items-center text-paragraph m-3">
                    <Link href="/about">
                        {about}
                    </Link>
                </div>

                <div className="flex flex-row justify-center items-center text-paragraph">
                    <Link href="/events" className='m-3'>
                        {events}
                    </Link>
                    <div>
                        <Image
                        src={Astrolab}
                        style={astroStyle}
                        alt="astrolab"
                        className='m-3'
                        />
                    </div>
                    <Link href="/about#apply" className='m-3'>
                        {involve}
                    </Link>
                </div>

                <div className="flex flex-row justify-center items-center text-paragraph m-3">
                    <Link href="/about#contact">
                        {contact}
                    </Link>
                </div>
            </div>
        </div>
    );
}