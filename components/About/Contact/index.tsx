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
        <div className='mt-5'>
            <div className='w-screen inline flex justify-center items-center'>
                <div className='flex flex-col text-paragraph' style={{width:'80vw'}}>
                    <div className='flex flex-row ml-5 mt-5 justify-between'>
                        <h2 className='section-title text-3xl md:text-4xl lg:text-6xl'>
                            {contact.split(' ').map((word)=>
                                <div>{word}</div>
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
                        <div className='flex flex-col p-5 items-center'>
                            <FaTelegram className="text-4xl cursor-pointer hover:text-green-600" />
                            {tg}
                        </div>
                        <div className='flex flex-col p-5 items-center'>
                            <FaInstagram className="text-4xl cursor-pointer hover:text-purple-600" />
                            {ig}
                        </div>
                        <div className='flex flex-col p-5 items-center'>
                            <FaFacebook className="text-4xl cursor-pointer hover:text-blue-600" />
                            {fb}
                        </div>
                    </div>
                    <div className='flex flex-col items-center pb-5'>
                        {email}
                        <MdEmail className="text-4xl cursor-pointer hover:text-red-600" />
                        <a className='underline hover:cursor-pointer'>misa@ssmu.ca</a>
                    </div>
                    <div className='flex flex-row mb-10'>
                        <div className='flex-1 flex flex-row justify-center items-center text-center border-r-2 border-black'>
                            <p className='w-[20vw] mr-[5vw]'>
                                {newsletter}
                            </p>
                            <div className='flex justify-center items-center'>
                                <BsNewspaper className="lg:text-7xl md:text-7xl text-4xl cursor-pointer hover:text-blue-600 border-2 border-black p-2 rounded" />
                            </div>
                        </div>
                        <div className='flex-1 flex flex-row justify-center text-center'>
                            <p className='w-[20vw] mr-[5vw]'>
                                {signup}
                            </p>
                            <div className='flex justiy-center items-center'>
                                <FaHandHoldingHeart className="lg:text-7xl md:text-7xl text-4xl cursor-pointer hover:text-red-600 border-2 border-black p-2 rounded" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}