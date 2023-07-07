import Image from 'next/image';
import Clouds from '../../images/clouds.png';
import Left_corner_plants from '../../images/l-corner-plants.png';
import Right_corner_plants from '../../images/r-corner-plants.png';
import Left_corner_rocks from '../../images/l-corner-rocks.png';
import Right_corner_rocks from '../../images/r-corner-rocks.png';
import Waves from '../../images/waves.png';
import TitleText from './text';

const cloudsStyle = {
    height: 'auto',
    width: '40vw',
}

const plantStyle = {
    height: 'auto',
    width: '30vw',
}

const wavesContainer = {
    width: '100vw',
    height: '10vh'
}

const wavesStyle = {
    width: 'calc(98%)',
    height: 'calc(75%)'
}

const waves = {
    width: 'calc(100%)',
    height: 'auto'
}

type Props = {
    title: string;
};

/*this border is cool, we could replicate it if time allows
https://codepen.io/MyXoToD/pen/VaazQq
*/

export default function Title({title}: Props){
    return (
        <div className='relative'>

            <div className='bg-black flex items-center justify-center' style={wavesContainer}>
                <div className='overflow-hidden' style={wavesStyle}>
                    <Image 
                    src={Waves}
                    style={waves}
                    alt="waves"
                    />
                </div>
            </div>
            

            <div className='flex flex-row justify-between w-screen'>

                <div>
                    <Image 
                    src={Left_corner_plants}
                    style={plantStyle}
                    alt="left-corner-plants"
                    />
                </div>

                <div>
                    <Image 
                    src={Clouds}
                    style={cloudsStyle}
                    alt="clouds"
                    />
                </div>
                

                <div>
                    <Image 
                    src={Right_corner_plants}
                    style={plantStyle}
                    alt="right-corner-plants"
                    />  
                </div>

            </div>
            
             
            
            
            <div className="m-5 p-3 border-4 border-double border-black">
                <TitleText
                    title={title}
                />
            </div>


            <div className='flex flex-row justify-between'>
                <div>
                    <Image 
                    src={Left_corner_rocks}
                    style={cloudsStyle}
                    alt="left-corner-rocks"
                    />
                </div>
                <div>
                    <Image 
                    src={Right_corner_rocks}
                    style={cloudsStyle}
                    alt="right-corner-rocks"
                    />
                </div>
            </div>
        </div>
    );
}