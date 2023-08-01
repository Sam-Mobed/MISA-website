import Image from 'next/image';

import Waves from '../../images/waves.png';

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

const mainContainer = {
    backgroundColor: 'bisque',
    height: '50vmax'
}

export default function Hero({title}:Props){
    return (
    <div style={mainContainer} className='relative w-screen overflow-hidden'>
        
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