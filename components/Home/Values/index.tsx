import Text from './text';

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
        <div className='w-screen inline'>
            <div className='flex flex-col items-center'>
                <div className='w-screen mt-5 ml-5'>
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