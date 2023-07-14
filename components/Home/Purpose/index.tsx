import '../../shared/border.css';
import '../../shared/style.css'
import MovingElements from './movingElements';
import AnimatedText from './text';

type Props = {
    section_title: string;
    section_text1: string;
    section_text2: string;
    section_text3: string;
};

const titleStyle = {
    top: '5vw',
    left: '4%',
}

export default function Purpose({section_title,section_text1,section_text2,section_text3}:Props){
    
    return (
        <div className='w-screen outer-div' style={{height:'80vh'}}>
            <div className='inner-div'>
                <MovingElements />
                <div>
                    <div className='absolute' style={titleStyle}>
                        <div className='flex flex-row'>
                            <h2 className='section-title text-3xl md:text-4xl lg:text-6xl'>
                                {section_title.split(' ').map((word)=>
                                    <div>{word}</div>
                                )}
                            </h2>
                        </div>
                        
                        
                        <AnimatedText paragraph1={section_text1} paragraph2={section_text2} paragraph3={section_text3}/>    
                    </div>
                </div>
            </div>
        </div>
    );
}