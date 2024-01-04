"use client"

import './style.css';

import Image from 'next/image';
import { useState,useEffect } from 'react';
import IntlLink from "next-intl/link";

import MISA_logo from '@/components/images/MISA_logo.png';

type Props = {
    misa: string;
    home: string;
    about: string;
    events: string;
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
    }:Props
){
    const [isNavVisible, setIsNavVisible] = useState(false);

    const toggleNavVisibility = () => {
        setIsNavVisible(!isNavVisible);
    };

    const [showNavbar, setShowNavbar] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        const sectionId = 'show-nav';
        
        const section = document.getElementById(sectionId);

        if (section) {
            const sectionRect = section.getBoundingClientRect();
            setShowNavbar(sectionRect.bottom <= 0);
        }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    /* the else if never gets executed because the div that has that id is conditionally rendered.
    useEffect(() => {
        const nav = document.getElementById('navbar');
        if (showNavbar && nav) {
            nav.classList.remove('navbar-fadeout');
            nav.classList.add('navbar-fadein');
        } else if(nav) {
            nav.classList.remove('navbar-fadein');
            nav.classList.add('navbar-fadeout');
        }
    }, [showNavbar]);

    i have an idea on how to fix this, we make the the navbar fadeout BEFORE we reach the section.
    so when we scroll down, the navbar appears once we pass the section. but when we scroll up, the navbar disappears a little sooner,
    before we hit the section. that way it still exists and we can add the fadeout class to it. 
    */
    return (
        <nav>
            {showNavbar && (
            <div className='flex flex-row fixed top-0 z-10 w-screen justify-between items-center navbar navbar-fadein overflow-hidden'
            id='navbar'>
                <div className='w-full navbar-backg-smallsc top-0 h-[7vh]' aria-expanded={isNavVisible}/>
                
                <div className='logo h-full p-2 ml-[7vw] ' aria-expanded={isNavVisible}>
                    <Image 
                        src={MISA_logo}
                        alt='MISA logo'
                        style={logo_style}
                    />
                </div>

                <button 
                className='mobile-nav-toggle mr-[7vw]' 
                aria-controls="navigation-bar" 
                onClick={toggleNavVisibility}
                >
                    <div aria-expanded={isNavVisible} className='ham-bar bar-top'></div>
                    <div aria-expanded={isNavVisible} className='ham-bar bar-middle'></div>
                    <div aria-expanded={isNavVisible} className='ham-bar bar-bottom'></div>
                </button>
                
                <ul id="navigation-bar" aria-expanded={isNavVisible} className='flex flex-row w-[50vw] justify-evenly navigation-bar p-2'>
                    <li className='p-2 misa-name nav-gradient-text m-0 p-0'>
                        <span>{misa}</span>
                    </li>
                    <li className='switch-locale mb-10'>
                        <IntlLink href='/' locale='fa' className="mr-2">
                            فارسی
                        </IntlLink>
                        |
                        <IntlLink href='/' locale='en' className="ml-2">
                            English
                        </IntlLink>
                    </li>
                    <li className='p-2 home-nav'>
                        <a href='/'>
                            <span>{home}</span>
                        </a>
                    </li>
                    <li className='p-2 about-nav'>
                        <a href='/about'>
                            <span>{about}</span>
                        </a>
                    </li>
                    <li className='p-2 events-nav'>
                        <a href='/events'>
                            <span>{events}</span>
                        </a>
                    </li>
                </ul>
            </div>
            )}
        </nav>
    );
}