import '@/components/shared/style.css';

import Image from 'next/image';
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
                <div className='flex flex-col' style={{width:'80vw'}}>
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
                </div>
            </div>
        </div>
    );
}