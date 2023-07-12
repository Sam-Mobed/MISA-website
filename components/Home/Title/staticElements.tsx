import Image from 'next/image';
import Clouds from '../../images/clouds.png';
import Left_corner_plants from '../../images/l-corner-plants.png';
import Right_corner_plants from '../../images/r-corner-plants.png';
import Left_corner_rocks from '../../images/l-corner-rocks.png';
import Right_corner_rocks from '../../images/r-corner-rocks.png';

const cloudsStyle = {
    height: 'auto',
    width: '40vw',
}

const plantStyle = {
    height: 'auto',
    width: '15vw',
}

const hillsStyle = {
    height: 'auto',
    width: '24vw',
}

export default function StaticElements(){
    return (
        <div>
            <div className='absolute top-0 w-screen flex flex-row justify-between overflow-hidden'>
                <div>
                    <Image 
                    src={Left_corner_plants}
                    style={plantStyle}
                    alt="static_plants_left"
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
                    alt="static_plants_right"
                    />
                </div>
            </div>

            <div className='absolute w-screen flex flex-row justify-between overflow-hidden' style={{top:'90%'}}>
                <div className='overflow-hidden' style={{ transform: 'translateX(-2px)'}}>
                    <Image 
                    src={Left_corner_rocks}
                    style={hillsStyle}
                    alt="static_rocks_left"
                    />
                </div>

                <div className='overflow-hidden' style={{ transform: 'translateX(12px)'}}>
                    <Image 
                    src={Right_corner_rocks}
                    style={hillsStyle}
                    alt="static_rocks_right"
                    />
                </div>
            </div>
        </div>
    );
}