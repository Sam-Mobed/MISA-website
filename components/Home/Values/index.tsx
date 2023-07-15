import '../../shared/border.css';
import Text from './text';
import Accordion from './accordion';

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
                <div className='flex flex-col'>
                    <div>
                        <h2 className='section-title text-3xl md:text-4xl lg:text-6xl'>
                            {section_title.split(' ').map((word)=>
                                <div>{word}</div>
                            )}
                        </h2>
                    </div>
                    <div>
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