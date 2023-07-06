import Image from 'next/image';
import Clouds from '../../images/clouds.png';
import Left_corner_plants from '../../images/l-corner-plants.png';
import Right_corner_plants from '../../images/r-corner-plants.png';
import Left_corner_rocks from '../../images/l-corner-rocks.png';
import Right_corner_rocks from '../../images/r-corner-rocks.png';
import Flower_pattern from '../../images/flower_pattern.png';
import TitleText from './text';

const cloudsStyle = {
    height: 'auto',
    width: '40vw',
}

const plantStyle = {
    height: 'auto',
    width: '30vw',
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

            <Image 
            src={Flower_pattern}
            style={{width:'100vw', height:'10vh'}}
            alt="left-corner-plants"
            />

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


/*

const simurghStyle = {
    height: 'auto',
    width: '30vw',
    top: -20,
    right: -5,
}

const treeStyle = {
    height: 'auto',
    width: '20vw',
    bottom: -20,
    left: -5,
}

const divStyle = {
    height: 'auto',
    width: '20vw',
    bottom: -19,
    right: 5,
}

<Image 
            src={Simurgh}
            className='absolute'
            style={simurghStyle}
            alt="simurgh"
            />

            <Image 
            src={treeBird}
            className='absolute'
            style={treeStyle}
            alt="Tree_and_Bird"
            />


*/