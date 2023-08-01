import './index.css';

import Image from 'next/image';
import TitleText from './text';

import Waves from '../../images/waves.png';
import dragon from '../../images/dragon.png';
import black_deev from '../../images/black_deev.png';
import pink_deev from '../../images/pink_deev.png';

import soldiers2 from '../../images/2_soldiers.png';
import soldiers from '../../images/soldiers.png';
import warrior from '../../images/warrior.png';
import king from '../../images/king.png';

type Props = {
    title:string
}

const wavesContainer = {
    width: '100vw',
    height: '8vh'
}

const wavesStyle = {
    width: 'calc(96%)',
    height: 'calc(70%)'
}

const waves2 = {
    width: 'calc(100%)',
    height: 'auto',
    transform: 'scaleY(-1)'
}

const dragonStyle = {
    width:'30vmin',
    height:'auto'
}

const mainContainer = {
    backgroundColor: 'bisque',
    height: '50vmax'
}

export default function Hero({title}:Props){
    return (
    <div style={mainContainer} className='relative w-screen overflow-hidden'>
        <div className='w-[100%] h-[100%] flex justify-center items-center'>
            <TitleText title={title} />
        </div>

        <Image 
        src={king}
        style={dragonStyle}
        alt="king"
        className='absolute top-0 right-0'
        />

        <Image 
        src={black_deev}
        style={dragonStyle}
        alt="black_deev"
        className='absolute bottom-80 left-0'
        />

        <Image 
        src={soldiers2}
        style={dragonStyle}
        alt="soldiers"
        className='absolute bottom-80 right-0'
        />

        <Image 
        src={pink_deev}
        style={dragonStyle}
        alt="pink_deev"
        className='absolute bottom-60 left-0'
        />

        <Image 
        src={soldiers}
        style={dragonStyle}
        alt="soldiers"
        className='absolute bottom-60 right-0'
        />

        <Image 
        src={dragon}
        style={dragonStyle}
        alt="dragon"
        className='absolute bottom-16 left-0'
        />

        <Image 
        src={warrior}
        style={dragonStyle}
        alt="warrior"
        className='absolute bottom-16 right-0'
        />
        
        <div className='bg-black flex items-center justify-center absolute bottom-0' style={wavesContainer}>
            <div className='overflow-hidden' style={wavesStyle}>
                <Image 
                src={Waves}
                style={waves2}
                alt="waves"
                />
            </div>
        </div>
    </div>
    );
}