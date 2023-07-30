import '../../shared/style.css';
import AnimatedText from './text';

import Image from 'next/image';
import historians from '../../images/historians.png';

type Props = {
    title:string;
    text:string;
}

const imgStyle = {
    height: '15vh',
    width: 'auto',
}

export default function Story({title,text}:Props){
    return (
        <div className='w-screen inline flex justify-center items-center' style={{backgroundColor:'bisque'}}>
            <div className='flex flex-col' style={{width:'80vw'}}>
                <div className='flex flex-row ml-5 mt-5 justify-between'>
                    <h2 className='section-title text-3xl md:text-4xl lg:text-6xl'>
                        {title.split(' ').map((word)=>
                            <div>{word}</div>
                        )}
                    </h2>
                    <Image 
                    src={historians}
                    style={imgStyle}
                    alt="historians"
                    className='mr-8'
                    />
                </div>

                <AnimatedText paragraph={text} />    
            </div>
        </div>
    );
}