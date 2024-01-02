"use client"

import './style.css';

import Image from 'next/image';
import { useState } from 'react';

import MISA_logo from '@/components/images/MISA_logo.png';

type Props = {
    misa: string;
    home: string;
    about: string;
    events: string;
    apply: string;
    contact: string;
    switchLocale: string;
    newsLetter: string;
}

const logo_style = {
    height: '4.5vmax',
    width: 'auto'
}

export default function Navbar(
    {
       misa,
       home,
       about,
       events,
       apply,
       contact,
       switchLocale,
       newsLetter
    }:Props
){
    const [isNavVisible, setIsNavVisible] = useState(false);

    const toggleNavVisibility = () => {
        setIsNavVisible(!isNavVisible);
    };

    return (
        <nav>
            <div className='flex flex-row fixed top-0 z-10 w-screen justify-between items-center navbar overflow-hidden'>
                {/*
                    also add the english | Farsi toggle (only in burger mode)
                <li className='active'>
                    <span className='nav-gradient-text'>{misa}</span>
                </li>    
                */}
                
                <div className='w-full navbar-backg-smallsc top-0 h-[7vh]' aria-expanded={isNavVisible}/>
                
                <div className='logo h-full p-2 ml-[7vw]' aria-expanded={isNavVisible}>
                    <Image 
                        src={MISA_logo}
                        alt='MISA logo'
                        style={logo_style}
                    />
                </div>

                <button 
                className='mobile-nav-toggle mr-[7vw] mt-[-0.5vw]' 
                aria-controls="navigation-bar" 
                onClick={toggleNavVisibility}
                >
                    <span className='sr-only'>Menu</span>
                </button>
                
                <ul id="navigation-bar" aria-expanded={isNavVisible} className='flex flex-row w-[50vw] justify-evenly navigation-bar p-2'>
                    <li className='active p-2'>
                        <a href='/'>
                            <span>Home</span>
                        </a>
                    </li>
                    <li className='active p-2'>
                        <a href='/about'>
                            <span>About</span>
                        </a>
                    </li>
                    <li className='active p-2'>
                        <a href='/events'>
                            <span>Events</span>
                        </a>
                    </li>
                </ul>
                {/*
                    should I add the social media here too?
                    only in burger mode
                */}
            </div>
        </nav>
    );
}