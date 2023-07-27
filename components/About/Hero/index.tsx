import Image from 'next/image';

import MenOnDrums from '../../images/men-drums.png';
import Riders from '../../images/riders.png';
import Men from '../../images/StandingMen.png';
import GiftBringers from '../../images/men-gifts.png';
import Family from '../../images/lookup.png';
import Women from '../../images/womanRider.png';
import Waves from '../../images/waves.png';

const imgStyle = {
    width:'18vh',
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

export default function Hero(){
    return(
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
    );
}