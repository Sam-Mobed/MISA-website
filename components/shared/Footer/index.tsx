import {FaInstagram, FaFacebook, FaTelegram} from "react-icons/fa";
import {BsShopWindow, BsTriangleFill} from 'react-icons/bs';
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
    involve:string;
    signup:string;
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
        involve,
        signup,
        socialmedia,
        newsletter,
        vercel,
        made
    }:Props
){
    
    return(
        <div className="w-screen flex flex-col">
            <div className="mainFooter flex flex-row">
                <div className="flex-2 flex flex-col">
                    <div>
                        {misa}
                    </div>
                    <div>
                        514 000-0000
                    </div>
                    <div>
                        misa@ssmu.ca
                    </div>
                    <div>
                        <IntlLink href='/' locale='fa'>
                            فارسی
                        </IntlLink>
                        |
                        <IntlLink href='/' locale='en'>
                            English
                        </IntlLink>
                    </div>
                </div>
                <div className="flex-1 flex flex-col">
                    <div className="flex flex-row justify-end">
                        <div className="flex flex-col">
                            <Link href='/'>
                                {home}
                            </Link>

                            <Link href='/#goal'>
                                {goal}
                            </Link>

                            <Link href='/#values'>
                                {values}
                            </Link>
                        </div>
                        <div className="flex flex-col">
                            <Link href='/about'>
                                {about}
                            </Link>

                            <Link href='/about#story'>
                                {story}
                            </Link>

                            <Link href='/about#members'>
                                {members}
                            </Link>
                        </div>
                        <div className="flex flex-col">
                            <Link href='/events'>
                                {events}
                            </Link>

                            <Link href='/events#upcoming'>
                                {upcoming}
                            </Link>

                            <Link href='/about#suggest'>
                                {suggest}
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-row justify-end">
                        <div className="flex flex-row">
                            <div>
                                {involve}
                            </div>
                            <Link href='/'>
                                {signup}
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-row justify-end">
                        <div className="flex flex-col">
                            <div>
                                {socialmedia}
                            </div>
                            <div className="flex flex-row">
                                <FaInstagram className="text-xl cursor-pointer hover:text-purple-600" />
                                <FaFacebook className="text-xl cursor-pointer hover:text-blue-600" />
                                <FaTelegram className="text-xl cursor-pointer hover:text-green-600" />
                            </div>
                            <div>
                                {newsletter}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="minFooter flex flex-row items-center justify-center">
                <div className="m-3">
                    {vercel}
                </div>
                <BsTriangleFill className="text-xl m-3"/>
                <div className="m-3">
                    {made}
                </div>
            </div>
        </div>
    );
}