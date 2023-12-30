"use client"

import Link from "next/link";
import {AiOutlineMenu, AiOutlineClose, AiOutlineInstagram, AiOutlineFacebook, AiOutlineTwitter} from 'react-icons/ai';
import { useState, useEffect } from "react";

const Navbar: React.FC = () => {
    
    /*the false value we passed to useState is the default value of our state
    with this, useState generates an array (always has 2 elements) that we deconstruct
    the first elenent is the current State and the second one is a function that updates the current state
    instead of just writing false, we can put a function instead which will not run every time we re-render our component,*/
    const [menuOpen, setMenuOpen] = useState(() => false);
    const [scrollPosition, setScrollPosition] = useState(() => 0);
    //its not good practice to directly use menuOpen, instead, have an argument inside of your arrow function, and use that
    //but since we are using ts, this makes things more complicated, so leave as is for now
    const handleNav = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
    }, []);

    let navBarOpacity: number = 0;
    useEffect(() => {
        if (scrollPosition<30){
            navBarOpacity=0;
        }else if(scrollPosition>50){
            navBarOpacity=1;
        }else{
            navBarOpacity=navBarOpacity/scrollPosition;
        }
    }, [scrollPosition]);

    /*
    
    surrond the navbar with a div that controls the opacity.
    but the thing is, elements inside of it have their own color, will this clash with opacity? i don't think so
    we can surrond the navbar with another div: <div style={{ background: color }}</div>

    */

    
    return (
        
        <nav className="fixed w-full h-24 shadow-xl bg-white">
            <div className="flex justify-between items-center h-full w-full px-5 2xl:px-16">
                
                <Link href="/">
                    <h3 className="text-5xl font-extrabold">
                        <span className="inline-block bg-gradient-to-r from-green-500 to-red-600
                        bg-clip-text text-transparent whitespace-nowrap">
                                MISA
                        </span>
                    </h3>
                </Link>
                
                <div className="hidden md:flex">
                    <ul className="hidden md:flex">
                        <Link href="/about">
                            <li className="ml-10 hover:border-b text-xl">
                                About
                            </li>
                        </Link>
                        <Link href="/events">
                            <li className="ml-10 hover:border-b text-xl">
                                Events
                            </li>
                        </Link>
                        <Link href="/contact">
                            <li className="ml-10 hover:border-b text-xl">
                                Contact Us
                            </li>
                        </Link>
                        <Link href="/fa">
                            <li className="ml-10 hover:border-b text-xl">
                                فارسی
                            </li>
                        </Link>
                    </ul>
                </div>
                <div onClick={handleNav} className="md:hidden cursor-pointer pl-24">
                    <AiOutlineMenu size={25}/>
                </div>
            </div>
            <div className={
                menuOpen ? "fixed left-0 top-0 w-[65%] md:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
                : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
            }>
            
                <div className="flex w-full items-center justify-end">
                    <div onClick={handleNav} className="cursor-pointer">
                        <AiOutlineClose size={25} />
                    </div>
                </div>

                <div className="flex-col py-4">
                    <ul>
                        <Link href="/">
                            <li 
                                onClick={() => setMenuOpen(false)}
                                className="py-4 cursor-pointer">
                                Home
                            </li>
                        </Link>
                        <Link href="/about">
                            <li 
                                onClick={() => setMenuOpen(false)}
                                className="py-4 cursor-pointer">
                                About
                            </li>
                        </Link>
                        <Link href="/events">
                            <li 
                                onClick={() => setMenuOpen(false)}
                                className="py-4 cursor-pointer">
                                Events
                            </li>
                        </Link>
                        <Link href="/contact">
                            <li 
                                onClick={() => setMenuOpen(false)}
                                className="py-4 cursor-pointer">
                                Contact Us
                            </li>
                        </Link>
                        <Link href="/fa">
                            <li 
                                onClick={() => setMenuOpen(false)}
                                className="py-4 cursor-pointer">
                                فارسی
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className="flex flex-row justify-around pt-10 items-center">
                    <AiOutlineInstagram size={30} className="cursor-pointer" />
                    <AiOutlineFacebook size={30} className="cursor-pointer" />
                    <AiOutlineTwitter size={30} className="cursor-pointer" />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;