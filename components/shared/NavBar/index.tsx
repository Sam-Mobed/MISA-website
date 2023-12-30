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
    height: '5.5vmax',
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
            <div className='flex flex-row fixed top-0 z-10 justify-between w-screen items-center navbar overflow-hidden'>
                {/*
                    also add the english | Farsi toggle (only in burger mode)
                <li className='active'>
                    <span className='nav-gradient-text'>{misa}</span>
                </li>                
                */}
                <div className='logo h-full p-2'>
                    <Image 
                        src={MISA_logo}
                        alt='MISA logo'
                        style={logo_style}
                    />
                </div>

                <button 
                className='mobile-nav-toggle' 
                aria-controls="navigation-bar" 
                
                onClick={toggleNavVisibility}
                >
                    <span className='sr-only'>Menu</span>
                </button>
                
                <ul id="navigation-bar" aria-expanded={isNavVisible} className='flex flex-row  w-[50vw] justify-evenly navigation-bar p-2'>
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