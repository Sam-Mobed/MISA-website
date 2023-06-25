"use client"

import Link from "next/link";
import {AiOutlineMenu, AiOutlineClose, AiOutlineInstagram, AiOutlineFacebook, AiOutlineTwitter} from 'react-icons/ai';
import { useState } from "react";

const Navbar: React.FC = () => {
    
    const [menuOpen, setMenuOpen] = useState(false);

    const handleNav = () => {
        setMenuOpen(!menuOpen);
    };
    
    return (
        <nav className="fixed w-full h-24 shadow-xl bg-white">
            <div className="flex justify-between items-center h-full w-full px-5 2xl:px-16">
                <div>
                    <Link href="/">
                        <span>
                            MISA
                        </span>
                    </Link>
                </div>
                <div className="hidden md:flex">
                    <ul className="hidden md:flex">
                        <Link href="/about">
                            <li className="ml-10 hover-border-b text-xl">
                                About
                            </li>
                        </Link>
                        <Link href="/events">
                            <li className="ml-10 hover-border-b text-xl">
                                Events
                            </li>
                        </Link>
                        <Link href="/apply">
                            <li className="ml-10 hover-border-b text-xl">
                                Apply
                            </li>
                        </Link>
                        <Link href="/contact">
                            <li className="ml-10 hover-border-b text-xl">
                                Contact Us
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
            }
            >
            </div>
            <div className="flex w-full items-center justify-end">
                <div onClick={handleNav} className="cursor-pointer">
                    <AiOutlineClose size={25} />
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
                        <Link href="/apply">
                            <li 
                                onClick={() => setMenuOpen(false)}
                                className="py-4 cursor-pointer">
                                Apply
                            </li>
                        </Link>
                        <Link href="/contact">
                            <li 
                                onClick={() => setMenuOpen(false)}
                                className="py-4 cursor-pointer"
                                >
                                Contact Us
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