import Waves from '../../images/waves.png';
import Image from 'next/image';

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

export default function Block(){
    return (
    <div className='bg-black flex items-center justify-center' style={wavesContainer}>
        <div className='overflow-hidden' style={wavesStyle}>
            <Image 
            src={Waves}
            style={waves2}
            alt="waves"
            />
        </div>
    </div>
    );
}