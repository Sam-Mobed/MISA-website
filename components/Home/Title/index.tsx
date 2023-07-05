import Image from 'next/image';
import Simurgh from '../../images/simurgh-hunting.png';
import Soldiers from '../../images/soldiers.png';
import TitleText from './text';

const imageStyle = {
    height: 'auto',
    width: '30vw',
}

type Props = {
    title: string;
};


export default function Title({title}: Props){
    return (
        <div>
            <div className="m-5 p-3 border-2 border-black relative w-30vw">
                <div className='absolute right-0'>
                    <Image 
                    src={Simurgh}
                    style={imageStyle}
                    alt="simurgh"
                    />
                </div>

                <TitleText
                title={title}
                />

                {/*
                
                <div>
                    <Image 
                    src={Soldiers}
                    style={imageStyle}
                    alt="soldiers"
                    />
                </div>
                
                */}
                
                
            </div>
        </div>
    );
}