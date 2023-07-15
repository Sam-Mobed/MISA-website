import '../../shared/border.css';
import Text from './text';
import Accordion from './accordion';
import MovingElements from './movingElements';

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

const titleStyle = {
    top: '5vw',
    left: '4%',
}

const textStyle = {
    top: '20vw',
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
        <div className='w-screen outer-div' style={{height:'80vh'}}>
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
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    );
}