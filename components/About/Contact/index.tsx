import '@/components/shared/style.css';

import Image from 'next/image';
import {FaInstagram, FaFacebook, FaTelegram, FaHandHoldingHeart} from "react-icons/fa";
import {MdEmail} from "react-icons/md";
import {BsNewspaper} from "react-icons/bs";
import messenger from '../../images/messenger.png';

type Props = {
    contact:string;
    contact_text:string;
    ig:string;
    fb:string;
    tg:string;
    email:string;
    newsletter:string;
    signup:string;
}

const imgStyle = {
    height: '15vh',
    width: 'auto',
}

export default function Contact(
    {
        contact,
        contact_text,
        ig,
        fb,
        tg,
        email,
        newsletter,
        signup
    }:Props
){
    return (
        <div className='mt-5 w-screen'>
            <div className='w-[100%] inline flex justify-center items-center'>
                <div className='flex flex-col text-paragraph' style={{width:'80vw'}}>
                    <div className='flex flex-row ml-5 mt-5 justify-between'>
                        <h2 className='section-title text-3xl md:text-4xl lg:text-6xl'>
                            {contact.split(' ').map((word, index)=>
                                <div key={`${index}-${word}`}>{word}</div>
                            )}
                        </h2>
                        <Image 
                        src={messenger}
                        style={imgStyle}
                        alt="Bahram-Gur"
                        className='mr-8'
                        />
                    </div>
                    <div className='text-center pt-5'>
                        {contact_text}
                    </div>
                    <div className='flex flex-row justify-center'>
                        <a href='https://t.me/McGillMISA' target="_blank" rel="noopener noreferrer" className='flex flex-col p-5 items-center' >
                            <FaTelegram className="text-4xl cursor-pointer hover:text-green-600" />
                            <p className='cursor-pointer hover:text-green-600'>{tg}</p>
                        </a>
                        <a href='https://www.instagram.com/mcgillmisa/' target="_blank" rel="noopener noreferrer" className='flex flex-col p-5 items-center'>
                            <FaInstagram className="text-4xl cursor-pointer hover:text-purple-600" />
                            <p className='cursor-pointer hover:text-purple-600'>{ig}</p>
                        </a>
                        <a href="https://www.facebook.com/mcgillmisa/" target="_blank" rel="noopener noreferrer" className='flex flex-col p-5 items-center'>
                            <FaFacebook className="text-4xl cursor-pointer hover:text-blue-600" />
                            <p className="cursor-pointer hover:text-blue-600">{fb}</p>
                        </a>
                    </div>
                    <div className='flex flex-col items-center pb-5'>
                        {email}
                        <a className='underline flex flex-col justify-center items-center' href="mailto:misa@ssmu.ca">
                            <MdEmail className="text-4xl cursor-pointer hover:text-red-600" />
                            <p className='underline hover:cursor-pointer hover:text-red-600'>misa@ssmu.ca</p>
                        </a>
                    </div>
                    <div className='flex flex-row mb-10'>
                        <div className='p-1 flex-1 flex flex-col justify-center items-center text-center'>
                            <div className='w-[100%] text-center flex justify-center items-center p-2'>
                                {newsletter}
                            </div>
                            <div className='flex justify-center items-center p-2'>
                                <a href='https://forms.office.com/pages/responsepage.aspx?id=cZYxzedSaEqvqfz4-J8J6lCpuuyIo05AtcqpjuV6Sg1UMzZJWUtFRTYxMUNYTDA4MFVWUlVOQU85OC4u' target="_blank" rel="noopener noreferrer">
                                    <BsNewspaper className="lg:text-7xl md:text-7xl text-5xl cursor-pointer hover:text-blue-600 p-2 rounded" />
                                </a>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}