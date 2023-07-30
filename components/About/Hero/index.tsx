import Image from 'next/image';
import TitleText from './text';

import MenOnDrums from '../../images/men-drums.png';
import Riders from '../../images/riders.png';
import Men from '../../images/StandingMen.png';
import GiftBringers from '../../images/men-gifts.png';
import Family from '../../images/lookup.png';
import Women from '../../images/womanRider.png';
import Musician from '@/components/images/musician.png';
import palace from '@/components/images/palace.png';
import tower from '@/components/images/tower.png';
import whitebuilding from '@/components/images/whitebuilding.png';

import Waves from '../../images/waves.png';
import build from 'next/dist/build';


const drumsStyle = {
    width:'20vmin',
    height:'auto'
}

const menStyle = {
    width:'auto',
    height:'48vmax'
}

const WomenStyle = {
    width:'32vmin',
    height:'auto'
}

const ridersStyle = {
    width:'20vmin',
    height:'auto'
}

const giftsStyle = {
    width:'20vmin',
    height:'auto'
}

const famStyle = {
    width:'30vmin',
    height:'auto'
}

const angelStyle = {
    width:'15vmin',
    height:'auto'
}

const buildingStyle = {
    width:'20vmin',
    height:'auto'
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

type Props = {
    title:string;
}

export default function Hero({title}:Props){
    return(
        <div style={mainContainer} className='relative w-screen'>

            <TitleText title={title} />
            
            <Image 
            src={Riders}
            style={ridersStyle}
            alt="riders"
            className='absolute right-[32vmin] top-[2vmin]'
            />

            <Image 
            src={Women}
            style={WomenStyle}
            alt="woman"
            className='absolute right-[10vmin] top-[5vmin]'
            />
            
            <Image 
            src={MenOnDrums}
            style={drumsStyle}
            alt="men-playing-drums"
            className='absolute right-[8vmin] top-[10vmin]'
            />
    
            <Image 
            src={Men}
            style={menStyle}
            alt="men"
            className='absolute right-0 bottom-0'
            />

            <Image 
            src={palace}
            style={buildingStyle}
            alt="palace"
            className='absolute left-[18vmin] top-[1vmin]'
            />

            <Image 
            src={tower}
            style={buildingStyle}
            alt="tower"
            className='absolute left-[25vmin] top-[6vmin]'
            />

            <Image 
            src={whitebuilding}
            style={buildingStyle}
            alt="building"
            className='absolute left-[14vmin] top-[9vmin]'
            />
            
            <Image 
            src={Musician}
            style={angelStyle}
            alt="musician"
            className='absolute left-[-10px] bottom-[50vmin]'
            />

            <Image 
            src={GiftBringers}
            style={giftsStyle}
            alt="men-bringing-gifts"
            className='absolute left-0 bottom-[35vmin]'
            />

            <Image 
            src={Family}
            style={famStyle}
            alt="Family"
            className='absolute left-0 bottom-[8vmin]'
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

/*

<div style={{backgroundColor:'bisque'}}>
            <div className='relative'>
                <div className='flex flex-row overflow-hidden justify-end'>
                    <div>
                        <Image 
                        src={Riders}
                        style={imgStyle}
                        alt="men-on-horses"
                        />
                    </div>
                    <div>
                        <Image 
                        src={MenOnDrums}
                        style={imgStyle}
                        alt="men-playing-drums"
                        />
                    </div>
                    <div>
                        <Image 
                        src={Women}
                        style={imgStyle}
                        alt="men"
                        />
                    </div>
                    <div>
                        <Image 
                        src={Men}
                        style={imgStyle}
                        alt="men"
                        />
                    </div>
                </div>
                <div className='absolute bottom-0'>
                    <Image 
                    src={GiftBringers}
                    style={imgStyle}
                    alt="men-bringing gifts"
                    />
                </div>
                <div className='absolute bottom-0'>
                    <Image 
                    src={Family}
                    style={imgStyle}
                    alt="Family"
                    />
                </div>
            </div>

            <div className='bg-black flex items-center justify-center' style={wavesContainer}>
                <div className='overflow-hidden' style={wavesStyle}>
                    <Image 
                    src={Waves}
                    style={waves2}
                    alt="waves"
                    />
                </div>
            </div>
            
        </div>

*/