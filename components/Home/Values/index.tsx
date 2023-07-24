import Text from './text';

import Image from 'next/image';
import cooperation from '../../images/cooperation.png';
import StaggerBox from './staggerbox';

type Props = {
    section_title: string;
    explanation: string;
    val1: string;
    val2: string;
    val3: string;
    val1_description: string;
    val2_description: string;
    val3_description: string;
}

const imgStyle = {
    height: '15vh',
    width: 'auto',
}

export default function Values({
section_title,
explanation,
val1,
val2,
val3,
val1_description,
val2_description,
val3_description}:Props){
    return(
        <div className='w-screen inline flex justify-center items-center'>
            <div className='flex flex-col' style={{width:'80vw'}}>
                <div className='flex flex-row ml-5 mt-5 justify-between'>
                    <h2 className='section-title text-3xl md:text-4xl lg:text-6xl'>
                        {section_title.split(' ').map((word)=>
                            <div>{word}</div>
                        )}
                    </h2>
                    <Image 
                    src={cooperation}
                    style={imgStyle}
                    alt="cooperation"
                    className='mr-8'
                    />
                </div>
                <div className='flex justify-center items-center'>
                    <Text 
                        paragraph={explanation}
                    />
                </div>
                <StaggerBox 
                val1={val1}
                val2={val2}
                val3={val3}
                val1txt={val1_description}
                val2txt={val2_description}
                val3txt={val3_description}
                />
            </div>
        </div>
    );
}

/*

<div className='inner-div'>
                <MovingElements />
                <div className='flex flex-col items-center'>
                    <div className='absolute' style={titleStyle}>
                        <h2 className='section-title text-3xl md:text-4xl lg:text-6xl'>
                            {section_title.split(' ').map((word)=>
                                <div>{word}</div>
                            )}
                        </h2>
                    </div>
                    <div className='absolute' style={textStyle}>
                        <Text 
                            paragraph={explanation}
                        />
                        <Accordion 
                            value1={val1}
                            value2={val2}
                            value3={val3}
                            val1_text={val1_description}
                            val2_text={val2_description}
                            val3_text={val3_description}
                        />
                    </div>
                </div>
            </div>

*/