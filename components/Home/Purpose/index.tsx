import '../../shared/style.css'
import AnimatedText from './text';

type Props = {
    section_title: string;
    section_text1: string;
    section_text2: string;
    section_text3: string;
};

export default function Purpose({section_title,section_text1,section_text2,section_text3}:Props){
    
    return (
        <div className='w-screen inline'>
            <div className='flex flex-col' >
                <div className='flex flex-row ml-5 mt-5'>
                    <h2 className='section-title text-3xl md:text-4xl lg:text-6xl'>
                        {section_title.split(' ').map((word)=>
                            <div>{word}</div>
                        )}
                    </h2>
                </div>
                
                <AnimatedText paragraph1={section_text1} paragraph2={section_text2} paragraph3={section_text3}/>    
            </div>
        </div>
    );
}