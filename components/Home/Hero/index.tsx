import Image from 'next/image';
import hafez from '../../images/hafez.png';
import hill from '../../images/hill.png';
import mountain from '../../images/mountain.png';

const imageStyle = {
    height: 'auto',
    width: '100%'
}

const hafezStyle = {
    height: '100%',
    width: '100%'
}

export default function Hero() {
    return(
        <div className='w-full h-screen relative overflow-hidden'>
            <Image 
            src={hafez}
            style={imageStyle}
            alt="hafez-parallax"
            className='absolute top-0'
            />
            <Image 
            src={hill}
            style={imageStyle}
            alt="hill-parallax"
            className='absolute bottom-0'
            /> 
            <Image
            src={mountain}
            style={imageStyle}
            alt="mountain-parallax"
            className='absolute bottom-0'
            />
        </div>
    );
}