import {FaInstagram, FaFacebook, FaTelegram} from "react-icons/fa";
import {TbPlaystationTriangle} from "react-icons/tb";
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
            <div className="mainFooter flex lg:flex-row md:flex-row flex-col lg:p-5 md:p-5 p-2 mb-15">
                <div className="flex-2 flex flex-col space-y-[0.5vmax] items-center">
                    <div className="gradient-text">
                        {misa}
                    </div>
                    
                    <div>
                        <a className='underline footer_invert' href="mailto:misa@ssmu.ca">misa@ssmu.ca</a>
                    </div>
                    <div>
                        <IntlLink href='/' locale='fa' className="mr-2 footer_invert">
                            فارسی
                        </IntlLink>
                        |
                        <IntlLink href='/' locale='en' className="ml-2 footer_invert">
                            English
                        </IntlLink>
                    </div>
                </div>
                <div className="flex-1 flex flex-col">
                    <div className="flex flex-row lg:justify-end md:justify-end justify-center">
                        <div>
                            <div className="flex flex-col m-5">
                                <Link href='/' className="mb-3 subtitle flex lg:justify-start md:justify-start justify-center">
                                    <p className="footer_invert inline-block subtitle-underline">
                                        {home}
                                    </p>
                                </Link>

                                <a href='/#goal' className="mb-1 flex lg:justify-start md:justify-start justify-center">
                                    <p className="footer_invert inline-block leading-tight whitespace-nowrap">
                                        {goal}
                                    </p>
                                </a>

                                <a href='/#values' className="flex lg:justify-start md:justify-start justify-center">
                                    <p className="footer_invert inline-block leading-tight">
                                        {values}
                                    </p>
                                </a>
                            </div>
                            <div className="flex flex-col m-5">
                                <Link href='/about' className="mb-3 subtitle flex lg:justify-start md:justify-start justify-center">
                                    <p className="footer_invert inline-block subtitle-underline leading-tight">
                                        {about}
                                    </p>
                                </Link>

                                <a href='/about#story' className="mb-1 flex lg:justify-start md:justify-start justify-center">
                                    <p className="footer_invert inline-block leading-tight">
                                        {story}
                                    </p>
                                </a>

                                <a href='/about#members' className="mb-1 flex lg:justify-start md:justify-start justify-center">
                                    <p className="footer_invert inline-block leading-tight">
                                        {members}
                                    </p>
                                </a>
                            </div>
                        </div>

                        <div>
                            <div className="flex flex-col m-5">
                                <Link href='/events' className="mb-3 subtitle flex lg:justify-start md:justify-start justify-center">
                                    <p className="footer_invert inline-block subtitle-underline">
                                        {events}
                                    </p>
                                </Link>

                                <a href='/events#upcoming' className="mb-1 flex lg:justify-start md:justify-start justify-center">
                                    <p className="footer_invert inline-block leading-tight whitespace-nowrap">
                                        {upcoming}
                                    </p>
                                </a>

                                <a href='/events#gallery' className="flex lg:justify-start md:justify-start justify-center">
                                    <p className="footer_invert inline-block leading-tight">
                                        {suggest}
                                    </p>
                                </a>
                            </div>
                            <div className="flex flex-col m-5">
                                <div className="mb-3 subtitle flex flex-col leading-tight">
                                    <p className="lg:text-left md:text-left text-center">
                                        {socialmedia}
                                    </p>
                                </div>
                                <div className="flex flex-row justify-between mb-2">
                                    <a href='https://www.instagram.com/mcgillmisa/' target="_blank" rel="noopener noreferrer">
                                        <FaInstagram className="lg:text-3xl md:text-3xl text-2xl cursor-pointer hover:text-purple-600" />
                                    </a>
                                    
                                    <a href="https://www.facebook.com/mcgillmisa/" target="_blank" rel="noopener noreferrer">
                                        <FaFacebook className="lg:text-3xl md:text-3xl text-2xl cursor-pointer hover:text-blue-600" />
                                    </a>

                                    <a href='https://t.me/McGillMISA' target="_blank" rel="noopener noreferrer">
                                        <FaTelegram className="lg:text-3xl md:text-3xl text-2xl cursor-pointer hover:text-green-600" />
                                    </a>
                                </div>
                                <Link href='https://forms.office.com/pages/responsepage.aspx?id=cZYxzedSaEqvqfz4-J8J6lCpuuyIo05AtcqpjuV6Sg1UMzZJWUtFRTYxMUNYTDA4MFVWUlVOQU85OC4u' target="_blank" rel="noopener noreferrer" className="underline flex justify-center">
                                    <p className="footer_invert inline-block leading-tight">
                                        {newsletter}
                                    </p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="minFooter w-screen flex flex-row items-center justify-center">
                <div className="m-3 items-center justify-center text-sm">
                    {vercel}
                </div>
                <TbPlaystationTriangle className="text-xl m-3 rtl-text"/>
                <Link href='https://github.com/Sam-Mobed' target="_blank" rel="noopener noreferrer" className="text-sm m-3 items-center justify-center underline footer_invert">
                    {made}
                </Link>
            </div>
        </div>
    );
}