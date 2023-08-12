import {FaInstagram, FaFacebook, FaTelegram} from "react-icons/fa";
import {BsTriangleFill} from 'react-icons/bs';
import IntlLink from "next-intl/link";
import Link from "next/link";

import './footer.css';
import '../style.css';

type Props = {
    misa:string;
    home:string;
    goal:string;
    values:string;
    about:string;
    story:string;
    members: string;
    events: string;
    upcoming: string;
    suggest:string;
    join:string;
    socialmedia:string;
    newsletter:string;
    vercel:string;
    made:string;
}

export default function Footer(
    {
        misa,
        home,
        goal,
        values,
        about,
        story,
        members,
        events,
        upcoming, 
        suggest,
        join,
        socialmedia,
        newsletter,
        vercel,
        made
    }:Props
){
    
    return(
        <div className="w-screen flex flex-col footer items-center">
            <div className="mainFooter flex lg:flex-row md:flex-row flex-col p-5 mb-20">
                <div className="flex-2 flex flex-col space-y-[0.5vw] items-center">
                    <div className="gradient-text">
                        {misa}
                    </div>
                    
                    <div>
                        <a className='underline' href="mailto:misa@ssmu.ca">misa@ssmu.ca</a>
                    </div>
                    <div>
                        <IntlLink href='/' locale='fa' className="mr-2">
                            فارسی
                        </IntlLink>
                        |
                        <IntlLink href='/' locale='en' className="ml-2">
                            English
                        </IntlLink>
                    </div>
                </div>
                <div className="flex-1 flex flex-col">
                    <div className="flex flex-row lg:justify-end md:justify-end justify-center">
                        <div>
                            <div className="flex flex-col m-5">
                                <Link href='/' className="mb-5 subtitle">
                                    {home}
                                </Link>

                                <a href='/#goal' className="mb-1">
                                    {goal}
                                </a>

                                <a href='/#values'>
                                    {values}
                                </a>
                            </div>
                            <div className="flex flex-col m-5">
                                <Link href='/about' className="mb-5 subtitle">
                                    {about}
                                </Link>

                                <a href='/about#story' className="mb-1">
                                    {story}
                                </a>

                                <a href='/about#members' className="mb-1">
                                    {members}
                                </a>
                                <a href='https://www.instagram.com/mcgillmisa/' target="_blank" rel="noopener noreferrer" className="underline">
                                    {join}
                                </a>
                            </div>
                        </div>

                        <div>
                            <div className="flex flex-col m-5">
                                <Link href='/events' className="mb-5 subtitle">
                                    {events}
                                </Link>

                                <a href='/events#upcoming' className="mb-1">
                                    {upcoming}
                                </a>

                                <a href='/events#suggest'>
                                    {suggest}
                                </a>
                            </div>
                            <div className="flex flex-col m-5">
                                <div className="mb-5 subtitle flex flex-col">
                                    {socialmedia}
                                </div>
                                <div className="flex flex-row justify-between mb-2">
                                    <a href='https://www.instagram.com/mcgillmisa/' target="_blank" rel="noopener noreferrer">
                                        <FaInstagram className="text-3xl cursor-pointer hover:text-purple-600" />
                                    </a>
                                    
                                    <a href="https://www.facebook.com/mcgillmisa/" target="_blank" rel="noopener noreferrer">
                                        <FaFacebook className="text-3xl cursor-pointer hover:text-blue-600" />
                                    </a>

                                    <a href='https://t.me/McGillMISA' target="_blank" rel="noopener noreferrer">
                                        <FaTelegram className="text-3xl cursor-pointer hover:text-green-600" />
                                    </a>
                                </div>
                                <Link href='https://drive.google.com/file/d/1Rwn8vYPAzRDoX7yD4zf-E6G963Uzty09/view?pli=1' target="_blank" rel="noopener noreferrer" className="underline flex justify-center">
                                    {newsletter}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="minFooter w-screen flex flex-row items-center justify-center">
                <div className="m-3 items-center justify-center">
                    {vercel}
                </div>
                <BsTriangleFill className="text-xl m-3 rtl-text"/>
                <Link href='https://github.com/Sam-Mobed' target="_blank" rel="noopener noreferrer" className="m-3 items-center justify-center underline">
                    {made}
                </Link>
            </div>
        </div>
    );
}