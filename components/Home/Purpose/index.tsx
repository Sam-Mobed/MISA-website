import '../../shared/style.css'
import AnimatedText from './text';

import Image from 'next/image';
import Bahram from '../../images/Bahram-Gur.png';

type Props = {
    section_title: string;
    section_text1: string;
    section_text2: string;
    section_text3: string;
};

const imgStyle = {
    height: '15vh',
    width: 'auto',
}

export default function Purpose({section_title,section_text1,section_text2,section_text3}:Props){
    
    return (
        <div className='w-screen inline flex justify-center items-center'>
            <div className='flex flex-col' style={{width:'80vw'}}>
                <div className='flex flex-row ml-5 mt-5 justify-between'>
                    <h2 className='section-title text-3xl md:text-4xl lg:text-6xl'>
                        {section_title.split(' ').map((word)=>
                            <div>{word}</div>
                        )}
                    </h2>
                    <Image 
                    src={Bahram}
                    style={imgStyle}
                    alt="Bahram-Gur"
                    className='mr-8'
                    />
                </div>
                
                <AnimatedText paragraph1={section_text1} paragraph2={section_text2} paragraph3={section_text3}/>    
            </div>
        </div>
    );
}